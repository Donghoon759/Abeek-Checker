import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGlobal from '../../hooks/useGlobal';
import { StyledModalOverlay, StyledModal } from '../../styles/Component';
import { CLOSE_MODAL } from '../../store/global';

// type Props = {
//   isOpen: boolean;
//   close: () => void;
// };

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useGlobal();

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return (
    <>
      {isOpen ? (
        <>
          <StyledModalOverlay onClick={closeModal} />
          <StyledModal>
            <p className="title">Modal Title</p>
            <div className="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                tempora nulla, non molestiae dicta ducimus. Et unde laborum
                eveniet ex quod doloribus quae, aliquam beatae atque, vero
                assumenda rem quo?
              </p>
            </div>
            <div className="button-wrap">
              <button onClick={closeModal}>close</button>
            </div>
          </StyledModal>
        </>
      ) : null}
    </>
  );
};

export default Modal;
