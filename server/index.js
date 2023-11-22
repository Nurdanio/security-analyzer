import cors from "cors";
import express from "express";

import { hasAntivirus, hasFirewall } from "./modules/availability/index.js";
import { testAntivirus, testFirewall } from "./modules/perfomance/index.js";

const app = express();

app.use(cors());

app.get("/perfomance/antivirus", async (req, res) => {
  res.status(200).json({
    message: (await testAntivirus())
      ? `Антивирус работает исправно`
      : `Антивирус работает неисправно`,
  });
});

app.get("/perfomance/firewall", async (req, res) => {
  res.status(200).json({
    message: (await testFirewall())
      ? "Межсетевой экран функционирует правильно"
      : "Межсетевой экран функционирует неверно, или не функционирует",
  });
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
  res.status(200).json({
    message: hasFirewall()
      ? "На данном устройстве фаерволл установлен"
      : "На данном устройстве фаерволл не установлен",
  });
});

app.listen(5000, () => console.log("Server started on PORT: 5000"));
