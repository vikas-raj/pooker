export interface IGameRequest {
  name?: string;
  velocity?: number;
  description?: string;
  meInGame?: boolean;
  showVelocityToUser?: boolean;
  isAutoFlip?: boolean;
  allowUserToChangeVote?: boolean;
  userId?: number;
}