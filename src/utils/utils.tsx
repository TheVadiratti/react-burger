import { RefObject } from 'react';

function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  }
  else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

function showPassword(ref: RefObject<HTMLInputElement>) {
  ref.current?.setAttribute('type', 'password');
}

function hidePassword(ref: RefObject<HTMLInputElement>) {
  ref.current?.setAttribute('type', 'text');
}

function getTimeString(ISO: string) {
  const date = new Date(ISO);
  const dateToday = new Date();

  const hours = date.getUTCHours() > 9 ? String(date.getUTCHours()) : '0' + String(date.getUTCHours());
  const minutes = date.getUTCMinutes() > 9 ? String(date.getUTCMinutes()) : '0' + String(date.getUTCMinutes());

  function getLastDigit(timeframe: string) {
    const array = Array.from(timeframe);
    return array[array.length - 1];
  }

  let period;
  if (dateToday.getUTCFullYear() > date.getUTCFullYear()) {
    period = String(dateToday.getUTCFullYear() - date.getUTCFullYear());
    const lastDigit = Number(getLastDigit(period));
    if (lastDigit === 1) {
      period = period + ' год';
    }
    else if (lastDigit > 1 && lastDigit < 5) {
      period = period + ' года';
    }
    else if (lastDigit > 4 && lastDigit < 10) {
      period = period + ' лет';
    }
    period = period + ' назад,';
  }

  else if (dateToday.getUTCMonth() > date.getUTCMonth()) {
    period = String(dateToday.getUTCMonth() - date.getUTCMonth());
    const lastDigit = Number(getLastDigit(period));
    if (lastDigit === 1) {
      period = period + ' месяц';
    }
    else if (lastDigit > 1 && lastDigit < 5) {
      period = period + ' месяца';
    }
    else if (lastDigit > 4 && lastDigit < 10) {
      period = period + ' месяцев';
    }
    period = period + ' назад';
  }

  else if (dateToday.getUTCDate() >= date.getUTCDate()) {
    period = String(dateToday.getUTCDate() - date.getUTCDate());
    const lastDigit = Number(getLastDigit(period));
    if (Number(period) < 2) {
      if (Number(period) === 0) {
        period = 'Сегодня,';
      }
      else if (lastDigit === 1) {
        period = 'Вчера,';
      }
    }
    else {
      if (lastDigit > 1 && lastDigit < 5) {
        period = period + ' дня';
      }
      else {
        period = period + ' дней';
      }
      period = period + ' назад';
    }
  }


  let sign = String(date.getTimezoneOffset()).slice(0, 1);
  sign = sign === '+' ? '-' : '+';
  let gmt = String(date.getTimezoneOffset()).slice(1);
  gmt = sign + Number(gmt) / 60;

  return period + ' ' + hours + ':' + minutes + ' i-GMT' + gmt;
}

function getQuantity(array: any[], target: any) {
  let quantity = 0;
  array.forEach(item => {
    if (item === target) {
      quantity += 1;
    }
  })
  return quantity;
}

export { checkResponse, showPassword, hidePassword, getTimeString, getQuantity };