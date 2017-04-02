import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchResultsService {
  // Observable string sources
  private searchResultsSource = new Subject<object>();

  // Observable string streams
  searchResultAnnounced$ = this.searchResultsSource.asObservable();

  // Service message commands
  announceSearchResult(data: object) {
    this.searchResultsSource.next(data);
  }
}
