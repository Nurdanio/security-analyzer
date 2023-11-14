import { Button, Flex, Modal, Select, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { useAnalysis } from "../lib";
import { useResultStore } from "../model";

export const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { result } = useResultStore();

  const Analysis = useAnalysis();

  return (
    <>
      <Stack justify="center" align="center" w="100%" h="100vh">
        <Flex justify="center" align="center" gap="10px" w="100%">
          <Text size="25px" fw={600}>
            Проверить устройство
          </Text>
          <Select
            // fw={600}
            // variant="unstyled"
            withCheckIcon={false}
            styles={{
              wrapper: {
                width: "300px",
              },
            }}
            defaultValue={Analysis[1].text}
            data={Analysis.map((value) => value.text)}
          />
        </Flex>

        <Button
          w="fit-content"
          variant="light"
          onClick={() => {
            Analysis[2].test();
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
