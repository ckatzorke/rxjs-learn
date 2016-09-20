import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WikipediaSearchService {

  constructor(private jsonp: Jsonp) { }

  search(terms: Observable<string>, debounceMS = 300): Observable<Array<string>> {
      return terms
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.rawsearch(term));
  }

  rawsearch(term: string): Observable<any>{
      let search = new URLSearchParams();
      search.set('action', 'opensearch');
      search.set('search', term);
      search.set('format', 'json');
      return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search}).map(response => response.json()[1]);
  }

}
