import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import { Box, Container, Stack } from "@mui/material";

function App() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Stack direction="row" flex={1}>
        <Sidebar />
        <List />
      </Stack>
    </Stack>
  );
}

export default App;
