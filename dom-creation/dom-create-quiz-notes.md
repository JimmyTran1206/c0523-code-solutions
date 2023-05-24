# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  nope, it only create a new Node object Javascript, not added to HTML yet.

- How do you add an element as a child to another element?
  use NodeObject.appendChild() method

- What do you pass as the arguments to the `element.setAttribute()` method?
  pass the pair of attributeName-value: `element.setAttribute(attributeName,value)`

- What steps do you need to take in order to insert a new element into the page?
  1-create a new Node Object using document.createElement() and assign the Node Object to the variable
  2-use NodeObject.appendChild() method to insert the object to the page.

- What is the `textContent` property of an element object for?
  `textContent` property is used to access and modify text content within an element/node object

- Name two ways to set the `class` attribute of a DOM element.
  Using NodeObject.className
  Using NodeObject.classList.add()
  Using NodeObject.setAttribute('class', value)

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  1- Creating a function so that we can test each step to verify the structure of the tree
  2- Function itself is reusable across many applications and situationis with just few modifications added (if any).

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
