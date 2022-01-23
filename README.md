# quickmysql
This library is a wrapper for MySQL Node.JS with built-in Promises.
## Installation
To install quickmysql, use npm:
```
npm install quickmysql
```
## Usage
```js
const quickmysql = require("quickmysql")
const mysql = require("mysql")
(async () => {
    const con = await mysql.createPool({
        host: "localhost",
        user: "me",
        password: "password",
        database: "some_db",
    })
    const ping = await quickmysql.ping({
        con: con
    })
    console.log(ping) //Output: {mysql_lattency}ms
})()