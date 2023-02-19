import { useState } from "react";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";

function App() {
  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-full w-full flex items-center justify-center flex-col ${
        dark && "dark"
      } `}
    >
      <Navbar
        dark={dark}
        setDark={setDark}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Drawer
        dark={dark}
        setDark={setDark}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Home />
    </div>
  );
}

export default App;
