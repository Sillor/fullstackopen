sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
Note right of browser: Server saves the file
    server-->>browser: 201 Created
    deactivate server
Note right of browser: Client script re-renders the updated list
    