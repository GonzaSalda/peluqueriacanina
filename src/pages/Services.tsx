import dog from "../assets/dog.svg";
import dog3 from "../assets/perro3.png";

const Services = () => {
  return (
    <>
      <div className="pt-[80px]">
        {/* Servicios de peluqueria */}
        <div className=" pb-12 h-auto">
          <div>
            <h1 className="text-center text-xl font-bold text-[#0D6980] p-6">
              Nuestros servicios
            </h1>
          </div>
          <div className="flex flex-col gap-y-3 justify-center items-center">
            <div className="flex justify-center items-center w-[250px] h-[250px] overflow-hidden rounded-xl">
              <img
                className=" object-cover rounded-xl"
                src={dog3}
                alt="Perro"
              />
            </div>

            <table className="table-auto bg-white shadow-md rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-4 text-left text-gray-700">
                    Servicio
                  </th>
                  <th className="px-4 py-4 text-left text-gray-700">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-4 text-[#bababa] font-bold">Baño</td>
                  <td className="px-4 py-2 text-gray-800 font-bold">$6000</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-4 text-[#bababa] font-bold">
                    Baño y Corte
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-bold">$8000</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-4 text-[#bababa] font-bold">
                    Consulta veterinaria
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-bold">$2000</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-4 text-[#bababa] font-bold">
                    Vacunas
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-bold">$4900</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-4 text-[#bababa] font-bold">
                    Desparacitación
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-bold">$5000</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-4 text-[#bababa] font-bold">
                    Profilaxis Dental
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-bold">$15000</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p className="text-sm font-normal text-[#939393] pt-4 ">
                *EL BAÑO INCLUYE CORTES DE UÑAS Y LIMPIEZA DE OÍDOS.
              </p>
            </div>
          </div>
        </div>

        {/* Servicios de veterinaria */}
        <div className="bg-[#201E1C] h-auto p-5">
          <h1 className="text-center text-xl font-bold text-white p-6">
            Salud y Bienestar para tu Mascota
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap md:w-[930px] mx-auto">
            <article className="bg-[#282623] w-full max-w-[350px] min-h-[180px] flex flex-col items-center p-3">
              <img src={dog} className="w-9 h-9" alt="" />
              <p className="text-white font-bold">
                Consultas generales y revisión de salud
              </p>
              <p className="text-[#bababa] text-center">
                Ofrecemos un servicio completo de consultas generales para tu
                mascota, asegurándonos de que reciba una revisión de salud
                integral. Desde exámenes básicos hasta estudios especializados,
                nos aseguramos de que tu peludo esté en óptimas condiciones.
              </p>
            </article>
            <article className="bg-[#282623] w-full max-w-[350px] min-h-[180px] flex flex-col items-center p-3">
              <img src={dog} className="w-9 h-9" alt="" />
              <p className="text-white font-bold">Vacunas y desparacitación</p>
              <p className="text-[#bababa] text-center">
                Garantiza la salud de tu mascota con nuestras vacunas y
                tratamientos desparasitantes. Cubrimos todos los protocolos
                necesarios para proteger a tu perro o gato contra enfermedades
                comunes y parásitos.
              </p>
            </article>
            <article className="bg-[#282623] w-full max-w-[350px] min-h-[180px] flex flex-col items-center p-3">
              <img src={dog} className="w-9 h-9" alt="" />

              <p className="text-white font-bold">
                Control de peso y nutrición
              </p>
              <p className="text-[#bababa] text-center">
                Ofrecemos un enfoque personalizado para controlar el peso y
                mejorar la nutrición de tu mascota. Creamos planes alimenticios
                específicos para mantener su bienestar y salud a largo plazo.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
