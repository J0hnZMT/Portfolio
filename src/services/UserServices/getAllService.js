const Connection = require('../../database/connection')

/* Get a sinle task function */
module.exports = async (id) => {
  try {
    const query = `SELECT * FROM user WHERE ` +
                    `id = ${id}`

    const results = await Connection(query)

    return results
  } catch (err) {
    return []
  }
}