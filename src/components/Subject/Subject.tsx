import React, { useEffect } from 'react';
import SubjectWrapper from './SubjectWrapper';
import SubjectHeader from './SubjectHeader';
import SubjectContent from './SubjectContent';
import { SubjectStateType } from '../../store/subject';
import { EDIT_SEMESTER } from '../../store/semester';

type Props = {
  subject: SubjectStateType;
  key: number;
};

const Subject = ({ subject, key }: Props) => {
  return (
    <>
      <SubjectWrapper>
        <SubjectHeader subject={subject} />
        {/* <SubjectContent
          subjectMajorCreditProp={subject.subjectMajorCredit}
          subjectMajorBaseCreditProp={subject.subjectMajorBaseCredit}
          subjectSoyangCreditProp={subject.subjectSoyangCredit}
          subjectDesignCreditProp={subject.subjectDesignCredit}
        /> */}
      </SubjectWrapper>
    </>
  );
};

export default Subject;
