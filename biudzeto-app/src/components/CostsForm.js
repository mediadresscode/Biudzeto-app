import { useState } from "react";

function CostsForm() {
  const [date, setDate] = useState("");
  const [suma, setSuma] = useState("");
  const [pavadinimas, setPavadinimas] = useState("");
  const [kategorija, setKategorija] = useState("");
  const [costs, setCosts] = useState([]);

  function handleSubmit(e) {
      e.preventDefault();
      
      let cost = { date, suma, pavadinimas, kategorija }
      setCosts([...costs, cost]);

      console.log('cost' + JSON.stringify(cost));
  }
  
  return (
    <div className="Costs row justify-content-center rewiew">
      <form className="Costs" onSubmit={handleSubmit}>
        <div><h1>Išlaidos</h1>

           <input className="input" 
            type="date"
            id="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
                 
          <input className="input" 
            type="number"
            id="number" placeholder="Įveskite sumą"
            onChange={(e) => {
              setSuma(e.target.value);
            }}
          />
        
          <input className="input" 
          type="text"
          id="pavadinimas" placeholder="Pavadinimas"
            onChange={(e) => {
              setPavadinimas(e.target.value);
            }}
          />
        
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
        
      </form>
      <div><input type="submit" className="btn" value="Išsaugoti"></input>
        <a className="btn" href="/CostList.js" >Sąrašas</a></div>
      </div>
  );
}
export default CostsForm;