# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The actual element where the event happens, it may not be the current target where the event handler is defined.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Becasue the event on the descendent element is bubbling up to its parents

- What DOM element property tells you what type of element it is?
  event.target.tagName

- What does the `element.closest()` method take as its argument and what does it return?
  it takes in the CSS selector string and return the closest parent element matching that selector criteria

- How can you remove an element from the DOM?
  use element.remove() method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  just add the event listener to on of its parents and any event happening to it will bubble up and be handled by its parents.

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
