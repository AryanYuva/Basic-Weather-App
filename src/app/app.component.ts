import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
  cityname:string;
  city:string;
  data:any;
  climatedescription:string;
  imagesrc:string;
  place:string;
  sunrise:string;
  date:any;
  sunset:string;
  climate:string;
  temperature:string;
  time:string;
  day:string;
  month:string;
  date1:string;
  maintimedate:string;
  humidity:string;
  visiblity:string;
  windspeed:string;

  days = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"];
  months = ["jan","feb","march","April","May","june","july","August","September","October","November","December"]

  async weather(city: string){
    let p =  fetch("https://api.openweathermap.org/data/2.5/forecast?&appid=c33b28276fcd769ed135338afe15a031&unit=imperial&q=" + city)
    p.then((value)=>{
      return value.json();
    }).then((value)=>{
      console.log(value)
      const manger= document.querySelector(".secondmain");
      const manger1= document.querySelector(".thirdmain");
      manger?.classList.add('style');
      manger1?.classList.add('style');
      this.displayinformation(value);
    })
  }
  checkweather() {
    this.data = this.weather(this.cityname)
    return this.data;
  }
  displayinformation(data:any){
    this.climatedescription= "Todays Climate Description: "+" "+data.list[0].weather[0].description;
      this.imagesrc=`http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
      this.place= "Todays Weather in"+" "+data.city.name;
      this.date = new Date(data.city.sunrise*1000);
      this.sunrise ="Today sun rises at"+" "+`${this.date.getHours()%12}:${this.date.getMinutes()}`+" "+"Am";
      this.date = new Date(data.city.sunset*1000);
      this.sunset="Today sun sets at" + " "+`${this.date.getHours()%12}:${this.date.getMinutes()}`+" "+"Pm"
      this.climate="Todays Climate: "+" "+data.list[0].weather[0].main;
      this.temperature = Math.round((data.list[0].main.temp)-273) + "°C";
      this.date = new Date(data.list[0].dt_txt); //7
      this.time = "at" + `${this.date.getHours()}:${this.date.getMinutes()}`
      if(parseInt(this.time)>12){
         this.time = `${this.date.getHours()%12}:${this.date.getMinutes()+"0"}` +" "+ "Pm"
      }
      else{
        this.time = `${this.date.getHours()%12}:${this.date.getMinutes()+"0"}` +" "+ "Am"
      }
      this.date = new Date(data.list[0].dt_txt);
      this.day = this.days[this.date.getDay()];
      this.month = this.months[this.date.getMonth()];
      this.date1 = this.date.getDate();

      this.maintimedate = `${this.date1} ${this.month} ${this.day}`;

      this.humidity = `Todays Humidity: ${data.list[0].main.humidity}`;
       
      this.visiblity = `Todays Visibility: ${data.list[0].visibility/1000}km`;

      this.windspeed = `Todays wind speed: ${data.list[0].wind.speed}km/h`

  }

}