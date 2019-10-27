import React from 'react';
import SemesterHeader from './SemesterHeader';
import SemesterFooter from './SemesterFooter';
import SemesterWrapper from './SemesterWrapper';
import Subject from '../Subject/Subject';
import { SemesterStateType } from '../../store/semester';
import useSubjects from '../../hooks/useSubjects';
import { SubjectStateType } from '../../store/subject';
import SubjectFooter from '../Subject/SubjectFooter';

type Props = {
  semester: SemesterStateType;
  subjects: SubjectStateType[];
  key: number;
};

type Propss = {
  subjects: JSX.Element;
};

type SubjectComponentsType = SubjectStateType[];

const Semester = ({ semester, subjects, key }: Props) => {
  const subjectss = subjects.map(subject => {
    if (semester.id === subject.parentId)
      return <Subject subject={subject} key={subject.id} />;
  });
  return (
    <SemesterWrapper>
      <SemesterHeader semester={semester} />
      <div>{subjectss}</div>
      <SubjectFooter></SubjectFooter>
      {/* <SemesterFooter></SemesterFooter> */}
    </SemesterWrapper>
  );
};

export default Semester;
