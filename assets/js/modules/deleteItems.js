export default function initDeleteItems() {

  function deleteItems() {
    const data = JSON.parse(window.localStorage.getItem(this.dataset.delete))
    const confirm = window.confirm(`Deseja deletar o item "${data.item_title}"?`)
    if (confirm) {
      window.localStorage.removeItem(this.dataset.delete);
    }
  };

}
