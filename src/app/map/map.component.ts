/*import { Component, OnInit } from '@angular/core';

import Map from 'ol/map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import view from 'ol/View';

import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: './assets/data/7128.geojson'
          }),

        })

      ],
      view: new view({
        /*center:ol.proj.fromLonLat([37.4,8.82]), ol projection*/
        /*center: ([37.4, 8.82]),*/
       /* zoom: 2
      })
    })
  }
}*/
