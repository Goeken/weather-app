import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Clear from './images/sun.png';
import Rain from './images/rain.png';
import Cloud from './images/Cloud-icon.png';
import Snow from './images/snowflake.png';
import './Tiles.css';

const tileStyle = {
	padding: '5px',
	textAlign: 'center',
	paddingTop: '30px',
	paddingBottom: '30px'
}
const containerStyle = {
	paddingTop: '100px'
}
const sidePadding = {
	paddingRight: '30px',
	paddingLeft: '30px'
}
class Tiles extends React.Component{

	render(){
		return(
			<div style={containerStyle}>
				<Grid container spacing={24} style={sidePadding}>
			        <Grid item lg={2} md={4} sm={6} xs={12}>
			          <Paper style={tileStyle}>
			          	<Typography variant="title" gutterBottom>
			          	{this.props.day1}
     					</Typography>
     					<Typography variant="subheading" gutterBottom>
     					 {this.props.day1Weather}
     					 <br />
     					 { this.props.day1Weather === 'clear sky' && <img className="icons" src={Clear}></img>}
     					 { this.props.day1Weather === 'scattered clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day1Weather === 'few clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day1Weather === 'broken clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day1Weather === 'light rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day1Weather === 'shower rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day1Weather === 'thunderstorm' && <img className="icons" src={Rain}></img>}
     					 { this.props.day1Weather === 'snow' && <img className="icons" src={Snow}></img>}
     					 { this.props.day1Weather === 'mist' && <img className="icons" src={Rain}></img>}
      						<br />
      					 {this.props.day1Temp} °F
    					</Typography>
			          </Paper>
			        </Grid>
			        <Grid item lg={2} md={4} sm={6} xs={12}>
			          <Paper style={tileStyle}>
			          	<Typography variant="title" gutterBottom>
			          	{this.props.day2}
    					    
     					</Typography>
     					<Typography variant="subheading" gutterBottom>
     						{this.props.day2Weather}
     						<br />
     					 { this.props.day2Weather === 'clear sky' && <img className="icons" src={Clear}></img>}
     					 { this.props.day2Weather === 'scattered clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day2Weather === 'few clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day2Weather === 'broken clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day2Weather === 'light rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day2Weather === 'shower rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day2Weather === 'thunderstorm' && <img className="icons" src={Rain}></img>}
     					 { this.props.day2Weather === 'snow' && <img className="icons" src={Snow}></img>}
     					 { this.props.day2Weather === 'mist' && <img className="icons" src={Rain}></img>}
      						<br />
      						{this.props.day2Temp} °F
    					</Typography>
			          </Paper>
			        </Grid>
			        <Grid item lg={2} md={4} sm={6} xs={12}>
			          <Paper style={tileStyle}>
			          	<Typography variant="title" gutterBottom>
			          	{this.props.day3}

    					    
     					</Typography>
     					<Typography variant="subheading" gutterBottom>
     					{this.props.day3Weather}
     						<br />
     					 { this.props.day3Weather === 'clear sky' && <img className="icons" src={Clear}></img>}
     					 { this.props.day3Weather === 'scattered clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day3Weather === 'few clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day3Weather === 'broken clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day3Weather === 'light rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day3Weather === 'shower rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day3Weather === 'thunderstorm' && <img className="icons" src={Rain}></img>}
     					 { this.props.day3Weather === 'snow' && <img className="icons" src={Snow}></img>}
     					 { this.props.day3Weather === 'mist' && <img className="icons" src={Rain}></img>}
      						<br />
      					{this.props.day3Temp} °F
    					</Typography>
			          </Paper>
			        </Grid>
			        <Grid item lg={2} md={4} sm={6} xs={12}>
			          <Paper style={tileStyle}>
			          	<Typography variant="title" gutterBottom>
			          	{this.props.day4}
    					    
     					</Typography>
     					<Typography variant="subheading" gutterBottom>
     					{this.props.day4Weather}
     						<br />
     					 { this.props.day4Weather === 'clear sky' && <img className="icons" src={Clear}></img>}
     					 { this.props.day4Weather === 'scattered clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day4Weather === 'few clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day4Weather === 'broken clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day4Weather === 'light rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day4Weather === 'shower rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day4Weather === 'thunderstorm' && <img className="icons" src={Rain}></img>}
     					 { this.props.day4Weather === 'snow' && <img className="icons" src={Snow}></img>}
     					 { this.props.day4Weather === 'mist' && <img className="icons" src={Rain}></img>}      						<br />
      					 {this.props.day4Temp} °F
    					</Typography>
			          </Paper>
			        </Grid>
			        <Grid item lg={2} md={4} sm={6} xs={12}>
			          <Paper style={tileStyle}>
			          	<Typography variant="title" gutterBottom>
    					    {this.props.day5}
     					</Typography>
     					<Typography variant="subheading" gutterBottom>
     					{this.props.day5Weather}
     						<br />
     					 { this.props.day5Weather === 'clear sky' && <img className="icons" src={Clear}></img>}
     					 { this.props.day5Weather === 'scattered clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day5Weather === 'few clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day5Weather === 'broken clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day5Weather === 'light rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day5Weather === 'shower rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day5Weather === 'thunderstorm' && <img className="icons" src={Rain}></img>}
     					 { this.props.day5Weather === 'snow' && <img className="icons" src={Snow}></img>}
     					 { this.props.day5Weather === 'mist' && <img className="icons" src={Rain}></img>}
      						<br />
      					{this.props.day5Temp} °F
    					</Typography>
			          </Paper>
			        </Grid>
			        <Grid item lg={2} md={4} sm={6} xs={12}>
			          <Paper style={tileStyle}>
			          	<Typography variant="title" gutterBottom>
    					    {this.props.day6}
     					</Typography>
     					<Typography variant="subheading" gutterBottom>
     					{this.props.day6Weather}
     						<br />
     					 { this.props.day6Weather === 'clear sky' && <img className="icons" src={Clear}></img>}
     					 { this.props.day6Weather === 'scattered clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day6Weather === 'few clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day6Weather === 'broken clouds' && <img className="icons" src={Cloud}></img>}
     					 { this.props.day6Weather === 'light rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day6Weather === 'shower rain' && <img className="icons" src={Rain}></img>}
     					 { this.props.day6Weather === 'thunderstorm' && <img className="icons" src={Rain}></img>}
     					 { this.props.day6Weather === 'snow' && <img className="icons" src={Snow}></img>}
     					 { this.props.day6Weather === 'mist' && <img className="icons" src={Rain}></img>}
      						<br />
      					{this.props.day6Temp} °F
    					</Typography>
			          </Paper>
			        </Grid>

					
			      </Grid>
			</div>

			);
	}
}

export default Tiles;