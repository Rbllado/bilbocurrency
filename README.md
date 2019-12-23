# BilboCurrency

## Description

Application web to see the current cryptocurrencies in the world. You can check the price and see how is moving the crypto market nowadays. For each coin you will have a detail description about the latest price, what it the coin about, the website of the coin and a chart.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up.
- **Sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **Login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **Logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **Favorite list** - As a user I want to see the list of my favorite and delete them.
- **Edit user** - As a user I want to be able to edit my profile.
- **Create own coin** - As a user I am able to create a new coin with my specification.
- **Check my own coin** - As a user I can check the coins that I have created


# Client / Frontend

## Routes (React App)

| Path                | Component       | Permissions | Behavior                                                      |
| ------------------- | --------------- | ----------- | ------------------------------------------------------------- |
| `/`                 | Index           | public      | Home page                                                     |
| `/auth/signup`      | SignupPage      | anon only   | Signup form, link to login, navigate to homepage after signup |
| `/auth/login`       | Navbar          | anon only   | Login form, link to signup, navigate to homepage after login  |
| `/auth/logout`      | LogOutPage      | anon only   | Navigate to homepage after logout, expire session             |
| `/coins`            | CoinsList       | public      | Shows all coins in a list                                     |
| `/coins/add`        | AddOwnCoins     | user only   | Add own coins                                                 |
| `/coins/:id`        | DetailCoin      | public      | Details of a coins                                            |
| `/user/favorites`   | Favorites       | user only   | Favorites coins                                               |
| `/user/editProfile` | Edit            | user only   | Profile                                                       |
| `/coins/updatehistory` | History      | public      | keep the last price of the coin into array in the DB          |
| `/owncoins`         | OwnCoins        | user        | List of the own coins                                         |





## Components

- LoginPage

- SingUp

- Navbar

- Index

- coinsListPage

- coinsAddPage

- coinsDetailPage

- Favorites

- Edit

## Services

- Auth Service

  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous

- Coins Service

  - coins.list()
  - coins.detail(id)
  - coins.add(id)
  - coins.delete(id)

- Favorites Service

  - favorites.get()
  - favorites.add(id)
  - favorites.delete(id)

# Server / Backend

## Models

User model

```javascript
username: String,
  password: String,
  favorites: [{type: Schema.Types.ObjectId , ref: "Coin"}],
  owncoins: [{type: Schema.Types.ObjectId , ref: "OwnCoin"}],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
```

Coin Model

```javascript
{
  name: { type: String, required: true },
  price: { type: Number, required: true },
  id:{ type: Number, required: true },
  tags: [],
  symbol: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  web: { type: String },
  history: [{type: Schema.Types.ObjectId , ref: "History"}],
  ownCoins: [{type: Schema.Types.ObjectId , ref: "OwnCoins"}]
}
```

Favorites model

```javascript
{
  listCoin: [],
}
```

History model

```javascript
{
  symbol:  {type: String, required: true},
  value: []
}
```

## API Endpoints (backend routes)

| HTTP Method | URL                 | Request Body            | Success status | Error Status | Description                                                                                                                     |
| ----------- | ------------------- | ----------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile`     | Saved session           | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`      | {name, email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`       | {username, password}    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`      | (empty)                 | 204            | 400          | Logs out the user                                 |
| GET         | `/coins`            |                         | 200            | 400          | Show all coins                                    |
| GET         | `/coins/:id`        | {id}                    |                |              | Show specific coin                                |
| POST        | `/coins/add/`       |                         | 201            | 400          | Create and save a new coins                       |
| DELETE      | `/coins/delete/:id` | {id}                    | 201            | 400          | delete coin                                       |  
| POST        | `/coins/add`        |                      |  200              | 400          | Create owncoin                                    |
| GET         | `/owncoins`         |                      |  200              | 400          | List all owncoins                                 |  
| GET         | `/history`          |                      |  200              | 400          | Update price into array in Database               |
| POST        | `/editprofile`     | {username, password, newpassword}|  200  | 400           | List all owncoins                                 |


     


## Backlog

Trello

[Trello Link](https://trello.com/b/wc5KparA/bilbocurrency)

## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Rbllado/BilboCurrency)

[Deploy Link](https://bilbocurrency.herokuapp.com/)

