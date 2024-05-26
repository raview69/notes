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
Complete code to create CRUD REST APIs using Node.js / Postgres DB. It uses all standard HTTP Verbs like GET, POST, PUT, and DELETE to perform the CRUD operations.
We have taken the example for e-commerce category with fields:
i) Title
ii) Description

## Table Creation
```
CREATE TABLE categories (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	title varchar NOT NULL,
	description varchar NULL,
	CONSTRAINT category_pk PRIMARY KEY (id)
);
```

## Insert / Create Entry
Endpoint POST `http://localhost:3000/api/category`
<img width="954" alt="image" src="https://github.com/mohitsehgal/nodejs-postgres-starter/assets/1757104/643754da-b11a-488d-8259-6a09600c8075">

## List all entries
Endpoint GET `http://localhost:3000/api/category`

## Get Single Entry
Endpoint GET `http://localhost:3000/api/category/${categoryId}`
<img width="782" alt="test get API in postman" src="https://github.com/mohitsehgal/nodejs-postgres-starter/assets/1757104/2dcfb6d7-442f-47b4-a871-860b288f3425">

## Update Entry
Endpoint PUT `http://localhost:3000/api/category/${categoryId}`
<img width="798" alt="Check update in postman for Node js Postgres API" src="https://github.com/mohitsehgal/nodejs-postgres-starter/assets/1757104/5b2bd44e-3de0-4869-a681-404084c102c2">


## Delete Entry
Endpoint DELETE `http://localhost:3000/api/category/${categoryId}`
<img width="794" alt="image" src="https://github.com/mohitsehgal/nodejs-postgres-starter/assets/1757104/519d3dd8-fffa-4c48-9354-b7083db1fbef">



