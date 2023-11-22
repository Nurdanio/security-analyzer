import { exec } from "node:child_process";

const asyncExec = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (!!error) {
        reject(error.message);
      }
      resolve(stdout);
    });
  });

export const testAntivirus = async () => {
  const properties = await asyncExec(
    'powershell -command "Get-MpComputerStatus"',
  );

  return properties
    .split("\n")
    .find((property) => property.includes("RealTimeProtectionEnabled"))
    .split(":")[1];
};

export const testFirewall = async () => {
  return await asyncExec(
    'powershell -command "if (((Get-NetFirewallProfile | select name,enabled) | where { $_.Enabled -eq $True } | measure ).Count -eq 3) {Write-Host "true"} else {Write-Host "false"}"',
  );
};
