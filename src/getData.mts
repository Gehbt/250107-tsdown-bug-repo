import data from "./data.json" with { type: "json" };

// it is fine.
// import data = require("./data.json");

console.assert(data != undefined, `[${import.meta.url}]: data should not be undefined`);
console.log("data: ",data)

export default data;
