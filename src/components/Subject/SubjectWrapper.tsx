import React from 'react';
import { StyledSubjectWrapper } from '../../styles/Component';

interface SubjectWrapperProps {
  children: JSX.Element[] | JSX.Element;
}

const SubjectWrapper = (props: SubjectWrapperProps) => {
  return <StyledSubjectWrapper>{props.children}</StyledSubjectWrapper>;
};

export default SubjectWrapper;
