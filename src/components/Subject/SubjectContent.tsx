import React from 'react';
import { Detail } from '../../styles/Component';

interface SubjectContentProps {
  subjectMajorCredit?: number;
  subjectMajorBaseCredit?: number;
  subjectSoyangCredit?: number;
  subjectDesignCredit?: number;
}

const SubjectContent = (props: SubjectContentProps) => {
  return (
    <>
      {props.subjectMajorCredit && (
        <Detail>전공 {props.subjectMajorCredit}학점</Detail>
      )}
      {props.subjectMajorBaseCredit && (
        <Detail>전공기반 {props.subjectMajorBaseCredit}학점</Detail>
      )}
      {props.subjectSoyangCredit && (
        <Detail>기본소양 {props.subjectSoyangCredit}학점</Detail>
      )}
      {props.subjectDesignCredit && (
        <Detail>설계 {props.subjectDesignCredit}학점</Detail>
      )}
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
