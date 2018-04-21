import React from 'react';
import Title from './components/Title';
import Tiles from './components/Tiles';
import Cities from './components/Cities';
import Mountain from './components/images/background.jpg';
import './App.css';
const API_KEY = '8dea0fccd7e072bedb723d5a39a0b524';



const backgroundStyle={
  backgroundImage: 'url(' + Mountain + ')',
}



   var today = new Date(),
         date = today.getDay();

const defineDay = (date) => {
      switch(date){
     case 1:
       return 'Monday'
     case 2: 
       return 'Tuesday'
     case 3: 
       return 'Wednesday'
     case 4: 
       return 'Thursday'
     case 5: 
       return 'Friday'
     case 6:
       return 'Saturday'
     case 7:
       return 'Sunday'
     case 8:
       return 'Monday'
     case 9: 
       return 'Tuesday'
     case 10: 
       return 'Wednesday'
     case 11: 
       return 'Thursday'
     case 12: 
       return 'Friday'
     case 13:
       return 'Saturday'
     case 14:
       return 'Sunday'
     default:
       return 'unkown'
    }
}



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     city: undefined,
     country: undefined,
     day1Weather: undefined,
     day2Weather: undefined,
     day3Weather: undefined,
     day4Weather: undefined,
     day5Weather: undefined,
     day6Weather: undefined,
     day1Temp: undefined,
     day2Temp: undefined,
     day3Temp: undefined,
     day4Temp: undefined,
     day5Temp: undefined,
     day6Temp: undefined,
     day1: defineDay(date),
     day2: defineDay(date + 1),
     day3: defineDay(date + 2),
     day4: defineDay(date + 3),
     day5: defineDay(date + 4),
     day6: defineDay(date + 5)
    }
    this.getWeather = this.getWeather.bind(this);
  };

async componentDidMount() {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Reno,us&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();



    this.setState({
     city: data.city.name,
     country: data.city.country,
     day1Weather: data.list[0].weather[0].description,
     day2Weather: data.list[1].weather[0].description,
     day3Weather: data.list[2].weather[0].description,
     day4Weather: data.list[3].weather[0].description,
     day5Weather: data.list[4].weather[0].description,
     day6Weather: data.list[5].weather[0].description,    
     day1Temp: data.list[0].main.temp,
     day2Temp: data.list[1].main.temp,
     day3Temp: data.list[2].main.temp,
     day4Temp: data.list[3].main.temp,
     day5Temp: data.list[4].main.temp,
     day6Temp: data.list[5].main.temp,
    });

}




getWeather = async (p, e) => {
    e.preventDefault();
    const city = p;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},US&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    this.setState({
     city: data.city.name,
     country: data.city.country,
     day1Weather: data.list[0].weather[0].description,
     day2Weather: data.list[1].weather[0].description,
     day3Weather: data.list[2].weather[0].description,
     day4Weather: data.list[3].weather[0].description,
     day5Weather: data.list[4].weather[0].description,
     day6Weather: data.list[5].weather[0].description, 
     day1Temp: data.list[0].main.temp,
     day2Temp: data.list[1].main.temp,
     day3Temp: data.list[2].main.temp,
     day4Temp: data.list[3].main.temp,
     day5Temp: data.list[4].main.temp,
     day6Temp: data.list[5].main.temp,


    });
  }


  render(){
    return(
      <div style={backgroundStyle} className="fullheightbg" >

        

          <Cities 
          getWeather={this.getWeather} 
          city={this.state.city}
          country={this.state.country}
          />
         
        <Tiles
         day1Weather={this.state.day1Weather}
         day2Weather={this.state.day2Weather}
         day3Weather={this.state.day3Weather}
         day4Weather={this.state.day4Weather}
         day5Weather={this.state.day5Weather}
         day6Weather={this.state.day6Weather}
         day1Temp={this.state.day1Temp}
         day2Temp={this.state.day2Temp}
         day3Temp={this.state.day3Temp}
         day4Temp={this.state.day4Temp}
         day5Temp={this.state.day5Temp}
         day6Temp={this.state.day6Temp}
         day1={this.state.day1}
         day2={this.state.day2}
         day3={this.state.day3}
         day4={this.state.day4}
         day5={this.state.day5}
         day6={this.state.day6}
        />

      
       
      </div>
      );
  }
}

export default App;