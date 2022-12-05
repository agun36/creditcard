const form = document.querySelector('.form')
const btnform = document.querySelector('.btnform')
const cardname = document.querySelector('.cardname')
const cardnumber = document.querySelector('.cardnumber')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const cvc = document.querySelector('.cvcnum')
const thankyou = document.querySelector('.thank_you--message')
const contbtn = document.querySelector('.thankyou-btn')
const displayNumber = document.querySelector('.number')
const displayName = document.querySelector('#name')
const displayMonth = document.querySelector('#month')
const displayYear = document.querySelector('#year')
const displayCvc = document.querySelector('#cvc')
let regEx =
  /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
const nameInput = document.querySelector('.cardname')
nameInput.addEventListener('input', (e) => {
  document.querySelector('#name').textContent = e.target.value
})
// All input validation
const numberInput = document.querySelector('.cardnumber')
numberInput.addEventListener('input', (e) => {
  let formattedNumber = e.target.value.toString().replace(/\d{4}(?=.)/g, '$& ') //place a space after every 4 characters
  displayNumber.textContent = formattedNumber
})
const monthInput = document.querySelector('.month')
monthInput.addEventListener('input', (e) => {
  formattedMonth = ('0' + e.target.value).slice(-2) // add a 0 to the number if it's less then 10. (e.g. 9 => 09)
  displayMonth.textContent = formattedMonth
})
const yearInput = document.querySelector('.year')
yearInput.addEventListener('input', (e) => {
  formattedYear = ('0' + e.target.value).slice(-2)
  displayYear.textContent = formattedYear
})

const cvcInput = document.querySelector('.cvcnum')
cvcInput.addEventListener('input', (e) => {
  displayCvc.textContent = e.target.value
})
// All input validation
// error validation
const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')
  errorDisplay.innerText = message
  errorDisplay.style.color = 'red'
  inputControl.classList.add('error')
  inputControl.classList.remove('success')
}
// success validation
const setSuccess = (element, message) => {
  const inputControl = element.parentElement
  const successDisplay = inputControl.querySelector('.success')
  successDisplay.innerText = message
  successDisplay.style.color = 'green'
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}
// input validation
const isValid = () => {
  const nameValue = cardname.value
  const numberValue = cardnumber.value
  const monthValue = month.value
  const yearValue = year.value
  const cvcValue = cvc.value

  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/

  if (!nameValue) {
    cardname.focus()
    setError(cardname, 'cant be empty')
    return false
  } else if (!regName.test(nameValue)) {
    setError(cardname, 'write in this format e.g. Agun Akindele')
    return false
  } else {
    setSuccess(cardname, 'success')
  }
  // number set error
  let cardno = /^(?:5[1-5][0-9]{14})$/

  if (!numberValue) {
    cardnumber.focus()
    setError(cardnumber, 'cant be empty ')
    return false
  } else if (!cardno.test(numberValue)) {
    setError(cardnumber, 'card number must start with 5545... and must be 16')
    return false
  } else {
    setSuccess(cardnumber, 'success')
  }
  // month set error
  let monthRegex = /^(0?[1-9]|[12]\d|30)$/
  if (!monthValue) {
    month.focus()
    setError(month, 'cant be empty ')
    return false
  } else if (!monthRegex.test(monthValue)) {
    setError(month, 'card month must follow this pattern e.g.01,30')
    return false
  } else if (monthValue.length != 2) {
    setError(month, 'month  must be  in this format 09')
    return false
  } else {
    setSuccess(month, 'success')
  }
  // year set error
  let yearRegex = /^(1\d|2[01])$/
  if (!yearValue) {
    year.focus()
    setError(year, 'cant be empty')
    return false
  } else if (yearRegex.test(yearValue)) {
    setError(year, 'card year must be a number')
    return false
  } else if (yearValue.length != 2) {
    setError(year, 'card year must be 2 digits')
    return false
  } else {
    setSuccess(year, 'success')
  }
  // cvc set error
  if (!cvcValue) {
    cvc.focus()
    setError(cvc, 'cant be empty')
    return false
  } else if (isNaN(cvcValue)) {
    setError(cvc, 'cvc  is not a number')
    return false
  } else if (cvcValue.length != 3) {
    setError(cvc, 'cvc length is too short')
    return false
  } else {
    setSuccess(cvc, 'success')
  }
  return true
}
// add eventlistener to confirm button
btnform.addEventListener('click', (e) => {
  e.preventDefault()

  if (isValid()) {
    form.style.display = 'none'
    thankyou.style.display = 'flex'
  }
})
// add eventlistener to success button
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
