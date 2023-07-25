import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  data:any;
  async weather(city: string){
    let p = fetch("https://api.openweathermap.org/data/2.5/weather?&appid=c33b28276fcd769ed135338afe15a031&q=" + city)
    p.then((value)=>{
      return value.json();
    }).then((value)=>{
      console.log(value)
      this.data = value;
      return this.data;
      
      // locationIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${value.weather[0].icon}.png">`
      // display.innerHTML=value.weather[0].description;
    })
  }

  constructor() { }
}
