import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useSubjects() {
  const subjects = useSelector((state: RootState) => state.subject.Subjects);
  return subjects;
}
