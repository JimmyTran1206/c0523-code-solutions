const $contactForm = document.querySelector('#contact-form');
const formData = {};
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // use the name and value pairs in assigning the input value to the object
  formData[$contactForm.elements[0].name] = $contactForm.elements[0].value;
  formData[$contactForm.elements[1].name] = $contactForm.elements[1].value;
  formData[$contactForm.elements[2].name] = $contactForm.elements[2].value;
  console.log(formData);
  $contactForm.reset();
});
