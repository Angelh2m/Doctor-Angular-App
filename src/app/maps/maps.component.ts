import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {



  title: string = 'My first AGM project';
  lat: number = 19.686398;
  lng: number = -101.168974;
  icon: string = '/assets/img/marker.png';
  zoom: number = 13;


  constructor() { }

  ngOnInit() {
  }

}
