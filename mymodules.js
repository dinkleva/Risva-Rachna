// connecting mysql
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dinkleva',
    database: 'mydatabase'

})

function getUserByCompanyid(companyid, callback){
    const sql = 'SELECT * FROM user WHERE companyid = ?'

    pool.query(sql, [companyid], (error, results) =>{

        if(error){
            callback(error, null)
        }
        else{
            callback(null, results)
        }
    })
}


// Function to get orders created in the past 7 days
function getOrdersPast7Days(callback) {
    // Calculate the date 7 days ago
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 7);
  
    // SQL query to retrieve orders created in the past 7 days
    const sql = 'SELECT * FROM orders WHERE createdAt >= ?';
  
    // Execute the query
    pool.query(sql, [pastDate], (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  }


module.exports = {
    getUserByCompanyid,
    getOrdersPast7Days
}