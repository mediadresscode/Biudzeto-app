import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Cost from "./Cost";



function CostList() {
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/costs")
      .then((res) => res.json())
      .then((data) => setCosts(data));
  }, []);
  return (
    <table>
      <tbody>
        {
            costs.map((cost, index) => {
                return <Cost key={cost.id} cost={cost} index={index} />;
       
        
        })}

      </tbody>
    </table>
  );
}

export default CostList;