import React from "react";
import Carrusel from "../../components/Carrusel";

function Home() {
  return (
    <div>
      <h1 className="text-center">Bienvenidos a Beccar GrowShop</h1>
      <Carrusel />
      <h3 className="text-center h2 my-4">Noticias</h3>
      <p className="text-success px-5 mx-3">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem
        <img
          className="m-5"
          alt=""
          width="500px"
          src="https://img.freepik.com/free-psd/cannabis-sativa-oil-bottle-mockup_23-2149060032.jpg?t=st=1652810865~exp=1652811465~hmac=fca5e951ee020425214ac05cd47cd308be087ca5c3de420eb7aae1be6da79969&w=1060"
        ></img>
        ¿Por qué lo usamos? Es un hecho establecido hace demasiado tiempo que un
        lector se distraerá con el contenido del texto de un sitio mientras que
        mira su diseño. El punto de usar Lorem Ipsum es que tiene una
        distribución más o menos normal de las letras, al contrario de usar
        textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos
        hacen parecerlo un español que se puede leer. Muchos paquetes de
        autoedición y editores de páginas web usan el Lorem Ipsum como su texto
        por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por
        resultado muchos sitios web que usan este texto si se encuentran en
        estado de desarrollo. Muchas versiones han evolucionado a través de los
        años, algunas veces por accidente, otras veces a propósito (por ejemplo
        insertándole humor y cosas por el estilo).
      </p>
    </div>
  );
}

export default Home;
