import { Paper, Typography } from "@mui/material";
import React from "react";
import { CardHeader } from "@mui/material";

const Mood = () => {
  return (
    <Paper
      style={{
        padding: 16,
        width: 350,
        textAlign: "center",
        backgroundColor: "#0E1118",
      }}
    >
      <CardHeader title="Feel Happy" />
      <Typography variant="body1" style={{ padding: 16, color: "#fff" }}>
        Congratulations! You've chosen to feel happy today. Embrace the
        positivity and make it a great day!
      </Typography>
    </Paper>
  );
};

export default Mood;
