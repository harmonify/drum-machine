import { Switch } from '@headlessui/react'
import { clearDisplay, togglePower, updateDisplay } from '../actions';
import { useGlobalState } from '../hooks/useGlobalState';

export function PowerButton() {
  const [state, dispatch] = useGlobalState();

  function handleChange() {
    dispatch(togglePower());
    dispatch(updateDisplay('Power: ' + (!state.power ? 'ON' : 'OFF')));
    setTimeout(() => dispatch(clearDisplay()), 1000);
  }

  return (
    <Switch.Group>
      <div className="flex flex-col space-y-2 justify-center items-center">
        <Switch.Label className="font-mono font-medium text-xl">Power</Switch.Label>
        <Switch
          checked={state.power}
          onChange={handleChange}
          className={`${
            state.power ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex shadow items-center scale-105 transform h-6 rounded-full w-11 transition-colors hover:ring-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              state.power ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}
