import { rest } from 'msw';
import { mockedBallots } from '../__mocks__/ballots';

const handlers = [
  rest.get("/api/ballots", (_req, res, ctx) => {
    return res(ctx.json(mockedBallots));
  }),
];

export { handlers };