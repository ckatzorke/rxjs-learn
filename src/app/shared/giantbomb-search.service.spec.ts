/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GiantbombSearchService } from './Giantbomb-search.service';

describe('Service: GiantbombSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiantbombSearchService]
    });
  });

  it('should ...', inject([GiantbombSearchService], (service: GiantbombSearchService) => {
    expect(service).toBeTruthy();
  }));
});
