import { DrumPad } from './DrumPad';

export function DrumPadBank() {
  return (
    <div
      className="grid grid-cols-3 gap-2"
      id="drum-pad-bank"
    >
      <DrumPad
        text="A"
        id="A"
        
      />
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
