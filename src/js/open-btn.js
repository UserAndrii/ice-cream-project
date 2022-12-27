(() => {
  const refs = {
    openModalBtn: document.querySelector('[btn-open]'),
    closeModalBtn: document.querySelector('[btn-close]'),
    modal: document.querySelector('[body]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('hystmodal__opened');
  }
})();
