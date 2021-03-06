import { useGlobalState } from '../hooks/useGlobalState';

export function DisplayLabel() {
  const [state] = useGlobalState();

  return (
    <div
      className="flex justify-center items-center min-w-40 min-h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded font-mono text-xl text-white"
      id="display"
    >
      {state.display}
    </div>
  )
}
