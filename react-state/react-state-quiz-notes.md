# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?

  - hooks are JavaScript functions that can be used in functional components to manage states and life-cycles of the component, thus make class-based components obsolete.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  1. hook can only be called at the top level of the functional component
  2. only call hooks from react function
  3. dont call hooks inside loops, conditional or nested functions.

- What is the purpose of state in React?

  - state is the information that can affect the UI rendering

- Why can't we just maintain state in a local variable?

  - because local variables do not trigger re-rendering. Traditionally, state is linked to render() method in classed-based component and is defined in Component class in React library while local variables are not defined in the Component class. This fact is hidden when using useState hook.

- What two actions happen when you call a `state setter` function?

  - the state is changed
  - the changes related to state is rendered in the UI

- When does the local `state variable` get updated with the new value?

  - at the next render cycle, according to the reading.

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
