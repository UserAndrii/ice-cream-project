(() => {
  const refs = {
    openModalBtn: document.querySelector('.by-me-modal-open'),
    closeModalBtn: document.querySelector('[by-me-modal-close]'),
    modal: document.querySelector('[by-me-data-modal]')
  };

  $('body').on('mousedown ', function(ev) {
    var target = $(ev.target);

    if(target.is('.backdrop') && $('body').hasClass('modal-open') && !$('body').hasClass('hystmodal__opened')) {
       toggleModal();
    }
  });

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('by-my_is-hidden');
  }
})();