import { DrumPad } from './DrumPad';

export function DrumPadBank() {
  return (
    <div
      className="grid grid-cols-3 gap-1"
      id="drum-pad-bank"
    >
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
    </div>
  )
}
