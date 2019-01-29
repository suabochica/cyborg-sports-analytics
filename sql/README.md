# Database
- Database: MySQL

## Database info
- Database name: esgrima/blog
- Database user: bos_user
- Database password: bos_***

## OS X setup

Install `mysql` via homebrew

    $ brew install mysql

Start mysql server

    $ mysql.server start

Connect to mysql server with the `root` user

    $ mysql -uroot -pF***1

Create database and user to the database

```sql
CREATE DATABASE esgrima;
CREATE USER 'bos_user'@'localhost' IDENTIFIED BY 'bos_p***';
GRANT ALL PRIVILEGES ON esgrima.* TO 'bos_user'@'localhost';
FLUSH PRIVILEGES;
```

Connect to mysql server with the `bos_user`

    $ mysql -ubos_user -p

Associate the `esgrima` database with the `bos_user`

```sql
USE esgrima;
```

Import database from `.sql` file:

    $ mysql -u bos_user -p esgrima < file.sql

To check the tables of the database run:

```sql
SHOW TABLES;
```

## Useful Queries

Query to check all use users in mysql logged as root user:

```sql
SELECT User, Host, Password FROM mysql.user;
```

Query to show table columns:

```sql
DESCRIBE [table_name]
```

Query to load data from a `.csv` file after use a database:

```sql
LOAD DATA INFILE '[~/path/to/file.csv]'
INTO TABLE [table_name]
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```

> Probably you have to face the `ERROR 1290 (HY000)`, check how to [solve the ERROR 1290 (HY000)](#ERROR-1290-(HY000))

## Blog Database Queries

Query to create the `persons` table:

```sql
CREATE TABLE IF NOT EXISTS persons (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
)  ENGINE=INNODB;
```

Query to create the `posts` table:

```sql
CREATE TABLE IF NOT EXISTS posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id INT NOT NULL,
    CONSTRAINT posts_person_fk
    FOREIGN KEY fk_author(author_id)
    REFERENCES persons(person_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
)  ENGINE=INNODB;
```

## Solve Errors

### Error: ER_NOT_SUPPORTED_AUTH_MODE:

To solve mysql 8.0 `Client does not support authentication protocol requested by server; consider upgrading MySQL client`, in mysql run the next query

```sql
ALTER USER 'bos_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bos_****';
FLUSH PRIVILEGES;
```

### ERROR 1290 (HY000)

To solve `ERROR 1290 (HY000): The MySQL server is running with the --secure-file-priv option so it cannot execute this statement`, do the next:

1. Create the `~/.my.cnf` file with the next content: `[mysqld] secure-file-priv=""`
2. Run `mysql.server restart`