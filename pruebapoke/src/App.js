//import logo from "./logo.svg";
import "./App.css";
import Stats from "./components/Stats";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const [poke, setPoke] = useState();
  const [name, setName] = useState("kabuto");

  const [cargando, setCargando] = useState(true);
  let imagen = poke.sprites.front_default;

  useEffect(() => {
    // get();
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) =>
      response.json().then((data) => setPoke(data))
    );
    setCargando(false);
  });
  return (
    <div className="App">
      {cargando ? (
        <div>
          <p>cargando</p>
        </div>
      ) : (
        <div className="App-header">
          <Search setN={setName} />
          <img src={imagen} className="App-logo" alt="logo" />
          <p>{poke.name}</p>
          <Stats stats={poke.stats} />
        </div>
      )}
    </div>
  );
}

export default App;
