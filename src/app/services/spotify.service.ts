import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDZTTn1KYxETYu1_ktm81Ew0tZ3R0Y--9dqLED107S9XZ_2jfdveTC21mSSB9P_xq48T3NCOcMKLVEFBY8'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
      .subscribe( data => {
        console.log(data);
      });
  }
}
