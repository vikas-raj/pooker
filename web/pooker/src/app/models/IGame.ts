import { IUser } from "./Iuser";
import { IUserStoryDetail } from "./IUserStoryDetail";

export interface IGame {
    id: number;
    name: string;
    velocity: number;
    description: number;
    meInGame: boolean;
    showVelocityToUser: boolean;
    isAutoFlip: boolean;
    allowUserToChangeVote:boolean;
    user: IUser;
    userStoryDetails: IUserStoryDetail[]
}