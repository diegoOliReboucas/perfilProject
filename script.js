//Constantes

const moon = document.querySelector('.moon');
const light = document.querySelector('.light');
const primeiroPseudo = document.querySelector('.primeiroH1');
const segundoPseudo = document.querySelector('.mainRight');
const italicColor = document.querySelectorAll('.italicColor');
const listColor = document.querySelectorAll('ul li');
const ativoCor = document.querySelectorAll('.ativo');
const moreAbout = document.querySelector('.moreAbout');
const gear = document.querySelector('.eng');
const selecaoCores = document.querySelector('.selecaoCores');
const colorRed = document.querySelector('.colorRed');
const colorOrange = document.querySelector('.colorOrange');
const colorGreen = document.querySelector('.colorGreen');
const colorBlue = document.querySelector('.colorBlue');
const colorPink = document.querySelector('.colorPink');
const colorGold = document.querySelector('.colorGold');

//Ativar botao Red
function ativarBotaoRed() {
  primeiroPseudo.style.setProperty('--afterBack', '#ff2e37');
  primeiroPseudo.style.setProperty('--beforeBack', '#ff2e37');
  segundoPseudo.style.setProperty('--beforeBack', '#ff2e37');
  segundoPseudo.style.setProperty('--afterBack', '#ff2e37');
  italicColor.forEach((item) => {
    item.style.color = '#ff2e37';
  });
  moreAbout.style.backgroundColor = '#ff2e37';
  listColor[0].classList.add('ativoRed');
  for (i = 0; i < listColor.length; i++) {
    listColor[i].classList.remove('ativoOrange');
    listColor[i].classList.remove('ativoGreen');
    listColor[i].classList.remove('ativoBlue');
    listColor[i].classList.remove('ativoPink');
    listColor[i].classList.remove('ativoGold');
  }
  function activeTab(index) {
    listColor.forEach(function (content) {
      content.classList.remove('ativoRed');
      content.classList.remove('ativoOrange');
      content.classList.remove('ativoGreen');
      content.classList.remove('ativoBlue');
      content.classList.remove('ativoPink');
      content.classList.remove('ativoGold');
    });
    listColor[index].classList.add('ativoRed');
  }
  listColor.forEach(function (itemMenu, index) {
    itemMenu.addEventListener('click', function () {
      activeTab(index);
    });
  });
}
ativarBotaoRed();
colorRed.addEventListener('click', ativarBotaoRed);

//Ativar botao Orange
function ativarBotaoOrange() {
  primeiroPseudo.style.setProperty('--afterBack', '#ff660a');
  primeiroPseudo.style.setProperty('--beforeBack', '#ff660a');
  segundoPseudo.style.setProperty('--beforeBack', '#ff660a');
  segundoPseudo.style.setProperty('--afterBack', '#ff660a');
  italicColor.forEach((item) => {
    item.style.color = '#ff660a';
  });
  moreAbout.style.backgroundColor = '#ff660a';
  listColor[0].classList.add('ativoOrange');
  for (i = 0; i < listColor.length; i++) {
    listColor[i].classList.remove('ativoGreen');
    listColor[i].classList.remove('ativoRed');
    listColor[i].classList.remove('ativoBlue');
    listColor[i].classList.remove('ativoPink');
    listColor[i].classList.remove('ativoGold');
  }

  function activeTab(index) {
    listColor.forEach(function (content) {
      content.classList.remove('ativoRed');
      content.classList.remove('ativoOrange');
      content.classList.remove('ativoGreen');
      content.classList.remove('ativoBlue');
      content.classList.remove('ativoPink');
      content.classList.remove('ativoGold');
    });
    listColor[index].classList.add('ativoOrange');
  }
  listColor.forEach(function (itemMenu, index) {
    itemMenu.addEventListener('click', function () {
      activeTab(index);
    });
  });
}
colorOrange.addEventListener('click', ativarBotaoOrange);

