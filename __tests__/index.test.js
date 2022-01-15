import { screen, waitFor } from '@testing-library/react';
import { getPage } from 'next-page-tester';

import { mockedBallots } from '../__mocks__/mocks';
import { server, rest } from '../test-utils/server';

test('displays the list of ballots', async () => {
  const { render } = await getPage({ route: '/' });

  render();

  await waitFor(() => {
    mockedBallots.results.forEach(( ballot ) => {
      expect(
        screen.getByRole('heading', { level: 3, name: ballot.title })
      ).toBeInTheDocument();
    });
  });

});

test('shows the error message when receive an error from the API', async () => {
  server.use(rest.get("api/ballots", async (_req, res, ctx) => res(ctx.status(404))));

  const { render } = await getPage({ route: '/' });

  render();

  await waitFor(() => {
    expect(
      screen.getByText('Something went wrong, please try again')
    ).toBeInTheDocument();
  });
});