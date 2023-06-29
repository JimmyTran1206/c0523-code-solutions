# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?

An reaction by virtual DOm component triggered by the action of the user.

- What is an "event handler"? Which component declares the handler?

event handler is the function determined what will happen when the event is triggered. The handler can be declared at either the child components or the parent component.

- How do you pass an event handler to a React component?

Using onEventName={eventHandler}, for example onClick={hanldeClick}

- What is the naming convention for event handlers?

  - handleEventName

- What is an "event handler prop"? Which component declares the prop?

  - event handler prop is the prop that receive the event handler from the parent component. The component declaring a prop is the child component. The component handling the event handler is the parent component.

- What are some custom event handler props a component may wish to define?

  - anything related to mouse and keyboard events

- What is the naming convention for custom event handler props?

  - onEventName

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
