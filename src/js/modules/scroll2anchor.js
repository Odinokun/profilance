module.exports = function() {

  $(function() {
    $('.treatments-left__nav-link[href*=\\#]').on("click", function(e){
       e.preventDefault();
       let anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 24 + 'px'
       }, 1000);
    });
    return false;
  });

};