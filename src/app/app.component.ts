import { Component } from '@angular/core';
import { WikipediaSearchService } from './shared/wikipedia-search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  term$ = new Subject<string>();
  results: Array<string>;

  constructor(private wikiSearch: WikipediaSearchService){
      this.term$
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(term => this.wikiSearch.search(term))
        .subscribe(results => this.results = results);
  }

}
