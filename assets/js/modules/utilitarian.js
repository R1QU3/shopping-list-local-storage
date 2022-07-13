export function reloadPage() {
  window.location.reload();
}

export function Dom(selector) {
  this.el = document.createElement(selector);
  this.class = function (className) {
    this.el.classList.value = className;
  };
  this.set = function (att, value) {
    this.el.setAttribute(att, value);
  };
  this.content = function (textContent) {
    this.el.innerHTML = textContent;
  };
  this.appendEl = function (elToAppend) {
    this.el.appendChild(elToAppend.el);
  }
}