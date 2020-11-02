import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  // Centralizando información
  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAUvQUShAosh6_NNwWZ-wfm6zvCXATEdouc7UjdoozJLlgffJEAw3RLhPxnnl9QqzA-g0vwSvgFc1-jjAY'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map( (data: any) => data.albums.items));
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map((data: any) => data.artists.items));
  }
}
