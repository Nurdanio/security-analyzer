const { antivirus } = require("modules/availability/antivirus");
const cors = require("cors");
const express = require("express");
const PORT = 5000;

const app = express();

app.use(cors());

app.get("/test", async (req, res) => {
  res.status(200).json(antivirus());
});

app.get("/perfomance/antivirus", (req, res) => {
  res.status(200).json("antivirus");
});

app.get("/perfomance/firewall", (req, res) => {
  res.status(200).json("firewall");
});

app.get("/availability/antivirus", (req, res) => {
  res.status(200).json("firewall");
});

app.get("/availability/firewall", (req, res) => {
  res.status(200).json("firewall");
});

app.listen(PORT, () => console.log("Server started on PORT:" + PORT));
