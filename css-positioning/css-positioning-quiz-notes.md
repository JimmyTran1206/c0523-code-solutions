# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  static

- How does setting `position: relative` on an element affect document flow?
  No effect on the documnet flow.

- How does setting `position: relative` on an element affect where it appears on the page?
  By default: no change. Using offset values top,left,right, bot to control the position on the page.

- How does setting `position: absolute` on an element affect document flow?
  Absolutely positioned elements are removed entirely from the document flow and put on another separate layer. That means they have no effect at all on their parent element or on the elements that occur after them in the source code.

- How does setting `position: absolute` on an element affect where it appears on the page?
  An absolutely positioned element will overlap other static content unless it is docking in a parent position: relative

- How do you constrain an absolutely positioned element to a containing block?
  Set the containing block to position:relative

- What are the four box offset properties?
  top, right, bottom, left

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
