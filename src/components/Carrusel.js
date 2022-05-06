import React from "react";
import { UncontrolledCarousel, Container } from "reactstrap";

const Carrusel = () => {
  return (
    <Container fluid className="w-50">
      <UncontrolledCarousel
        items={[
          {
            altText: "Aceites",
            key: 1,
            src: "https://img.freepik.com/foto-gratis/trituradora-metal-aceite-cannabis-articulacion-posar_1150-20693.jpg?t=st=1651607073~exp=1651607673~hmac=fe7955fbbaa2dcd7a4cce7b925b23da58daa79afc594ed65b2d372a39f65d07f&w=1380",
          },
          {
            altText: "Accesorios",
            key: 2,
            src: "https://img.freepik.com/foto-gratis/disposicion-gotero-aceite-cbd_23-2149013546.jpg?t=st=1651607073~exp=1651607673~hmac=a794ce33bc477394ddbfaf85c7bd11824c6f38cfa876533e0dc3ec646175a93b&w=1380",
          },
          {
            altText: "Semillas",
            key: 3,
            src: "https://img.freepik.com/foto-gratis/primer-plano-hoja-marihuana-cannabis_1150-15077.jpg?t=st=1651607073~exp=1651607673~hmac=3a1b64446a9a61b7a81316655227faa53b700054d85f06da6cd4b3d9c5b8eea8&w=1380",
          },
        ]}
      />
    </Container>
  );
};

export default Carrusel;
