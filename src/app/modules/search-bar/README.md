## Search-bar module

A quite simple search-bar system.

This module is using [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for an easy rendering.

---

### Demo:

- Run the app & open your browser on `localhost:4200`.

- Click on 'Search-bar' link.

- Enter any letter in the input `Search ...` field.

- Open `demo-search-bar.component.html` and check the `<app-search-bar>` to view how it works.

---

### Get started:

The search-bar component needs 3 parameters to work:

- `searchableArray$: Observable<any[]>` → `@Input()` - Your Observable array where to search in.
  
- `purpose: String` → `@Input()` keyword to allow you to configure what appears in the search results accordingly to your data type.
  
- `(searchEmitter)="search($event)"` → `@Output()` event that send back the search input field content as a string, to use with a `search($event)` function in your parent component.

The module comes with 4 messages types :
#### With action: 
- CONFIRMATION message 

`Listen to a "confirm / cancel" action - requires to subscribe`

#### Without action
- ERROR message
- INFORMATION message
- SUCCESS message

---

Each message takes a `(subject: string)` param to display it within the composition of the message.

---

### Implement it:

- Copy the module `ModalMessagesModule` into your app.
- Add `ModalMessagesModule` to your `app.module.ts imports`.
- Add `<app-modal></app-modal>` in one of the root html (i.e. `app.component.html`).
- Inject the `messageService: MessageService` in any of your `component.ts`.
- Call the `messageService.[anyFunctionName(...args)]` to open your modals and display messages.

---

### Customise it:


#### Change existing messages: 

- Modify `'custom-messages > ...'` HTML / SCSS for new display.

- Modify `message.service.ts` to change message's content.


#### Create new messages: 

- Create a new component which must extend abstract `'base-message.ts'` class.

- Implement constructor with `super` params.

- Configure your personal HTML / CSS display.

- Add the new component in `'modal.component.html'` with its purpose as `*ngSwitchCase`.

- Create a new message function in `'message.service.ts'`.

- Create your personal text using:
 ```
 _messageTitle$.next()
 
 _messageBody$.next()
 
 _purpose$.next()
```

- Add the `'modalService.open()'` method's call at the end.

- Now, when you need your modal to appears, simply call you function via the `messageService.yourFunctionName();`

---
