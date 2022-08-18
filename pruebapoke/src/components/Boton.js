import React from "react";

const Boton = ({ ordenar }) => {
  return (
    <button
      onClick={ordenar}
      style={{ width: 100, height: 50, borderRadius: 20 }}
    >
      valor
    </button>
  );
};
export default Boton;
