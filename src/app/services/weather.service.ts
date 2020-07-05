import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  url = "https://api.openweathermap.org/data/2.5/weather";
  apiKey = "bc9b24f261b1193851effd9a4ef2ada4";
  constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat, lon) {
    let params = new HttpParams()
      .set("lat", lat)
      .set("lon", lon)
      .set("units", "imperials")
      .set("appid", this.apiKey);

    return this.http.get(this.url, { params });
  }

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
      .set("q", city)
      .set("units", "imperial")
      .set("appid", this.apiKey);

    return this.http.get(this.url, { params });
  }
}
