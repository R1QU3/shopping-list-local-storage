import {
  reloadPage
} from "./utilitarian.js";

export default function initSendItemLocal() {
  const submit_btn = document.getElementById('submit_btn');

  function sendItemLocal(e) {
    e.preventDefault();
    // Get inputs values
    const item_title = document.querySelector('#item_title');
    const item_price = document.querySelector('#item_price');
    const item_link = document.querySelector('#item_link');
    const item_image = document.querySelector('#item_image');

    if (item_title.checkValidity() && item_price.checkValidity() && item_image.checkValidity() && item_link.checkValidity()) {
      if (window.localStorage) {
        window.localStorage.setItem(`item_${window.localStorage.length}`, JSON.stringify({
          item_title: item_title.value,
          item_price: item_price.value,
          item_link: item_link.value,
          item_image: item_image.value,
        }))
        item_title.value = '';
        item_price.value = '';
        item_image.value = '';
        item_link.value = '';
        reloadPage();
      }
    } else {
      alert('Preencha todos os campos!')
    }
  }
  ['click', 'touchstart'].forEach((UserEvent) => {
    submit_btn.addEventListener(UserEvent, sendItemLocal)
  });

}
