
require('dotenv').config({path: __dirname + "/.env"});

console.log("===========Check Env ===========");
console.log("PG_USER: " , process.env.PG_USER);
console.log("PG_HOST: " , process.env.PG_HOST);
console.log("PG_NAME:" , process.env.PG_DATABASE);
console.log("PG_PORT: " , process.env.PG_PORT);
console.log("PG_PASSWORD: ", process.env.PG_PASSWORD);
console.log("TYPE OF PASSWORD: ", typeof process.env.PG_PASSWORD);
console.log("================================");