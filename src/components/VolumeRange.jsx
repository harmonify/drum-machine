import { useGlobalState } from '../hooks/useGlobalState';
import { updateVolume, updateDisplay, clearDisplay } from '../actions';

export function VolumeRange() {
  const [state, dispatch] = useGlobalState();

  function handleChange(e) {
    if (state.power) {
      dispatch(updateVolume(e.target.value));
      dispatch(updateDisplay('Volume: ' + e.target.value));
      setTimeout(() => dispatch(clearDisplay()), 1000);
    }
  }

  return (
    <div
      id="volume-range"
      className="transform scale-110"
    >
      <input
        type="range"
        className="bg-blue-500 w-full"
        id=""
        min="0"
        max="100"
        value={state.volume}
        onChange={handleChange}
      />
    </div>
  )
}
