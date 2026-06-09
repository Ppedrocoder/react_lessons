import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Formulario";

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
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
