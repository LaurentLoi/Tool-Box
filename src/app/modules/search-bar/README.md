## Search-bar module

A quite simple search-bar system.

This module is using [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 
for an easy rendering.

---

### Demo:

- Run the app & open your browser on `localhost:4200`.

- Click on 'Search-bar' link.

- Enter any letter in the `<input>` Search ... field.

- Open `demo-search-bar.component.html` and check the `<app-search-bar>` to view how it works.

---

### Get started:

The search-bar component needs 3 parameters to work:

- `searchableArray$: Observable<any[]>` → `@Input()` - Your Observable array where to search in.
  
- `purpose: String` → `@Input()` keyword to allow you to configure what appears in the search results 
  accordingly to your data type.
  
- `(searchEmitter)="search($event)"` → `@Output()` event that send back the search input field content 
  as a string, to use with a `search($event)` function in your parent component.

---

### Implement it:

- Copy the `Search-bar` Module into your app.
- Add `SearchBarModule` to your `app.module.ts imports`.
- Add `<app-search-bar></app-search-bar>` in your component's html with it's params (see @Get started).
- Create your own `search($event)` function in your component's .ts file (see example in 
  `demo-search-bar.component.ts`) to effectively filter your Observable array.

---

### Customise it:

#### Configure a new data-type to search in: 

- Open `search-bar.component.html`.

- Copy / paste the USER case: 

 ```
 <!--CASE : USERS-->
   <button class="ps-1"
     *ngSwitchCase="'users'"
     (click)="select(object.name)"
     [innerHTML]="searchMatchToBold(object.name)">
   </button>
 <!--END USERS-->
 ```
- Replace `'users'` switch case with your own `'purpose'` parameter.

- Replace the `(click)="select([...])"` with the object string property you want to display 
  in the search `<input>` field. (When a user clicks on one of the search results).

- Replace the `[innerHTML]="searchMatchToBold([...])"` with the object string property you 
  want to display in the search-results area.
  
    - the `searchMatchToBold([...])` function put the search input content to bold into 
      the search results and UpperCase it's first letter (first word only).
  
---

### Sources & inspirations: 

- [Angular - Tour-of-Heroes](https://angular.io/tutorial/toh-pt6#search-by-name)

---
