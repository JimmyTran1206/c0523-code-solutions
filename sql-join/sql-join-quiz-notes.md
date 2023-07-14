# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?

- a primary key of another table embedded in the current table

- How do you join two SQL tables? (Provide at least two syntaxes.)

- select \* from "table1" join "table2" using ("foreignKey of table1")
- select \* from "table1" join "table2" on "table1"."foreignKey" = "table2"."primaryKey"

- How do you temporarily rename columns or tables in a SQL statement?

- using alias `as`

- How do you create a one-to-many relationship between two tables?

- embed a primary key of one table as the foreign key of another table.

- How do you create a many-to-many relationship between two tables?

- use a separate table to records the relations of primary keys from each table.

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
