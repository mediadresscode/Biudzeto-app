import { useState } from "react";
import { useHistory } from 'react-router-dom';

function EarnsForm() {
  const [date, setDate] = useState("");
  const [suma, setSuma] = useState("");
  const [kategorija, setKategorija] = useState("");
 
  const history = useHistory();

   const handleSubmit = (e) => {
    e.preventDefault();
    const earn = { date, suma, kategorija };

    fetch('http://localhost:8000/earns', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(earn)
    }).then(() => {
        console.log('New earn added');

        history.push('/');
    })
}

  return (
    <div className="Earns row justify-content-center rewiew">
          
      <form  onSubmit={handleSubmit}>
      <div><h1>Pajamos</h1>
      <label htmlFor="date"></label>      
          <input className="input" type="date" value={date}
            required onChange={(e) => {
              setDate(e.target.value);
            }}
          />
           <label htmlFor="suma"></label>         
          <input className="input" type="number" value={suma}
            placeholder="Įveskite sumą"
            required onChange={(e) => {
              setSuma(e.target.value);
            }}
          />
           <label htmlFor="kategorija"></label>         
          <select className="input" value={kategorija} onChange={(e) => setKategorija(e.target.value)}>
            <option value="kategorija">Pasirinkite kategoriją</option>
            <option value="alga">Alga</option>
            <option value="papildomi darbai">Papildomi darbai</option>
            <option value="dovana">Dovana</option>
          </select>
          </div>
          <div><input type="submit" className="btn" value="Išsaugoti"></input>
        <a className="btn" href="/EarnList.js" >Sąrašas</a></div>
      </form>
   
      </div>
      
  );
}

export default EarnsForm;