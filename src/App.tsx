import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import AgricultureTable from "./Pages/AgricultureTable";
import rawData from "../agriculture.json";

function App() {
  return (
    <MantineProvider>
      <AgricultureTable data={rawData} />
    </MantineProvider>
  );
}

export default App;
