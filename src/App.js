import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Favourites from "./components/Favourites";
import RecentOrders from "./components/RecentOrders";
import Dashboard from "./components/Dashboard";
import Comments from "./components/Comments";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div class="d-flex">
      <div style={{position:"fixed"}} class="ms-2">
        <div class="mt-3 mb-3">
          <i class="fa-solid fa-grip-vertical fa-xl"></i>
        </div>
        <div>
          <i class="vertical-icons my-2 fa-solid fa-house"></i> <br />
          <i class="vertical-icons my-2 fa-solid fa-chart-simple"></i> <br />
          <i class="vertical-icons my-2 fa-solid fa-clipboard"></i> <br />
          <i class="vertical-icons my-2 fa-solid fa-wallet"></i> <br />
          <i class="vertical-icons my-2 fa-solid fa-bag-shopping"></i>
        </div>
      </div>
      <div class="container-fluid ms-3">
        <Header />
        <Dashboard />
        <div class="row ms-3 mb-3">
          <BarChart />
          <Favourites />
        </div>

        <div class="row ms-3 mt-4 mb-3">
          <RecentOrders></RecentOrders>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
