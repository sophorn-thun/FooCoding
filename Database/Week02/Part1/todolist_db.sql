CREATE DATABASE ToDoList;
USE ToDoList;

CREATE TABLE User (
    -> id INT PRIMARY KEY,
    -> name VARCHAR(50) NOT NULL,
    -> email VARCHAR(255) NOT NULL,
    -> password VARCHAR(100) NOT NULL)
    -> ;
    
 CREATE TABLE ToDoList (
    -> list_id INT PRIMARY KEY,
    -> user_id INT,
    -> list_title VARCHAR (255),
    -> FOREIGN KEY (user_id) REFERENCES User(id))
    -> ;
    
 CREATE TABLE Items (
    ->   item_id INT PRIMARY KEY,
    ->   list_id INT,
    ->   completion_status ENUM('Not Started', 'In Progress', 'Completed'),
    ->   reminder DATETIME,
    ->   FOREIGN KEY (list_id) REFERENCES ToDoList(list_id)
    -> );
     
 CREATE TABLE Tags (
    -> tag_id INT PRIMARY KEY,
    -> item_id INT,
    -> tag_name VARCHAR(255) NOT NULL,
    -> FOREIGN KEY (item_id) REFERENCES Items(item_id))
    -> ;
    
CREATE TABLE TagItems (
    ->   tag_item_id INT PRIMARY KEY,
    ->   tag_id INT,
    ->   description VARCHAR(255),
    ->   FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
    -> );
    
