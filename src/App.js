import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Mood from "./components/mood";
import Chat from "./components/chat";
import Call from "./components/call";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container sx={{ padding: "16px" }}>
        <Box
          sx={{
            bgcolor: "#ffc107",
            height: "90vh",
            display: "flex",
            flexDirection: "row",
            padding: "8px",
            gap: 2,
            margin: "8px 0",
          }}
        >
          <Chat />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Mood />
            <Call />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
