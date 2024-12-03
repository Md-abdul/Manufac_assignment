import {
  Table,
  Paper,
  Title,
  Center,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import processYearlyStats from "../utils/processYearlyStats";
import processCropAggregates from "../utils/processCropAggregates";

function AgricultureTable({ data }: { data: CropData[] }) {
  const theme = useMantineTheme();
  const yearlyStats = processYearlyStats(data);
  const cropAggregates = processCropAggregates(data);

  return (
    <Stack
      align="center"
      p="lg"
      style={{ backgroundColor: theme.colors.gray[1] }}
    >
      <Paper shadow="lg" radius="md" withBorder p="lg" style={{ width: "80%" }}>
        <Center>
          <Title
            order={2}
            style={{
              backgroundColor: theme.colors.blue[1],
              color: theme.colors.blue[9],
              padding: theme.spacing.sm,
              borderRadius: theme.radius.sm,
            }}
          >
            Yearly Crop Stats
          </Title>
        </Center>
        <Table
          highlightOnHover
          verticalSpacing="md"
          horizontalSpacing="lg"
          style={{
            marginTop: theme.spacing.md,
            textAlign: "center",
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th
                style={{
                  textAlign: "center",
                }}
              >
                Year
              </Table.Th>
              <Table.Th
                style={{
                  textAlign: "center",
                }}
              >
                Crop with Maximum <br /> Production in that Year
              </Table.Th>
              <Table.Th
                style={{
                  textAlign: "center",
                }}
              >
                Crop with Minimum <br />
                Production in that Year
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {yearlyStats.map((stat, index) => (
              <Table.Tr
                key={stat.year}
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? theme.colors.blue[0]
                      : theme.colors.gray[1],
                }}
              >
                <Table.Td style={{ padding: theme.spacing.sm }}>
                  {stat.year.split(",")[1].trim()}
                </Table.Td>
                <Table.Td style={{ padding: theme.spacing.sm }}>
                  {stat.maxCrop}
                </Table.Td>
                <Table.Td style={{ padding: theme.spacing.sm }}>
                  {stat.minCrop}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>

      <Paper shadow="lg" radius="md" withBorder p="lg" style={{ width: "80%" }}>
        <Center>
          <Title
            order={2}
            style={{
              backgroundColor: theme.colors.blue[1],
              color: theme.colors.blue[9],
              padding: theme.spacing.sm,
              borderRadius: theme.radius.sm,
            }}
          >
            Crop Aggregates
          </Title>
        </Center>
        <Table
          highlightOnHover
          verticalSpacing="md"
          horizontalSpacing="lg"
          style={{
            marginTop: theme.spacing.md,
            textAlign: "center",
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th
                style={{
                  textAlign: "center",
                }}
              >
                Crop
              </Table.Th>
              <Table.Th
                style={{
                  textAlign: "center",
                }}
              >
                Average Yield of the <br />
                Crop between <br />
                1950-2020
              </Table.Th>
              <Table.Th
                style={{
                  textAlign: "center",
                }}
              >
                Average Cultivation Area <br />
                of the Crop between <br />
                1950-2020
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {cropAggregates.map((aggregate, index) => (
              <Table.Tr
                key={aggregate.cropName}
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? theme.colors.blue[0]
                      : theme.colors.gray[1],
                }}
              >
                <Table.Td style={{ padding: theme.spacing.sm }}>
                  {aggregate.cropName}
                </Table.Td>
                <Table.Td style={{ padding: theme.spacing.sm }}>
                  {aggregate.avgYield}
                </Table.Td>
                <Table.Td style={{ padding: theme.spacing.sm }}>
                  {aggregate.avgArea}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </Stack>
  );
}

export default AgricultureTable;
