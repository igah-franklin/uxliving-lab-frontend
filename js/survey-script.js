'use strict'

 
  const surveyDateStartBtn = document.querySelector('#survey-date-start-btn');
  console.log(surveyDateStartBtn)
  const surveyDateCloseBtn = document.querySelector('#survey-datestart-close');
  const surveyDatePopup = document.querySelector('.survey_date_popup');


surveyDateStartBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    surveyDatePopup.classList.add('survey_date_popup_show')
})
surveyDateCloseBtn.addEventListener('click',() =>{
    surveyDatePopup.classList.remove('survey_date_popup_show')
})
  