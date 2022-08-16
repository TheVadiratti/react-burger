import modalOverlayStyle from './ModalOverlay.module.css';

function ModalOverlay(props) {
  return (
    <div className={modalOverlayStyle.overlay}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;