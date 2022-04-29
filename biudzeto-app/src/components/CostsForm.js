import { useState } from "react";
import { useHistory } from 'react-router-dom';

function CostsForm() {
  const [date, setDate] = useState("");
  const [suma, setSuma] = useState("");
  const [pavadinimas, setPavadinimas] = useState("");
  const [kategorija, setKategorija] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cost = { date, suma, pavadinimas, kategorija };

    fetch('http://localhost:8000/costs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cost)
    }).then(() => {
        console.log('New cost added');

        // history.go(-1);
        history.push('/');
    })
}

  return (
    <div className="Costs row justify-content-center rewiew">
      <form onSubmit={handleSubmit}>
        <div><h1>Išlaidos</h1>
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
        <label htmlFor="pavadinimas"></label>
          <input className="input" 
          type="text"
          id="pavadinimas" placeholder="Pavadinimas"
            onChange={(e) => {
              setPavadinimas(e.target.value);
            }}
          />
        <label htmlFor="kategorija"></label>
          <select className="input" value={kategorija} onChange={(e) => setKategorija(e.target.value)}>
            <option value="kategorija">Pasirinkite kategoriją</option>
            <option value="maistas">Maistas</option>
            <option value="gerimai">Gėrimai</option>
            <option value="transportas">Transportas</option>
            <option value="pramogos">Pramogos</option>
            <option value="sveikata">Sveikata</option>
            <option value="sportas">Sportas</option>
            <option value="keliones">Kelionės</option>
          </select>
        </div>
        <div><input type="submit" className="btn" value="Išsaugoti"></input>
        <a className="btn" href="/CostList.js" >Sąrašas</a></div>
      </form>
      
      </div>
  );
}
export default CostsForm;