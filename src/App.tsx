// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./index.css";
import BG from "./components/BG";
import Navbar from "./components/Navbar";
import Lead from "./components/Lead";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <BG />
      <Lead />
      
    </>
  );
}

export default App;
