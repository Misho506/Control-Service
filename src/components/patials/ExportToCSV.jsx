import React from "react";
import { parse } from "json2csv";
import { CSVLink } from "react-csv";

const ExportToCSV = ({ list }) => (
  <div className="btn btn-success mr-2">
    <CSVLink
      className="text-white"
      data={parse(list, {
        fields: [
          "name",
          "acquisitionDate",
          "licensePlate",
          "serviceType",
          "nextService",
          "stateService",
        ],
      })}
    >
      Export to CSV
    </CSVLink>
  </div>
);

export default ExportToCSV;
