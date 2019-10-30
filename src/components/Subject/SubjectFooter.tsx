import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { StyledSubjectFooter } from '../../styles/Component';
import { OPEN_MODAL } from '../../store/global';

// interface SubjectProps {}

const SubjectFooter = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
    });
  };

  return (
    <StyledSubjectFooter onClick={openModal}>과목 추가</StyledSubjectFooter>
  );
};

export default SubjectFooter;
