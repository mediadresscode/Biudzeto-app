import {Link} from 'react-router-dom'
//import CostsForm from './CostsForm';
import { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom';

function Cost({cost, index}) {

    //function deleteCost()
    const handleDelete = () =>  {
        fetch('http://localhost:8000/costs/' + cost.id, {
            method: 'DELETE',
        })
            .then(res => res.json())       
    }

    
return (
    <div className="costdelete row justify-content-center rewiew">
                 
                
                    <div>
                        <h2>{cost.date}</h2>
                        <div>{cost.kategorija}</div>
                        <div>{cost.pavadinimas}</div>
                        <div>{cost.suma}</div>
                        <button className='btn' onClick={handleDelete}>Delete</button>
                        
    
                    </div>)
            </div>
    
     
   
);
}

export default Cost;