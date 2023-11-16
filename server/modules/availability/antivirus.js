import fs from "fs";

const searcher = (antivirus) =>
  fs.readdirSync("/System/Applications").includes(antivirus);

export const hasAntivirus = () => {
  const PopularAntivirus = [
    "Kaspersky",
    "Norton",
    "McAfee",
    "Malwarebytes",
    "Avast",
    "Windows Defender",
  ];

  return PopularAntivirus.filter((antivirus) => searcher(antivirus)) ?? [];
};
