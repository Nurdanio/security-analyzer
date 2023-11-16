import { Button, Flex, Menu, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { useAnalysis } from "../lib";
import { useResultStore } from "../model";

export const Home = () => {
  const [selectedType, setSelectedType] = useState<number>(0);
  const [opened, { open, close }] = useDisclosure(false);
  const { result } = useResultStore();

  const Analysis = useAnalysis();

  return (
    <>
      <Stack justify="center" align="center" w="100%" h="100vh" bg="#dae4ed">
        <Flex justify="center" align="center" gap="10px" w="100%">
          <Text size="25px" fw={600}>
            Проверить устройство
          </Text>

          <Menu>
            <Menu.Target>
              <Flex align="center">
                <Text fw={600} size="25px" color="blue">
                  {Analysis[selectedType].text}
                </Text>
                <ChevronDown color="blue" fontWeight={600} />
              </Flex>
            </Menu.Target>

            <Menu.Dropdown>
              {Analysis.map((analyzeType, index) => (
                <Menu.Item onClick={() => setSelectedType(index)}>
                  {analyzeType.text}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Flex>

        <Button
          w="fit-content"
          variant="light"
          onClick={() => {
            Analysis[selectedType].test();
            open();
          }}
        >
          Проверить
        </Button>
      </Stack>

      <Modal opened={opened} onClose={close} centered title="Результаты">
        {result}
      </Modal>
    </>
  );
};
