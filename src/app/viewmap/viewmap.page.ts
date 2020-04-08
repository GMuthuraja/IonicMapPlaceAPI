import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-viewmap',
  templateUrl: './viewmap.page.html',
  styleUrls: ['./viewmap.page.scss'],
})

export class ViewmapPage implements OnInit {

  map: any;
  geoLatLng: any;
  marker: any;
  latitude: any;
  longitude: any;
  infowindow: any;
  place_name: any;
  bounds: any;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {

      this.place_name = this.router.getCurrentNavigation().extras.state.place_results;
      if (this.place_name) {
        //load the map with given place name 
        this.loadPlaceMap();
      }

      this.latitude = this.router.getCurrentNavigation().extras.state.lat;
      this.longitude = this.router.getCurrentNavigation().extras.state.lng;
      if (this.latitude && this.longitude) {
        //load the map with current location 
        this.loadDefaultMap();
      }
    }
  }

  loadDefaultMap() {
    this.geoLatLng = new google.maps.LatLng(this.latitude, this.longitude);

    var mapOptions = {
      center: this.geoLatLng,
      zoom: 13,
      zoomControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      scaleControl: false,
      rotateControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    this.marker = new google.maps.Marker({
      position: this.geoLatLng,
      // icon: '../../assets/images/airplane.svg',
      draggable: false,
      map: this.map,
    });

    this.marker.setAnimation(google.maps.Animation.BOUNCE);
  }


  loadPlaceMap() {
    var mapOptions = {
      zoom: 10,
      zoomControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      scaleControl: false,
      rotateControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    var request = {
      query: this.place_name,
      //location: new google.maps.LatLng('80.5401226,71.763556'),
      //radius: 10000,
      //region: 'sa',
      //type: ['restaurant'],
      fields: ['name', 'geometry', 'place_id', 'formatted_address'],
    };

    var service = new google.maps.places.PlacesService(this.map);
    this.bounds = new google.maps.LatLngBounds();


    service.textSearch(request, (results, status) => {
      console.log(results);
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }

        this.map.fitBounds(this.bounds);
      } else {
        alert(status);
      }
    });
  }

  createMarker(place) {
    this.marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });

    this.bounds.extend(place.geometry.location);

    google.maps.event.addListener(this.marker, 'click', function () {
      this.infowindow = new google.maps.InfoWindow({
        content: place.name + '<br/>' + place.formatted_address
      });

      this.infowindow.open(this.map, this);
    });
  }
}
