DROP DATABASE IF EXISTS friendfinder;
CREATE DATABASE friendfinder;
USE friendfinder;

CREATE TABLE friends (
id INT auto_increment,
name VARCHAR(25),
photo_link VARCHAR(1000),
email VARCHAR(30),
username VARCHAR(20),
password VARCHAR(6),
score_1 INT(1),
score_2 INT(1),
score_3 INT(1),
score_4 INT(1),
score_5 INT(1),
score_6 INT(1),
score_7 INT(1),
score_8 INT(1),
score_9 INT(1),
score_10 INT(1),
PRIMARY KEY(id)
);


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sqlpass',
    database: 'bamazon'
})

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    connection.query(`INSERT INTO friends (name, photo_link, email, username, password, score_1, score_2, score_3, score_4, score_5, score_6, score_7, score_8, score_9, score_10)
    VALUES 
    (JSON.STRINGIFY($("#name").val().trim(), $("#email").val().trim(), $("#photo").val().trim(), $("#username").val().trim(), $("#password").val().trim(), $("#score1").val().trim(), $("#score2").val().trim(), 
    $("#score3").val().trim(), $("#score4").val().trim(), $("#score5").val().trim(), $("#score6").val().trim(), $("#score7").val().trim(), $("#score8").val().trim(), $("#score9").val().trim(),
        $("#score10").val().trim()))` function (err, result, fields) {
        if (err) throw err;