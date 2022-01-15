import { BallotType } from "../interface/BallotType";
interface BallotsResponse {
    items: BallotType[]
}
export const mockedBallots: BallotsResponse = {
    items: [
        {
            id: "best-picture",
            items: [
                {
                    title: 'Nomadland',
                    photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
                    id: 'nomadland'
                },
                {
                    title: 'The Trial of the Chicago 7',
                    photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
                    id: 'the-trial-of-the-chicago-7'
                }
            ],
            title: "Best Picture"
        },
        {
            id: "best-actress",
            items: [
                {
                    title: 'Vanessa Kirby for Pieces of a Woman',
                    photoUrL: 'https://variety.com/wp-content/uploads/2020/12/pieces_of_a_woman.jpg',
                    id: 'vanessa-kirby'
                },
                {
                    title: 'Frances McDormand for Nomadland',
                    photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
                    id: 'frances-mcdormand'
                },
            ],
            title: "Best Actress"
        }
    ],
  };