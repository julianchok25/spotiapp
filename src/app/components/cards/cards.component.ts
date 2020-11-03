import {Component, Input} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) { }

  viewArtist(item: any) {
    let artistId;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    // console.log(artistId);
    this.router.navigate(['/artist', artistId]);
  }
}
