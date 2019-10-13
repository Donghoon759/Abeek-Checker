import React, { useState } from 'react';
import { Detail } from '../../styles/Component';

const SubjectContent = () => {
  const [subjectMajorCredit, setSubjectMajorCredit] = useState<number>(1);
  const [subjectMajorBaseCredit, setSubjectMajorBaseCredit] = useState<number>(
    1,
  );
  const [subjectSoyangCredit, setSubjectSoyangCredit] = useState<number>(1);
  const [subjectDesignCredit, setSubjectDesignCredit] = useState<number>(1);
    
  return (
    <>
      {subjectMajorCredit && <Detail>전공 {subjectMajorCredit}학점</Detail>}
      {subjectMajorBaseCredit && (
        <Detail>전공기반 {subjectMajorBaseCredit}학점</Detail>
      )}
      {subjectSoyangCredit && (
        <Detail>기본소양 {subjectSoyangCredit}학점</Detail>
      )}
      {subjectDesignCredit && <Detail>설계 {subjectDesignCredit}학점</Detail>}
    </>
  );
};

SubjectContent.defaultProps = {
  subjectMajorCredit: 3,
  // subjectMajorBaseCredit: 0,
  // subjectSoyangCredit: 0,
  // subjectDesignCredit: 0,
};

export default SubjectContent;
