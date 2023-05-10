# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  console log is crucial to check the output of a function or check the value of a variable for debugging and tesing the program for errors, warning, and mistakes
- What is a method?
  A method is a function acting as a property in an object.

- How is a method different from any other function?
  Method resides within objects while functions can float in any place of the program. 'this' in method refers to the object itself while 'this' in function refers to the window object in the console.

- How do you remove the last element from an array?
  Using array.pop()

- How do you round a number down to the nearest integer?
  Using Math.floor();

- How do you generate a random number?
  Using Math.random() to generate numbers between [0,1). Using appropriate mathematical operators to scale up this interval to generate random numbers in any interval desired.

- How do you delete an element from an array?
  Shorten array length by reassigning array.length to truncate the elements at the end
  Using array.shift() and array.pop() to delete the beginning and ending element.
  Using array.splice(index,numberOfElements) to delete a specific number of elements staring from certain index within the array

- How do you append an element to an array?
  Using array.push(element)

- How do you break a string up into an array?
  Using string.split(pattern)

- Do string methods change the original string? How would you check if you weren't sure?
  string is a primitive and it is pretty much immutable to a lot of string methods. However, string is also an array and there are some methods mutating the array, such as array.sort(). I have not tried mixing array methods to strings yet, aww.
  In case of being unsure, I use console.log to log the original string to the console to see if it was mutated.

- Roughly how many string methods are there according to the MDN Web docs?
  A lot. Its about 40-50 methods. I lost count on the way.

- Is the return value of a function or method useful in every situation?
  Not in every situations.

- Roughly how many array methods are there according to the MDN Web docs?
  A quick copy-paste to MS Word shows me that there are about 45 methods for array

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
  MDN

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
