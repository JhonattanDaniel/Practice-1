const express = require("express"); 
const mongoose = require("mongoose");
const app_routes_system = require("./src/routes");
const app = express();
require("dotenv").config(); /* llamar el .env*/

app.listen(process.env.PORT, () => {
  console.log(`connect in the port ${process.env.PORT}`);
});
mongoose.set('strictQuery', false);

mongoose.connect(process.env.STRING_CONNECTION)
.then(() => {console.log('Success conection')})
.catch((err)=>{console.err('err')});

app.use(express.json());
app_routes_system(app);