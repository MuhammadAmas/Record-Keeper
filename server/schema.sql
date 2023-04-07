CREATE DATABASE record_keeper_app;
USE record_keeper_app;

CREATE TABLE records (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO records (title, contents)
VALUES 
('Meeting notes', 'Discussed upcoming project timelines and resource allocation.'),
('Shopping list', 'Milk, eggs, bread, cheese, and apples.'),
('Fitness log', 'Ran 5 miles in 40 minutes. Did 3 sets of 10 reps for bench press.');
