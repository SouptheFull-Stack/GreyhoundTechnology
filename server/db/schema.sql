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

-- Users
INSERT INTO user (username, first_name, last_name, bio) VALUES
('mitra', 'Mitra', 'Ahmadi', 'Full-stack dev and violin teacher'),
('alex99', 'Alex', 'Smith', 'Tech blogger and gamer'),
('sara_dev', 'Sara', 'Lee', 'Frontend developer and coffee lover');

-- Blogs
INSERT INTO blog (title, author_id, content, category, dateCreated, timeSincePost) VALUES
('Getting Started with PostgreSQL', 2, 'This post covers the basics of Postgres setup...', 'Database', '2025-08-01', '2025-08-02'),
('Building a Music App', 1, 'Sharing my experience building a music tutor scheduler...', 'Projects', '2025-08-05', '2025-08-06'),
('Top 10 VSCode Extensions', 3, 'Here are my must-have VSCode extensions...', 'Tools', '2025-08-10', '2025-08-12');

-- Categories
INSERT INTO category (categoryName, blog_id) VALUES
('Database', 1),
('Projects', 2),
('Tools', 3),
('Tutorial', 1),
('Guides', 2);

-- a user can have many blogs, but blogs can only have one user: One to many

