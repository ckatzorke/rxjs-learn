import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { GiantbombSearchService } from './shared/giantbomb-search.service';

import { AppComponent } from './app.component';
import { GiantbombInstasearchComponent } from './giantbomb-instasearch/giantbomb-instasearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GiantbombInstasearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [GiantbombSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
