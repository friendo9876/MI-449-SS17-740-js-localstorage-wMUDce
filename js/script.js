var firstName = window.localStorage.getItem('firstName')
if (firstName === null) {
  firstName = window.prompt('What\'s your first name?')
  if (firstName === null) {
    firstName = 'mysterious stranger'
  } else {
    window.localStorage.setItem('firstName', firstName)
  }
}
var greetingElement = document.getElementById('greeting')
greetingElement.textContent = 'Hi, ' + firstName
var dayNightToggle = document.getElementById('DayNightToggle')
var counter = window.localStorage.getItem('counter')
var bodyId = window.localStorage.getItem('body')
dayNightToggle.addEventListener('click', dayNightToggleFunction)
window.addEventListener('load', localStorageValuesWhenLoadedFunction)
function localStorageValuesWhenLoadedFunction () {
  if (window.localStorage.getItem('body') === 'night-theme') {
    document.body.className = 'night-theme'
    dayNightToggle.innerHTML = 'Toggle Day Theme'
  }
  if (counter === null) {
    counter = 0
    document.getElementById('counter').innerHTML = counter
    window.localStorage.setItem('counter', counter)
  } else {
    counter = parseInt(counter) + 1
    window.localStorage.setItem('counter', counter)
    document.getElementById('counter').innerHTML = counter
  }
}
function dayNightToggleFunction () {
  if (document.body.className === 'night-theme') {
    document.body.className = 'day-theme'
    dayNightToggle.innerHTML = 'Toggle Night Theme'
    bodyId = 'day-theme'
    window.localStorage.setItem('body', bodyId)
    console.log(window.localStorage.valueOf())
  } else if (document.body.className === 'day-theme') {
    document.body.className = 'night-theme'
    dayNightToggle.innerHTML = 'Toggle Day Theme'
    bodyId = 'night-theme'
    window.localStorage.setItem('body', bodyId)
    console.log(window.localStorage.valueOf())
  }
}
