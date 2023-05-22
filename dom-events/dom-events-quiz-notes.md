# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging, tracking and managing variable values
- What is the purpose of events and event handling?
  Events fires a signal to the system about user interaction. Even handling serves as the response from the system to the user when an event is fired.
- Are all possible parameters required to use a JavaScript method or function?
  No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  method addEventListenter(event, callback)
- What is a callback function?
  A callback is a function that is being called inside another function.

- What object is passed into an event listener callback when the event fires?
  The object `event`

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target is the HTML element that triggered the event handler.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  In the first case, an function name handleClick has been defined in advance and it is passed to the method addEventListener as a callback.
  In the second case, a callback function is being defined.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
