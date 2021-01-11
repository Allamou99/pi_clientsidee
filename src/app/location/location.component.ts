import { Component, OnInit } from '@angular/core';
declare const L:any;
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private reqSer : RequestService) { }

  ngOnInit() {
      const coords = this.reqSer.CurrentLocation;
      let mymap = L.map('map').setView([coords.lat,coords.long], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic291ZmlhbmU5OSIsImEiOiJja2pxOGI0bHEzZTlhMnFvN2hzY2Y3cmpyIn0.MG2-oT7pfvYxtolBF_T1mA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
    var marker = L.marker([coords.lat,coords.long]).addTo(mymap);
}

}

/* ngOnInit() {
    if(navigator.geolocation){
      console.log('Working');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      const coords = position.coords;
      let mymap = L.map('map').setView([coords.latitude,coords.longitude], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic291ZmlhbmU5OSIsImEiOiJja2pxOGI0bHEzZTlhMnFvN2hzY2Y3cmpyIn0.MG2-oT7pfvYxtolBF_T1mA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
    var marker = L.marker([coords.latitude,coords.longitude]).addTo(mymap);
    })
  
}*/
