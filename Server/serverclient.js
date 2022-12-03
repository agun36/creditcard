const form = document.querySelector('.form')
console.log(form)
const btnform = document.querySelector('.btnform')
const cardname = document.querySelector('.cardname')
console.log(cardname)
const cardnumber = document.querySelector('.cardnumber')
console.log(cardnumber)
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const cvc = document.querySelector('.cvcnum')
const thankyou = document.querySelector('.thank_you--message')
const contbtn = document.querySelector('.thankyou-btn')
console.log(contbtn)
const displayNumber = document.querySelector('.number')
const displayName = document.querySelector('#name')
const displayMonth = document.querySelector('#month')
const displayYear = document.querySelector('#year')
const displayCvc = document.querySelector('#cvc')

let regEx =
  /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
// email.addEventListener('input', (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity('I am expecting an e-mail address!')
//     email.reportValidity()
//   } else {
//     email.setCustomValidity('')
//   }
// })
const isValidName = (name) => {
  const re = /^[a-zA-Z ]+$/
  return re.test(String(name).toUpperCase())
}
const setError = (element, message) => {
  const inputControl = element.parentElement
  console.log(inputControl)
  const errorDisplay = inputControl.querySelector('.error')

  console.log(errorDisplay)
  errorDisplay.innerText = message
  errorDisplay.style.color = 'red'
  inputControl.classList.add('error')
  inputControl.classList.remove('success')
}
const setSuccess = (element, message) => {
  const inputControl = element.parentElement
  const successDisplay = inputControl.querySelector('.success')

  successDisplay.innerText = message
  successDisplay.style.color = 'green'
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}
const validateInputs = () => {
  const nameValue = cardname.value
  const numberValue = cardnumber.value
  const monthValue = month.value
  console.log(monthValue)
  const yearValue = year.value
  const cvcValue = cvc.value

  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/

  if (!nameValue && nameValue === '') {
    setError(cardname, 'cant be empty')
  } else if (!regName.test(nameValue)) {
    setError(cardname, 'write in this format e.g. Agun Akindele')
  } else {
    setSuccess(cardname, 'success')
  }
  // number set error

  if (!numberValue && numberValue === '') {
    setError(cardnumber, 'cant be empty')
  } else if (isNaN(numberValue)) {
    setError(cardnumber, 'card number is not a number')
  } else if (numberValue.length < 16) {
    setError(cardnumber, 'card number must be 16')
  } else {
    setSuccess(cardnumber, 'success')
  }
  // month set error
  if (!monthValue && monthValue === '') {
    setError(month, 'cant be empty')
  } else if (isNaN(monthValue)) {
    setError(month, 'card month must be a number')
  } else if (monthValue.length != 2) {
    setError(month, 'month  must be four digits number')
  } else {
    setSuccess(month, 'success')
  }
  // year set error
  let current_year = new Date().getFullYear()

  if (!yearValue && yearValue === '') {
    setError(year, 'cant be empty')
  } else if (isNaN(yearValue)) {
    setError(year, 'card year must be a number')
  } else if (year <= 2022 || year > current_year) {
    setError(year, 'card year must start from 2022')
  } else if (yearValue.length != 2) {
    setError(year, 'card year must be 2 digits')
  } else {
    setSuccess(year, 'success')
  }
  // cvc set error
  if (!cvcValue && cvcValue === '') {
    setError(cvc, 'cant be empty')
  } else if (isNaN(cvcValue)) {
    setError(cvc, 'cvc number is not a number')
  } else if (cvcValue.length != 3) {
    setError(cvc, 'cvc number is too short')
  } else {
    setSuccess(cvc, 'success')
  }

  // form.style.display = 'none'
}

btnform.addEventListener('click', (e) => {
  e.preventDefault()
  validateInputs()

  if (
    cardname.value &&
    cardnumber.value &&
    month.value &&
    year.value &&
    cvc.value
  ) {
    form.style.display = 'none'
    thankyou.style.display = 'flex'
  } else {
    cardname.value === ''
      ? cardname.focus()
      : cardnumber.value == ''
      ? cardnumber.focus()
      : month.value == ''
      ? month.focus()
      : year.value == ''
      ? year.focus()
      : cvc.value == ''
      ? cvc.focus()
      : form == ''
  }
  displayNumber.innerHTML = cardnumber.value
  displayNumber.style.display = 'flex'
  displayName.innerHTML = cardname.value
  displayMonth.innerHTML = month.value
  displayYear.innerHTML = year.value
  displayCvc.innerHTML = cvc.value
})

contbtn.addEventListener('click', (e) => {
  e.preventDefault()
  form.style.display = 'flex'
  cardname.value = ''
  cardnumber.value = ''
  month.value = ''
  year.value = ''
  cvc.value = ''
  thankyou.style.display = 'none'
})
