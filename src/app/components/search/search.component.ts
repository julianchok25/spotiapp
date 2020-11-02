import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  search(termino: string) {
    console.log(termino);
    this.spotify.getArtist(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artists = data;
      });
  }

}
