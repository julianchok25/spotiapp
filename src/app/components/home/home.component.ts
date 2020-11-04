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
  error: boolean;
  errorMessage: string;

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    // Apenas se inicialice este componente, se llama el método de getNewReleases
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        // console.log(data);
        this.newSongs = data;
        this.loading = false;
      }, (err) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = err.error.error.message;
      });
  }
}
