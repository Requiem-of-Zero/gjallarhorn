import axios from 'axios';
import resolveResponse from 'contentful-resolve-response';
const contentful = require("contentful-management");

export const client = contentful.createClient({
  accessToken: "CFPAT-MWEyA9f2R_9oQ5y33siYOCjIJ1njMFGqGa4KN2i46U8",
});

const isObject = (data) => {
  const object =
    typeof data === "object" && !Array.isArray(data) && data !== null;

  return object;
};

const flattenFields = (data, final = {}) => {
  const isDataObject = isObject(data);
  if (isDataObject) {
    // if object i want to check the fields
    for (const key in data) {
      // if key is  metadata or sys idc, so i skip
      if (key === "metadata" || key === "sys") continue;
      const value = data[key];
      // if value is array, I want to flatten the elements of the array
      if (Array.isArray(value)) {
        final[key] = value.map((ele) => flattenFields(ele));
      }

      if (key === "fields") {
        final = { ...data[key] };
      } else if (isObject(data[key])) {
        final[key] = flattenFields(data[key]);
      } else {
        final[key] = data[key];
      }
    }
  }

  return final;
};

const getEntryById = async (entryId) => {
  let res = await axios.get(
    `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&sys.id=${entryId}&include=10`
  );
  const items = resolveResponse(res.data);

  return flattenFields(items[0].fields);
};

export default getEntryById;

// https://cdn.contentful.com/spaces/uhj6sitpnkxv/environments/gjallahorn/entries?access_token=H7Y87n1gWVdHrqjFc9A_cAPqDlDsXvXtORZomiGNmi8&sys.id=JEKYG8KNcGOnz3uJt3Nhm&include=10