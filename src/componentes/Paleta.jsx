import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Paleta({ onBandSelect }) {
  return (
    <div class="card">
      <div class="title">
        <p class="heading">Paleta de Bandas</p>
        <p class="desc">Selecione abaixo</p>
      </div>
      <div class="wrapper">
        <div class="color black">
          <button
            onClick={() => onBandSelect("Foster The People")}
            className="button"
          >
            <span>Foster The People</span>
            <span class="hex">Indie Rock</span>
          </button>
        </div>
        <div class="color eerie-black">
          <button onClick={() => onBandSelect("Nirvana")} className="button">
           <span>Nirvana</span>
            <span class="hex">Grunge</span>
          </button>
        </div>
        <div class="color chinese-black">
          <button
            onClick={() => onBandSelect("Black Sabbath")}
            className="button"
          >
            <span>Black Sabbath</span>
            <span class="hex">Heavy Metal</span>
          </button>
        </div>
        <div class="color night-rider">
          <button
            onClick={() => onBandSelect("The Beatles")}
            className="button"
          >
            <span>The Beatles</span>
            <span class="hex">Rock Clássico</span>
          </button>
        </div>
        <div class="color chinese-white">
          <button
            onClick={() => onBandSelect("Evanescence")}
            className="button"
          >
            <span>Evanescence</span>
            <span class="hex">Evanescence</span>
          </button>
        </div>
        <div class="color anti-flash-white">
          <button onClick={() => onBandSelect("Bob Dylan")} className="button">
            <span>Bob Dylan</span>
            <span class="hex">Bob Dylan</span>
          </button>
        </div>
        <div class="color white">
          <button onClick={() => onBandSelect("Pearl Jam")} className="button">
            <span>Pearl Jam</span>
            <span class="hex">Pearl Jam</span>
          </button>
        </div>
        <div class="border">
          paleta de bandas <span>rock | roll</span>
        </div>
      </div>
    </div>
  );
}

export default Paleta;
