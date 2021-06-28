import { IUser } from "./Iuser";
import { IUserStoryDetail } from "./IUserStoryDetail";

export interface IGame {
  id?: number;
  guid?: string;
  name?: string;
  velocity?: number;
  description?: string;
  meInGame?: boolean;
  showVelocityToUser?: boolean;
  isAutoFlip?: boolean;
  allowUserToChangeVote?: boolean;
  user?: IUser;
  createdDate?: Date;
  userStoryDetails?: IUserStoryDetail[]
}
