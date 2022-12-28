(() => {
  const refs = {
    openModalBtn: document.querySelector('[third-products-modal-open]'),
    closeModalBtn: document.querySelector('[third-products-modal-close]'),
    modal: document.querySelector('[third-products-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('products-backdrop__is-hidden');
  }
})();
