const casual = require("casual");

console.log("----------");
console.log(casual._city() + " " + Math.floor(Math.random() * 11));
console.log("&&&&&&&&");
console.log(
  casual._name_prefix() + " " + casual._name() + "" + casual._last_name()
);
console.log("----------");
