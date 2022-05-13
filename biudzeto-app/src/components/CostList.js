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
    <>
    <h3>Išlaidų sąrašas</h3>
      <div className="col-md-8">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th width="10%">Eil. Nr.</th>
              <th width="35%">Gavimo data</th>
              <th width="20%">Suma</th>
              <th width="35%">Pavadinimas</th>
              <th width="35%">Kategorija</th>
            </tr>
          </thead>
    
      <tbody>
        {
            costs.map((cost, index) => {
                return <Cost key={cost.id} cost={cost} index={index} />;
       
        
        })}

      </tbody>
    </table>
    </div>
    </>
  );
}

export default CostList;