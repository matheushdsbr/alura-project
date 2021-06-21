const ScrollSmooth = (selector) => {
  $(selector).click(function(event){
    event.preventDefault();

    const target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
}

export default ScrollSmooth;
