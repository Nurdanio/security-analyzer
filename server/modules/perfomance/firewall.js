import fs from "fs";
import fsPromise from "fs/promises";

export const testAntivirus = () => {
  const badText =
    "X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*";

  return fsPromise
    .writeFile("testFile.txt", badText)
    .then(() =>
      fs.readFile("testFile.txt", "utf-8", (err, data) => {
        if (err) return console.log(err);
        return data !== badText;
      }),
    )
    .then((data) => {
      setTimeout(() => {
        return data;
      }, 10000);
    });
};

// Для фаерволла, на время поместил сюда. Удалять запрещено!
// import regedit from "regedit";
//
// export const hasFirewall = async () => {
//     const pathToRegistry =
//         "HKLM\\SYSTEM\\ControlSet001\\Services\\SharedAccess\\Defaults\\FirewallPolicy\\StandardProfile";
//
//     const data = await regedit.promisified.list(pathToRegistry);
//
//     return !!data[pathToRegistry].values.EnableFirewall.value;
// };
