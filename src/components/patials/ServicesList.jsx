import React from "react";

const ServicesList = ({ services }) => (
  <div className="row d-flex justify-content-around mw-100">
    {services.map((service) => (
      <div key={service.licensePlate[0]} className="card col-3 mb-3 mx-2 px-0">
        <h5 className="card-header">Servicio</h5>
        <div className="card-body d-flex flex-column">
          <span className="card-text font-weight-bold">
            Fecha de adquisición:
            <span className="font-weight-normal ml-2">
              {service.acquisitionDate[0]}
            </span>
          </span>
          <span className="card-text font-weight-bold">
            Nombre:
            <span className="font-weight-normal ml-2">{service.name[0]}</span>
          </span>
          <span className="card-text font-weight-bold">
            Identificación:
            <span className="font-weight-normal ml-2">
              {service.licensePlate[0]}
            </span>
          </span>
          <span className="card-text font-weight-bold">
            Tiempo para el próximo servicio:
            <span className="font-weight-normal ml-2">
              {service.nextService[0]}
            </span>
          </span>
          <span className="card-text font-weight-bold">
            Tipo de servicio:
            <span className="font-weight-normal ml-2">
              {service.serviceType[0]}
            </span>
          </span>
          <span className="card-text font-weight-bold">
            Estado de servicio:
            <span className="font-weight-normal ml-2">
              {service.stateService[0]}
            </span>
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default ServicesList;
