
export interface IAppState {
  error: string
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];
