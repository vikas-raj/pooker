import { IUser } from "./Iuser";
import { IUserStoryDetail } from "./IUserStoryDetail";

export interface IGameBoard{
    id: number;
    storyPoint: number;
    User: IUser;
    UserStoryDetail:IUserStoryDetail;
}