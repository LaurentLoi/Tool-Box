## 1. Modal messages module

A quite simple modal messaging system.

This module is using [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for an easy rendering.

A raw version without Boostrap is available on this branch: [**MODAL-rawCSS**](https://github.com/LaurentLoi/Tool-Box/tree/MODAL-rawCSS)

*raw css - except some functional parts in modal.component.scss*

---
### Demo:

![demo modal](src/assets/images/modal-demo.jpg)

- Run the app & open your browser on `localhost:4200`

- Click on modal buttons to open them.

- Open `test.component.ts` to view how it works. Try to change the string parameter `'... MODAL'` with anything else and test it.

---

### Get started:

A message uses 3 parameters to display :
- _messageTitle$ `Title of your modal`
- _messageBody$ `Body of your modal`
- _purpose$ `Purpose of your modal, to know which message type to display`


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
### Customise it:

#### Change included messages: 

- Modify `'custom-messages > ...'` HTML / SCSS for new display

- Modify `message.service.ts` to change message's content

- Create new messages: 

Create a new component which must extend abstract `'base-message.ts'` class

implement constructor with `super` params

Configure your personal HTML / CSS display

Add the new component in `'modal.component.html'` with its purpose as `*ngSwitchCase`

- Create a new message function in `'message.service.ts'`. 

- Create your personnal text using:
 ```
 _messageTitle$.next()
 
 _messageBody$.next()
 
 _purpose$.next()
  
  and add the 'modalService.open()' method's call at the end.
```
- Now, when you need your modal to appears, simply call you function via the `messageService.youFunctionName();`

---
