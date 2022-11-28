import { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { useHistory, useLocation } from 'react-router-dom';
import modalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { closeModalAction } from '../../services/actions/modal';
import Loader from '../Loader/Loader';

const modalRoot = document.querySelector('#react-modals');

type TProps = {
  children: ReactNode;
  isPageType: boolean;
};

function Modal({ children, isPageType }: TProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const sendOrderRequest = useSelector((state) => state.order.isLoading);

  useEffect(() => {
    function closePopupEsc(e: any) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }
    document.addEventListener('keydown', closePopupEsc);
    return () => {
      document.removeEventListener('keydown', closePopupEsc);
    }
  }, [sendOrderRequest]);

  let nStepsBack = 1;

  if (location.pathname.startsWith('/ingredients')) {
    nStepsBack = 2;
  }
  
  function getPrePageURL () {
    let urlArr = location.pathname.split('/');
    urlArr = urlArr.filter((item, i) => {
      if ((i !== 0) && (i < urlArr.length - nStepsBack)) {
        return item;
      }
    });
    let prePageUrl = '/';
    urlArr.forEach((item, i) => {
      prePageUrl = prePageUrl + item;
      if (i < urlArr.length - 1) {
        prePageUrl = prePageUrl + '/';
        
      }
    })
    return prePageUrl;
  };

  function closeModal() {
    dispatch(closeModalAction());
    history.replace({ pathname: `${getPrePageURL()}` });
  }


  return ReactDOM.createPortal(
    (
      <ModalOverlay prePage={getPrePageURL()} isPageType={isPageType}>
        {!sendOrderRequest ?
        <div className={`${modalStyles.window} ${isPageType && modalStyles.windowTypeGeneral}`}>
          {!isPageType && <div onClick={closeModal} className={modalStyles.closeIcon}><CloseIcon type='primary' /></div>}
          {children}
        </div>
        :
        <Loader />}
      </ModalOverlay>
    ),
    modalRoot!
  );
}

export default Modal;