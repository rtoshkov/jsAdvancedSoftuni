function notify(message) {
    let notification = message;
    let notificationBox = document.getElementById('notification');
    notificationBox.textContent = notification;
    notificationBox.style.setProperty('display', 'block');
    notificationBox.addEventListener('click', onClick);

    function onClick(e){
      e.target.style.setProperty('display', 'none');
      e.target.textContent = '';
    }
}