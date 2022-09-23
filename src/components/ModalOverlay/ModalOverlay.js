import modalOverlayStyle from './ModalOverlay.module.css';
import { useDispatch } from 'react-redux';
import { closeModalAction } from '../../services/actions/actions';

function ModalOverlay(props) {
  const dispatch = useDispatch();

  function closePopupOverlay(e) {
    if (e.target.getAttribute('id') === 'overlay') {
      dispatch(closeModalAction());
    }
  }

  return (
    <div id='overlay' className={modalOverlayStyle.overlay} onClick={closePopupOverlay}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;