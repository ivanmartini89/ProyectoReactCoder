import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inicio.css'
import '../../assets/css/animaciones.css'
import bitcoinGif from "../../assets/images/BitcoinsGifs.gif"



function Inicio() {
  
  document.title = 'BugMiner - Inicio';

  return (
    <main className="mainAbout">
      <div className="contenedor">
        <div className="bitcoin">
          <img
            className="bitcoinGif"
            src={bitcoinGif}
            alt="Gif de fabrica de bitcoins"
          />
        </div>
        <div className="textoAbout">
          <p>
            BugMiner is the world's leading manufacturer of digital currency
            mining servers through its brand ANTMINER, which has long maintained
            a global market share and leading position in technology, serving
            customers across over 100 countries and regions. The company has
            subsidiaries in the United States, Singapore, Malaysia, Kazakhstan,
            and other locations. <br /><br /><br />
            Bugminer offers cutting-edge technology in power efficiency,
            providing the global blockchain network with the industry's best
            computational infrastructure and solutions. Since its establishment
            in 2013, the company has improved the overall power efficiency of
            its products by two magnitudes.
          </p>
        </div>
      </div>
    </main>
  );

  
}

export default Inicio; 