const express = require("express");
const cors = require("cors");
const actionRoute = require("./routes/routers");
const app = express();

app.use(express.json()); 
app.use(cors());

app.use('/action', actionRoute);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Server is running on port", PORT);
});