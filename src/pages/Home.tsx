import banner from "../assets/nick-brice.jpg";
const Home = () => {
  return (
    <>
      <main className="h-auto pt-[80px]">
        <div className="border-t border-gray-400">
          <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg  p-8 space-y-8 lg:space-y-0">
            {/* Text */}
            <div className="lg:max-w-[660px] space-y-6">
              <h1 className="font-semibold text-3xl lg:text-4xl text-[#0D6980] leading-tight">
                ¡Cuida y consiente a tu mascota con nuestros servicios!
              </h1>
              <p className="text-lg text-gray-600">
                En peluquería canina, entendemos que tu perro o gato es parte de
                tu familia. Por eso, nos dedicamos a ofrecerte productos y
                servicios de alta calidad para que tu peludo siempre luzca y se
                sienta bien. Desde peluquería canina hasta atención veterinaria,
                tenemos todo lo que necesitas para consentir a tu mascota.
              </p>
              <a
                href="#servicios"
                className="inline-block bg-[#0D6980] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0b5d6a] transition-colors"
              >
                Descubre nuestros servicios
              </a>
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
        </div>
        <div></div>
       
      </main>
    </>
  );
};

export default Home;
