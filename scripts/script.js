let page = document.querySelector('.page');
let form = page.querySelector('.popup');
let close = page.querySelector('.button_close_popup');
let open = document.querySelector('.button_edit_profile');

let save = document.querySelector('.button_add_confirm');

let namePopup = form.querySelector('.input_name_field');
let nameInPage = page.querySelector('.profile__names')

let jobPopup = form.querySelector('.input_job_field');
let jobInPage = page.querySelector('.profile__job')

let like = document.querySelectorAll('.button_like_icon');

like.forEach(function(element) {
  element.addEventListener('click', function() {
    let likeIcon = element.querySelector('.icons_like_icon');
    if (element.dataset.like === 'unchecked') {
      likeIcon.src = '../images/like-fill-icon.svg';  
      element.dataset.like = 'checked'; 
      element.setAttribute('data-likecount', parseInt(element.dataset.likecount) + 1);
    } else {
      likeIcon.src = '../images/like-empty-icon.svg';  
      element.dataset.like = 'unchecked';  
      if (parseInt(element.dataset.likecount) >= 0) { 
        element.setAttribute('data-likecount', parseInt(element.dataset.likecount) - 1);
      }
    }   
  });
});

function openPopup(evt) {
  evt.preventDefault();
  namePopup.value = nameInPage.textContent;
  jobPopup.value = jobInPage.textContent;
  form.classList.add('popup_opened');
}

function closePopup(evt) {
  evt.preventDefault();
  form.classList.remove('popup_opened');
}

function changeNameAndJob(evt) {
  evt.preventDefault();
  nameInPage.textContent = namePopup.value;
  jobInPage.textContent = jobPopup.value;
  closePopup(evt);
}

open.addEventListener('click', openPopup); 
close.addEventListener('click', closePopup);
save.addEventListener('click', changeNameAndJob);





