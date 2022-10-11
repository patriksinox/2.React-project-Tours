import { useState, useEffect } from "react";
import Nacitanie from "./Nacitanie.js";
import Tours from "./Tours.js";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [nacitanie, setNacitanie] = useState(true);
  const [tury, setTury] = useState([]);

  const nacitajTury = async () => {
    try {
      const odpoved = await fetch(url);
      const data = await odpoved.json();
      setNacitanie(false);
      setTury(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    nacitajTury();
  }, []);

  const vymazTuru = (id) => {
    const noveTury = tury.filter((tura) => tura.id !== id);
    setTury(noveTury);
  };

  if (nacitanie) {
    return <Nacitanie />;
  }

  if (tury.length === 0) {
    return (
      <>
        <div className="container text-center">
          <h1 className=" mt-5">Naša ponuka Túr</h1>
          <button
            className="btn btn-primary mt-5 refresh"
            onClick={() => nacitajTury()}
          >
            Refreshni túry
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Tours props={tury} vymazTuru={vymazTuru} />
    </>
  );
}

export default App;

// https://course-api.com/react-tours-project - URL
