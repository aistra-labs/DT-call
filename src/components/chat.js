import React from 'react';
import { Paper, List, ListItem, ListItemText, Avatar, Typography } from '@mui/material';

const Chat = () => {
  return (
    <Paper style={{ padding: 16, width: '100%', backgroundColor: '#fff', borderRadius: 8 }}>
      <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
        Conversation
      </Typography>
      <List>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: '#2196F3', color: '#fff' }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary="Hello! my name is Kritika. How can I help you today?"
            sx={{ background: '#1976D2', color: '#fff', borderRadius: 8, padding: '10px 25px'}}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: '#8BC34A', color: '#fff' }}>B</Avatar>
          <ListItemText
            primary="Bot"
            secondary="Hi, I am not able to perform my actions today."
            sx={{ background: '#4CAF50', color: '#fff', borderRadius: 8, padding: '10px 25px' }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: '#2196F3', color: '#fff' }}>U</Avatar>
          <ListItemText
            primary="User"
            secondary="Hello! my name is Kritika. How can I help you today?"
            sx={{ background: '#1976D2', color: '#fff', borderRadius: 8, padding: '10px 25px' }}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <Avatar sx={{ bgcolor: '#8BC34A', color: '#fff' }}>B</Avatar>
          <ListItemText
            primary="Bot"
            secondary="Hi, I am not able to perform my actions today."
            sx={{ background: '#4CAF50', color: '#fff', borderRadius: 8, padding: '10px 25px' }}
          />
        </ListItem>
        {/* Add more messages as needed */}
      </List>
      {/* Add a text input and send button if needed */}
      {/* <TextField label="Type a message" fullWidth />
      <Button variant="contained" color="primary" style={{ marginTop: 8 }}>
        Send
      </Button> */}
    </Paper>
  );
};

export default Chat;
