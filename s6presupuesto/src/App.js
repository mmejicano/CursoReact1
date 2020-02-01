import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, setmostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCreargasto] = useState(false);

  // useeffect que actualiza el restante

  useEffect(() => {
    if(creargasto){

      //agrega nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante -gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetear a false
      guardarCreargasto(false);
      
    }
    
  }, [gasto, gastos, restante, creargasto ]);

  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        { mostrarpregunta ? (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            setmostrarpregunta={setmostrarpregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario 
              guardarGasto={guardarGasto}
              guardarCreargasto={guardarCreargasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={gastos}
              />

              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
