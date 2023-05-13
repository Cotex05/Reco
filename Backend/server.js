// Import required dependencies
const express = require("express");
const UserRoute = require("./Routes/UserRoute.js");
const RequestRoute = require("./Routes/RequestRoute.js");
const DepartmentRoute = require("./Routes/DepartmentRoute.js");

const cors = require("cors");

// Create an instance of the Express app
const app = express();
app.use(cors());

// Define a route handler for the root URL
app.use("/user", UserRoute);
app.use("/requests", RequestRoute);
app.use("/department", DepartmentRoute);

// Start the server
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
