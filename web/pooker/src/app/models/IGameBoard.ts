import { IUser } from "./Iuser";
import { IUserStoryDetail } from "./IUserStoryDetail";

export interface IGameBoard{
    id?: number;
    storyPoint?: number;
    userId?:number;
    User?: IUser;
    userStoryDetailId?: number;
    UserStoryDetail?:IUserStoryDetail;
}
