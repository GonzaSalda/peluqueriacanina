import dog from "../assets/dog.svg";
import dog5 from "../assets/perro5.jpg";
import banner from "../assets/jean-pierre-joubert.jpg";

const Donate = () => {
  return (
    <>
      {/* Servicios de veterinaria */}
      <div className="pt-[80px] ">
        {/* Text */}
        <div className="h-[90vh] flex flex-col lg:flex-row items-center justify-between rounded-lg  p-8 space-y-8 lg:space-y-0">
          <div className="lg:max-w-[660px] mx-auto space-y-6">
            <h1 className="font-semibold text-3xl lg:text-4xl text-[#0D6980] leading-tight">
              Tu generosidad es el motor que impulsa nuestro trabajo.
            </h1>
            <p className="text-lg text-gray-600">
              En peluqueria canina, creemos que juntos podemos hacer una gran
              diferencia. Nuestro sistema de donaciones está diseñado para
              ofrecerle a cada mascota una vida mejor. Con tu ayuda, podemos
              garantizar alimentos, medicamentos, refugio y atención médica para
              aquellos peluditos que más lo necesitan. Cada contribución, por
              pequeña que sea, marca un antes y un después en la vida de un
              animal.
            </p>
          </div>
          {/* Img */}
          <div className="flex-1 mx-auto max-w-[180px] lg:max-w-[300px]">
            <img
              className="max-w-full h-auto rounded-lg shadow-md object-cover"
              src={banner}
              alt=""
            />
          </div>
        </div>
        {/* Grupos */}
        <div className="bg-[#201E1C] h-auto p-5">
          <h1 className="text-center text-xl font-bold text-white p-6">
            Forma parte de nuestro proyecto
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap md:w-[930px] mx-auto mb-6">
            <article className="bg-[#282623] w-full max-w-[350px] min-h-[180px] flex flex-col items-center p-3">
              <img src={dog} className="w-9 h-9" alt="" />
              <p className="text-white font-bold">Donaciones</p>
              <p className="text-[#bababa] text-center">
                Toda ayuda cuenta. Si deseas contribuir con alimentos,
                medicamentos, juguetes o incluso donaciones monetarias,
                estaremos eternamente agradecidos. Cada aporte mejora la vida de
                nuestros amigos peludos.
              </p>
            </article>
            <article className="bg-[#282623] w-full max-w-[350px] min-h-[180px] flex flex-col items-center p-3">
              <img src={dog} className="w-9 h-9" alt="" />
              <p className="text-white font-bold">Campañas de adopción</p>
              <p className="text-[#bababa] text-center">
                Únete a nuestras campañas de adopción para darle un hogar lleno
                de amor a un perrito o gatito que lo necesita. Con tu apoyo,
                podemos encontrar familias responsables y cariñosas para ellos.
              </p>
            </article>
            <article className="bg-[#282623] w-full max-w-[350px] min-h-[180px] flex flex-col items-center p-3">
              <img src={dog} className="w-9 h-9" alt="" />

              <p className="text-white font-bold">Educación y conciencia</p>
              <p className="text-[#bababa] text-center">
                Creemos en la importancia de educar a la comunidad sobre el
                cuidado responsable de las mascotas. Participa en nuestros
                talleres y eventos para aprender y enseñar a otros.
              </p>
            </article>
          </div>
        </div>
        {/* Img */}
        <div>
          <img className="w-full h-[50vh]  object-cover" src={dog5} alt="" />
        </div>
        {/* Planes */}
        <div className="my-12">
          <h1 className="text-center font-semibold text-2xl pt-4 text-[#0D6980]">
            Realiza una donación
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 m-6 justify-around">
            <div className="bg-white shadow-md rounded-xl h-[250px] min-w-[230px] max-w-[300px] w-[70%] flex flex-col justify-center items-center gap-y-4 px-6">
              <h2 className="font-medium">Pago semanal</h2>
              <div className="flex items-center">
                <span>$</span>
                <p className="font-bold text-4xl">400</p>
              </div>
              <span className="text-[12px] text-[#bababa] text-center">
                *Realizando esta donación te regalamos wallspapers de perritos y
                gatitos para tu celular.
              </span>
              <button className="border-2 border-[#0D6980] rounded-md px-4 py-2 hover:bg-[#0D6980] hover:text-white hover:border-white ">
                Realizar donación
              </button>
            </div>
            <div className="bg-white shadow-md rounded-xl h-[250px] min-w-[230px] max-w-[300px] w-[70%] flex flex-col justify-center items-center gap-y-4 px-6">
              <h2 className="font-medium">Pago mensual</h2>
              <div className="flex items-center">
                <span>$</span>
                <p className="font-bold text-4xl">2000</p>
              </div>
              <span className="text-[12px] text-[#bababa] text-center">
                *Realizando esta donación te regalamos wallspapers de perritos y
                gatitos para tu celular.
              </span>
              <button className="border-2 border-[#0D6980] rounded-md px-4 py-2 hover:bg-[#0D6980] hover:text-white hover:border-white ">
                Realizar donación
              </button>
            </div>
            <div className="bg-white shadow-md rounded-xl h-[250px] min-w-[230px] max-w-[300px] w-[70%] flex flex-col justify-center items-center gap-y-4 px-6">
              <h2 className="font-medium">Pago anual</h2>
              <div className="flex items-center">
                <span>$</span>
                <p className="font-bold text-4xl">10000</p>
              </div>
              <span className="text-[12px] text-[#bababa] text-center">
                *Realizando esta donación te regalamos wallspapers de perritos y
                gatitos para tu celular.
              </span>
              <button className="border-2 border-[#0D6980] rounded-md px-4 py-2 hover:bg-[#0D6980] hover:text-white hover:border-white ">
                Realizar donación
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
