import ACTIONS from "./config/ACTIONS";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_POWER:
      return {
        ...state,
        power: !state.power,
      }
    case ACTIONS.UPDATE_DISPLAY:
      return {
        ...state,
        display: action.payload.displayText,
      }
    case ACTIONS.UPDATE_VOLUME:
      return {
        ...state,
        volume: action.payload.volume,
      }
    case ACTIONS.CLEAR_DISPLAY:
      return {
        ...state,
        display: '',
      }
    default:
      return state;
  }
}
