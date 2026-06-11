import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Formulario";
import ContextPLayers from "./pages/Game/PlayersContext";

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route 
              path="/" 
              element={<Home/>}/>
              <Route
              path="/about"
              element={<About/>}
              />
              <Route
              path="/signup"
              element={<Form/>}
              />
              <Route
              path="/game"
              element={<ContextPLayers/>}
              />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