//Ativar botao Green
function ativarBotaoGreen() {
  primeiroPseudo.style.setProperty('--afterBack', '#2da281');
  primeiroPseudo.style.setProperty('--beforeBack', '#2da281');
  segundoPseudo.style.setProperty('--beforeBack', '#2da281');
  segundoPseudo.style.setProperty('--afterBack', '#2da281');
  italicColor.forEach((item) => {
    item.style.color = '#2da281';
  });
  moreAbout.style.backgroundColor = '#2da281';
  listColor[0].classList.add('ativoGreen');
  for (i = 0; i < listColor.length; i++) {
    listColor[i].classList.remove('ativoOrange');
    listColor[i].classList.remove('ativoRed');
    listColor[i].classList.remove('ativoBlue');
    listColor[i].classList.remove('ativoPink');
    listColor[i].classList.remove('ativoGold');
  }
  function activeTab(index) {
    listColor.forEach(function (content) {
      content.classList.remove('ativoRed');
      content.classList.remove('ativoOrange');
      content.classList.remove('ativoGreen');
      content.classList.remove('ativoBlue');
      content.classList.remove('ativoPink');
      content.classList.remove('ativoGold');
    });
    listColor[index].classList.add('ativoGreen');
  }
  listColor.forEach(function (itemMenu, index) {
    itemMenu.addEventListener('click', function () {
      activeTab(index);
    });
  });
}
colorGreen.addEventListener('click', ativarBotaoGreen);

//Ativar botao Blue
function ativarBotaoBlue() {
  primeiroPseudo.style.setProperty('--afterBack', '#1152b9');
  primeiroPseudo.style.setProperty('--beforeBack', '#1152b9');
  segundoPseudo.style.setProperty('--beforeBack', '#1152b9');
  segundoPseudo.style.setProperty('--afterBack', '#1152b9');
  italicColor.forEach((item) => {
    item.style.color = '#1152b9';
  });
  moreAbout.style.backgroundColor = '#1152b9';
  listColor[0].classList.add('ativoBlue');
  for (i = 0; i < listColor.length; i++) {
    listColor[i].classList.remove('ativoOrange');
    listColor[i].classList.remove('ativoRed');
    listColor[i].classList.remove('ativoGreen');
    listColor[i].classList.remove('ativoPink');
    listColor[i].classList.remove('ativoGold');
  }
  function activeTab(index) {
    listColor.forEach(function (content) {
      content.classList.remove('ativoRed');
      content.classList.remove('ativoOrange');
      content.classList.remove('ativoGreen');
      content.classList.remove('ativoBlue');
      content.classList.remove('ativoPink');
      content.classList.remove('ativoGold');
    });
    listColor[index].classList.add('ativoBlue');
  }
  listColor.forEach(function (itemMenu, index) {
    itemMenu.addEventListener('click', function () {
      activeTab(index);
    });
  });
}
colorBlue.addEventListener('click', ativarBotaoBlue);

//Ativar botao Pink
function ativarBotaoPink() {
  primeiroPseudo.style.setProperty('--afterBack', '#ff3db5');
  primeiroPseudo.style.setProperty('--beforeBack', '#ff3db5');
  segundoPseudo.style.setProperty('--beforeBack', '#ff3db5');
  segundoPseudo.style.setProperty('--afterBack', '#ff3db5');
  italicColor.forEach((item) => {
    item.style.color = '#ff3db5';
  });
  moreAbout.style.backgroundColor = '#ff3db5';
  listColor[0].classList.add('ativoPink');
  for (i = 0; i < listColor.length; i++) {
    listColor[i].classList.remove('ativoOrange');
    listColor[i].classList.remove('ativoRed');
    listColor[i].classList.remove('ativoBlue');
    listColor[i].classList.remove('ativoGreen');
    listColor[i].classList.remove('ativoGold');
  }
  function activeTab(index) {
    listColor.forEach(function (content) {
      content.classList.remove('ativoRed');
      content.classList.remove('ativoOrange');
      content.classList.remove('ativoGreen');
      content.classList.remove('ativoBlue');
      content.classList.remove('ativoPink');
      content.classList.remove('ativoGold');
    });
    listColor[index].classList.add('ativoPink');
  }
  listColor.forEach(function (itemMenu, index) {
    itemMenu.addEventListener('click', function () {
      activeTab(index);
    });
  });
}
colorPink.addEventListener('click', ativarBotaoPink);

