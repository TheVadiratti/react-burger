import modalOverlayStyle from './ModalOverlay.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalAction } from '../../services/actions/modal';
import { useHistory } from 'react-router-dom';

function ModalOverlay({ children, prePage, isPageType }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sendOrderRequest = useSelector((state) => state.order.isLoaded);

  function closePopupOverlay(e) {
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
