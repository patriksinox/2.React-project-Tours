import React from "react";
import { useState } from "react";

const Tour = ({ id, name, info, image, price, vymazTuru }) => {
  const [ukazViac, setUkazViac] = useState(false);
  return (
    <>
      <article>
        <img src={image} alt={name} className="img-fluid" />
        <div className="title">
          <h6>
            <strong>{name}</strong>
          </h6>
          <h6 className="price">{price} €</h6>
        </div>
        <div className="popis">
          <p>
            {ukazViac ? info : `${info.substring(0, 200)}...`}{" "}
            <button onClick={() => setUkazViac(!ukazViac)}>
              {ukazViac ? `Ukáž menej` : `Ukáž viac`}
            </button>
          </p>
        </div>
        <div className="text-center pb-3">
          <button className="btn btn-danger" onClick={() => vymazTuru(id)}>
            Nemám záujem
          </button>
        </div>
      </article>
    </>
  );
};

export default Tour;
