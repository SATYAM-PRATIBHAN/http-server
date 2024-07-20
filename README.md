# Basic HTTP Server with Authentication using JSON Web Token(JWT) and Express.js
This repository provides a basic implementation of an HTTP Server with authentication using JSON Web Token (JWT) and Express.js

## Features
1. Secure user sign-in with username and password verification.
2. JWT token generation for authenticated users.
3. Authorization check for protected routes.

## Pre-Requisite
1. Node.js and npm (or yarn) installed on your system.

## Installation
1. Clone this repository:

`git clone https://github.com/SATYAM-PRATIBHAN/http-server.git`

2. Navigate to the project directory:

`cd http-server`

3. Install dependencies:

`npm install jsonwebtoken`
`npm install express`

## Usage

1. Start the Server(This will start the server at Port 3000 by default)

`npm authentication.js`

2. Sign-in Endpoint:

a. Method: POST
b. URL: /signin
c. Body: JSON object containing username and password (e.g., {"username": "your_username", "password": "your_password"})

3. Protected Users Endpoint:

a. Method: GET
b. URL: /users
c. Headers: Authorization: <your token>



