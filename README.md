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

- Server also live at https://hc-backend-express.vercel.app
- Change http://localhost:3000 to https://hc-backend-express.vercel.app
- Example: https://hc-backend-express.vercel.app/api/v1/user

## Insert / Create Entry

Endpoint POST `http://localhost:3000/api/v1/user`
<img width="954" alt="image" src="https://drive.google.com/file/d/1uRztZEjj1m7ZxEp6tFLGRsyaAisnVXIj/view?usp=sharing">

## List all entries

Endpoint GET `http://localhost:3000/api/v1/user`
<img width="782" alt="test get API in postman" src="https://drive.google.com/file/d/1U2dNN0u1e0QA9H8fC3O8MJggAM8z2XBy/view?usp=drive_link">

## Get Single Oldest data Entry

Endpoint GET `http://localhost:3000/api/v1/user/findoldest`
<img width="782" alt="test get API in postman" src="https://drive.google.com/file/d/1GymaLB1MKJYqxML8FkaBGxXdKRjzE3Xa/view?usp=drive_link">

## Update Entry

Endpoint PUT `http://localhost:3000/api/v1/user/${userId}`
<img width="798" alt="Check update in postman for Node js Postgres API" src="https://drive.google.com/file/d/1zziZb6WLuksdhf1T6kjoPwkubvC3sLdQ/view?usp=drive_link">

## Delete Entry

Endpoint DELETE `http://localhost:3000/api/v1/user/${userId}`
<img width="794" alt="image" src="https://drive.google.com/file/d/1fQGjyrRdwW22GRIjQEzRhnAMe_ueyLeW/view?usp=drive_link">

## Login Entry

Endpoint POST `http://localhost:3000/api/v1/auth/login`
<img width="954" alt="image" src="https://drive.google.com/file/d/1EE2_lHkc39aifXfpEsJpnkum3cTpH9Oa/view?usp=sharing">

## Signup Entry

Endpoint POST `http://localhost:3000/api/v1/auth/register`
<img width="954" alt="image" src="https://drive.google.com/file/d/1JtPmElvhQ6-8qoXpf9MkAqP7QB3QA7mh/view?usp=drive_link">
