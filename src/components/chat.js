import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";

const Chat = () => {
  return (
    <Paper
      style={{
        padding: 16,
        width: "100%",
        backgroundColor: "#0E1118",
        borderRadius: 8,
      }}
    >
      <Typography variant="h5" gutterBottom style={{ color: "#fff" }}>
        Conversation
      </Typography>
      <List style={{overflow:"scroll" , maxHeight:"670px"}}>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary={<Typography
              color="#ccc" 
            >Hello! my name is Kritika. How can I help you today?</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>B</Avatar>
          <ListItemText
            primary="Bot"
            secondary={<Typography
              color="#ccc" 
            >Hello! my name is Kritika. How can I help you today?</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary={<Typography
              color="#ccc" 
            >It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>B</Avatar>
          <ListItemText
            primary="Bot"
            secondary={<Typography
              color="#ccc" 
            >Hello! my name is Kritika. How can I help you today?</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary={<Typography
              color="#ccc" 
            >Hello! my name is Kritika. How can I help you today Hello! my name is Kritika. How can I help you today Hello! my name is Kritika. How can I help you today Hello! my name is Kritika. How can I help you today Hello! my name is Kritika. How can I help you today?</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary={<Typography
              color="#ccc" 
            >Hello! my name is Kritika. How can I help you today?</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary={<Typography
              color="#ccc" 
            >Hello! my name is Kritika. How can I help you today?</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: "#212121", color: "#fff" }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary={<Typography
              color="#ccc" 
            >Hello! my name is Kritika. How can I help you today?</Typography> }
            sx={{
              background: "#212121",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 25px",
            }}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Chat;
