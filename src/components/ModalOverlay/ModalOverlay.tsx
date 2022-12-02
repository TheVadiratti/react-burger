import { ReactNode, MouseEvent } from 'react';
import modalOverlayStyle from './ModalOverlay.module.css';

type TProps = {
  children: ReactNode;
  isPageType: boolean;
  closeModal: () => void;
};

function ModalOverlay({ children, isPageType, closeModal }: TProps) {
  function closeOnOverlay(e: MouseEvent) {
    if ((e.target as HTMLDivElement).id === 'overlay') {
      closeModal();
    }
  }

  return (
    <div id='overlay' className={`${modalOverlayStyle.overlay} ${isPageType && modalOverlayStyle.overlayTypeGeneral}`} onClick={closeOnOverlay}>
      {children}
    </div>
  )
}

export default ModalOverlay;
