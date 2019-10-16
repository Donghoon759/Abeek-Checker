import React from 'react';
import SubjectWrapper from './SubjectWrapper';
import SubjectHeader from './SubjectHeader';
import SubjectContent from './SubjectContent';
import SubjectFooter from './SubjectFooter';
import { SubjectStateType } from '../../store/subject';

type Props = {
  subject: SubjectStateType;
  key: number;
};

const Subject = ({ subject, key }: Props) => {
  return (
    <SubjectWrapper>
      <SubjectHeader
        titleProp={subject.title}
        categoryProp={subject.category}
        subjectCreditProp={subject.subjectCredit}
      />
      <SubjectContent
        subjectMajorCreditProp={subject.subjectMajorCredit}
        subjectMajorBaseCreditProp={subject.subjectMajorBaseCredit}
        subjectSoyangCreditProp={subject.subjectSoyangCredit}
        subjectDesignCreditProp={subject.subjectDesignCredit}
      />
      <SubjectFooter></SubjectFooter>
    </SubjectWrapper>
  );
};

export default Subject;
