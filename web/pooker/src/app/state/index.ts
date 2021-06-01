
import { environment } from '../../environments/environment';

export interface IAppState {
  error: string
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];
