import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Paleta({onBandSelect}) {
  return (
    <div class="card">
      <div class="title">
        <p class="heading">MONOCHROMIA</p>
        <p class="desc">palette reference</p>
      </div>
      <div class="wrapper">
        <div class="color black">
          Foster The People
          <span class="hex">Indie Rock</span>
        </div>
        <div class="color eerie-black">
          <Button onClick={() => onBandSelect("Nirvana")}>
            Nirvana
            <span class="hex">Grunge</span>
          </Button>
        </div>
        <div class="color chinese-black">
          Black Sabbath
          <span class="hex">Heavy Metal</span>
        </div>
        <div class="color night-rider">
          The Beatles
          <span class="hex">Rock Clássico</span>
        </div>
        <div class="color chinese-white">
          Evanescence
          <span class="hex">M. Alternativo</span>
        </div>
        <div class="color anti-flash-white">
          Bob Dylan
          <span class="hex">Rock</span>
        </div>
        <div class="color white">
          Pearl Jam
          <span class="hex">Grunge</span>
        </div>
        <div class="border">
          common border radius <span>5px | 8px</span>
        </div>
      </div>
    </div>
  );
}

export default Paleta;
