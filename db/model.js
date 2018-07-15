var db = require('./index.js')

module.exports.get = (callback) => {
  var queryString = 'SELECT name FROM movieList';
  db.query(queryString, (err, results) => {
    if (err) {
      console.log('err in getting from db: ' + err);
    } else {
      callback(null, results);
    }
  });
}

module.exports.post = (params, callback) => {
  var queryString = 'INSERT INTO movieList (name) VALUES (?)';
  db.query(queryString, params, (err, results) => {
    if (err) {
      console.log('err in writing to db: ' + err);
    } else {
      callback(null, results);
    }
  });
}