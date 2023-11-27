import React from 'react';
import { Paper, Button, IconButton,Avatar, Typography, Box } from '@mui/material';
import CallIcon from '@mui/icons-material/Phone';
import EndCallIcon from '@mui/icons-material/CallEnd';


const Call = () => {
  return (
    <Paper style={{ padding: 16, width: 350, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height:"100%", justifyContent:"space-between" }}>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        00:05
      </Typography>
       
        <Avatar
        alt="User Avatar"
        src={require('../assets/icons8-online-support.gif')}  
        sx={{ width: 150, height: 150, marginBottom: 2 }}
      />
       <Typography variant="h6" gutterBottom>
          Calling...
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
           <Button variant="outlined" color="success" startIcon={<CallIcon />}>
           Call
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
