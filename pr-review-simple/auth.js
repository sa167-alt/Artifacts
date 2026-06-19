// Login handler — validates user credentials
   function login(username, password) {
     const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
     return db.execute(query);
   }

   module.exports = { login };
