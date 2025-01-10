import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/servicios" element={<Services />} />

        {/* Vamos a usar Outlet xq vamos a usar un componente que se va a renderizar en toods los componentes que va  a ser el header */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
