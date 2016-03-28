DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY AUTOINCREMENT,
  name varchar(100) NOT NULL,
	email varchar(100) NOT NULL UNIQUE,
  password varchar(100) NOT NULL,
  birthday date NULL,
  created_at date NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name, email, password, birthday, created_at) VALUES (1, 'user1', 'user1@test.com', 'password', '1991-04-17', '2016-01-10 12:10:12');
INSERT INTO users (id, name, email, password, birthday, created_at) VALUES (2, 'user2', 'user2@test.com', 'password', '1989-04-17', '2016-01-11 13:10:12');
