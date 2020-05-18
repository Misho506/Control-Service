import xml from "../../data/data.xml";
import { parseString } from "xml2js";

// here we can made the API call with axios
export const getCSVData = (store) => {
  // Parse local CSV file
  // eslint-disable-next-line no-undef
  fetch(xml)
    .then((response) => response.text())
    .then((responseText) => {
      parseString(responseText, (err, result) => {
        store.setState({
          list: {
            activeServices: result.root.row,
            successful: true,
            error: null,
            message: null,
          },
        });
      });
    });
};
