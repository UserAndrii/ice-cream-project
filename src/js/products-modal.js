(() => {
  const refs = {
    openModalBtn: document.querySelector('[products-modal-open]'),
    closeModalBtn: document.querySelector('[products-modal-close]'),
    modal: document.querySelector('[products-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('products-backdrop__is-hidden');
  }
})();
