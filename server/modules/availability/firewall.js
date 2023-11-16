// Реализовать алгоритм проверки ключа в реестре Windows

// Адрес где это лежит: \HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\SharedAccess\Defaults\FirewallPolicy\StandardProfile
// Поле называется EnableFirewall. Там будет 1 или 0 (шеснадцаретизначном или в десятичной системе, он это не точно)

// Найти доп. информацию можно тут: https://docs.kacecloud.com/Managing%20Device%20Configurations/c_WindowsFirewallSettingsViewingInRegistry.htm

import regedit from "regedit";

export const hasFirewall = async () => {
  return !!regedit
    .list([
      "HKLM\\SYSTEM\\ControlSet001\\Services\\SharedAccess\\Defaults\\FirewallPolicy\\StandardProfile",
    ])
    .on("data", (entry) => entry.data);
};

hasFirewall().then((data) => console.log(data));
