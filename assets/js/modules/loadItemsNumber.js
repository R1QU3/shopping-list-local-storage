export default function initLoadNumber() {
  function loadNumber() {
    setInterval(() => {
      document.querySelector('#total_items').textContent = window.localStorage.length;
    }, 1000)
  }
  loadNumber();
}