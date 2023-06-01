import './style.css'

const launch = new Date('December 25, 2023 00:00:00').getTime();

const missingForLaunch = setInterval(function() {
  const now = new Date().getTime();
  const timer = launch - now;
  
  let days = Math.floor(timer / (1000 * 60 * 60 *24));
  let hours = Math.floor((timer % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timer % (1000 * 60)) / 1000);


  days = days < 10 ? `0${days}` : `${days}`
  document.querySelector('#days').innerText = days
  
  hours = hours < 10 ? `0${hours}` : `${hours}`
  document.querySelector('#hours').innerText = hours

  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  document.querySelector('#minutes').innerText = minutes

  seconds = seconds < 10 ? `0${seconds}` : seconds
  document.querySelector('#seconds').innerText = seconds

}, 1000)

// TESTE

const userAgent = window.navigator.userAgent

document.querySelector('#test').innerText = userAgent