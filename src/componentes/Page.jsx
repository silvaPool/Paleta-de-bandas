import { Outlet } from "react-router-dom";
import Paleta from "./Paleta";
import { Box } from "@mui/material";
import { useState } from "react";
import Nirvana from "./Nirvana";

function Page() {

    const [selectedBand, setSelectedBand] = useState(null);

    const renderSelectedBand = () => {
        switch (selectedBand) {
            case "Nirvana":
                return <Nirvana />

        
            default:
                return <p>Selecione uma banda!</p>;
        }
    }

  return (
    <>
      <Box sx={{ border: "1px solid black", height: "100vh", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Paleta onBandSelect={setSelectedBand} />
        </Box>

        <Box>
            {renderSelectedBand()}
        </Box>
      </Box>
    </>
  );
}

export default Page;
