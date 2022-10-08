import modalOverlayStyle from './ModalOverlay.module.css';
import { useDispatch } from 'react-redux';
import { closeModalAction } from '../../services/actions/actions';
import { useHistory } from 'react-router-dom';

function ModalOverlay(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function closePopupOverlay(e) {
    if (e.target.getAttribute('id') === 'overlay') {
      dispatch(closeModalAction());
      history.replace({pathname: '/'});
    }
  }

  return (
    <div id='overlay' className={modalOverlayStyle.overlay} onClick={closePopupOverlay}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;