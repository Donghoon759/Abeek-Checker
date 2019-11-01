import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGlobal from '../../hooks/useGlobal';
import { StyledModalOverlay, StyledModal } from '../../styles/Component';
import { CLOSE_MODAL } from '../../store/global';
import { ADD_SUBJECT } from '../../store/subject';
import Form from '../Form/Form';

export const useInput = (initValue: any) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useGlobal();
  const [parentId, onChangeParentId] = useInput(0);
  const [title, onChangeTitle] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [subjectCredit, onChangeSubjectCredit] = useInput(0);
  const [subjectMajorCredit, onChangeSubjectMajorCredit] = useInput(0);
  const [subjectMajorBaseCredit, onChangeSubjectMajorBaseCredit] = useInput(0);
  const [subjectSoyangCredit, onChangeSubjectSoyangCredit] = useInput(0);
  const [subjectDesignCredit, onChangeSubjectDesignCredit] = useInput(0);

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  const onSubmit = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: ADD_SUBJECT,
      payload: {
        parentId,
        title,
        category,
        subjectCredit,
        subjectMajorCredit,
        subjectMajorBaseCredit,
        subjectSoyangCredit,
        subjectDesignCredit,
      },
    });
  }, []);

  return (
    <>
      {isOpen ? (
        <>
          <StyledModalOverlay onClick={closeModal} />
          <StyledModal>
            <form onSubmit={onSubmit}>
              <div className="form__box">
                <Form value={title} onChange={onChangeTitle} label={'과목명'} />
                <Form
                  value={category}
                  onChange={onChangeCategory}
                  label={'과목구분'}
                />
                <Form
                  value={subjectCredit}
                  onChange={onChangeSubjectCredit}
                  label={'학점'}
                />
                <Form
                  value={subjectMajorCredit}
                  onChange={onChangeSubjectMajorCredit}
                  label={'전공학점'}
                />
                <Form
                  value={subjectMajorBaseCredit}
                  onChange={onChangeSubjectMajorCredit}
                  label={'전공기반학점'}
                />
                <Form
                  value={subjectSoyangCredit}
                  onChange={onChangeSubjectSoyangCredit}
                  label={'기본소양학점'}
                />
                <Form
                  value={subjectDesignCredit}
                  onChange={onChangeSubjectDesignCredit}
                  label={'설계학점'}
                />
                <input
                  className="form__submit"
                  type="submit"
                  value="로그인"
                  onSubmit={onSubmit}
                />
              </div>
            </form>
          </StyledModal>
        </>
      ) : null}
    </>
  );
};

export default Modal;
