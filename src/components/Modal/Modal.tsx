import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGlobal from '../../hooks/useGlobal';
import { StyledModalOverlay, StyledModal } from '../../styles/Component';

// type Props = {
//   isOpen: boolean;
//   close: () => void;
// };

const Modal = () => {
  const { isOpen } = useGlobal();
  return (
    <>
      {isOpen ? (
        <>
          <StyledModalOverlay />
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
              <button>Confirm</button>
            </div>
          </StyledModal>
        </>
      ) : null}
    </>
  );
};

export default Modal;
