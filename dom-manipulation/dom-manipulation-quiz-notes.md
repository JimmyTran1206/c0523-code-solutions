# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  allow access and modify the value of the attribute `class` of the html element under selection.

- How do you update the CSS class attribute of an element using JavaScript?
  using `$elementObjectName.className='new class value'`

- What is the `textContent` property of element objects?
  Give access to the text node of the element object

- How do you update the text within an element using JavaScript?
  use `$elementObjectName.textContent='new text'` or `$elementObjectName.innerText='new text'`

- Is the `event` parameter of an event listener callback always useful?
  well, it should be included to refer to the specific events happening within the scope of the script file, not the global event happening else where on the page outside the current script file.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  I have no idea how to complete this assignment without a variable keeping track of the number of click.

- Why is storing information about a program in variables better than only storing it in the DOM?
  I would say variables improved code readability, resuability and maintenance. Plus, not all browser support storing information in DOM.

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
