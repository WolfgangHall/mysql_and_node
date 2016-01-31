var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bears_db'
});

connection.connect();

var params = process.argv.slice(2);

switch(params[0]){

    case 'show':
    showBears();
    break;

    case 'insert':
    addBear(params[1],params[2],params[3]);
    showBears();
    break;

    case 'delete':
    deleteBear(params[1]);
    break;
}

function showBears () {
connection.query('SELECT * from happy_bears;', function(err, rows, fields) {
  if (err) throw err;
  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i].name + " loves to eat " + rows[i].favorite_food + " and he's " + rows[i].personality);
    }
});
}

function addBear () {
  connection.query('INSERT INTO happy_bears (name, favorite_food, personality) VALUES (?,?,?)', [params[1], params[2], params[3]], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")
});
}

function deleteBear () {
    var query = "Delete FROM happy_bears WHERE id = ?";
    var idToBeDeleted = params[1];

    connection.query (query, idToBeDeleted, function(err, result){
        if (err) throw err;

        console.log("Bear " + idToBeDeleted + " was deleted");
    });
}





connection.end();