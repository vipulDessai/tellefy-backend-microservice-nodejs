const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const http = require("http");
const app = express();

const frontEndEntryFileLocation = path.join(__dirname, "../", "blog-frontend-angular", "dist", "blog-frontend-angular", "index.html");
const frontEndEDistFolderLocation = path.join(__dirname, "../", "blog-frontend-angular", "dist", "blog-frontend-angular");

//api file for interacting with MongoDB
const api = require("./server/routes/api");

//parsers
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//angular DIST output folder
app.use(express.static(frontEndEDistFolderLocation));

//api location
app.use("/api", api);

app.get('*', (req, res) => {
    res.sendFile(frontEndEntryFileLocation);
});

//set port
const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));