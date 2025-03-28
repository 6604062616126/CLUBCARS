import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("กำลังเชื่อมต่อฐานข้อมูล MySQL...");

    // ตรวจสอบว่ามีการตั้งค่าผ่าน environment variables
    const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

    if (!DB_HOST || !DB_PORT || !DB_DATABASE || !DB_USER || !DB_PASSWORD) {
      return res.status(400).json({ error: "Missing database configuration" });
    }

    // เชื่อมต่อกับฐานข้อมูล MySQL
    const mysqlConnection = await mysql.createConnection({
      host: DB_HOST,
      port: Number(DB_PORT), // แปลง DB_PORT เป็นตัวเลข
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
    });

    console.log("เชื่อมต่อ MySQL สำเร็จ!");

    // ดึงข้อมูลจากตาราง customer ใน MySQL
    const [rows] = await mysqlConnection.query('SELECT * FROM customer');

    // ส่งผลลัพธ์เป็น JSON
    res.status(200).json({ customers: rows });

    // ปิดการเชื่อมต่อฐานข้อมูล MySQL
    await mysqlConnection.end();
  } catch (error) {
    if (error instanceof Error) {
      console.error('Database connection failed:', error.message);
      res.status(500).json({ error: 'Database connection failed', details: error.message });
    } else {
      console.error('Unknown error:', error);
      res.status(500).json({ error: 'Unknown error', details: String(error) });
    }
  }
}