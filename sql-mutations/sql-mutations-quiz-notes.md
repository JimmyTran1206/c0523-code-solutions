# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?

- create (createdb) , read (select), update (update/insert), delete (delete)

- How do you add a row to a SQL table?

- insert into "tableName" (columnNames) values (rowValues)

- How do you add multiple rows to a SQL table at once?

- insert into "tableName" (columnNames) values (rowValuesVector1), (rowValuesVector2) and so on

- How do you update rows in a database table?

- update "tableName" set "columnName" where criteria

- How do you delete rows from a database table?

- delete from "tableName" where criteria

- Why is it important to include a `where` clause in your `update` and `delete` statements?

- by default, `update` and `delete` operations will be executed on all table rows.

- How do you accidentally delete or update all rows in a table?

- by not including `where` clause.

- How do you get back the modified row without a separate `select` statement?

- returning \*

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
