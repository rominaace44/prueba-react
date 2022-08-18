import React, { useEffect, useState } from "react";

import Boton from "./Boton.js";

const Starts = ({ stats }) => {
  const [st, setSt] = useState(stats);
  const [asd, setasd] = useState(true);

  useEffect(() => {
    // setSt(stats);
  }, [st]);

  const ordenar = () => {
    let ordenados;
    if (asd) {
      ordenados = st.sort((a, b) => {
        if (a.base_stat > b.base_stat) {
          return 1;
        }
        if (b.base_stat > a.base_stat) {
          return -1;
        }
        return 0;
      });
      setasd(false);
    } else {
      ordenados = st.sort((a, b) => {
        if (a.base_stat > b.base_stat) {
          return -1;
        }
        if (b.base_stat > a.base_stat) {
          return 1;
        }
        return 0;
      });
      setasd(true);
    }
    setSt(ordenados);
    console.log("soty el botton");
  };
  return (
    <div>
      {st.map((st) => {
        return (
          <div
            style={{
              width: 500,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>{st.stat.name}</p>

            <p>{st.base_stat}</p>
          </div>
        );
      })}
      <Boton ordenar={ordenar} />
    </div>
  );
};

export default Starts;
