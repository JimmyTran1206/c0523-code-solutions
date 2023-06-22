# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  `event.target` refers to the current element where the event is happening

- What is the affect of setting an element to `display: none`?
  It hide the element from screen view and create an empty space that other flex elements are can occupy. The hidden element still exist in the source code.

- What does the `element.matches()` method take as an argument and what does it return?
  it takes a CSS selector and return true/false determining if that element can be selected using the argument CSS Selector.

- How can you retrieve the value of an element's attribute?
  Use element.getAttribute(attributeName)

- At what steps of the solution would it be helpful to log things to the console?
  1-right after the check `element.matches('.tab)` if the element being clicked on is a tab or not.
  2- inside the for loop, after modification of element classes and attributes.
  By this, we can verify that the element under click have the desired attributes.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  I would have to attach an event listener to every desired element of the newly-added-tab.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  My thought was that we use arrays or DocumentFragment's to collect all related data of the tabs. For example, all data and tags related to tab HTML will be collected to an array. Other arrays will be made for CSS and JavaScrip tabs. Then we append the array to the document.body when a tab is clicked, and remove the other two that were not clicked on.

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
