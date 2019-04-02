import { Component } from '@angular/core';
import { Map, MapOptions, tileLayer, latLng } from 'leaflet';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  readonly options: MapOptions = {
    layers: [
      tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        // tslint:disable-next-line:max-line-length
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }),
    ],
    zoom: 3,
    center: latLng(0, 0),
    maxBounds: [[-90, -180], [90, 180]],
    preferCanvas: true,
  };

  constructor(
    private mapService: MapService,
  ) { }

  onMapReady(theMap: Map) {
    this.mapService.addMap(theMap);
  }

}
