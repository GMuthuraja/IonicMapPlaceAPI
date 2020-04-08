import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

  latitude: any;
  longitude: any;
  placename: any;

  constructor(
    private geolocation: Geolocation,
    private router: Router,
    private platform: Platform,
    private locationAccuracy: LocationAccuracy) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (this.platform.is('cordova')) {
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.latitude = resp.coords.latitude;
          this.longitude = resp.coords.longitude;
        }).catch((error) => {
          console.log(error);
        });
      }, (error) => {
        console.log(error);
      });
    }
  }

  onDefaultSubmit() {
    let navigationExtras: NavigationExtras = {
      state: {
        lat: this.latitude,
        lng: this.longitude
      }
    };

    this.router.navigate(['/viewmap'], navigationExtras);
  }

  onPlaceSubmit() {
    let navigationExtras: NavigationExtras = {
      state: {
        place_results: this.placename
      }
    };

    this.router.navigate(['/viewmap'], navigationExtras);
  }

}
