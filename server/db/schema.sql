-- check if database already exists
DROP DATABASE IF EXISTS greyhound_technology_db;

-- Create database
CREATE DATABASE greyhound_technology_db;

\c greyhound_technology_db;

DROP TABLE IF EXISTS adminUser;
DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS category;

CREATE TABLE adminUser (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    bio VARCHAR(150)
);

CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    title VARCHAR(80),
    author_id INTEGER,
    FOREIGN KEY (author_id) REFERENCES adminUser(id),
    content TEXT NOT NULL,
    category_id INTEGER,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    -- timeSincePost DATE NOT NULL
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(25),
    blog_id INTEGER,
    FOREIGN KEY (blog_id) REFERENCES blog(id)
);

CREATE TABLE blogcategory (
    id SERIAL PRIMARY KEY,
    blog_id INTEGER,
    FOREIGN KEY (blog_id) REFERENCES blog(id),
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

-- a user can have many blogs, but blogs can only have one user: One to many

