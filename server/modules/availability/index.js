import fs from "fs";

const searcher = (antivirus) =>
  fs.readdirSync("C:\\Program Files").includes(antivirus);

export const hasAntivirus = () => {
  const PopularAntivirus = [
    "Kaspersky",
    "Norton",
    "McAfee",
    "Malwarebytes",
    "Avast",
    "Windows Defender",
  ];

  return PopularAntivirus.filter((antivirus) => searcher(antivirus));
};

export const hasFirewall = () => {
  const systemPath = "C:\\Windows\\System32";
  return fs.readdirSync(systemPath).includes("FirewallControlPanel.dll");
};
