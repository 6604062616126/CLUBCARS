import mysql from "mysql2/promise";

export default function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: '3306',
        database: 'rental',
        user: 'root',
        password: 'password'
    });
  
    const [rows, fields] = await connection.query('SELECT * signin');
    console.log(rows);
    

    res.status(200).json({name : " "});
  }
}

