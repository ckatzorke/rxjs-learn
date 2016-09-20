import { Component } from '@angular/core';
import {WikipediaSearchService} from './shared/wikipedia-search.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  results: Array<string>;
  constructor(private wikiSearch: WikipediaSearchService){
      //
  }

  search(term:string){
      this.wikiSearch.search(term).subscribe(searchresults => this.results = searchresults);
  }
}
