/* eslint-disable no-unused-vars */
import { useState } from "react";
import useMediaQuery from "./hooks/UseMediaQuery";
// import Navbar from "./scenes";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [namaBarista, setNamaBarista] = useState("Pak dd");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const gantiNama = () => {
    setNamaBarista("Hendro set");
  };

  console.log(namaBarista);

  return (
    <div className="app bg-deep-blue">
      <button onClick={gantiNama} className="bg-red p-1 text-black">
        Ganti Nama
      </button>
      <h1>{namaBarista}</h1>
      {/* <Navbar selectedPage={selectedPage} setSelectedPage /> */}
    </div>
  );
}

export default App;
