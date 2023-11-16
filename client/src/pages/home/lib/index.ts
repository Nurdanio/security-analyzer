import axios from "axios";
import { useResultStore } from "../model";

interface Analyze {
  text: string;
  test: () => void;
}

export const useAnalysis = (): Analyze[] => {
  const { setResult } = useResultStore();

  const getStatus = async (url: string) =>
    await axios
      .get(`http://localhost:5000${url}`)
      .then(({ data }) => setResult(data.message));

  return [
    {
      text: "на подключение к интернету",
      test: () =>
        navigator.onLine
          ? setResult("Подключение к интернету имеется")
          : setResult("Подключение к интернету отсутствует"),
    },
    {
      text: "на наличие антивируса",
      test: () => getStatus("/availability/antivirus"),
    },
    {
      text: "на наличие файрволла",
      test: () => getStatus("/availability/firewall"),
    },
    {
      text: "на работоспособность антивируса",
      test: () => getStatus("/perfomance/antivirus"),
    },
    {
      text: "на работоспособность файрволла",
      test: () => getStatus("/perfomance/firewall"),
    },
  ];
};
