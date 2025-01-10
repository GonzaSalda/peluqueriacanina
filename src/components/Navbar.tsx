import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="fixed left-0 right-0 top-0  z-10 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative w-full flex h-16 items-center justify-between">
            <div className="flex gap-x-2">
              <p>Logo</p>
              <h1 className="text-[#0D6980] font-semibold">
                Peluqueria Canina
              </h1>
            </div>

            <div className="flex gap-x-6">
              <Link className="text-[#0D6980] font-medium" to="/">
                Inicio
              </Link>
              <Link className="text-[#0D6980] font-medium" to={"/servicios"}>
                Servicios
              </Link>
              <Link className="text-[#0D6980] font-medium" to={"/donaciones"}>
                Donaciones
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
