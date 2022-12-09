import { ACTIONS } from "./Actions";

export interface IGlobalState {
  notify: object;
}

const Reducers = (
  state: IGlobalState,
  action: { type: string; payload: object }
) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    default:
      return state;
  }
};

export default Reducers;
