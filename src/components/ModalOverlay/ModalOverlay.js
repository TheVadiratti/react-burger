import modalOverlayStyle from './ModalOverlay.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalAction } from '../../services/actions/modal';
import { useHistory } from 'react-router-dom';

function ModalOverlay(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const byClick = useSelector((state) => state.modal.byClick);

  function closePopupOverlay(e) {
    if (e.target.getAttribute('id') === 'overlay') {
      dispatch(closeModalAction());
      history.replace({pathname: '/'});
    }
  }

  return (
    <div id='overlay' className={`${modalOverlayStyle.overlay} ${!byClick && modalOverlayStyle.overlayTypeGeneral}`} onClick={byClick && closePopupOverlay}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;