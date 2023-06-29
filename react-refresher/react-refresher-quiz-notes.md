# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?

  - using either functional-based or class-based declaration preceeded by `export default`. Component must have a return statement with JSX

- How do you use JSX in a React component?

  - use JSX in the return statement to render the component to the UI

- How do you declare the props a React component needs?

  - Declare the props in the component declation, either using keyword props or destructuring.

- How do you pass props to a React component?

  - passing props when the component is called by the parent component. Passing props is similar to assigning attributes to HTML tags.

- How do you include JavaScript expressions in JSX?

  - use curly braces.

- What are React hooks and what are the three "Rules of Hooks"?

  - React hooks are JavaScript function that allowing functional components to hook in the React features. Three rules of hook:
    1. Called at the top level of the component
    2. Can't be called conditionally or inside a loop
    3. Hook can only be called in React functional components.

- How do you manage state in a React component?

  - useState hook

- How do you handle events in React?

  - use props onEventName

- How do you let a parent component know that an event happened?

  - the parent component can pass the event handler to the child component. When the event is fired at a chile component, the event from the child component is bubbled up to the parent component.

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
