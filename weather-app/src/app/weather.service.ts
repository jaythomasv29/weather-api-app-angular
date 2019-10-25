import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
//After imported HttpClientModule into the AppModule,
//You can inject the HttpClient into an application
//class into the service with @Injectable
@Injectable()
export class WeatherService {
apiKey = ''
url;
// LEFT OFF AT 14 MIN
// api.openweathermap.org/data/2.5/weather?q={city name}
// api.openweathermap.org/data/2.5/weather?q=London
  constructor(private http: HttpClient) {
    this.url = ''
   }
}
