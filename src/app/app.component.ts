import { Component } from '@angular/core';
import { GiantbombSearchService } from './shared/giantbomb-search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GiantBomb API Instant Search';
  term$ = new Subject<string>();
  results: Array<string>;

  constructor(private gbSearch: GiantbombSearchService){
      this.gbSearch.search(this.term$).subscribe(results => this.results = results);
  }

}
