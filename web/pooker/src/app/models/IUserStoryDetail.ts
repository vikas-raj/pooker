import { IGame } from "./IGame";
import { IGameBoard } from "./IGameBoard";

export interface IUserStoryDetail{
    id: number;
    storyPoint: number;
    storyName: number;
    isCurrentUserStory?: boolean;
    isUserStoryActive?: boolean;
    game: IGame;
    gameBoards: IGameBoard[];
}