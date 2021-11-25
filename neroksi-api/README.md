# neroksi API

This is a GraphQL API for the neroksi app.

## ✔️ Requirements

Node (versions `12.X.X` are tested, but later versions _might_ work as well) and npm. If you haven't installed Node or npm, [nvm](https://github.com/nvm-sh/nvm) is an easy to use tool for installing both. Nvm is also handy if you want to quickly switch between different Node versions.

## 🚀 Getting started

1. Clone this repository and run `npm install` in the `neroksi-api` directory.

2. Create a file `.env` in the `neroksi-api` directory and copy the contents of the `.env.template` file there. If you want, you can also use a different secret for the `JWT_SECRET` variable, which is used to sign access tokens.

3. Run `npm run build`. This will setup the SQLite database and run the migrations.

4. **(Optional)** To populate the database with some seed data you can run `npm run seed:run`. **Note:** running this command will remove all existing data in database.

5. All done! Just run `npm start` to start the server. After the server has started you should be able to access the GraphQL playground at http://localhost:4000/graphql.

## 🔑 Authorization

To list all the registered users, you can run this query in the GraphQL playground:

```javascript
{
  users {
    edges {
      node {
        username
      }
    }
  }
}
```

You can retrieve an access token by performing the `authorize` mutation:

```javascript
mutation {
  authorize(credentials: { username: "pekka", password: "password" }) {
    accessToken
  }
}
```

All access tokens expire after **seven days**. If you performed step 4. in the "Getting started" section, users "pekka", "elina", "matti", "johndoe" and "leeroyjenkins" all have the password "password".

You can also register a new user by performing the `createUser` mutation:

```javascript
mutation {
  createUser(user: { username: "myusername", password: "mypassword" }) {
    id
    username
  }
}
```

### Authorize requests in the GraphQL playground

A handy way to authorize requests in the GraphQL playground is to retrieve an access token using the `authorize` mutation (see above for details) and then add the following in the "HTTP HEADERS" tab below the query editor:

```json
{
  "Authorization": "Bearer <ACCESS_TOKEN>"
}
```

Replace the `<ACCESS_TOKEN>` part with your access token.

## 📖 Documentation

GraphQL playground offers documentation on how to use the API. Start the server by running `npm start`, open the GraphQL playground at http://localhost:4000/graphql and click the "docs" tab.

## 🐛 Found a bug?

Submit an issue with the bug description and a way to reproduce the bug. If you have already come up with a solution, we will gladly accept a pull request.

## ❓ FAQ

- **How to reset the database?** If you are absolutely sure that you want to remove _all_ the existing data, just remove the `database.sqlite` file in the `neroksi-api` directory and run `npm run build`. You can run `npm run seed:run` to initialize the new database with seed data.

## 🙌 Acknowledgments

- This API is build on the basis of [rate-repository-api](https://github.com/Kaltsoon/rate-repository-api) created by [Kaltsoon](https://github.com/Kaltsoon).
