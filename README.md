Assignment README

A. API in NodeJS/Python
I created an API app.get('/login', (req,res) =>{}) in NodeJS/Python that allows user login via username and password with the following requirements:

The username must be alphanumeric and have a length between 6 and 12 characters.
The password can contain alphabets, numbers, and special characters.
The minimum password length is 6 characters.

B. NodeJS/Python + MySQL assignment
Implemented a function getUserByCompanyId in Node.js that takes a companyId as a parameter and returns a list of users belonging to that company. The database schema includes two tables:

company table with columns: companyId and companyName.
user table with columns: userId, userName, email, mobile, password, and companyId (foreign key to company table).

C. NodeJs/Python + MySQL assignment
I created a function getOrdersPast7Days in Node.js that retrieves all orders created in the past 7 days from the orders table. The orders table has columns: orderId, title, description, and createdAt.

D. API in NodeJs/Python
I created a class Fruit with the following fields: id, name, and color. Implemented an API app.get('/fruits', (req,res) =>{}) that returns a sorted list of Fruit objects based on their color.