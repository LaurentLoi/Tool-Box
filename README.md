# Angular Tool-Box

## 1. Modal messages module

A quite simple modal messaging system.

### Available releases : 

- with Boostrap 5.0 - [**MODAL-w/Boostrap branch**](https://github.com/LaurentLoi/Tool-Box/tree/MODAL-w/Bootstrap5)

- with raw CSS - [**MODAL-rawCSS branch**](https://github.com/LaurentLoi/Tool-Box/tree/MODAL-rawCSS)
*(except some functional parts in modal.component.scss)*

---
### Demo:

run the app & open your browser on `localhost:4200`

try to click on modal buttons to see them.

open `test.component.ts` to view how it works

---

### Basic informations:

A message use 3 parameters to display :
- _messageTitle$ `Title of your modal`
- _messageBody$ `Body of your modal`
- _purpose$ `Purpose of your modal, to know which message type to display`

Basically configured with 4 message's types :
#### With action: 
- CONFIRMATION message 

`Listen to a "confirm / cancel" action - requires to subscribe`

#### Without action
- ERROR message
- INFORMATION message
- SUCCESS message
---
Each message takes a `'subject: string'.`

---
### Get started:  
- Change included messages: 

`Modify 'custom-messages > ...' HTML / SCSS for new display`

- Create new messages: 

`Create a new component which must extend abstract 'base-message' class`

`implement constructor with super params`

`Configure your personnal HTML / CSS display`

`Add the new component in 'modal.component.html' with it's purpose as *ngSwitchCase`

`Create a new message function in 'message.service.ts'. Create your personnal text using _messageTitle$.next(), _messageBody$.next() && _purpose$.next() and add the 'modalService.open() call at the end.`

`Now, when you need your modal to appears, simply call you function via the messageService.youFunctionName();`

---
