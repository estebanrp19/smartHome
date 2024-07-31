import Image from "next/image";
import imgLanding from "../../public/images/bgTitleLanding.jpg";

export default function Home() {
  return (
    <div>
      <div className="relative flex justify-center items-center mt-10">
        <div className="relative">
          <Image
            className="opacity-50 blur-sm"
            src={imgLanding}
            alt="Img"
            width={800}
            height={381.8}
            objectFit="cover"
          />
          <div className="absolute inset-0 flex flex-col mt-20 ml-20 text-black">
            <h1 className="text-6xl font-bold mb-2">SmartHome</h1>
            <p className="text-xl">Soluciones seguras para tu hogar</p>
          </div>
        </div>
      </div>

      <div className="mt-5 md:w-3/4 px-20 mx-auto text-left">
        <p className="text-xl">
          ¡Bienvenido a <strong>Smart Home</strong>, tu destino definitivo para
          transformar tu casa en un hogar inteligente! Aquí encontrarás la más
          innovadora selección de productos tecnológicos diseñados para hacer tu
          vida diaria más cómoda, eficiente y conectada.
        </p>
        <p className="mt-5 text-xl">
          Smart Home te ofrece todo lo que necesitas para crear un ambiente
          moderno y funcional en tu hogar. ¡Explora nuestra gama de productos y
          empieza a vivir la experiencia del futuro hoy!
        </p>
      </div>

      <div className="my-5 flex justify-center">
        <a href="/home" className="rounded-md bg-[#588157] px-4 py-2 text-md text-white font-medium text-background transition-colors hover:bg-[#4a6b49]">
          Ver Tienda
        </a>
      </div>
    </div>
  );
}
