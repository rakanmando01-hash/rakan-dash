// var options = {
//   series: [
//     {
//       name: 'مبيعات فعلية',
//       data: [120, 180, 90]
//     },
//     {
//       name: 'مبيعات متوقعة',
//       data: [150, 200, 120]
//     }
//   ],
//   chart: {
//     type: 'bar',
//     height: 350
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       borderRadius: 5
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   xaxis: {
//     categories: ['سماعات رياضية', 'سماعات موسيقى', 'سماعات مكالمات']
//   },
//   colors: ['#2563eb', '#fcfcfc'],
//   legend: {
//     position: 'top'
//   }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


              
// var options = {
//   series: [
//     {
//       name: 'المبيعات',
//       data: [45, 60, 80, 95, 110, 140]
//     }
//   ],
//   chart: {
//     height: 350,
//     type: 'line'
//   },
//   stroke: {
//     curve: 'smooth',
//     width: 3
//   },
//   markers: {
//     size: 5
//   },
//   xaxis: {
//     categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو']
//   },
//   colors: ['#22c55e']
// };

// var chart = new ApexCharts(document.querySelector("#chart2"), options);
// chart.render();
      
// colors: ['#3b82f6', '#94a3b8']
      
    


// ================== chart 1 ==================
var options = {
  series: [
    {
      name: 'مبيعات فعلية',
      data: [120, 180, 90]
    },
    {
      name: 'مبيعات متوقعة',
      data: [150, 200, 120]
    }
  ],
  chart: {
    type: 'bar',
    height: 350,
    foreColor: '#fff' // 🔥 كل النص أبيض
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['سماعات رياضية', 'سماعات موسيقى', 'سماعات مكالمات'],
    labels: {
      style: {
        colors: '#fff',
        fontSize: '12px'
      },
      rotate: -45 // 🔥 مهم للموبايل
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#fff',
        fontSize: '12px'
      }
    }
  },
  legend: {
    position: 'top',
    labels: {
      colors: '#fff'
    }
  },
  colors: ['#2563eb', '#94a3b8'],

  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 300
      },
      xaxis: {
        labels: {
          rotate: -45,
          style: {
            fontSize: '10px'
          }
        }
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// ================== chart 2 ==================
var options2 = {
  series: [
    {
      name: 'المبيعات',
      data: [45, 60, 80, 95, 110, 140]
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    foreColor: '#fff' // 🔥 نص أبيض
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 5
  },
  xaxis: {
    categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
    labels: {
      style: {
        colors: '#fff',
        fontSize: '12px'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#fff',
        fontSize: '12px'
      }
    }
  },
  legend: {
    labels: {
      colors: '#fff'
    }
  },
  colors: ['#22c55e'],

  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 300
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '10px'
          }
        }
      }
    }
  }]
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

      
      
    

