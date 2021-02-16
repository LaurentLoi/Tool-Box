import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar-test',
  templateUrl: './search-bar-test.component.html',
  styleUrls: ['./search-bar-test.component.scss']
})
export class SearchBarTestComponent implements OnInit {

  myArray$: Observable<any[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.myArray$ = of(myMockDataArray);
  }

  search(searchTerm: any): void {
    this.myArray$ = of(myMockDataArray);

    searchTerm = searchTerm.toLowerCase().trim();

    this.myArray$ = this.myArray$.pipe(
      map(persons => persons.filter(person =>
        person.name.toLowerCase().includes(searchTerm)
      ))
    );
  }

}

// MOCK DATA FOR DEMO
export interface PersonModel {
  name: string;
  age: number;
}

export const myMockDataArray: PersonModel[] = [
  {name: 'Abraham', age: 132},
  {name: 'Baptiste', age: 61},
  {name: 'Charlie', age: 24},
  {name: 'Daphne', age: 13},
  {name: 'Eline', age: 33},
  {name: 'Flavian', age: 41},
  {name: 'Gabriel', age: 59},
  {name: 'Hamed', age: 60},
  {name: 'Ilyas', age: 15},
  {name: 'Jasper', age: 72},
  {name: 'Kan', age: 19},
  {name: 'Liana', age: 7},
  {name: 'Manfred', age: 86},
  {name: 'Nath', age: 35},
  {name: 'Oscar', age: 21},
  {name: 'Pathy', age: 23},
  {name: 'Quilan', age: 63},
  {name: 'Raphael', age: 54},
  {name: 'Stuart', age: 74},
  {name: 'Targarian', age: 28},
  {name: 'Umel', age: 3},
  {name: 'Victoria', age: 95},
  {name: 'Will', age: 77},
  {name: 'Xena', age: 81},
  {name: 'Yhavna', age: 99},
  {name: 'Zorg', age: 75}
];

