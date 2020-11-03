import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  constructor(private router: ActivatedRoute) {
    // Getting the id from url
    this.router.params.subscribe( params => {
      console.log(params.id);
    });
  }

}
