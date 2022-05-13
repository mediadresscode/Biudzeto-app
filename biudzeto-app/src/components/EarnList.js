import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Earn from "./Earn";

function EarnList() {
    const [earns, setEarns] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8000/earns")
        .then((res) => res.json())
        .then((data) => setEarns(data));
    }, []);
    return (
      <>
      <h2>Pajamų sąrašas</h2>
      <div className="col-md-8">
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th width="10%">Eil. Nr.</th>
            <th width="35%">Gavimo data</th>
            <th width="20%">Suma</th>
            <th width="35%">Pavadinimas</th>
          </tr>
        </thead>

        
      
        <tbody>
          {
              earns.map((earn, index) => {
                  return <Earn key={earn.id} earn={earn} index={index} />;
         
          
          })}
  
        </tbody>
      </table>
      </div>
      </>
    );
  }
  
  export default EarnList;