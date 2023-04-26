let openProfileEditButton = document.querySelector('.profile__button-edit');

let closePopup = document.querySelector('.popup__button-close');
let popups = document.querySelector('.popup')
let editProfile = document.querySelector('.popup__edit-profile');

let editProfileName = document.querySelector('.editProfileName');
let profileNameInPage = document.querySelector('.profile__names');

let editProfileJob = document.querySelector('.editProfileJob');
let profileJobInPage = document.querySelector('.profile__job');

let profileChangeSubmit = document.querySelector('.popup__button-submit');


function openPopup(evt) {
  popups.classList.add('popup_opened');
  let targetPopup = evt.target.classList;
  switch (String(targetPopup)) {
    case "profile__button-edit":
      editProfile.classList.add('form_opened');
      editProfileName.value = profileNameInPage.textContent;
      editProfileJob.value = profileJobInPage.textContent;    
    }       
}

function closeAllPopup(evt) {
  popups.classList.remove('popup_opened');
}

function changeNameAndJob(evt) {
  evt.preventDefault();
  profileNameInPage.textContent = editProfileName.value;
  profileJobInPage.textContent = editProfileJob.value;
  closeAllPopup(evt);  
}

editProfile.addEventListener('submit', changeNameAndJob);
openProfileEditButton.addEventListener('click', openPopup);
closePopup.addEventListener('click', closeAllPopup);  






