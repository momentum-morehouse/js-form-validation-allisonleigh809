function valid() {

  let name = document.querySelector('#name');
  let nameField = document.querySelector('#name-field')
  // if (name.value.trim()=="")
  // {
  //   alert ("Blank Username");
  // name.style.border = "solid 3px red";
  // rerturn false;
  // }
  //console.log(name.value);
  let car = document.querySelector('#car-year');
  let carYear = document.querySelector('#car-year');
  let carMake = document.querySelector('#car-make')
  let carModel = document.querySelector('#car-model')
  let carField = document.querySelector('#car-field')


  let form = document.querySelector('#parking-form');

  let date = document.querySelector('#start-date');
  // let startDateField = document.querySelector('#start-date-field')

  let day = document.querySelector('#days');
  // let daysField = document.querySelector('#days-field')

  let creditcard = document.querySelector('#credit-card');
  // let creditCardField = document.querySelector('#credit-card-field')

  let cvv = document.querySelector('#cvv');
  // let cvvField = document.querySelector('#cvv-field')

  let expiration = document.querySelector('#expiration');
  // let expirationField = document.querySelector('#experation-field')

  form.addEventListener('submit', e => {
    e.preventDefault()
    if (name.value.trim() === "") {

    }
    console.log(e.target);
  })

}

function validateName() {
  let name = document.querySelector('#name');
  let nameField = document.querySelector('#name-field')

  if (name.value.trim() === "") {
    nameField.classList.add("input-invalid")
  }
  else {
    nameField.classList.add("input-valid")
  }
}
valid();

