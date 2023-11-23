module.exports = function () {

  $('.menu-mobile-nav__main-link').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  $('.header__burger input').on('click', function () {
    $('.main').toggleClass('overflow');
    $('#menu-mobile').slideToggle();
  });

};