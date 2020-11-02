import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA8Cq5KxcWG14onko5CVPL7xnbdz51QTm0k8SOGySlGwX33COnQShj1y5j814tiGWWgWt7UqqYxJB8Rq78'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map( (data: any) => data.albums.items));
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA8Cq5KxcWG14onko5CVPL7xnbdz51QTm0k8SOGySlGwX33COnQShj1y5j814tiGWWgWt7UqqYxJB8Rq78'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})
      .pipe(map((data: any) => data.artists.items));
  }
}
