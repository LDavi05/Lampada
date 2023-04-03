const buttonOn = document.querySelector('.turnOn');
const buttonOff = document.querySelector('.turnOff');
const buttonReset = document.querySelector('.resetBTN');
const lamp = document.getElementById('lamp');

const isLampBroken = () => {
  return lamp.src.indexOf('quebrada') > -1;
}

const lampON = () => {
  if (!isLampBroken()) {
    lamp.src = './assets/img/ligada.png';
  }
}

const lampOFF = () => {
  if (!isLampBroken()) {
    lamp.src = './assets/img/desligada.png';
  }
}

const lampBROKE = () => {
  lamp.src = './assets/img/quebrada.png';
  buttonReset.classList.remove('hid');
  buttonOn.classList.add('hid');
  buttonOff.classList.add('hid');
}

buttonOn.addEventListener('click', lampON);
buttonOff.addEventListener('click', lampOFF);
lamp.addEventListener('mouseover', lampON);
lamp.addEventListener('mouseleave', lampOFF);
lamp.addEventListener('dblclick', lampBROKE);
buttonReset.addEventListener('click', () => {
  location.reload();
});
