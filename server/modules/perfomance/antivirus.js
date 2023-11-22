import execSync from "child_process";

export const testFirewall = () => {
  // Выполнить команду PowerShell и получить вывод
  const command =
    'powershell -command "(Get-NetFirewallProfile | Where-Object { $_.Enabled -eq $true }).Name"';
  const resultBuffer = execSync(command);

  // Преобразовать буфер в строку с использованием кодировки UTF-8
  const resultString = resultBuffer.toString("utf-8");

  // Удалить возможные пробелы и символы новой строки
  const result = resultString.trim();

  // Вывести результат
  console.log(result);
};

// import fs from "fs";
// import fsPromise from "fs/promises";
//
// export const testAntivirus = () => {
//   const badText =
//       "X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*";
//
//   return fsPromise
//       .writeFile("testFile.txt", badText)
//       .then(() =>
//           fs.readFile("testFile.txt", "utf-8", (err, data) => {
//             if (err) return console.log(err);
//             return data !== badText;
//           }),
//       )
//       .then((data) => {
//         setTimeout(() => {
//           return data;
//         }, 10000);
//       });
// };
