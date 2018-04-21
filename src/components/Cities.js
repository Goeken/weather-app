import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import './Cities.css';
const girdStyle ={
	paddingTop: '20px',
	textAlign: 'center',
	paddingBottom: '20px'
}

const cityName ={
	paddingTop: '50px',
	textAlign: 'center',
	color: 'white'
}
const extraPadding ={
	paddingBottom: '0px'
}


class Cities extends React.Component{
	render(){
		return(	
		<div style={extraPadding}>
			<Paper>

				<Grid container spacing={24} style={girdStyle}>
			        <Grid item  lg={2} md={4} sm={6} xs={12}>
						 <Button onClick={this.props.getWeather.bind(this, 'Reno')}  variant="raised" className="customButton" >
			      		 	 Reno
			     		 </Button>
			     	</Grid>
			        <Grid item  lg={2} md={4} sm={6} xs={12}>
						 <Button onClick={this.props.getWeather.bind(this, 'San Francisco')} variant="raised" className="customButton2" >
			      		 	SanFrancisco
			     		 </Button>
			     	</Grid>
			        <Grid item  lg={2} md={4} sm={6} xs={12}>
						 <Button onClick={this.props.getWeather.bind(this, 'Merced')} variant="raised" className="customButton3" >
			      		 	 Merced
			     		 </Button>
			     	</Grid>
			        <Grid item  lg={2} md={4} sm={6} xs={12}>
						 <Button onClick={this.props.getWeather.bind(this, 'Las Vegas')} variant="raised" className="customButton6" >
			      		 	 Las Vegas
			     		 </Button>
			     	</Grid>
			     	<Grid item  lg={2} md={4} sm={6} xs={12}>
						 <Button onClick={this.props.getWeather.bind(this, 'New York')} variant="raised" className="customButton4" >
			      		 	 New York
			     		 </Button>
			     	</Grid>
			     	<Grid item  lg={2} md={4} sm={6} xs={12}>
						 <Button onClick={this.props.getWeather.bind(this, 'Portland')} variant="raised" className="customButton5" >
			      		 	 Portland
			     		 </Button>
			     	</Grid>
			     		 
				</Grid>
			</Paper>
			<Typography style={cityName} variant="headline" >
				{this.props.city}, {this.props.country}
			</Typography>
		</div>


			);
	}
}

export default Cities;