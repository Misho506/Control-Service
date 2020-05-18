import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ setSearch, search }) => {

  return (
    <div className="col-3 my-3 w-45">
      <div className="input-group">
        <input
          type="text"
          placeholder="Buscar servicio..."
          className="form-control"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
