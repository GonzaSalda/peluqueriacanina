import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Donate from "../pages/Donate";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/donaciones" element={<Donate />} />

        {/* Vamos a usar Outlet xq vamos a usar un componente que se va a renderizar en toods los componentes que va  a ser el header */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
