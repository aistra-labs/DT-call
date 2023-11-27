import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Mood from "./components/mood";
import Chat from "./components/chat";
import Call from "./components/call";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container sx={{ padding: "16px" }}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "90vh",
            display: "flex",
            flexDirection: "row",
            padding: "16px",
            gap: 4,
            margin: "8px 0",
          }}
        >
          <Chat />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Mood />
            <Call />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
