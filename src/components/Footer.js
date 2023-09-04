export default function Footer() {
  return (
    <>
      <div className="bg-blue-300 text-gray-secondary py-3 w-full text-xs hidden lg:flex">
        <div className="w-1/4">
          <img
            src="https://centrosdeservicio.com.co/wp-content/uploads/2014/10/logo-servicio-tecnico-ge-general-electric-carusel.png"
            className="w-60 ml-10"
            alt="ElectroLux-logo"
          />
        </div>
        <div className="w-2/4 flex flex-col tracking-wider space-y-16 text-center">
          <p className="text-white font-bold">
            Información Legal &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
            Acerca de Nosotros &nbsp;&nbsp;&nbsp;&nbsp; |
            &nbsp;&nbsp;&nbsp;&nbsp; Contáctanos PQRS &nbsp;&nbsp;&nbsp;&nbsp;|
            &nbsp;&nbsp;&nbsp;&nbsp; Preguntas Frecuentes
          </p>
          <p className="text-white font-bold">© 2023 ElectroLux</p>
        </div>
        <div className="text-center w-1/4">
          <div className="max-w-max text-white font-bold mx-auto">
            Síguenos en redes sociales
            <div className=" text-right text-base space-x-4 cursor-pointer">
              <a
                href="https://www.facebook.com/cinecolombiaoficial"
                rel="noreferrer"
                target="_blank"
              >
                <i className=" hover:text-blue-terciary fab fa-facebook-square"></i>
              </a>
              <a
                href="https://twitter.com/Cine_Colombia"
                rel="noreferrer"
                target="_blank"
              >
                <i className=" hover:text-blue-terciary fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/cinecolombia/"
                rel="noreferrer"
                target="_blank"
              >
                <i className=" hover:text-blue-terciary fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
