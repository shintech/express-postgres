CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  short VARCHAR,
  body VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  details VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);