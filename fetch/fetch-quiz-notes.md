# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?

- a promise `response` that returns another promise `response.json`

- What is the default request method used by `fetch()`?

- GET method

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

- by specifying fetch(url, {method:"POST"/"GET"/etc.})

- How does `fetch` report errors?

- Fetch only report error if there is no connection to the server (I think status code 5xx). Other standard error status codes are not reported as error, instead the response.ok is set to false and we have to implement erorr handling by ourself.

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
