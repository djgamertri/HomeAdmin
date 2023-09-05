const ctx = document.getElementById('myChart-1');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [{
      label: 'Dinero Promedio',
      data: [2000000, 1550000, 1800000, 1200000],
      borderWidth: 1
    }]
  },
  options: {
    reponsive: true, 
  }
});


const ctx1 = document.getElementById('myChart-2');

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [{
      label: 'Dinero Promedio',
      data: [2000000, 1550000, 1800000, 1200000],
      borderWidth: 1
    }]
  },
  options: {
    reponsive: true, 
  }
});
