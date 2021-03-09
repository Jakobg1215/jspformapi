# JSPFormApi
A simple form api for JSPrismarine!
## How to use it!
First import all of the forms you want to use and the FormResponseEvent.
```ts
import { ModalForm, FormResponseEvent } from "jspformapi";
```
Next create a form and add information to it!
```ts
const form = new ModalForm({
    id: 69,
    title: "question",
    content: "content",
    button1: "button1",
    button2: "button2"
});
```
Now send the form to a player!
```ts
await form.sendFormToPlayer(Player);
```
To recive a form response do this!
```ts
new FormResponseEvent(this.api);
this.api.getEventManager().getCustomEventManager().on("FormResponse", (event) => {
    // Your Code goes here!
});
```
# To Do
- Make the FormResponseEvent not need to use this.api
- Make it so you don't have to import FormResponseEvent possibly
- Add JSDoc to all functions
