module.exports = function () {

  $('#search-form input').on('focus', function () {
    $('#search-form').find('.search-form__icon').fadeOut(0);
  });

  $('#search-form input').on('change', function (e) {
    if ($('#search-form input').val()) {
      $('#search-form').find('.search-form__icon').fadeOut(0);
    } else {
      $('#search-form').find('.search-form__icon').fadeIn(0);
    }
  });

  $('.search-btn').on('click', function () {
    $('.search').fadeIn();
    $('.main').addClass('overflow');
  });

  $('.search-header__close').on('click', function () {
    $('.search').fadeOut();
    $('.main').removeClass('overflow');
  });

};