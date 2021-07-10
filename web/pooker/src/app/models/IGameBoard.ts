import { ICard } from "./ICard";
import { IUser } from "./Iuser";
import { IUserStoryDetail } from "./IUserStoryDetail";

export interface IGameBoard {
    id?: number;
    storyPoint?: number;
    userId?: number;
    cardId?: number;
    userStoryDetailId?: number;

    user?: IUser;
    card?: ICard;
    userStoryDetail?: IUserStoryDetail;
}
