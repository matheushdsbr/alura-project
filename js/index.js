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

const showAlert = (event) => {
  event.preventDefault();

  const name = document.querySelector('[data-input-name]').value;
  const email = document.querySelector('[data-input-email]').value;
  alert(`Olá, ${name}! Seus dados foram enviados com sucesso! \n E-mail: ${email}`);
}

const submitForm = document.querySelector('[data-submit-form]');
submitForm.addEventListener('submit', showAlert);