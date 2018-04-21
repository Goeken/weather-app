import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const barStyle = {
	alignSelf: 'center'
};


export default props => 
	<AppBar position="static" >
        <Toolbar style={barStyle}>
          <Typography variant="title" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
