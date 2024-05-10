const Connection = require('../../database/connection')
const password_util = require('../../util/password_util')

/* Update function */
module.exports = async (id, username, password) => {
    try {
        hash_password = await password_util.passwordEncrypt(password);
        const query = `UPDATE ` +
                      `user ` +
                    `SET ` +
                      `username = '${username}', ` +
                      `password = '${hash_password}' ` +
                    `WHERE ` +
                      `id = ${id}`
  
      await Connection(query)
  
      return true
    } catch (err) {
      return false
    }
  }