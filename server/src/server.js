import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import nconf from "nconf";
import routes from "./routes";

let app = express();

// App configuration arguments
nconf.argv()
  .env()
  .file({ file: path.resolve("./config.json") });

const ENV = app.get("env");
const ENV_VARS = nconf.get(ENV);
const DB = nconf.get("db");

// Initializing the app middlewares
app.use(bodyParser.urlencoded({ "extended": true }));
app.use(bodyParser.json());
app.use(cors());

// Call to DB connection function. Forward to app intiation after connection.
connect()
  .on("error", console.log)
  .on("disconnected", connect)
  .once("open", listen);

// Function to start app on the provided port
function listen() {

  routes(app);
  const server = app.listen(ENV_VARS.PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("App is running at http://%s:%s", server.address().address, server.address().port);  // Add host and port details in logs
  });
}

// Funtion to create connection to DB. Emits open event on successfull connection.
function connect() {

  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect("mongodb://" + DB.MONGODB_HOST + "/" + DB.MONGODB_COLLECTION_NAME, options).connection;
}

