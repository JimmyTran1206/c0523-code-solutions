# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?

It is a package management software

- What is a package?

Code blocks written in advance that are shared adn resuable across different projects.

- What are some other popular package managers?

npm, Yarn, pnpm

- How can you create a `package.json` with `npm`?

cd to the current directory

npm init --yes

- What is a dependency and how do you add one to a package?

dependency are the packages installed ready to use for the project. Use npm install packageName

- What happens when you add a dependency to a package with `npm`?

There are dependencies fields in the package.json

- What is a devDependency and how do you add one to a package?

devDependency are package installed to be used during development. Use npm install packageName --save-dev

- How do you define and run `npm` scripts? Why are these useful?

We can define a scripts by adding the script into package.json. These are useful to run a certain script with custom shell names. 'npm run "script name". It is useful for running scripts quickly.

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
