import React, { useState } from "react";

const Search = ({ setN }) => {
  const [name, setName] = useState("");

  function buscar(name) {
    if (!name) {
      alert("ingrese un nombre...");
    }

    setN(name);
  }
  return (
    <div>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
        placeholder="escribe aqui..."
        style={{ width: 500, height: 50, borderRadius: 20 }}
      ></input>
      <button
        onClick={() => buscar(name)}
        style={{ width: 100, height: 50, borderRadius: 20 }}
      >
        Buscar
      </button>
    </div>
  );
};

export default Search;
