import React from "react";
import Tour from "./Tour.js";
//import React from "react";

function Tours({ props, vymazTuru }) {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Naša ponuka Túr</h1>
        {props.map((tura) => {
          return <Tour key={tura.id} {...tura} vymazTuru={vymazTuru} />;
        })}
      </div>
    </>
  );
}

export default Tours;
