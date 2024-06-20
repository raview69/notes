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
- Export json insomnia: [Here](https://drive.google.com/file/d/11H6E8BMH_PBPzofI9dHWC4YVDdQK4Vk5/view?usp=sharing "Named link title")

## Insert / Create Entry

Endpoint POST `http://localhost:3000/api/v1/user`
<img width="954" alt="image" src="https://github.com/raview69/image/blob/b62fcc403f55fc7e8e186956a680776a0fc9158e/hc/postdata.png">

## List all entries

Endpoint GET `http://localhost:3000/api/v1/user`
<img width="782" alt="test get API in postman" src="https://github.com/raview69/image/blob/b62fcc403f55fc7e8e186956a680776a0fc9158e/hc/getall.png">

## Get Single Oldest data Entry

Endpoint GET `http://localhost:3000/api/v1/user/findoldest`
<img width="782" alt="test get API in postman" src="https://github.com/raview69/image/blob/b62fcc403f55fc7e8e186956a680776a0fc9158e/hc/getoldest.png">

## Update Entry

Endpoint PUT `http://localhost:3000/api/v1/user/${userId}`
<img width="798" alt="Check update in postman for Node js Postgres API" src="https://github.com/raview69/image/blob/b62fcc403f55fc7e8e186956a680776a0fc9158e/hc/update.png">

## Delete Entry

Endpoint DELETE `http://localhost:3000/api/v1/user/${userId}`
<img width="794" alt="image" src="https://github.com/raview69/image/blob/b62fcc403f55fc7e8e186956a680776a0fc9158e/hc/delete.png">

## Login Entry

Endpoint POST `http://localhost:3000/api/v1/auth/login`
<img width="954" alt="image" src="https://github.com/raview69/image/blob/b62fcc403f55fc7e8e186956a680776a0fc9158e/hc/loginakun.png">

## Signup Entry

Endpoint POST `http://localhost:3000/api/v1/auth/register`
<img width="954" alt="image" src="https://github.com/raview69/image/blob/b62fcc403f55fc7e8e186956a680776a0fc9158e/hc/createaccount.png">
