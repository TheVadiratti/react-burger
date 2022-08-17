import modalOverlayStyle from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay(props) {
  function closePopupOverlay(e) {
    if (e.target.getAttribute('id') === 'overlay') {
      props.setOnPopup({
        open: false,
        type: ''
      })
    }
  }

  return (
    <div id='overlay' className={modalOverlayStyle.overlay} onClick={closePopupOverlay}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  setOnPopup: PropTypes.func
}; 