import { ReactNode } from 'react';
import modalOverlayStyle from './ModalOverlay.module.css';

type TProps = {
  children: ReactNode;
  isPageType: boolean;
  closeModal: () => void;
};

function ModalOverlay({ children, isPageType, closeModal }: TProps) {

  return (
    <div id='overlay' className={`${modalOverlayStyle.overlay} ${isPageType && modalOverlayStyle.overlayTypeGeneral}`} onClick={closeModal}>
      {children}
    </div>
  )
}

export default ModalOverlay;
