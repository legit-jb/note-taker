const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// handle parsing for POST and PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve static files
app.use(express.static("public"));


// Listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));