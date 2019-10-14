import React, { useState } from 'react';
import {
  Title,
  RightContent,
  CenterContent,
  ContentRow,
  StyledSemesterHeader,
} from '../../styles/Component';
import { SemesterStateType } from '../../store/semester';

// 총 학점, 전공, 전공기반, 기본소양, 설계
// interface SemesterHeaderProps {
//   title: string;
//   totalCredit: number;
//   totalMajorCredit: number;
//   totalMajorBaseCredit: number;
//   totalSoyangCredit: number;
//   totalDesignCredit: number;
// }

type Props = {
  semester: SemesterStateType;
};

const SemesterHeader = ({ semester }: Props) => {
  const [title, setTitle] = useState<string>(semester.title);
  const [totalCredit, setTotalCredit] = useState<number>(0);
  const [totalMajorCredit, setTotalMajorCredit] = useState<number>(0);
  const [totalMajorBaseCredit, setTotalMajorBaseCredit] = useState<number>(0);
  const [totalSoyangCredit, setTotalSoyangCredit] = useState<number>(0);
  const [totalDesignCredit, setTotalDesignCredit] = useState<number>(0);
  return (
    <>
      <StyledSemesterHeader>
        <Title>{semester.title}</Title>
        <RightContent>총 {semester.totalCredit}/150학점</RightContent>
      </StyledSemesterHeader>
      <ContentRow>
        <CenterContent>전공 : {semester.totalMajorCredit}/70</CenterContent>
        <CenterContent>
          전공기반 : {semester.totalMajorBaseCredit}/22
        </CenterContent>
      </ContentRow>
      <ContentRow>
        <CenterContent>설계 : {semester.totalDesignCredit}/16</CenterContent>
        <CenterContent>
          기본소양 : {semester.totalSoyangCredit}/15
        </CenterContent>
      </ContentRow>
    </>
  );
};

SemesterHeader.defaultProps = {
  title: '1학년 1학기',
  totalCredit: 21,
  totalMajorCredit: 3,
  totalMajorBaseCredit: 0,
  totalSoyangCredit: 0,
  totalDesignCredit: 2,
};

export default SemesterHeader;
