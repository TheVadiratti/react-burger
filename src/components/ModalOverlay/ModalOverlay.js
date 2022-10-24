import modalOverlayStyle from './ModalOverlay.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalAction } from '../../services/actions/modal';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function ModalOverlay({ children, prePage }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const byClick = useSelector((state) => state.modal.byClick);

  function closePopupOverlay(e) {
    if (e.target.getAttribute('id') === 'overlay') {
      dispatch(closeModalAction());
      history.replace({ pathname: `${prePage}` });
    }
  }

  return (
    <div id='overlay' className={`${modalOverlayStyle.overlay} ${!byClick && modalOverlayStyle.overlayTypeGeneral}`} onClick={byClick ? closePopupOverlay : undefined}>
      {children}
    </div>
  )
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  prePage: PropTypes.string.isRequired
}; 