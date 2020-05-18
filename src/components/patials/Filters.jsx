import React from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filters = ({ setFilterType, filterBy }) => {
  return (
    <div className="col-3 my-3">
      <div className="input-group">
        <select
          value={filterBy}
          className="custom-select"
          id="filtergroup"
          onChange={(event) => setFilterType(event.target.value)}
        >
          <option value="name">Nombre</option>
          <option value="licensePlate">identificación</option>
          <option value="serviceType">Tipo de Servicio</option>
        </select>
        <div className="input-group-append">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faFilter} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
