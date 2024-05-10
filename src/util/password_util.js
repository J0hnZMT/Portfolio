const bcrypt = require('bcrypt');
const saltRounds = 10;

function passwordEncrypt(password) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                // Handle error
                reject(err);
            } else {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        // Handle error
                        reject(err);
                    }
                
                // Hashing successful, 'hash' contains the hashed password
                console.log('Hashed password:', hash);
                resolve(hash);
                }); 
            }
        });
    });
}

function passwordDecrypt(user_password, db_password){
    return new Promise((resolve, reject) => {
        bcrypt.compare(user_password, db_password, (err, result) => {
            if (err) {
                // Handle error
                reject(err);
            }
            if (result) {
                // Passwords match, authentication successful
                console.log('Passwords match! User authenticated.');
                resolve(result);
            } else {
                // Passwords don't match, authentication failed
                console.log('Passwords do not match! Authentication failed.');
            }
        });
    });
}

module.exports = { passwordEncrypt, passwordDecrypt };