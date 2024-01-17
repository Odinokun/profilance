module.exports = function () {

  $('.menu-mobile-nav__main-link').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  $('.header__burger input').on('click', function () {
    $('#header').toggleClass('fixed');
    $('#menu-mobile').slideToggle();
  });

};