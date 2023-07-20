import Chart from "./components/Chart";
import Cards from "./components/Cards";
import PieChart from "./components/PieChart"
import { UserData } from "./Data";
import { Dashboard } from "./Data2";
import { useState } from "react";
import './components/Cards.css'



function App() {
  const [data, setData] = useState(UserData)
  const [data2, setData2] = useState(Dashboard);
  return (
    <div>
      <Cards data={data2} />
      <div className="charts">
        <Chart data={data} />
        <PieChart data={data} />
      </div>

    </div>
  );
}

export default App;
