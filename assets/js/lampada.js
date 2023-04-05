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
    buttonOn.style.borderBottom = 'none';
    buttonOff.style.borderBottom = '7px solid #00000034';
  }
}

const lampOFF = () => {
  if (!isLampBroken()) {
    lamp.src = './assets/img/desligada.png';
    buttonOff.style.borderBottom = 'none';
    buttonOn.style.borderBottom = '7px solid #00000034'
  }
}

const lampBROKE = () => {
  lamp.src = './assets/img/quebrada.png';
  buttonReset.classList.remove('hid');
  buttonOn.classList.add('hid');
  buttonOff.classList.add('hid');
}

const reload = () => {
  buttonReset.style.borderBottom = 'none';
  location.reload();
}

buttonOn.addEventListener('click', lampON);
buttonOff.addEventListener('click', lampOFF);
lamp.addEventListener('mouseover', lampON);
lamp.addEventListener('mouseleave', lampOFF);
lamp.addEventListener('dblclick', lampBROKE);
buttonReset.addEventListener('click', reload);