//Ativar botao Gold
function ativarBotaoGold() {
  primeiroPseudo.style.setProperty('--afterBack', '#d4af37');
  primeiroPseudo.style.setProperty('--beforeBack', '#d4af37');
  segundoPseudo.style.setProperty('--beforeBack', '#d4af37');
  segundoPseudo.style.setProperty('--afterBack', '#d4af37');
  italicColor.forEach((item) => {
    item.style.color = '#d4af37';
  });
  moreAbout.style.backgroundColor = '#d4af37';
  listColor[0].classList.add('ativoGold');
  for (i = 0; i < listColor.length; i++) {
    listColor[i].classList.remove('ativoOrange');
    listColor[i].classList.remove('ativoRed');
    listColor[i].classList.remove('ativoBlue');
    listColor[i].classList.remove('ativoPink');
    listColor[i].classList.remove('ativoGreen');
  }

  function activeTab(index) {
    listColor.forEach(function (content) {
      content.classList.remove('ativoRed');
      content.classList.remove('ativoOrange');
      content.classList.remove('ativoGreen');
      content.classList.remove('ativoBlue');
      content.classList.remove('ativoPink');
      content.classList.remove('ativoGold');
    });
    listColor[index].classList.add('ativoGold');
    listColor[index].classList.remove('ativoRed');
    listColor[index].classList.remove('ativoOrange');
    listColor[index].classList.remove('ativoGreen');
    listColor[index].classList.remove('ativoBlue');
    listColor[index].classList.remove('ativoPink');
  }
  listColor.forEach(function (itemMenu, index) {
    itemMenu.addEventListener('click', function () {
      activeTab(index);
    });
  });
}
colorGold.addEventListener('click', ativarBotaoGold);

//Ativar o menu de cores

function ativarColors() {
  selecaoCores.classList.toggle('selecaoCores2');
  gear.classList.toggle('eng2');
  moon.classList.toggle('moon2');
  light.classList.toggle('light2');
}
gear.addEventListener('click', ativarColors);

//Ativar DarkMode

const header = document.querySelector('header');
const headerUl = document.querySelector('header ul');
const headerH1 = document.querySelector('header h1');
const main = document.querySelector('main');
const mainH1 = document.querySelector('main h1');
const mainH2 = document.querySelector('main h2');
const mainP = document.querySelector('main p');
const selecaoCoresH4 = document.querySelector('.selecaoCores h4');

function ativarDark() {
  moon.style.visibility = 'hidden';
  light.style.visibility = 'visible';

  header.style.backgroundColor = '#222222';
  headerUl.style.color = 'white';
  headerH1.style.color = 'white';
  main.style.backgroundColor = '#151515';
  main.style.border = '3px solid #252525';
  mainH1.style.color = 'white';
  mainH2.style.color = 'white';
  mainP.style.color = 'white';
  moreAbout.style.color = 'white';
  selecaoCores.style.backgroundColor = '#222222';
  selecaoCoresH4.style.color = 'white';
  gear.style.backgroundColor = '#222222';
  gear.style.color = 'white';
  moon.style.backgroundColor = '#222222';
  moon.style.color = 'white';
  light.style.backgroundColor = '#222222';
  light.style.color = 'white';
}
moon.addEventListener('click', ativarDark);

function ativarLight() {
  moon.style.visibility = 'visible';
  light.style.visibility = 'hidden';

  header.style.backgroundColor = 'white';
  headerUl.style.color = 'black';
  headerH1.style.color = 'black';
  main.style.backgroundColor = '#f3f4fd';
  main.style.border = '3px solid #e9eaf3';
  mainH1.style.color = 'black';
  mainH2.style.color = 'black';
  mainP.style.color = 'black';
  moreAbout.style.color = 'black';
  selecaoCores.style.backgroundColor = 'white';
  selecaoCoresH4.style.color = 'black';
  gear.style.backgroundColor = 'white';
  gear.style.color = '#222222';
  moon.style.backgroundColor = 'white';
  moon.style.color = '#222222';
  light.style.backgroundColor = 'white';
  light.style.color = '#222222';
}
light.addEventListener('click', ativarLight);
