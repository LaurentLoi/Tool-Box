import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() myArray$: Observable<any[]>;

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();
  private searchTerms = new Subject<string>();
  isSearchFocus = false;

  constructor() {
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(search => {
      this.searchEmitter.emit(search);
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  toggleFocus(): void {
    this.isSearchFocus = !this.isSearchFocus;
  }

}
