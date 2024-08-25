
"use client"
import { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import Link from 'next/link';

// ApexCharts'ı tarayıcı tarafında yüklemek için kullanılır
export default function RevenueBarChart(){
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    setChartOptions({
      chart: {
        height: 380,
        type: 'bar',
        stacked: false,
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
        data: [23, 15, 45, 52, 10, 75, 50]
      }, {
        name: 'build-ups',
        data: [13, 7, 20, 30, 5, 30, 35]
      }],
      xaxis: {
        categories: ['', '', '', '', '', '', ''],

      },
      yaxis: {
        labels: {
          formatter: (value) => {
            // Burada `value` Y eksenindeki değerleri temsil eder.
            // İstenilen formatta değiştirebilirsiniz
            return ` `;
          },
      
        },
        min: 0, // Y ekseninin minimum değeri
        max: 100, // Y ekseninin maksimum değeri
        tickAmount: 4 // Y ekseninde kaç tane tik olacak
      },
      fill: {
        opacity: 1
      },
      legend: {
        show: false
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
    <div className='d-sm-none d-block'  style={{backgroundColor: "var(--side-bar-bg)", border:"1px solid var(--border-color)", borderRadius:"10px", color:"var(--title-color)"}}>
      <div className='d-flex justify-content-between' style={{paddingInline:"20px", paddingBlock: "16px", borderBottom:"1px solid var(--border-color)"}}>
        <p className='graph-title'>Revenue</p>
        <a href="#"><img src="./Dropdown.png" alt="points" /></a>
      </div>
      <div style={{paddingInline: "20px", marginBlock:"16px"}}>
        <p className='revenue-total'>Total Transaction Revenue</p>
        <p className='revenue-price'>$135,450</p>
      </div>
      <div id="chart" style={{paddingInline:"20px", paddingBlock: "16px"}}>
        <Chart options={chartOptions} series={chartOptions.series} type="bar" height={350} />
      </div>
      <div  style={{paddingInline:"20px", paddingBlock: "16px", borderTop:"1px solid var(--border-color)"}}>
        <Link href={"/"} className='d-flex gap-1 align-items-center'>
          <p>Open</p>
          <img src="./externalLink.png" alt="link"  />
        </Link>
      </div>

    </div>
  );
};

