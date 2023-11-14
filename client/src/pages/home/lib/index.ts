import axios from "axios";
import { useResultStore } from "../model";

interface Analyze {
  text: string;
  test: () => void;
}

const getStatus = async (url: string, setState: (state: string) => void) =>
  await axios.get(url).then(({ data }) => setState(data.message));

export const useAnalysis = (): Analyze[] => {
  const { setResult } = useResultStore();

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
      test: () =>
        getStatus("http://localhost:5000/availability/antivirus", setResult),
    },
    {
      text: "на наличие файрволла",
      test: () =>
        getStatus("http://localhost:5000/availability/firewall", setResult),
    },
    {
      text: "на работоспособность антивируса",
      test: () =>
        getStatus("http://localhost:5000/perfomance/antivirus", setResult),
    },
    {
      text: "на работоспособность файрволла",
      test: () =>
        getStatus("http://localhost:5000/perfomance/firewall", setResult),
    },
  ];
};
