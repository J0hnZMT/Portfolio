const Connection = require('../../database/connection')

/* Delete function */
module.exports = async (id) => {
  try {
    const query = `DELETE FROM ` +
                    `user ` +
                  `WHERE ` +
                    `id = ${id}`

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}