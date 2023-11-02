const fs = require("fs");

const searcher = (antivirus) =>
  fs.readdirSync("C:/Program Files").includes(antivirus);

export const antivirus = () => {
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
