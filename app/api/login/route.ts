// /api/login.ts
import { NextRequest, NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";
import bcrypt from "bcryptjs";  // ใช้ bcryptjs แทน bcrypt

export async function POST(req: NextRequest) {
  console.log("📌 API login hit");

  try {
      const body = await req.json();  // อ่าน JSON request body
      const { phone, password } = body;

      // ตรวจสอบข้อมูลที่กรอก
      if (!phone || !password) {
          return NextResponse.json({ message: "⚠️ กรุณากรอกข้อมูลให้ครบถ้วน" }, { status: 400 });
      }

      // คำสั่ง SQL เพื่อดึงข้อมูลผู้ใช้ตามเบอร์โทร
      const query = `
          SELECT * FROM Customer WHERE phoneNumber = ?
      `;
      
      const [rows] = await mysqlPool.promise().query(query, [phone]);

      // ตรวจสอบว่าพบผู้ใช้ในฐานข้อมูลหรือไม่
      if (rows.length === 0) {
          return NextResponse.json({ message: "❌ เบอร์โทรนี้ไม่มีในระบบ" }, { status: 404 });
      }

      // ตรวจสอบรหัสผ่าน
      const user = rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
          return NextResponse.json({ message: "❌ รหัสผ่านไม่ถูกต้อง" }, { status: 401 });
      }

      // ส่งการตอบกลับเมื่อเข้าสู่ระบบสำเร็จ
      return NextResponse.json({ message: "✅ เข้าสู่ระบบสำเร็จ", user }, { status: 200 });

  } catch (err) {
      console.error("🚨 Error during login:", err);
      return NextResponse.json({ message: "❌ ล้มเหลวในการเข้าสู่ระบบ" }, { status: 500 });
  }
}