import { useState } from "react";

function EarnsForm() {
  const [date, setDate] = useState("");
  const [suma, setSuma] = useState("");
  const [kategorija, setKategorija] = useState("");
  const [earns, setEarns] = useState([]);

  function handleSubmit(e) {
      e.preventDefault();
    //   console.log('Data' + date);
    //   console.log('Suma' + suma);
    //   console.log('Kategorija' + kategorija);
      let earn = { date, suma, kategorija }
      setEarns([...earns, earn]);
      console.log('earn' + JSON.stringify(earn));
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Data</label>
          <input
            type="date"
            id="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="label">
          <label htmlFor="suma">Įveskite sumą</label>
          <input
            type="number"
            id="number"
            onChange={(e) => {
              setSuma(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="kategorija">Pasirinkite kategoriją</label>
          <input
          type="text"
          id="kategorija"
            onChange={(e) => {
              setKategorija(e.target.value);
            }}
          />
        </div>
        <input type="submit" className="btn" value="Išsaugoti"></input>
      </form>
      <div>
        <p>{date}</p>
        <p>{suma}</p>
        <p>{kategorija}</p>
      </div>
    </>
  );
}
export default EarnsForm;