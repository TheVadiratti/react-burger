function checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

function showPassword(ref) {
  ref.current.setAttribute('type', 'password');
}

function hidePassword(ref) {
  ref.current.setAttribute('type', 'text');
}

export { checkResponse, showPassword, hidePassword };