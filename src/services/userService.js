const Connection = require('../database/connection')
const password_util = require('../util/password_util')



module.exports = {
    /* Create function */
    createUser: async (username, password, email, dateofbirth, contact_no) => {
    try {
        hash_password = await password_util.passwordEncrypt(password);
        const query = `INSERT INTO ` +
                      `user ` +
                    `VALUES ` +
                      `(null, '${username}', '${hash_password}', '${email}', '${dateofbirth}', '${contact_no}')`
  
        await Connection(query)
  
      return true
    } catch (err) {
      return false
    }
  },

    /* Delete function */
    deleteUser: async (id) => {
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
    },

    /* Update function */
    updateUser: async (id, username, password, email, dateofbirth, contact_no) => {
        try {
            hash_password = await password_util.passwordEncrypt(password);
            const query = `UPDATE ` +
                        `user ` +
                        `SET ` +
                        `username = '${username}', ` +
                        `password = '${hash_password}' ` +
                        `email = '${email}'` +
                        `dateofbirth = '${dateofbirth}'` +
                        `contact_no = '${contact_no}'` +
                        `WHERE ` +
                        `id = ${id}`
    
        await Connection(query)
    
        return true
        } catch (err) {
        return false
        }
    },

    /* Retrieve function */
    retrieveUser: async (id) => {
        try {
        const query = `SELECT * FROM user WHERE ` +
                        `id = ${id}`
    
        const results = await Connection(query)
    
        return results
        } catch (err) {
        return []
        }
    },

    /* Get all users function */
    getAllUser: async (fields) => {
        try {
        const query = `SELECT ` +
                        `${fields} ` +
                        `FROM ` +
                        `user`
    
        const results = await Connection(query)
    
        return results
        } catch (err) {
        return []
        }
    },

    /* Create function */
    loginUser: async (username, password) => {
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
}