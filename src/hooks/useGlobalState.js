import { useContext } from 'react';
import { GlobalContext } from '../Store';

export function useGlobalState() {
  const [state, dispatch] = useContext(GlobalContext);

  return [state, dispatch];
}
