const Connection = require('../../database/connection')
const password_util = require('../../util/password_util')


/* Create function */
module.exports = async (username, password) => {
    try {
        const query = `SELECT id, password FROM user WHERE ` +
                        `username = '${username}'`
  
        db_result = await Connection(query);
        accepted_password = await password_util.passwordDecrypt(password, db_result[0].password);
        
        if(accepted_password) {
            result = {
                id:db_result[0].id
            };
            return result; 
        }
    } catch (err) {
      return false;
    }
  }