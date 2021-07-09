const express = require("express");
const app = express();
// require data from the target directories
const commentsRouter = require("./routes/comments.js");
const contactsRouter = require("./routes/contacts.js");
const productsRouter = require("./routes/products.js");
const vehiclesRouter = require("./routes/vehicles.js");


  // tell our Express server to serve the files in the public folder


app.use(express.json());

app.use(express.static('public'));
app.use(commentsRouter);
app.use(contactsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);


const port = process.env.PORT || 4001;



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
