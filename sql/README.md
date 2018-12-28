# Database
- Database: MySQL

## Database info
- Database name: esgrima
- Database user: bos_user
- Database password: bos_****

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
CREATE USER 'bos_user'@'localhost' IDENTIFIED BY 'password';
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

To solve mysql 8.0 `Client does not support authentication protocol requested by server; consider upgrading MySQL client`, in mysql run the next query

```sql
ALTER USER 'bos_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bos_****';
FLUSH PRIVILEGES;
```