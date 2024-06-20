# Setup

```
npm i
```

# Run the project

```
npm run start
```

Server will run at http://localhost:3000

# About

- Payload for post/get data : {
  "title": "exmaple",
  "note": "exmaple"
  }

## Insert / Create Entry

Endpoint POST `http://localhost:3000/api/v1/notes`

## List all entries

Endpoint GET `http://localhost:3000/api/v1/notes`

## List et one entries

Endpoint GET `http://localhost:3000/api/v1/notes/${notesId}`

## Update Entry

Endpoint PUT `http://localhost:3000/api/v1/notes/${notesId}`

## Delete Entry

Endpoint DELETE `http://localhost:3000/api/v1/notes/${notesId}`
