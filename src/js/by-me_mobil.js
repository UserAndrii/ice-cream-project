(() => {
  const refs = {
    openModalBtn: document.querySelector('[by-me-mobile-open]'),
    closeModalBtn: document.querySelector('[by-me-mobile-close]'),
    modal: document.querySelector('[by-me-mobile-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('by-my_is-hidden');
  }
})();
