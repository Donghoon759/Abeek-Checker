import React, { useState } from 'react';
import { Detail } from '../../styles/Component';

type Props = {
  subjectMajorCreditProp: number;
  subjectMajorBaseCreditProp: number;
  subjectSoyangCreditProp: number;
  subjectDesignCreditProp: number;
};

const SubjectContent = ({
  subjectMajorCreditProp,
  subjectMajorBaseCreditProp,
  subjectSoyangCreditProp,
  subjectDesignCreditProp,
}: Props) => {
  const [subjectMajorCredit, setSubjectMajorCredit] = useState<number>(1);
  const [subjectMajorBaseCredit, setSubjectMajorBaseCredit] = useState<number>(
    1,
  );
  const [subjectSoyangCredit, setSubjectSoyangCredit] = useState<number>(1);
  const [subjectDesignCredit, setSubjectDesignCredit] = useState<number>(1);

  return (
    <>
      {subjectMajorCreditProp && (
        <Detail>전공 {subjectMajorCreditProp}학점</Detail>
      )}
      {subjectMajorBaseCreditProp && (
        <Detail>전공기반 {subjectMajorBaseCreditProp}학점</Detail>
      )}
      {subjectSoyangCreditProp && (
        <Detail>기본소양 {subjectSoyangCreditProp}학점</Detail>
      )}
      {subjectDesignCreditProp && (
        <Detail>설계 {subjectDesignCreditProp}학점</Detail>
      )}
    </>
  );
};

// SubjectContent.defaultProps = {
//   subjectMajorCredit: 3,
//   // subjectMajorBaseCredit: 0,
//   // subjectSoyangCredit: 0,
//   // subjectDesignCredit: 0,
// };

export default SubjectContent;
