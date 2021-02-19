import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() searchableMockArray$: Observable<any[]>;
  @Input() purpose: string;

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();
  private searchTerms$ = new Subject<string>();
  private searchTerms = '';

  constructor() {
  }

  ngOnInit(): void {
    this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(search => {
      this.searchTerms = search;
      this.searchEmitter.emit(search);
    });
  }

  search(term: string): void {
    this.searchTerms$.next(term);
  }

  select(selectedName: string): void {
    this.search(selectedName);
    document.querySelector<HTMLInputElement>('#search-box').value = selectedName;
  }

  searchMatchToBold(subject: string): string {
    if (this.searchTerms !== '') {
      const modifiedString = subject.replace(RegExp(this.searchTerms, 'gi'), `<b>${this.searchTerms}</b>`);
      if (modifiedString.slice(0, 1) === '<') {
        return '<b>' + (modifiedString.slice(3, 4)).toUpperCase() + modifiedString.slice(4);
      } else {
        return (modifiedString.slice(0, 1)).toUpperCase() + modifiedString.slice(1);
      }
    } else {
      return subject;
    }
  }
}
