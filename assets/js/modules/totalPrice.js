"use strict";

export default function initTotalPrice(){
  const spanTotal = document.getElementById('total_price')
  const localData = window.localStorage;
  function totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < localData.length; i++) {
      const data = JSON.parse(localData.getItem(`item_${i}`))
      totalPrice += Number(data.item_price);
    }
    spanTotal.textContent = totalPrice;
  }
  totalPrice();
}

