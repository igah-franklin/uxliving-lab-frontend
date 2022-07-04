'use strict'

 
  const qrCodeStartBtn = document.querySelector('.create_qr_code1_submit');
  console.log(qrCodeStartBtn)
  const qrCodeStartBtnCloseBtn = document.querySelector('#survey-datestart-close');
  const surveyDatePopup = document.querySelector('.survey_date_popup');


  qrCodeStartBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    surveyDatePopup.classList.add('survey_date_popup_show')
})
qrCodeStartBtnCloseBtn.addEventListener('click',() =>{
    surveyDatePopup.classList.remove('survey_date_popup_show')
})
  