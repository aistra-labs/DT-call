import React, { useState } from "react";
import {
  Paper,
  Button,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Phone";
import EndCallIcon from "@mui/icons-material/CallEnd";
import Timer from "./timer";

const Call = () => {
  const [showTimer, setShowTimer] = useState(false);

  const [isCallActive, setIsCallActive] = useState(false);

  const handleOnClick = () => {
    setIsCallActive((prevState) => !prevState);
    setShowTimer(true);
  };
  return (
    <Paper
      style={{
        padding: "35px 16px",
        width: 350,
        height: "100%",
        textAlign: "center",
        backgroundColor: "#0E1118",
        borderRadius: 8,
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="#fff" gutterBottom>
          {showTimer && <Timer />}
        </Typography>

        <Avatar
          alt="User Avatar"
          src={require("../assets/icons8-online-support.gif")}
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        <Typography variant="h6" style={{ color: "#ccc" }} gutterBottom>
          Call Connected
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            startIcon={<CallIcon />}
            onClick={handleOnClick}
          >
            {isCallActive ? "End Call" : "Call Now"}
          </Button>

          {/* <Button variant="outlined" color="error" startIcon={<CallIcon />}>
           Call End
        </Button> */}
        </Box>
      </Box>
    </Paper>
  );
};

export default Call;
