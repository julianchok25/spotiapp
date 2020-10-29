import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBBavaMWI_NTIjid9Wy8si6Gh7I27_CE9RnWFpH-Ryya7ouMXI1ctN8qde2Khdn4pyXQ8Cd_FDo8QcWys8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBBavaMWI_NTIjid9Wy8si6Gh7I27_CE9RnWFpH-Ryya7ouMXI1ctN8qde2Khdn4pyXQ8Cd_FDo8QcWys8'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers});

  }
}
