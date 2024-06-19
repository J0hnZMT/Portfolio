const Connection = require('../database/connection')

module.exports = {
  createPost: async (userid, title, post, postdate) => {
    try {
        const query = `INSERT INTO ` +
                      `posts ` +
                    `VALUES ` +
                      `(null, '${userid}', '${title}', '${post}', '${postdate}')`
  
        await Connection(query)
  
      return true
    } catch (err) {
      return false
    }
  },

  updatePost: async (id, userid, title, post, postdate) => {
    try {
        const query = `UPDATE ` +
                      `posts ` +
                    `SET ` +
                      `userid = '${userid}', ` +
                      `title = '${title}' ` +
                      `post = '${post}' ` +
                      `postdate = '${postdate}' ` +
                    `WHERE ` +
                      `id = ${id}`
  
      await Connection(query)
  
      return true
    } catch (err) {
      return false
    }
  },

  deletePost: async (id) => {
    try {
      const query = `DELETE FROM ` +
                      `posts ` +
                    `WHERE ` +
                      `id = ${id}`
  
      await Connection(query)
  
      return true
    } catch (err) {
      return false
    }
  },

  getAllPost: async (id) => {
    try {
      const query = `SELECT * FROM posts WHERE ` +
                      `id = ${id}`
  
      const results = await Connection(query)
  
      return results
    } catch (err) {
      return []
    }
  },

  getPost: async (fields) => {
    try {
      const query = `SELECT ` +
                      `${fields} ` +
                    `FROM ` +
                      `posts`
  
      const results = await Connection(query)
  
      return results
    } catch (err) {
      return []
    }
  }

} 