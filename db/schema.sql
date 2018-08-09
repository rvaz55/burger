DROP DATABASE burgers_db ;
CREATE DATABASE burgers_db ;

USE burgers_db ; 
CREATE TABLE burgers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BIT DEFAULT 0
);