const Connection = require('../../database/connection')
const password_util = require('../../util/password_util')


/* Create function */
module.exports = async (username, password) => {
    try {
        hash_password = await password_util.passwordEncrypt(password);
        const query = `INSERT INTO ` +
                      `user ` +
                    `VALUES ` +
                      `(null, '${username}', '${hash_password}')`
  
        await Connection(query)
  
      return true
    } catch (err) {
      return false
    }
  }