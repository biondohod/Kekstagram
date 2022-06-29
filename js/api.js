const getData = (onSuccsess, onFail) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photoData) => {
      onSuccsess(photoData);
    })
    .catch(() => {
      onFail('Не удалось загрузить данные с сервера. Попробуйте обновить страницу или проверьте соединение с интернетом');
    });
};

const sendData = (onSuccsess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((responce) => {
      if(responce.ok) {
        onSuccsess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export{getData, sendData};
