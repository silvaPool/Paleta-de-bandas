import { Outlet } from "react-router-dom";
import Paleta from "./Paleta";
import { Box } from "@mui/material";
import { useState } from "react";
import Nirvana from "./Nirvana";
import FosterPeople from "./FosterPeople";
import BlackSabbath from "./BlackSabbath";
import TheBeatles from "./TheBeatles";
import Evanescence from "./Evanescence";
import BobDylan from "./BobDylan";
import PearlJam from "./PearlJam";

function Page() {
  const [selectedBand, setSelectedBand] = useState(null);

  const renderSelectedBand = () => {
    switch (selectedBand) {
      case "Foster The People":
        return <FosterPeople />;

      case "Nirvana":
        return <Nirvana />;

      case "Black Sabbath":
        return <BlackSabbath />;

      case "The Beatles":
        return <TheBeatles />;

      case "Evanescence":
        return <Evanescence />;

      case "Bob Dylan":
        return <BobDylan />;

      case "Pearl Jam":
        return <PearlJam />;

      default:
        return <p>Selecione uma banda!</p>;
    }
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid red",
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box>
          <Paleta onBandSelect={setSelectedBand} />
        </Box>

        <Box sx={{ width: "60vw", height: "50vh", textAlign: "center" }}>
          {renderSelectedBand()}
        </Box>
      </Box>
    </>
  );
}

export default Page;
