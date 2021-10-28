import { useGlobalState } from '../hooks/useGlobalState';
import { useEffect, useRef } from 'react';
import { updateDisplay } from '../actions';

export function DrumPad(props) {
  const [state, dispatch] = useGlobalState();
  const audio = useRef(null);
  
  const playSound = () => {
    if(state.power) {
      audio.current.currentTime = 0;
      audio.current.volume = state.volume / 100;
      audio.current.play();
      dispatch(updateDisplay(props.id));
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if(state.power && e.keyCode === props.keyCode) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [state.power]);

  return (
    <button
      className="drum-pad bg-gradient-to-l border-2 border-blue-600 text-white text-xl font-bold from-blue-600 to-blue-500 hover:from-blue-500 hover:ring focus:ring active:ring rounded-lg px-6 py-4 transition duration-75 outline-none"
      id={props.id}
      onClick={playSound}
    >
      <audio
        ref={audio}
        className='clip'
        id={props.keyTrigger}
        src={props.url}
      />
      {props.keyTrigger}
    </button>
  )
}
