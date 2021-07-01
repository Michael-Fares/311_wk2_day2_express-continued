const express = require("express");
const bodyParser = require("body-parser");
// require data from the target directories
const router = require("./routes/");
const app = express();

  // tell our Express server to serve the files in the public folder

app.use(express.static('public'))
app.use(router)

// add body parser

app.use(bodyParser.json());

const port = process.env.PORT || 4001;

//  routes to get lists



// routes to get individual items




// routes to create one thing






app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
