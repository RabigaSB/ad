// manage header features
var upper_header = $('#upper-header');
var upper_menu_toggler = $('#upper-menu-toggler');
var open = false

upper_menu_toggler.on('click', function(e) {
  e.preventDefault();
  console.log('clicked');
  if (open){
    upper_header.addClass('d-none');
    upper_header.removeClass('d-block');
    open = false;
    console.log('open', open);
    
  }
  else {
    upper_header.addClass('d-block');
    upper_header.removeClass('d-none');
    open = true;
    console.log('open', open);

  }
  
})

// manage slider
var slider_items = $('.slider__item');
var slider_dots = $('.slider__dot');
var slideIndex;



var showSlides = function(index) {
  var i;
  
  if (index > slider_items.length) {
    slideIndex = 1;
  }
  
  if (index < 1) {
    slideIndex = slider_items.length;
  }
  
  for (i = 0; i<slider_items.length; i++) {
    $(slider_items[i]).css('display', 'none');
  }
  
  for (i = 0; i<slider_dots.length; i++) {
    $(slider_dots[i]).removeClass('active');
  }
  
  $(slider_items[slideIndex - 1]).css('display', 'block');
  $(slider_dots[slideIndex - 1]).addClass('active');
  
};

slider_dots.on('click', function(e) {
  e.preventDefault();
  slideIndex = parseInt($(this).attr('id'));
  showSlides(slideIndex);
});

slideIndex = 1;
showSlides(slideIndex);








