import { DrumPadBank } from './DrumPadBank';
import { DisplayLabel } from './DisplayLabel';
import { PowerButton } from './PowerButton';
import { VolumeRange } from './VolumeRange';

export function DrumMachine() {
  return (
    <div className="drum-machine bg-white rounded-md">
      <div className="header">
        <em className="italic font-bold font-serif">HDM</em>
        <i></i>
      </div>
      <div className="flex justify-around">
        <DrumPadBank />
        <div className="flex flex-col justify-center align-center">
          <PowerButton />
          <DisplayLabel />
          <VolumeRange />
        </div>
      </div>
    </div>
  )
}
