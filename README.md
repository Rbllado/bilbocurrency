# BilboCurrency

<br>

## Description

Application web to see the current cryptocurrencies in the world. You can check the price and see how is moving the crypto market nowadays. For each coin you will have a detail description about the latest price, what it the coin about, the website of the coin and a chart.

<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up.
- **Sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **Login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **Logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **Favorite list** - As a user I want to see the list of my favorite and delete them.
- **Edit user** - As a user I want to be able to edit my profile.
- **Restaurants listing** - As a user I want to see more details of the restaurant in a city, be able to see the rating, description and add to my favourites
- **Museums listing** - As a user I want to see more details of the museums in a city, be able to see the rating, description and add to my favourites
- **Events listing** - As a user I want to see more details of the events in a city, be able to see the rating, description and add to my favourites
- **Hotels listing** - As a user I want to see more details of the hotels in a city, be able to see the rating, description and add to my favourites

<br>
# Client / Frontend

## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | Index                | public      | Home page                                        |
| `/auth/signup`            | SignupPage           | anon only   | Signup form, link to login, navigate to homepage after signup |
| `/auth/login`             | LoginPage            | anon only   | Login form, link to signup, navigate to homepage after login |
| `/auth/logout`            | n/a                  | anon only   | Navigate to homepage after logout, expire session            |
| `/coins`                  | CoinsListPage        | public      | Shows all coins in a list                                    |
| `/coins/add`              | CoinsAddPage         | user only   | Edits a coins                                                |
| `/coins/:id`              | coinsDetailPage      | public      | Details of a coins                                           |
| `/calculator`             | Calculator           | user & public   |  Calculate price in $                                    |
| `/favorites`              | Favorites            | user only   | Favorites coins                                              |





## Components

- LoginPage

- Navbar

- Index

- coinsListPage

- coinsAddPage

- coinsDetailPage

- Calculator

- Favorites






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

  - favorites.detail(id)
  - favorites.add(id)
  - favorites.delete(id)

- Calculator Service

  - Calculator.coin(id)



<br>

# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [Coins],
  ownCoins: [OwnCoins]
}
```

Coin Model

```javascript
{
  name: {type: String, required: true},
  price: {type: Number, required: true},
  type: {type: String, required: true},
  symbol: { type: String, required: true }
  img: {type: String},
  description: {type: String},
  web: {type: String},
  history: [History],
  ownCoins: [OwnCoins]
}
```

Favorites model

```javascript
{
  placeId: {type: String}
}
```

History model

```javascript
{
  historyId: {type: String}
}
```

<br>




## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile`             | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`              | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`               | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`              | (empty)                      | 204            | 400          | Logs out the user                                     |
| GET         | `/coins`                    |                              |                | 400          | Show all coins                                        |
| GET         | `/coins/:id`                | {id}                         |                |              | Show specific coin                                    |
| POST        | `/coins/add/:id`            | {id}                         | 201            | 400          | Create and save a new coins                           |
| DELETE      | `/coins/delete/:id`         | {id}                         | 201            | 400          | delete coin                                           |
| DELETE      | `/coins/delete/:id`         | {id}                         | 201            | 400          | delete coin                                           |
| GET         | `/history`                  | {id}                         |                | 400          | value of all values from a coin during a time         |






<br>

## Backlog

Trello

[Trello Link]()

## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Rbllado/villabaleares)

[Deploy Link]()

<br>

### Slides

The url to your presentation slides



