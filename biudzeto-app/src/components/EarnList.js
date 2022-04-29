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
      <table>
        <tbody>
          {
              earns.map((earn, index) => {
                  return <Earn key={earn.id} earn={earn} index={index} />;
         
          
          })}
  
        </tbody>
      </table>
    );
  }
  
  export default EarnList;