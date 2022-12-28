$('.product-card-container').on('click touchstart', function (ev) {
  ev.preventDefault();
  $('.buy-me-btn').removeAttr('disabled');
  var index = $(this).index() + 1;

  $('.buy-me__product-card').removeClass('active');
  $(this).find('.buy-me__product-card').addClass('active');

  $('.check').removeAttr('checked');
  $('#product' + index).attr('checked', 'checked');

});

$('.buy-me-btn').on('click', function() {
  $('.form__input').removeClass('empty');
  $('.form__input').each(function(field) {
      if(this.value === null || this.value === '') {
          this.classList.add('empty');
          $('.buy-me-btn').attr('disabled', 'disabled');
      }
  })
})

$('.form__input').on('input', function() {
  if(this.value != null || this.value != '') $(this).removeClass('empty')
  $('.buy-me-btn').removeAttr('disabled');
})