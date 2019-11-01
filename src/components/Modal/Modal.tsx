import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGlobal from '../../hooks/useGlobal';
import { StyledModalOverlay, StyledModal } from '../../styles/Component';
import { CLOSE_MODAL } from '../../store/global';
import { ADD_SUBJECT } from '../../store/subject';

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
                <div className="input__box">
                  <input
                    className="form__input"
                    name="title"
                    type="text"
                    value={title}
                    onChange={onChangeTitle}
                    required
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>ID</label>
                </div>

                <div className="input__box">
                  <input
                    className="form__input"
                    name="category"
                    type="text"
                    value={category}
                    onChange={onChangeCategory}
                    required
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>PASSWORD</label>
                </div>
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
