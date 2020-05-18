import React, { useEffect, useState } from "react";
import SearchBar from "../patials/SearchBar";
import ServicesList from "../patials/ServicesList";
import Filters from "../patials/Filters";
import useGlobal from "../../hooks/store";
import ExportToCSV from "../patials/ExportToCSV";

const Home = () => {
  const [globalState, globalActions] = useGlobal();
  const [services, setServices] = useState(null);
  const [formattedServices, setFormattedServices] = useState();

  const [search, setSearch] = useState();
  const [filterBy, setFilterBy] = useState("name");

  useEffect(() => {
    if (!globalState.list.activeServices) {
      globalActions.list.getCSVData();
    }
    setServices(globalState.list.activeServices);
  }, [globalState.list.activeServices]);

  const filterByName = (name) => {
    setSearch(name);
    console.log(services.sort());
    let result = globalState.list.activeServices;
    if (name) {
      result = services.filter((service) =>
        service[filterBy][0].includes(name)
      );
    }
    setServices(result);
  };

  const setFilterType = (filter) => {
    setFilterBy(filter);
    filterByName(search);
  };

  useEffect(() => {
    const fromattedJSON = [];
    console.log(services);
    if (services) {
      services.forEach((service) => {
        fromattedJSON.push({
          name: service.name[0],
          acquisitionDate: service.acquisitionDate[0],
          licensePlate: service.licensePlate[0],
          serviceType: service.serviceType[0],
          nextService: service.nextService[0],
          stateService: service.stateService[0],
        });
      });
    }
    setFormattedServices(fromattedJSON);
  }, [services]);

  return (
    <div>
      <div className="d-flex align-items-baseline justify-content-between">
        <div className="w-75 d-flex">
          <SearchBar setSearch={filterByName} search={search} />
          <Filters setFilterType={setFilterType} filterBy={filterBy} />
        </div>
        <ExportToCSV list={formattedServices} />
      </div>
      {services ? (
        <ServicesList services={services} />
      ) : (
        <span>Loading services....</span>
      )}
    </div>
  );
};

export default Home;
