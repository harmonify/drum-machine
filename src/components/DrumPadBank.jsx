import { DrumPad } from './DrumPad';
import BANK from '../config/BANK';

export function DrumPadBank() {
  const drumPadBank = BANK.map(el => {
    return (
      <DrumPad
        key={el.id}
        id={el.id}
        url={el.url}
        keyCode={el.keyCode}
        keyTrigger={el.keyTrigger}
      />
    );
  })
  
  return (
    <div
      className="grid grid-cols-3 gap-2"
      id="drum-pad-bank"
    >
      {drumPadBank}
    </div>
  )
}
