import {
  Dom
} from "./utilitarian.js";

export default function initLoadItemsLocal() {
  function loadItemsLocal() {
    const main_container = document.querySelector('#main')
    for (let i = 0; i < window.localStorage.length; i++) {
      const data = JSON.parse(window.localStorage.getItem(`item_${i}`));
      
      // Create elements
      const card_container = new Dom('div');
      const card = new Dom('div');
      const card_content = new Dom('div');
      const card_img = new Dom('img');
      const card_title = new Dom('h5');
      const card_price = new Dom('h6');
      const card_link = new Dom('a');

      // Set class
      card_container.class('d-flex col-sm-6 col-md-4 my-2');
      card.class('card w-100');
      card_content.class('card-body');
      card_img.class('card-img-top');
      card_title.class('card-title');
      card_price.class('card-title');
      card_link.class('btn btn-primary');
      card_link.set('data-link', '')

      // Set atributes
      card.set('data-card', '');
      card_img.set('src', data.item_image);
      card_img.set('alt', `card_image_${i}`);
      card_price.set('data-price', data.item_price)

      card_link.set('href', data.item_link);
      card_link.set('target', '_blank');

      // Set content
      card_title.content(data.item_title);
      card_price.content(`R$ ${data.item_price}`);
      card_link.content('Ver Mais');

      // Append
      card_container.appendEl(card);
      card.appendEl(card_img);
      card.appendEl(card_content);
      card_content.appendEl(card_title);
      card_content.appendEl(card_price);
      card_content.appendEl(card_link);
      main_container.appendChild(card_container.el);
    }
  }
  window.addEventListener('DOMContentLoaded', loadItemsLocal)
}

/* 

<div class="d-flex col-sm-6 col-md-4 my-2">
  <div class="card w-100" data-card="" data-item-index="item_0"><img class="card-img-top"
      src="">
    <div class="card-body">
      <h5 class="card-title">teste</h5>
      <h6 class="card-title">R$ 999</h6><a class="btn btn-primary" target="_blank" href="www.google.com">Ver Mais</a>
    </div><button class="btn btn-danger delete" data-delete="item_0"><img src="./assets/icons/trash.svg"></button>
  </div>
</div>

*/

/* 
  card_delete_btn.classList.add('btn', 'btn-danger', 'delete');
  card_delete_btn.setAttribute(`data-delete`, `item_${i}`)
  card_delete_btn.innerHTML = '<img src="./assets/icons/trash.svg">'; 
*/