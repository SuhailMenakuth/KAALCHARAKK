import React, { useContext } from 'react';
import { admin } from '../context/AdminContext';
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const DashboardCharts = () => {
   const { totalOrders, blockedCount, unblockedCount, mostSoldedProduct, totalRevenue } =  useContext(admin);
  // Bar chart data for total orders
  const barData = {
    labels: ['Total Orders'],
    datasets: [
      {
        label: 'Total Orders',
        data: [totalOrders],
        backgroundColor: '#798645',
      },
    ],
  };

  // Pie chart data for blocked vs unblocked users
  const pieData = {
    labels: ['Blocked', 'Unblocked'],
    datasets: [
      {
        data: [blockedCount, unblockedCount],
        backgroundColor: ['#bd9c6f', '#626f47'],
      },
    ],
  };

  // Doughnut chart for most sold product
//   const doughnutData = {
//     labels: [mostSoldedProduct.name || 'Product'],
//     datasets: [
//       {
//         label: 'Most Sold Product',
//         data: [mostSoldedProduct.sold],
//         backgroundColor: ['#798645'],
//       },
//     ],
//   };

  // Line chart data for total revenue
  const lineData = {
    labels: ['Revenue'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [totalRevenue],
        borderColor: '#bd9c6f',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-8 mb-28">

        
      {/* Bar Chart */}
      <div>
        <h3 className="text-center font-semibold">Total Orders</h3>
        <Bar data={barData} />
      </div>

      {/* Pie Chart */}
      <div>
        <h3 className="text-center font-semibold">Blocked vs Unblocked Users</h3>
        <Pie data={pieData} />
      </div>

      {/* Doughnut Chart */}
      {/* <div>
        <h3 className="text-center font-semibold">Most Sold Product</h3>
        <Doughnut data={doughnutData} />
      </div> */}

      {/* Line Chart */}
      <div>
        <h3 className="text-center font-semibold">Total Revenue</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default DashboardCharts;
