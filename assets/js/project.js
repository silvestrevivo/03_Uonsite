$(document).ready(function(){
  $('.banner, h2').addClass('visible');
  $('.title').find('li').first().fadeTo('slow', 1 ,  function showNext() {
    $(this).next('li').fadeTo('slow', 1,  showNext );
  });
});
