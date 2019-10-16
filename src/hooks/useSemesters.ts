import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useSemesters() {
  const semesters = useSelector((state: RootState) => state.semester.Semesters);
  return semesters;
}
