import "./App.css";
import Testimonio from "./componentes/Testimonio.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros colaboradores sobre CG:</h1>
        <Testimonio
          nombre="Miguel"
          pais="la Molina city"
          imagen="miguel"
          cargo="Experto catador"
          empresa="de Tegridy"
          Testimonio="Siempre me senti oprimido por los antecendentes de mi pueblo, soy un
          soñador despierto que busca que busca cambiar la munda. CG me dio la
          oportunidad de trazar una esperanza en este mundo frio y superficial,
          solo espero estar vivo el dia de mañana para aspirar el humo de la
          esperanza."
        />
        <Testimonio
          nombre="Efrain"
          pais="la Selva su huambrillo"
          imagen="efrain"
          cargo="Scrum master"
          empresa="en Harvard"
          Testimonio="Mi vida esta al borde del colapso cuando vi que el 
          mejor representante internacionalmente del Perú se iba a jugar 
          la chococup, doy gracias al de arriba por ponerme en el camino 
          de CG y a la flaca de Daniel"
        />
        <Testimonio
          nombre="Jeyson"
          pais="algun lado de Ate"
          imagen="jeyson"
          cargo="Puteador"
          empresa="en Turbos ps"
          Testimonio="Puta mano yo solo estaba en el comedor cuando miguel
          me dijo si queria ser mi propio jefe, que duplicaria mi 
          inversion un 1000% pero desde que le di mi plata no me responde
          las llamada, bueno se que pronto recibire todo lo que me
          prometieron y por animo a las otras personas a también
          invertir, ponte las pilas crag."
        />
      </div>
    </div>
  );
}

export default App;
