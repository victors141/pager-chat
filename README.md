# Pager Chat
Chat using pager backend

## Tools
This app was built using the following tools:

[React](https://reactjs.org/)
[webpack](https://webpack.js.org/)
[Express](https://expressjs.com/)

## Running the app

To get the app running on localhost(development mode), run:

```bash
npm install
npm run dev
```

To get the app running on production, run:
```bash
npm install
npm start:server
npm run build
```

## Things to improve
- Implement tests
- Include husky to check eslint and test before commit.
- Improve the server-app to save the messages using a database.
- Giphy API key should be in the server to avoid storing in the frontend app.
- Implement a carousel to have more gif options.
- Panel to show the current users connected(the info is in the app but the design doesn't have this).
- Use a logger to check possible bugs.
- Improve
- Offline support
