import cors from "cors";
import express from "express";

import { hasFirewall } from "./modules/availability/firewall.js";
import { hasAntivirus } from "./modules/availability/antivirus.js";
import { testAntivirus } from "./modules/perfomance/firewall.js";

const app = express();

app.use(cors());

app.get("/perfomance/antivirus", async (req, res) => {
  res.status(200).json({
    message: (await testAntivirus())
      ? "Антивирус работает исправно!"
      : "Антивирус работает неисправно!",
  });
});

app.get("/perfomance/firewall", (req, res) => {
  res.status(200).json({ message: "firewall" });
});

app.get("/availability/antivirus", (req, res) => {
  const deviceAntivirus = hasAntivirus();
  res.status(200).json({
    message: deviceAntivirus.length
      ? `На данном устройстве антивирус имеется. Обнаруженные антивирусы: ${deviceAntivirus}`
      : "На данном устройстве антивирус не обнаружен",
  });
});

app.get("/availability/firewall", (req, res) => {
  const isProtected = hasFirewall().then((data) => data);

  res.status(200).json({
    message: isProtected
      ? "На данном устройстве фаерволл установлен"
      : "На данном устройстве фаерволл не установлен",
  });
});

app.listen(5000, () => console.log("Server started on PORT: 5000"));
