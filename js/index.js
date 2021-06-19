const scrollSmooth = (selector) => {
  $(selector).click(function(event){
    event.preventDefault();

    const target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
}

scrollSmooth('a[href*=panel-about]');
scrollSmooth('a[href*=panel-speakers]');
scrollSmooth('a[href*=panel-form]');

const showAlert = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  alert(`${name}! Seus dados foram enviados com sucesso! \n email: ${email}`);
}