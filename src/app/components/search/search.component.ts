import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {}

  search(termino: string) {
    if (!termino) {
      return null;
    }
    this.loading = true;
    // console.log(termino);
    this.spotify.getArtists(termino)
      .subscribe((data: any) => {
        // console.log(data); Validar cuando la busqueda está vacía
        this.artists = data;
        this.loading = false;
      });
  }

}
