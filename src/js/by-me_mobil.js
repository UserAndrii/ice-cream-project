(() => {
  const refs = {
    openModalBtn: document.querySelector('.by-me-mobile-open'),
    closeModalBtn: document.querySelector('[by-me-mobile-close]'),
    modal: document.querySelector('[by-me-mobile-modal]'),
  };

  $('body').on('touchstart', function(ev) {
    var target = $(ev.target);

    if(target.is('.backdrop') && $('body').hasClass('modal-open')) {
       toggleModal();
        console.log(target, 'mob')
    }
  });

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);



  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('by-my_is-hidden');
  }
})();