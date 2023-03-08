# Blackjack

## How to start
`cd client` \
`npm install` \
`npm start`

## How to test logic
`cd client` \
`npm test`

current test coverage for game logic is 92.85%

---
The reason that it is currently set up as a client folder is because the plan was to implement a backend as well that included websockets. However, I didn't have time to implement this yet.

---
I will also be implementing a  `Person` class so each player will have their own object. I will end up moving the game logic to a node server and have the websockets allow multiplayer.

---
I hope you enjoy. :)
---
---
### TODO
1. Implement node server
2. Add websocket (Socket.io)
3. Move game logic over to server
4. Connect FE and BE websockets
5. On BE make the different functions in the Game class ping methods to send to the FE for real time updates
6. Grab pings on the FE from BE and link them to Redux
7. Make some data structure updates to work with multiplayer online