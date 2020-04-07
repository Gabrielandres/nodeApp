CREATE TABLE loginCredentials
( 
  
  id BIGSERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  UNIQUE (username)

);
  
 