import React from 'react';
import styled from 'styled-components';
import { StyledSubjectWrapper } from '../../styles/Component';

interface SubjectWrapperProps {
  children: JSX.Element[] | JSX.Element;
}

const Subject: React.FC<SubjectWrapperProps> = props => {
  return <StyledSubjectWrapper>{props.children}</StyledSubjectWrapper>;
};

export default SubjectWrapper;