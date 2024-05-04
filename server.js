const http = require('http');
const app = require("./src/index");
// const { sequelize } = require("./models"); 

require('dotenv').config();
const port = process.env.PORT || 1000;
const server = http.createServer(app);

process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});

server.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log('database connected successsfully')
});
