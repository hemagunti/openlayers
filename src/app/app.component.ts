import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import view from 'ol/View';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import sync from 'ol-hashed';
import { fromLonLat } from 'ol/proj.js';
import Feature from 'ol/Feature';
import { circular, fromCircle } from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  map;
  crop;
  vectorSource;
  vectorLayer;

  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.crop = new Feature({
      geometry: new Point(fromLonLat([19.83752162, 67.09696925]))
    });

    /*this.vectorSource = new VectorSource({
      features: [this.crop]
    });
    this.vectorLayer = new this.vectorLayer({
      source: this.vectorSource
    });*/
    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        }),
        new VectorLayer({
          source: new VectorSource({
            url: './assets/data/7128.geojson',
            format: new GeoJSON({ dataProjection: 'EPSG:4326' })
          })
        })

      ],


      view: new view({
        /*center:ol.proj.fromLonLat([37.4,8.82]), ol projection*/

        center: fromLonLat([9.83752162, 57.09696925]),

        zoom: 10
      })
    })
  }
}
