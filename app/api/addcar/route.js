
import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function POST(req) {
    try {
        const { LPlate, model, brand, carType, rentalPrice, status } = await req.json();

        if (!LPlate || !model || !brand || !carType || !rentalPrice || !status) {
            return NextResponse.json({ message: "⚠️ กรุณากรอกข้อมูลให้ครบถ้วน" }, { status: 400 });
        }

        const query = `
            INSERT INTO Car( LPlate, model, brand, carType, rentalPrice, status)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await mysqlPool.promise().query(query, [LPlate, model, brand, carType, rentalPrice, status]);

        return NextResponse.json({ message: "เพิ่มข้อมูลเรียบร้อยแล้ว" }, { status: 200 });

    } catch (err) {
        console.error("🚨 ERROR: ", err.message, err.stack);  // แสดงรายละเอียด Error

        return NextResponse.json({ message: `ล้มเหลว: ${err.message}` }, { status: 500 });
    }
}
