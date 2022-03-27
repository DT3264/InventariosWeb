import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../img/slider1.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../img/slider3.png")}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

function Extra() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={require("./../img/img1.png")}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Simplifique su gestión de inventarios
          </h1>
          <p className="lead">
            Sofware de gestión de inventario y pedidos adaptados a la forma de
            venta. Brinde a sus gerentes de operaciones, finanzas, almacén y
            comercio electrónico las herramientas que necesitan para trabajar
            juntos de manera más eficiente y sin problemas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <>
      <Slider />
      <Extra />
    </>
  );
}
