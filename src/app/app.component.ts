import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import * as fromRoot from './reducers';
import * as cards from './actions/cards';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cards$: Observable<Card[]>;

  addCard(card: Card) {
    this.store.dispatch(new cards.Add(card));
  }

  constructor(private store: Store<fromRoot.State>) {
    this.cards$ = this.store.select(fromRoot.getCards);
  }
}
