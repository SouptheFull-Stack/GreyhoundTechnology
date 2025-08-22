-- check if database already exists
DROP DATABASE IF EXISTS greyhound_technology_db;

-- Create database
CREATE DATABASE greyhound_technology_db;

\c greyhound_technology_db;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS category;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    bio VARCHAR(150)
);

CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    title VARCHAR(80),
    author_id INTEGER NOT NULL,
    FOREIGN KEY (author_id) REFERENCES user(id),
    content TEXT NOT NULL,
    category TEXT,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT TIMESTAMP,
    timeSincePost DATE NOT NULL
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    categoryName VARCHAR(25),
    blog_id INTEGER NOT NULL,
    FOREIGN KEY (blog_id) REFERENCES blog(id)
)

-- a user can have many blogs, but blogs can only have one user: One to many

