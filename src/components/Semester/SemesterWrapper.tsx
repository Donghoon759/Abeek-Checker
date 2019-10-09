import React from 'react';
import styled from 'styled-components';
import { StyledSemesterWrapper } from '../../styles/Component';

interface SemesterWrapperProps {
  children: JSX.Element[] | JSX.Element;
}

const SemesterWrapper: React.FC<SemesterWrapperProps> = props => {
  return <StyledSemesterWrapper>{props.children}</StyledSemesterWrapper>;
};

export default SemesterWrapper;
