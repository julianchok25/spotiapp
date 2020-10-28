import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor( private spotify: SpotifyService) {
    // Apenas se inicialice este componente, se llama el método de getNewReleases
    this.spotify.getNewReleases();
  }
}
