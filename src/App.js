import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Mood from "./components/mood";
import Chat from "./components/chat";
import Call from "./components/call";
import CallManager from "./components/callManager";
import YourComponent from "./components/test";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container sx={{ padding: "16px" }}>
        {/* <Box
          sx={{
            bgcolor: "#ffc107",
            height: "90vh",
            display: "flex",
            flexDirection: "row",
            padding: "8px",
            gap: 1,
            margin: "8px 0",
            borderRadius: 2,
          }}
        >
          <Chat />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Mood />
            <Call />
          </Box>
        </Box> */}
        <CallManager />
        {/* <YourComponent /> */}
      </Container>
    </div>
  );
}

export default App;
