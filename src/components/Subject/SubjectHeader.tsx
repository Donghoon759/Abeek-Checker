import React from 'react';
import styled from 'styled-components';
import {
  StyledSubjectWrapper,
  StyledSubjectHeader,
  StyledSubjectRightContent,
  StyledSubjectTitle,
} from '../../styles/Component';

interface SubjectHeaderProps {
  title: string;
  category: string;
  subjectCredit: number;
  subjectMajorCredit: number;
  subjectMajorBaseCredit: number;
  subjectSoyangCredit: number;
  subjectDesignCredit: number;
}

const SubjectHeader: React.FC<SubjectHeaderProps> = props => {
  return (
    <>
      <StyledSubjectWrapper>
        <StyledSubjectHeader>
          <StyledSubjectTitle></StyledSubjectTitle>
        </StyledSubjectHeader>
      </StyledSubjectWrapper>
    </>
  );
};

export default SubjectHeader;
