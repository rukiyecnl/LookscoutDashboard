// import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts';

// export default function BarChart(){

//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//       setIsClient(true); // Tarayıcıda olduğumuzda state'i güncelle
//     }, []);

//     const options = {
//         chart: {
//           type: 'line'
//         },
//         series: [{
//           name: 'sales',
//           data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//         }],
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         }
//       };


//     return (
//         <div id="chart">
//             {isClient && <Chart options={options} series={options.series} type="line" height={350} />}
//         </div>
//     )
// }

"use client"
import { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import Link from 'next/link';

// ApexCharts'ı tarayıcı tarafında yüklemek için kullanılır
export default function BarChart(){
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    setChartOptions({
      chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false // Toolbar'ı kapatır
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          horizontal: false,
        },
      },
      colors: ["#437EF7", '#5CB1FF'],
      series: [{
        name: 'interfaces',
        data: [23, 15, 45, 52, 10, 75, 50, 20, 48, 30, 13, 75]
      }, {
        name: 'build-ups',
        data: [13, 7, 20, 30, 5, 30, 35, 10, 28, 15, 13, 25]
      }],
      xaxis: {
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
 
      },
      yaxis: {
        labels: {
          formatter: (value) => {
            // Burada `value` Y eksenindeki değerleri temsil eder.
            // İstenilen formatta değiştirebilirsiniz
            return `${value}%`;
          }
        },
        min: 0, // Y ekseninin minimum değeri
        max: 100, // Y ekseninin maksimum değeri
        tickAmount: 4 // Y ekseninde kaç tane tik olacak
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top', // Başlıkları üstte gösterir
        horizontalAlign: 'right', // Sağ tarafa hizalar
        floating: true, // Konumun serbest kalmasını sağlar
        offsetX: -10, // Sağdan biraz kaydırır
        offsetY: 0, // Yukarıdan veya aşağıdan kaydırır
      },
      dataLabels: {
        enabled: false // Veri etiketlerini kapatır
      },
      grid: {
        yaxis: {
          lines: {
            show: true,
            dashArray: 4 // Kesikli çizgiler için dashArray özelliği
          }
        }
      },   
    
    });
  }, []);

  if (!chartOptions) {
    return null; // Yüklenene kadar hiçbir şey render etme
  }

  return (
    <div className='d-sm-block d-none'  style={{backgroundColor: "var(--side-bar-bg)", border:"1px solid var(--border-color)", borderRadius:"10px", color:"var(--title-color)"}}>
      <div className='d-flex justify-content-between' style={{paddingInline:"20px", paddingBlock: "16px", borderBottom:"1px solid var(--border-color)"}}>
        <p className='graph-title'>Advanced Graphic</p>
        <a href="#"><img src="./Dropdown.png" alt="points" /></a>
      </div>
      <div id="chart" style={{paddingInline:"20px", paddingBlock: "16px"}}>
        <Chart options={chartOptions} series={chartOptions.series} type="bar" height={350} />
      </div>
      <div className='d-flex justify-content-between'  style={{paddingInline:"20px", paddingBlock: "16px", borderTop:"1px solid var(--border-color)"}}>
        <p>Data Graph</p>
        <Link href={"/"} className='d-flex gap-1 align-items-center'>
          <p>Open</p>
          <img src="./externalLink.png" alt="link"  />
        </Link>
      </div>

    </div>
  );
};

