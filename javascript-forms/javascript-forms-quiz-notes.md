# javascript-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?
  focus

- What event is fired when a user's cursor leaves a form control?
  blur

- What event is fired as a user changes the value of a form control?
  input

- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  submit

- What does the `event.preventDefault()` method do?
  prevent the form from submitting using the default method GET/POST and action="..."

- What does submitting a form without `event.preventDefault()` do?
  the form will submit using default method GET/POST and the user will be directed to the page specified in action="..."

- What property of a form element object contains all of the form's controls.
  HTMLFormElement property

- What property of a form control object gets and sets its value?
  formControlObject.value

- What is one risk of writing a lot of code without checking to see if it works so far?
  The code may be stuck at many checkpoints that was tangled and hard to debug them all at once.

- What is an advantage of having your console open when writing a JavaScript program?
  Having console open together with Live Server add-in allows testing and debugging Javascript at the same time. The problem with Javascript is that it does not have its main console (or we have not studied about it yet) so it needs browser console for outputing values and debugging.

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
