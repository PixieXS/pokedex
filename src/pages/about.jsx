import perfil from '../images/perfil.jpg';
export const AboutPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100 font-sans text-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row p-6 gap-6">
          {/* Sidebar estilo entrenador */}
          <aside className="md:w-1/3 bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center border-4 border-yellow-400">
            <img
             src={perfil}
              alt="Foto de perfil"
              className="rounded-full w-40 h-40 object-cover border-4 border-pink-300 shadow-md mb-4"
            />
            <h1 className="text-2xl font-bold text-center text-blue-700 mb-2">Carlos Eduardo Sagastume Arteaga</h1>
            <p className="text-center text-sm text-gray-600 mb-4">
              <a href="mailto:caresagastumea@gmail.com" className="text-blue-600 hover:underline">
                caresagastumea@gmail.com
              </a>
              <br />+504 3327 3928<br />
              Residencial Costa del Este 2, San Pedro Sula
            </p>
  
            {/* Idiomas */}
            <section className="w-full mt-4">
              <h2 className="text-lg font-semibold text-pink-600">Idiomas</h2>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Español - Nativo</li>
                <li>Inglés - Intermedio</li>
              </ul>
            </section>
  
            {/* Intereses */}
            <section className="w-full mt-4">
              <h2 className="text-lg font-semibold text-yellow-600">Pasatiempos e intereses</h2>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Exploración de Nuevas Tecnologías</li>
                <li>Fotografía</li>
              </ul>
            </section>
  
            {/* Fecha */}
            <section className="w-full mt-4">
              <p className="text-xs text-gray-500">Fecha Actual: <span id="fecha-actual">{new Date().toLocaleDateString()}</span></p>
            </section>
          </aside>
  
          {/* Contenido principal */}
          <main className="md:w-2/3 bg-white shadow-xl rounded-2xl p-6 border-4 border-blue-300">
            <section className="mb-6">
              <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-1">Perfil</h2>
              <p className="text-sm mt-2">
                Soy una persona proactiva y dispuesta a aprender continuamente, con una sólida base en informática.
                Me apasiona poner en práctica mis conocimientos y adaptarme a nuevos retos, con la finalidad de
                adquirir experiencia profesional. Me considero una trabajadora responsable y con facilidad para
                colaborar en equipo, siempre enfocada en cumplir metas y aportar valor al lugar donde me
                desenvuelvo.
              </p>
            </section>
  
            <section className="mb-6">
              <h2 className="text-xl font-bold text-yellow-700 border-b-2 border-yellow-300 pb-1">Formación</h2>
              <div className="mt-2">
                <h3 className="font-semibold">Bachiller Técnico Profesional en Informática</h3>
                <p className="text-sm">Instituto Madre María Luisa, San Pedro Sula<br /><small className="text-gray-500">ene 2015 - nov 2017</small></p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Ingeniería en Ciencias de la Computación</h3>
                <p className="text-sm">Universidad Católica de Honduras, San Pedro Sula<br /><small className="text-gray-500">ene 2020 - presente</small></p>
              </div>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-pink-700 border-b-2 border-pink-300 pb-1">Experiencia</h2>
              <div className="mt-2">
                <h3 className="font-semibold">Área De Computación</h3>
                <p className="text-sm">Instituto Hondureño De Seguridad Social, San Pedro Sula<br /><small className="text-gray-500">jun 2017 - nov 2017</small></p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Área De Patología</h3>
                <p className="text-sm">Instituto Hondureño De Seguridad Social, San Pedro Sula<br /><small className="text-gray-500">jun 2017 - nov 2017</small></p>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  };
  