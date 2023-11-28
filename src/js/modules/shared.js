module.exports = function () {

  $('.footer-bottom__social-link').on('click', function (e) {
    e.preventDefault();
    $('#share-layout, #share').fadeIn();
  })

  $('#share-layout, #share-header__close').on('click', function (e) {
    e.preventDefault();
    $('#share-layout, #share').fadeOut();
  })

};