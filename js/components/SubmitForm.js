import ShowAlert from "./ShowAlert.js";

const SubmitForm = (props) => {
  const submitForm = document.querySelector(props);
  submitForm.addEventListener('submit', ShowAlert);
}

export default SubmitForm;
