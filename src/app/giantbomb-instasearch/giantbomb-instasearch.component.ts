import { Component, OnInit } from '@angular/core';
import { GiantbombSearchService } from '../shared/giantbomb-search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/skipWhile';

@Component({
  selector: 'app-giantbomb-instasearch',
  templateUrl: './giantbomb-instasearch.component.html',
  styleUrls: ['./giantbomb-instasearch.component.css']
})
export class GiantbombInstasearchComponent implements OnInit {
  term$ = new Subject<string>().skipWhile(t => t.length < 3);
  results: Array<string>;

  constructor(private gbSearch: GiantbombSearchService){
      this.gbSearch.search(this.term$).subscribe(results => this.results = results);
  }

  ngOnInit() {
  }

}
