import { useEffect, useState } from 'react';
import modalOverlayStyle from './ModalOverlay.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalAction } from '../../services/actions/modal';
import { useHistory } from 'react-router-dom';

function ModalOverlay(props) {
  const [prePage, setPrePage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const byClick = useSelector((state) => state.modal.byClick);
  const modalType = useSelector((state) => state.modal.type);

  useEffect(() => {
    switch(modalType) {
      case 'IngredientDetails' || 'OrderDetails':
        setPrePage('/');
      case 'OrderInfo':
        setPrePage('/feed');
    }
  }, []);

  function closePopupOverlay(e) {
    if (e.target.getAttribute('id') === 'overlay') {
      dispatch(closeModalAction());
      history.replace({ pathname: `${prePage}` });
    }
  }

  return (
    <div id='overlay' className={`${modalOverlayStyle.overlay} ${!byClick && modalOverlayStyle.overlayTypeGeneral}`} onClick={byClick ? closePopupOverlay : undefined}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;