import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [comune, setComune] = useState('');
  const [score, setScore] = useState('');
  const [provincia, setProvincia] = useState('');
  const [regione, setRegione] = useState('');
  const [zona, setZona] = useState('');
  const [details, setDetails] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { comune, score, provincia, regione, zona, details};

    fetch('http://localhost:8000/comuni', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }
  
  return (
    <div className="create">
      <h2>Aggiungi un nuovo comune </h2>
      <form onSubmit={handleSubmit}>
        <label>Comune:</label>
        <input 
          type="text" 
          required 
          value={comune}
          onChange={(e) => setComune(e.target.value)}
        />
        <label>Provincia:</label>
        <input 
          type="text" 
          required 
          value={provincia}
          onChange={(e) => setProvincia(e.target.value)}
        />
        <label>Regione:</label>
        <input 
          type="text" 
          required 
          value={regione}
          onChange={(e) => setRegione(e.target.value)}
        />
        <label>Zona:</label>
        <input 
          type="text" 
          required 
          value={zona}
          onChange={(e) => setZona(e.target.value)}
        />
        <label>Punteggio:</label>
        <select 
          required 
          value={score}
          onChange={(e) => setScore(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label>Dettagli:</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}>
        </textarea>
        
        <button>Aggiungi</button>
      </form>
    </div>
  );
}
 
export default Create;