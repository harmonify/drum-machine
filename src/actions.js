import ACTIONS from './config/ACTIONS';

export const togglePower = () => {
  return {
    type: ACTIONS.TOGGLE_POWER,
  }
}

export const updateDisplay = (text) => {
  return {
    type: ACTIONS.UPDATE_DISPLAY,
    payload: {
      displayText: text
    }
  }
}

export const updateVolume = (volume) => {
  return {
    type: ACTIONS.UPDATE_VOLUME,
    payload: {
      volume: volume
    }
  }
}

export const clearDisplay = () => {
  return {
    type: ACTIONS.CLEAR_DISPLAY,
  }
}
