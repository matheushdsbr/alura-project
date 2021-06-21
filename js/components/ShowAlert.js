const ShowAlert = (event) => {
  event.preventDefault();

  const name = document.querySelector('[data-input-name]').value;
  const email = document.querySelector('[data-input-email]').value;

  alert(`Olá, ${name}! Seus dados foram enviados com sucesso! \n E-mail: ${email}`);

  document.querySelector('[data-input-name]').value = '';
  document.querySelector('[data-input-email]').value = '';
}

export default ShowAlert;