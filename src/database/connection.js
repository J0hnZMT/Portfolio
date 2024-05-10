const mysql = require('mysql')
const config = require('config')

/* Database Configuration */
const dbConfig = {
    host: config.get('server.host'),
    user: config.get('server.user'),
    password: config.get('server.password'),
    port: config.get('server.port'),
    database: config.get('server.database')
}

const db = mysql.createPool(dbConfig)

/* Database Connection */
module.exports = (query) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, sql) => {
      if (err) {
        console.log("Database error: ", err)
        reject(err)
      } else {
        sql.query(query, (err, results) => {
          if (err) {
            console.log("Query error: ", err)
            reject(err)
          } else {
            resolve(results)
          }

          sql.release()
        })
      }
    })
  })
}