The initial loading of the page is the same as the regular loading, the only difference would be the script that prevents the page refreshing and instead re-renders the list on the go.

- GET /exampleapp/spa
  - Server returns the html
- GET /exampleapp/main.css
  - Server returns the css
- GET /exampleapp/spa.js
  - Server returns the js
- GET /exampleapp/data.json
  - Server returns the note list