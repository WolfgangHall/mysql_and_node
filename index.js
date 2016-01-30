var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bears_db'
});

connection.connect();

var params = process.argv.slice(2);

var showBears = function () {
connection.query('SELECT * from happy_bears;', function(err, rows, fields) {
  if (err) throw err;
  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i].name + " loves to eat " + rows[i].favorite_food + " and he's " + rows[i].personality);
}

});
}

var addBear = function() {
  connection.query('INSERT INTO happy_bears (name, favorite_food, personality) VALUES (?,?,?)', [params[0], params[1], params[2]], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")
});
}

var deleteBear = function () {
    var query = "Delete FROM happy_bears WHERE id = ?";
    var idToBeDeleted = process.argv[2];

    connection.query (query, idToBeDeleted, function(err, result){
        if (err) throw err;

        console.log("Bear " + idToBeDeleted + " was deleted");
    });
}


addBear();


showBears();


connection.end();