List of Routes
==
|Route    |HTTP  |Body  | Description |
|:--------: |:----:|:----:|:----:|
|`/books`|GET   | `none`|Get all books|
|`/books/:isbn`|GET   |`none`|Get one book (by ISBN)|
|`/books`|POST   |`isbn:String` (**REQUIRED**), `title:String` (**REQUIRED**), `author:String` (**REQUIRED**), `category:String` (**REQUIRED**), `stock:Integer` (**REQUIRED**)|Create a new book|
|`/books/:isbn`|PUT   |`isbn:String` (**REQUIRED**), `title:String` (**REQUIRED**), `author:String` (**REQUIRED**), `category:String` (**REQUIRED**), `stock:Integer` (**REQUIRED**)|Update (PUT) book details|
|`/books/:isbn`|PATCH    |`title:String` (**REQUIRED**)|Update (PATCH) book title|
|`/books/:isbn`|DELETE     |`none`|Delete a book|

Usage
===
```javascript
$ npm install
$ node app.js
```
Access application via http://localhost:3000/