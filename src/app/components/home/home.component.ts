import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    // Apenas se inicialice este componente, se llama el método de getNewReleases
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        // console.log(data);
        this.newSongs = data;
        this.loading = false;
      });
  }
}
