# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging and tracking values of variables.

- What is a "model"?
  In a broad term, model is some artificial structure similating the operation and behaviour of an object under study.

- Which "document" is being referred to in the phrase Document Object Model?
  It is the HTML document.

- What is the word "object" referring to in the phrase Document Object Model?
  The word object refers to the content of the HTML document being modeled.

- What is a DOM Tree?
  The hierarchy structure of an HTML element. In this tree, `<html>` acts as the root, `<head>` and `<body>` are direct children and other elements in `<body>` are the nodes and leaves of the tree.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  `doucment.getElementById(elementId)` and `document.querySelector(cssSelectorRule)`

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  `doucment.querySelectorAll(cssSelectorRule)`

- Why might you want to assign the return value of a DOM query to a variable?
  for later accessing, processing and manipulating the document objects

- What `console` method allows you to inspect the properties of a DOM element object?
  `console.dir(docObject)`

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Other elements in the page must be loaded first before Javascript codes can access them

- What does `document.querySelector()` take as its argument and what does it return?
  It takes in a CSS-Selector-Rule and return an document object referring to the first HTML element that matches such selector-rule

- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes in a CSS-Selector-Rule and return a NodeList containing all objects referring to all HTML elements that match such selector-rule. NodeList is an array-like object.

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
