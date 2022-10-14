import profileHistoryStyles from './ProfileHistory.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileHistory() {
  return (
    <ul className={profileHistoryStyles.orders}>
      <li className={`p-6 ${profileHistoryStyles.order}`}>
        <div className={profileHistoryStyles.idCnt}>
          <span className="text text_type_digits-default">#034535</span>
          <span className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</span>
        </div>
        <h3 className="text text_type_main-medium mt-6">Death Star Starship Main бургер</h3>
        <span className="text text_type_main-default mt-2">Создан</span>
        <div className={`mt-6 ${profileHistoryStyles.cnt}`}>
          <div></div>
          <div className={profileHistoryStyles.priceCnt}>
            <span className="text text_type_digits-default">480</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </ul>
  )
}

export default ProfileHistory;