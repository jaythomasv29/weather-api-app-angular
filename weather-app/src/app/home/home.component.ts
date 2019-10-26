import { Component, OnInit } from '@angular/core';
import  { WeatherService } from "../weather.service";
import { map, } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location= {
    city: 'london',
    code: 'uk'
  };

  constructor(private _weatherService:WeatherService) { 
  }

  ngOnInit() {
    // this._weatherService.getWeather(this.location.city,this.location.code).subscribe(res)=>{
    //   console.log(res)
    // });
    this._weatherService.getWeather(this.location.city,this.location.code).subscribe((response) => {
      console.log(response)
    })
}
 
}