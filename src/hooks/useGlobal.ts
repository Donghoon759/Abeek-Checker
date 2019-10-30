import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useGlobal() {
  const global = useSelector((state: RootState) => state.global);
  return global;
}
