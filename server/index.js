import cors from "cors";
import express from "express";

import { hasFirewall } from "./modules/availability/firewall.js";
import { hasAntivirus } from "./modules/availability/antivirus.js";

const app = express();

app.use(cors());

app.get("/perfomance/antivirus", (req, res) => {
  res.status(200).json({ message: "antivirus" });
});

app.get("/perfomance/firewall", (req, res) => {
  res.status(200).json({ message: "firewall" });
});

app.get("/availability/antivirus", (req, res) => {
  res.status(200).json({
    message: hasAntivirus().length
      ? `Обнаруженные антивирусы: ${hasAntivirus()} `
      : "На данном устройстве антивирус не обнаружен",
  });
});

app.get("/availability/firewall", (req, res) => {
  res.status(200).json({
    message: hasFirewall().then((state) =>
      state
        ? "На данном устройстве фаерволл установлен"
        : "На данном устройстве фаерволл не установлен",
    ),
  });
});

app.listen(5000, () => console.log("Server started on PORT: 5000"));
