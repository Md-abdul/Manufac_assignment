import {
  Table,
  Paper,
  Title,
  Center,
  Stack,
  useMantineTheme,
  Grid,
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
      style={{
        backgroundColor: theme.colors.gray[1],
        minHeight: "100vh",
      }}
    >
      <Grid
        justify="center"
        style={{
          width: "100%",
          maxWidth: "1200px",
          gap: theme.spacing.lg,
        }}
      >
        <Grid.Col span={12}>
          <Paper shadow="lg" radius="md" withBorder p="lg">
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
                    Crop with Max Production
                  </Table.Th>
                  <Table.Th
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Crop with Min Production
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
        </Grid.Col>

        <Grid.Col span={12}>
          <Paper shadow="lg" radius="md" withBorder p="lg">
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
                    Average Yield (1950-2020)
                  </Table.Th>
                  <Table.Th
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Average Area (1950-2020)
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
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default AgricultureTable;
