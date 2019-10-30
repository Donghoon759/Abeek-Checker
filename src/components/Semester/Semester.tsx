import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SemesterHeader from './SemesterHeader';
import SemesterFooter from './SemesterFooter';
import SemesterWrapper from './SemesterWrapper';
import Subject from '../Subject/Subject';
import { SemesterStateType } from '../../store/semester';
import useSubjects from '../../hooks/useSubjects';
import { SubjectStateType } from '../../store/subject';
import SubjectFooter from '../Subject/SubjectFooter';
import { EDIT_SEMESTER } from '../../store/semester';

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
  let id = 0,
    title = 0,
    totalCredit = 0,
    totalMajorCredit = 0,
    totalMajorBaseCredit = 0,
    totalSoyangCredit = 0,
    totalDesignCredit = 0;

  const dispatch = useDispatch();
  const subjectFiltered = subjects.filter(subject => {
    return semester.id === subject.parentId;
  });
  console.log(subjectFiltered);
  if (subjectFiltered) {
    subjectFiltered.forEach(subject => {
      totalCredit += subject.subjectCredit;
      totalMajorCredit += subject.subjectMajorCredit;
      totalMajorBaseCredit += subject.subjectMajorBaseCredit;
      totalSoyangCredit += subject.subjectSoyangCredit;
      totalDesignCredit += subject.subjectDesignCredit;
    });
  }
  useEffect(() => {
    // 총점 초기화
    dispatch({
      type: EDIT_SEMESTER,
      payload: {
        id: subjectFiltered[0].parentId,
        totalCredit,
        totalMajorCredit,
        totalMajorBaseCredit,
        totalSoyangCredit,
        totalDesignCredit,
      },
    });
  }, []);

  return (
    <SemesterWrapper>
      <SemesterHeader semester={semester} />
      <div>
        {subjectFiltered.map(subject => {
          return <Subject subject={subject} key={subject.id} />;
        })}
      </div>
      <SubjectFooter></SubjectFooter>
    </SemesterWrapper>
  );
};

export default Semester;
