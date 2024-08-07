import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import SelectNavbar from "../atoms/SelectNavbar";
import Img from "../atoms/Img";
import Button_icons from "../atoms/Button_icons";

function Navbar() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate("/");
  };

  return (
    <div className="bg-azulIntegrador">
      <nav className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <ul className="flex flex-col items-center justify-between w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-8">
          <li className="bg-green-500" >
          
            <Button_icons className="w-1/2 font-normal bg-white rounded-full">
              <Img image="/Logo.png" alt="Logo" />
            </Button_icons>
          </li>
          <li className="font-normal text-white bg-red-700 bg-oratext-base">
            <Button
              title="Resguardante"
            />
          </li>
          <li className="text-base font-normal text-white bg-red-700">
            <SelectNavbar
              opcion5="Vehiculo"
              opcion1="Gasolina: Vehiculo"
              opcion2="Diesel: Vehiculo"
              opcion3="Motos: Vehiculo"
              opcion4="Comodatos: Vehiculo"
            />
          </li>
          <li className="text-base font-normal text-white bg-red-700">
            <Button
              title="Mantenimiento"
            />
          </li>
          <li className="text-base font-normal text-white bg-red-700">
            <Button title="Bitacora" />
          </li>
          <li className="font-normal bg-red-700">
            <Button className="font-normal text-white" title="Usuario" />
          </li>
          <li>
            <Button_icons className="text-base bg-green-600 ">
              <Img image="/CerrarSesion.png" alt="Cerrar Sesión" />
              <div className="font-normal text-white ">
                <p>cerrar sesion</p>
              </div>
            </Button_icons>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
