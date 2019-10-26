import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//After imported HttpClientModule into the AppModule,
//You can inject the HttpClient into an application
//class into the service with @Injectable
@Injectable()
export class WeatherService {
apiKey = 'e7dc4b1b01d8278e2f77872fdd8e043a'
url;

constructor(private http: HttpClient) {
 this.url='http://api.openweathermap.org/data/2.5/forecast?q=';

}
//get weather method
getWeather(city, code) {
  return this.http.get(this.url+city+','+code+'&APPID='+this.apiKey)
}

}