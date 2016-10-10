import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GiantbombSearchService {

  constructor(private jsonp: Jsonp) { }

  search(terms: Observable<string>, debounceMS = 300): Observable<Array<string>> {
      return terms
        .debounceTime(debounceMS)
        .distinctUntilChanged()
        .switchMap(term => this.rawsearch(term));
  }

  rawsearch(term: string): Observable<any>{
      let search = new URLSearchParams();
      search.set('api_key', 'e316aff9ff7d945077dabd3a13ecebaad12bb70d');
      search.set('query', term);
      search.set('field_list', 'name,site_detail_url');
      search.set('resources', 'game');
      search.set('format', 'jsonp');
      return this.jsonp.get('http://www.giantbomb.com/api/search/?json_callback=JSONP_CALLBACK',
        {search}).map(response => {
          console.log(response.json());
          return response.json().results;
      });
  }

}
