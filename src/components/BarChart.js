import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import activity from '../customerData/activity.json';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);




const BarChart = () => {
    const data = activity[0];

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div class="col-sm-12 col-md-8 tile ms-2 mt-3 mb-3 me-3">
      <h3>Activity</h3>
      <Bar style={{maxHeight:"200px"}} data={data} options={options} />
    </div>
  );
};

export default BarChart;
