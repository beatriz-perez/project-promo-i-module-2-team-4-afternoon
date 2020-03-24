
// togle hide-share method + rotating arrows


const designShow = document.querySelector('.form__arrow--design');
const fillShow = document.querySelector('.form__arrow--fill');
const shareShow = document.querySelector('.form__arrow--share');

const collapsableDesign = document.querySelector('#form__design--open');
const collapsableFill = document.querySelector('#form__fill--open');
const collapsableShare = document.querySelector('#form__share--open');

function hideDesign () {
  designShow.classList.remove('form__arrow--collapse');
  collapsableDesign.classList.add('hidden');
}
function hideFill () {
  fillShow.classList.remove('form__arrow--collapse');
  collapsableFill.classList.add('hidden');
}
function hideShare () {
  shareShow.classList.remove('form__arrow--collapse');
  collapsableShare.classList.add('hidden');
}

function showDesignInfo(){
  event.preventDefault();
  if (designShow.classList.contains('form__arrow--collapse')){
    hideDesign();
    hideFill();
    hideShare();
  } else {
    designShow.classList.add('form__arrow--collapse');
    collapsableDesign.classList.remove('hidden');
    hideFill();
    hideShare();
  }
}

function showFillInfo(){
  event.preventDefault();
  if (fillShow.classList.contains('form__arrow--collapse')){
    hideDesign();
    hideFill();
    hideShare();
  } else {
    fillShow.classList.add('form__arrow--collapse');
    collapsableFill.classList.remove('hidden');
    hideDesign();
    hideShare();
  }
}

function showShareInfo(event){
  event.preventDefault();
  if (shareShow.classList.contains('form__arrow--collapse')){
    hideDesign();
    hideFill();
    hideShare();
  } else {
    shareShow.classList.add('form__arrow--collapse')
    collapsableShare.classList.remove('hidden');  
    hideDesign();
    hideFill();
  }
}

fillShow.addEventListener('click', showFillInfo);
designShow.addEventListener('click', showDesignInfo);
shareShow.addEventListener('click', showShareInfo);
'use strict';
// PREVIEW CARD FUNCTIONS **********************************************************+

// RESET ------------------------------------------------------------------------------
const resetButton = document.querySelector('.preview__resetButton');
let savedAvatar = localStorage.getItem('avatar');

const formReset = () => { document.getElementById('form__card').reset();
}
const resetHandler = () => {
   localStorage.removeItem('userInfo');
   localStorage.removeItem('avatar');
   savedAvatar = null;
   localStorage.removeItem('checkboxId');
   formReset();
   selectPalette1()
   getText();
   showEmailButton();
   showPhoneButton();
   showLinkedinButton();
   showGithubButton();
   document.querySelector('.nameText').innerHTML = 'Nombre Apellido';
   document.querySelector('.jobText').innerHTML = 'Front-End developer';
   photoPreview.style.backgroundImage = '';
   photoThumbnail.style.backgroundImage = '';
}

resetButton.addEventListener('click', resetHandler);
// Color Palette ----------------------------------------------------------------------



// Text info --------------------------------------------------------------------------

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameBox = document.querySelector('.nameText');
const jobBox = document.querySelector('.jobText');

const getText = (x) => {
   nameBox.innerHTML = nameInput.value;
   jobBox.innerHTML = jobInput.value;
   enableCreateButton();
}

nameInput.addEventListener('keyup', getText);
jobInput.addEventListener('keyup', getText);

// Social Buttons - MAIL ---------------------------------------------------------------------
const emailBox = document.querySelector('#email');
const emailButton = document.querySelector('#emailButton');

const showEmailButton = () => emailBox.value.length !== 0 ? emailButton.classList.remove('hidden') : emailButton.classList.add('hidden');
const getEmailLink = () => { emailButton.querySelector('#emailButtonLink').href = `mailto:${emailBox.value}` };

const emailHandler = () => {
   showEmailButton();
   getEmailLink();
   enableCreateButton();
}

emailBox.addEventListener('keyup', emailHandler);

// Social Buttons - PHONE ---------------------------------------------------------------------
const phoneBox = document.querySelector('#phone');
const phoneButton = document.querySelector('#phoneButton');

const showPhoneButton = () => phoneBox.value.length !== 0 ? phoneButton.classList.remove('hidden') : phoneButton.classList.add('hidden');
const getPhoneLink = () => { phoneButton.querySelector('#phoneButtonLink').href = `tel:${phoneBox.value}` };

const phoneHandler = () => {
   showPhoneButton();
   getPhoneLink();
   enableCreateButton();
}

phoneBox.addEventListener('keyup', phoneHandler);

// Social Buttons - LINKEDIN ---------------------------------------------------------------------
const linkedinBox = document.querySelector('#linkedin');
const linkedinButton = document.querySelector('#linkedinButton');

const showLinkedinButton =  () => linkedinBox.value.length !== 0 ? linkedinButton.classList.remove('hidden') : linkedinButton.classList.add('hidden');
const getLinkedinLink = () => { linkedinButton.querySelector('#linkedinButtonLink').href = `https://www.linkedin.com/in/${linkedinBox.value}` };

const linkedinHandler = () => {
   showLinkedinButton();
   getLinkedinLink();
   enableCreateButton();
}

linkedinBox.addEventListener('keyup', linkedinHandler);

// Social Buttons - GITHUB ---------------------------------------------------------------------
const githubBox = document.querySelector('#github');
const githubButton = document.querySelector('#githubButton');

