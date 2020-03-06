<<<<<<< HEAD
'use strict';

console.log('>> Ready :)');

// ------ Button arrow collapse --------
const btnArrowDesign = document.querySelector('.form__arrow--design');
 btnArrowDesign.addEventListener('click', () => {
   if (btnArrowDesign.classList.contains('form__arrow--collapse')) {
      btnArrowDesign.classList.remove('form__arrow--collapse'); } 
   else { btnArrowDesign.classList.add('form__arrow--collapse'); }
   });


   const btnArrowFill = document.querySelector('.form__arrow--fill');
 btnArrowFill.addEventListener('click', () => {
   if (btnArrowFill.classList.contains('form__arrow--collapse')) {
      btnArrowFill.classList.remove('form__arrow--collapse'); } 
   else { btnArrowFill.classList.add('form__arrow--collapse'); }
   });

   const btnArrowShare = document.querySelector('.form__arrow--share');
 btnArrowShare.addEventListener('click', () => {
   if (btnArrowShare.classList.contains('form__arrow--collapse')) {
      btnArrowShare.classList.remove('form__arrow--collapse'); } 
   else { btnArrowShare.classList.add('form__arrow--collapse'); }
   });
 // ------ Button arrow collapse --------


// togle hide-share method

const designShow = document.querySelector('.form__arrow--design');
const fillShow = document.querySelector('.form__arrow--fill');
const shareShow = document.querySelector('.form__arrow--share');

function showFillInfo(){
  const collapsableFill = document.querySelector('#form__fill--open');
  collapsableFill.classList.toggle('hidden');

}

function showDesignInfo(){
  const collapsableDesign = document.querySelector('#form__design--open');
  collapsableDesign.classList.toggle('hidden');

}

function showShareInfo(){
  const collapsableShare = document.querySelector('#form__share--open');
  collapsableShare.classList.toggle('hidden');

}


fillShow.addEventListener('click', showFillInfo);
designShow.addEventListener('click', showDesignInfo);
shareShow.addEventListener('click', showShareInfo);
//# sourceMappingURL=main.js.map
=======
// PREVIEW CARD FUNCTIONS **********************************************************+

// Text info --------------------------------------------------------------------------

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameBox = document.querySelector('.nameText');
const jobBox = document.querySelector('.jobText');

const getText = (x) => {
   nameBox.innerHTML = nameInput.value;
   jobBox.innerHTML = jobInput.value;
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
}


githubBox.addEventListener('keyup', githubHandler);

// SHARE - create and share buttons ----------------------------------------------------------------

const createCardButton = document.querySelector('#createCardButton');
const createCard = () => {
   event.preventDefault();
   console.log('a new card has been created'); // AÑADIR EN ESTA FUNCIÓN acciones para crear tarjeta
}
createCardButton.addEventListener('click', createCard);
'use strict';

console.log('>> Ready :)');


// Toggle function 

function fill_visibility(id) {
   const e = document.getElementById('form__design--open');
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function fill_visibility(id) {
    const e = document.getElementById('form__fill--open');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

 function share_visibility(id) {
    const e = document.getElementById('form__share--open');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

//  function btnRotate() {
//     document.querySelector('form__arow').style.transform = 'rotate(180deg)';
//   }


//# sourceMappingURL=main.js.map
>>>>>>> cardPreview
