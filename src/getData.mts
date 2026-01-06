import data from "./data.json" with { type: "json" };

console.assert(data != undefined, `[${import.meta.url}]: data should not be undefined`);

export default data;

// it is fine.
// export import data = require("./data.json");