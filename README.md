### TODO

- finish writing this README

- install mysql or mariaDB on mac
- create database for the app, and create an account to manage it
- install a sql client so I can use GUI, and test out queries (using the account)
- read up on a SQL library for Node
- write a sample function that inserts something into the DB from node
- check that it works from the GUI client
- then write something that reads from node

- How the site works:

  - Downloads:

    - npm is highly reccomended
    - React
    - Node
    - Express
    - Multer
    - Maybe axios??
    - about to be sql but thats not set up yet

  - Server Folder

    - runs the server using express and node.
    - index.js is the "main" file that runs
    - packages is the "settings"

  - Client Folder

    - runs the client side and UI using React
    - App.js (in /src) is the main file that runs, use "classes" and components to keep that file pretty readable and small

  - To Run Site:

    - from terminal, get into the server folder. run "npm start". should get a listening result meaning the server is live.
    - from terminal, use another window to open the client folder. run "npm start" again and a page should open up.

    - ctrl c to end either
