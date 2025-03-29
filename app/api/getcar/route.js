// app/api/getcars/route.ts

import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";  // เชื่อมต่อฐานข้อมูล MySQL

export async function GET() {
    try {
        // คิวรีข้อมูลจากตาราง Car
        const [rows] = await mysqlPool.promise().query("SELECT * FROM Car");

        // ส่งข้อมูลกลับในรูปแบบ JSON
        return NextResponse.json(rows);
    } catch (err) {
        console.error("🚨 Error fetching cars: ", err.message);
        return NextResponse.json({ message: "เกิดข้อผิดพลาดในการดึงข้อมูลรถ" }, { status: 500 });
    }
}
