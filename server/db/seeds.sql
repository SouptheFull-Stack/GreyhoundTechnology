-- \c greyhound_technology_db;

-- -- Users
-- INSERT INTO user (username, first_name, last_name, bio) VALUES
-- ('mitra', 'Mitra', 'Ahmadi', 'Full-stack dev and violin teacher'),
-- ('alex99', 'Alex', 'Smith', 'Tech blogger and gamer'),
-- ('sara_dev', 'Sara', 'Lee', 'Frontend developer and coffee lover');

-- -- Blogs
-- INSERT INTO blog (title, author_id, content, category, dateCreated, timeSincePost) VALUES
-- ('Getting Started with PostgreSQL', 2, 'This post covers the basics of Postgres setup...', 'Database', '2025-08-01', '2025-08-02'),
-- ('Building a Music App', 1, 'Sharing my experience building a music tutor scheduler...', 'Projects', '2025-08-05', '2025-08-06'),
-- ('Top 10 VSCode Extensions', 3, 'Here are my must-have VSCode extensions...', 'Tools', '2025-08-10', '2025-08-12');

-- -- Categories
-- INSERT INTO category (categoryName, blog_id) VALUES
-- ('Database', 1),
-- ('Projects', 2),
-- ('Tools', 3),
-- ('Tutorial', 1),
-- ('Guides', 2);

-- Users
INSERT INTO adminUser (username, first_name, last_name, bio) VALUES
('mitra', 'Mitra', 'Ahmadi', 'Full-stack dev and violin teacher'),
('alex99', 'Alex', 'Smith', 'Tech blogger and gamer'),
('sara_dev', 'Sara', 'Lee', 'Frontend developer and coffee lover');

-- Blogs
INSERT INTO blog (title, author_id, content, date_created) VALUES
('Getting Started with PostgreSQL', 2, 'This post covers the basics of Postgres setup...', '2025-08-01' ),
('Building a Music App', 1, 'Sharing my experience building a music tutor scheduler...', '2025-08-05'),
('Top 10 VSCode Extensions', 3, 'Here are my must-have VSCode extensions...', '2025-08-10');

-- Categories
INSERT INTO category (category_name) VALUES
('Database'),
('Projects'),
('Tools'),
('Tutorial'),
('Guides');


