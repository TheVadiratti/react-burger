import { ReactNode } from 'react';
import modalOverlayStyle from './ModalOverlay.module.css';
import { useSelector, useDispatch } from '../../hooks/hooks';
import { closeModalAction } from '../../services/actions/modal';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

type TProps = {
  children: ReactNode;
  prePage: string;
  isPageType: boolean;
};

function ModalOverlay({ children, prePage, isPageType }: TProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sendOrderRequest = useSelector((state) => state.order.isLoading);

  function closePopupOverlay(e: any) {
    if (!sendOrderRequest) {
      if (e.target.getAttribute('id') === 'overlay') {
        dispatch(closeModalAction());
        history.replace({ pathname: `${prePage}` });
      }
    }
  }

  return (
    <div id='overlay' className={`${modalOverlayStyle.overlay} ${isPageType && modalOverlayStyle.overlayTypeGeneral}`} onClick={!isPageType ? closePopupOverlay : undefined}>
      {children}
    </div>
  )
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  prePage: PropTypes.string.isRequired,
  isPageType: PropTypes.bool.isRequired
}; 
