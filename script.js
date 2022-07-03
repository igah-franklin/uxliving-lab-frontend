const ctx = document.getElementById('myChart').getContext('2d')

const labels = [
    'January',
    'February',
    'March',
    
]

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor:[
        'rgba(255, 0, 0, 1)',
        'rgba(255, 232, 30, 1)',
        'rgba(83, 202, 95, 1)',
      ],
      data: [70, 50, 30],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        responsive:true,
    },
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  // craete script for survey form
  const createBtn = document.querySelector('#create');
  const closeBtn = document.querySelector('#close');
  const createSurvey = document.querySelector('.create_survey')

  createBtn.addEventListener('click', function(){
    createSurvey.classList.add('show_create_btn')
  })
  closeBtn.addEventListener('click', function(){
    createSurvey.classList.remove('show_create_btn')
  })