const showGithubButton =  () => githubBox.value.length !== 0 ? githubButton.classList.remove('hidden') : githubButton.classList.add('hidden');
const getGithubLink = () => { githubButton.querySelector('#githubButtonLink').href = `https://www.github.com/${githubBox.value}` };

const githubHandler = () => {
   showGithubButton();
   getGithubLink();
   enableCreateButton();
}


githubBox.addEventListener('keyup', githubHandler);

// SHARE - create and share buttons ----------------------------------------------------------------

const createCardButton = document.querySelector('#createCardButton');

function enableCreateButton() {
   if (savedAvatar !== null && nameInput.value.lenght !== 0 && jobInput.value !== 0 && emailBox.value.length !== 0 && linkedinBox.value.length !== 0 && githubBox.value.length !== 0) {
      createCardButton.classList.remove('off');
      console.log(savedAvatar);
    } else {
      createCardButton.classList.add('off');
    }
};

const createCard = () => {
   event.preventDefault();
   console.log('a new card has been created'); // AÑADIR EN ESTA FUNCIÓN acciones para crear tarjeta
};
createCardButton.addEventListener('click', createCard);
'use strict';

const palette1 = document.querySelector('#paletteOne');
const palette2 = document.querySelector('#paletteTwo');
const palette3 = document.querySelector('#paletteThree');
const palette4 = document.querySelector('#paletteFour');

const palettePreview = document.querySelector('#changePreviewStyle');
const socialButtons = document.querySelectorAll('.preview__socialButton');

function selectPalette1() {
  palettePreview.classList.add('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.add('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
  localStorage.setItem('savedPalette', 1);
}

function selectPalette2() {
  palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.add('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.add('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
  localStorage.setItem('savedPalette', 2);
}

function selectPalette3() {
  palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.add('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.add('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
  localStorage.setItem('savedPalette', 3);
}

function selectPalette4() {
  palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.add('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.add('buttonStyle4');
  }
  localStorage.setItem('savedPalette', 4);
}

palette1.addEventListener('click', selectPalette1);
palette2.addEventListener('click', selectPalette2);
palette3.addEventListener('click', selectPalette3);
palette4.addEventListener('click', selectPalette4);

// localStorage

function getLocalPalette(){
  const savedPalette = localStorage.getItem('savedPalette');  
    if (parseInt(savedPalette) === 1){
      selectPalette1();
      palette1.checked = true;
    } else if (parseInt(savedPalette) === 2){
      selectPalette2();
      palette2.checked = true;
    } else if (parseInt(savedPalette) === 3){
      selectPalette3();
      palette3.checked = true;
    } else if (parseInt(savedPalette) === 4){
      selectPalette4();
      palette4.checked = true;
    } else {
      selectPalette1();
      palette1.checked = true;
    }
}
getLocalPalette();
'use strict';

const reader = new FileReader();
const photoFile = document.querySelector('.js__photo--file');
const photoUploadBtn = document.querySelector('.js__photo--btn');
const photoThumbnail = document.querySelector('.js__photo--thumbnail');
const photoPreview = document.querySelector('.js__photo--preview');

if (savedAvatar !== null ) { 
  photoPreview.style.backgroundImage = `url(${savedAvatar})`;
  photoThumbnail.style.backgroundImage = `url(${savedAvatar})`;
}

function getPhoto(evt) {
  let myFile = evt.currentTarget.files[0];
  reader.addEventListener('load', addPhoto);
  reader.readAsDataURL(myFile);
}

function addPhoto() {
  photoPreview.style.backgroundImage = `url(${reader.result})`;
  photoThumbnail.style.backgroundImage = `url(${reader.result})`;
  localStorage.setItem('avatar', reader.result);
  savedAvatar = localStorage.getItem('avatar');
  enableCreateButton();
}

function hiddenPhotoField() {
  photoFile.click(); 
}

photoUploadBtn.addEventListener('click', hiddenPhotoField);
photoFile.addEventListener('change', getPhoto);
'use strict';

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin= document.querySelector('#linkedin');
const inputGithub = document.querySelector('#github');

const localInfo = readLocalInfo()

function saveLocalInfo(evt){
  localInfo[evt.currentTarget.name] = evt.currentTarget.value;
  console.log(localInfo);
  setLocalInfo(localInfo);
}

function setLocalInfo(userInfo){
  
  localStorage.setItem('userInfo',JSON.stringify(userInfo));
}

function readLocalInfo(){
  let localInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(localInfo !== null){
    return localInfo;
  } else {
    return localInfo = {};
  }
}

function fillFormfromLocal(localInfo){
  const inputArray = document.querySelectorAll('input');
  
  for(let inputName of inputArray){
    if(localInfo[inputName.name] !== undefined){
      inputName.value = localInfo[inputName.name]
      nameBox.innerHTML = nameInput.value;
      jobBox.innerHTML = jobInput.value;
      showEmailButton();
      showPhoneButton();
      showLinkedinButton();
      showGithubButton()
      enableCreateButton()
    } else {
      inputName.value = ''
    }
  }
}

fillFormfromLocal(localInfo);


inputName.addEventListener('keyup',saveLocalInfo);
inputJob.addEventListener('keyup',saveLocalInfo);
inputEmail.addEventListener('keyup',saveLocalInfo);
inputPhone.addEventListener('keyup',saveLocalInfo);
inputLinkedin.addEventListener('keyup',saveLocalInfo);
inputGithub.addEventListener('keyup',saveLocalInfo);

//# sourceMappingURL=main.js.map
