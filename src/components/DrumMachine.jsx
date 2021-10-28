import { DrumPadBank } from './DrumPadBank';
import { DisplayLabel } from './DisplayLabel';
import { PowerButton } from './PowerButton';
import { VolumeRange } from './VolumeRange';
import { GiDrumKit } from 'react-icons/gi';

export function DrumMachine() {
  return (
    <div className="drum-machine bg-white rounded-lg px-8 pt-2 pb-6 space-y-4 border-4 border-blue-600 shadow-2xl">
      <div className="header flex justify-center items-center italic font-bold text-3xl">
        <em className="mr-2">HDM</em>
        <GiDrumKit />
      </div>
      <div className="flex justify-around space-x-14">
        <DrumPadBank />
        <div className="flex flex-col justify-center align-center space-y-8">
          <PowerButton />
          <DisplayLabel />
          <VolumeRange />
        </div>
      </div>
    </div>
  )
}
