import "./App.css";
import espacioJpg from "./assets/Espacio.jpg";
import galaxia1 from "./assets/galaxia1.jpg";
import galaxia2 from "./assets/galaxia2.jpg";
import galaxia3 from "./assets/Galaxia3.jpg";
import galaxia4 from "./assets/galaxia4.jpg";
import marteImg from "./assets/marte.jpg";
import saturnoImg from "./assets/saturno.jpg";
import tierraImg from "./assets/tierra.jpg";
function App() {
  return (
    <>
      {/* MENÚ */}
      <nav className="navbar">
        <h2>Explorando EL Universo</h2>

        <div className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#planetas">Planetas</a>
          <a href="#misiones">Misiones</a>
          <a href="#galeria">Galería</a>
        </div>
      </nav>

      {/* INICIO */}
      <section id="inicio" className="inicio">

        <div className="inicio-texto">
          <p className="subtitulo">EXPLORA EL UNIVERSO</p>

          <h1>El espacio es <span>infinito</span></h1>
          <p>Descubre algunos de los lugares, planetas y misiones
            que han marcado la historia de la exploración espacial.</p>
        </div>

        <div className="inicio-imagen">
          <img src={espacioJpg} alt="Tierra vista desde el espacio"/>
        </div>
      </section>

      {/* PLANETAS */}
      <section id="planetas" className="seccion">

        <p className="subtitulo">NUESTRO UNIVERSO</p>
        <h2>Planetas</h2>
        <p>Hola</p>
        <p className="descripcion">
          Nuestro sistema solar está formado por diferentes mundos,
          cada uno con características únicas.</p>
        <div className="tarjetas">

          <div className="tarjeta">
            <img src={tierraImg} alt="Planeta Tierra"/>

            <div className="contenido">
              <h3>Tierra</h3>

              <p>
                Nuestro hogar y el único planeta conocido que
                contiene vida.
              </p>
            </div>
          </div>

          <div className="tarjeta">
            <img
              src={marteImg} alt="Marte"
            />

            <div className="contenido">
              <h3>Marte</h3>
              <p>El planeta rojo ha sido uno de los principales
                objetivos de exploración espacial.</p>
            </div>
          </div>

          <div className="tarjeta">
            <img src={saturnoImg} alt="Saturno"/>

            <div className="contenido">
              <h3>Saturno</h3>
              <p>Un gigante gaseoso reconocido por su impresionante sistema de anillos.</p>
            </div>
          </div>

        </div>

      </section>

      {/* MISIONES */}
      <section id="misiones" className="misiones">

        <div className="misiones-texto">
          <p className="subtitulo">EXPLORACIÓN ESPACIAL</p>
          <h2>Misiones que cambiaron la historia</h2>
          <p>La exploración espacial ha permitido conocer mejor nuestro
            planeta y descubrir nuevos secretos del universo.</p>

          <p>Desde los primeros viajes a la Luna hasta los modernos
            telescopios espaciales, cada misión representa un nuevo
            paso para la humanidad.</p>

        </div>

        <div className="mision-imagen">
          <img src={espacioJpg} alt="Exploración espacial"/>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="seccion">
        <p className="subtitulo">GALERÍA</p>
        <h2>Imágenes del universo</h2>
        <div className="galeria">

          <img src={galaxia1} alt="Galaxia"/>
          <img src={galaxia2} alt="Estrellas"/>
          <img src={galaxia3} alt="Espacio"/>
          <img src={galaxia4} alt="Universo"/>

        </div>

      </section>
      {/* FOOTER */}
      <footer>
        <p className="copyright"> 2026 Explorar El Espacio</p>
      </footer>
    </>
  );
}

export default App;