## Modal messages module

A quite simple modal messaging system.

This module is using [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for an easy rendering.

A raw version without Boostrap is available on this branch: 
[**MODAL-rawCSS**](https://github.com/LaurentLoi/Tool-Box/tree/MODAL-rawCSS/src/app/modules/modal-messages).

*raw css - except some functional parts in modal.component.scss*.

---

### Demo:

- Run the app & open your browser on `localhost:4200`.

- Click on 'Modal Message Service' link.

- Click on modal buttons to open them.

- Open `demo-modal-message.component.html` to view how it works.

- Try to change the function parameter `subject: 'string'` with anything else.

- Test it.

---

### Get started:

A message uses 3 parameters to display :
- `_messageTitle$` Title of your modal.
- `_messageBody$` Body of your modal.
- `_purpose$` Purpose of your modal, to know which message type to display.


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

- Copy the `ModalMessages` Module into your app.
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

### Sources & inspirations:

- [Angular - Modals without libs](https://dev.to/daviddalbusco/create-a-modal-for-your-angular-app-without-libs-4hh9)

---
