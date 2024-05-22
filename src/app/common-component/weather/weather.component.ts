import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/_services/helper.service';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData: any = {currentConditions:{icon:'clear'}, days:[{tempmax:0, tempmin:0}]};
  constructor(private helperService: HelperService,
    private diagnostic: Diagnostic,
    public geolocation: Geolocation) { }

  ngOnInit() {
    if (localStorage.getItem('weatherData') != undefined && localStorage.getItem('weatherData') != 'undefined') {
      this.weatherData = JSON.parse(localStorage.getItem('weatherData'));
      var now = moment(new Date()); //todays date
      var end = moment(this.weatherData.currentConditions.datetime); // another date
      var duration = moment.duration(now.diff(end));
      
      if (duration.asHours() > 1) {
        this.getLocation();
      }
    } else {
      this.getLocation();
    }

  }

  getWeather(_location) {
    var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+_location+"?unitGroup=uk&key="+environment.weatherKey;
    this.helperService.getWeather(url).then(_res => {
      this.weatherData = _res;
      localStorage.setItem('weatherData', JSON.stringify(_res));
    }).catch(error => {

    })
  }

  getCondition(_condition) {
    return _condition.replace(/-/g, ' ');
  }

  getLocation() {
    this.diagnostic.isLocationEnabled().then((data) => {
      if (data) {
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
          var location = resp.coords.latitude +','+ resp.coords.longitude;
          this.getWeather(location);
        }).catch(error => {
          console.log(error);
        });
      } else {
        this.diagnostic.switchToLocationSettings();
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
          if (resp) {
            var location = resp.coords.latitude +','+ resp.coords.longitude;
            this.getWeather(location);
          }
        }).catch(error => {
          console.log(error);
        });
      }
    }, error => {
      console.log('errir', error);
      this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
        if (resp) {
          console.log('resp', resp);
          var location = resp.coords.latitude +','+ resp.coords.longitude;
          this.getWeather(location);
        }
      }).catch(error => {
        console.log(error);
        this.helperService.showToast('Something went wrong please try again later','danger','bottom');
        //this.grantRequest();
      }).catch(error => {
        console.log('error', error);
        this.helperService.showToast('Something went wrong please try again later','danger','bottom');
      });
      //this.util.errorToast('Something went wrong please try again later');
    })
  }

}
