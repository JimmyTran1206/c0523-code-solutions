# javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a function in JavaScript?<br>
  A `function` is a block of codes grouped together to perform specific tasks that can be reused later.

- Describe the parts of a function **definition**.<br>
  We can define a function by:<br>
  Using the keyword `function`: function functionName(parameter list){block of codes}; <br>
  Using the arrow `=>` function: const functionName=(parameter list)=>{block of codes};<br>

- Describe the parts of a function **call**.<br>
  calling the function by invoking the functionName(argument list);

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?<br>
  The **function definition** is usually longer and include codes instructing JS engines to perform specific tasks. The **function call** is usually shorter with just function name and argument list and can be repeated many times. In short, **function definition** is written once, **function call** can be invoked in many places.

- What is the difference between a **parameter** and an **argument**?<br>
  **parameters** are used in function definition while **argument** is used in function call. **parameters** is scoped to that function in which they are defined while **argument** can come from any place.

- Why are function **parameters** useful?<br>
  **parameters** allows caller to pass outside values to the function, thus modify the behaviour of a function in difference situations. This increases flexibility and allows the function to be reused in many places without a lot of modification in the function source code.

- What two effects does a `return` statement have on the behavior of a function?<br>
  `return` statement return a value that can be assinged to a variable each time the function is called
  `return` terminate the function execution. Any code blocks after `return` will not be executed.

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
