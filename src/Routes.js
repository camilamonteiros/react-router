import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/sobremim" element={<SobreMim/>}></Route>
        <Route path="*" element={<div>Página não encontrada</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
