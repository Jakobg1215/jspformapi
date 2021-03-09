# JSPFormApi
A simple form api for JSPrismarine!
## How to use it!
First import all of the forms you want to use and the FormResponceEvent.
```ts
import { ModalForm, FormResponceEvent } from "jspformapi";
```
Next create a form and add information to it!
```ts
const form = new ModalForm()
    .setButton1("Yes")
    .setButton2("No")
    .setFormTitle("question")
    .setFormcontent("Do you like how I did the forms?");
```
Now send the form to a player!
```ts
await form.sendFormToPlayer(Player);
```
To recive a form responce do this!
```ts
new FormResponceEvent(this.api);
this.api.getEventManager().getCustomEventManager().on("FormResponce", (event) => {
    // Your Code goes here!
});
```
# To Do
- Make the FormResponceEvent not need to use this.api
- Make it so you don't have to import FormResponceEvent possibly
- add constructors to every form
- add the player to who send the FormResponceEvent
