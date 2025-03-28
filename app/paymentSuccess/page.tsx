"use client";

import Link from "next/link";
import React from "react";

export default function CancelBookingPage() {
    return (
        <div className="container mx-auto p-20">
            {/* ปุ่มย้อนกลับ */}
            <Link href="/">
                <button className="text-blue-600">&larr; ย้อนกลับ</button>
            </Link>

            {/* หัวข้อ */}
            <h1 className="text-2xl font-bold mt-4">วิธีการชำระเงิน</h1>

            <div className="grid grid-cols-3 gap-6 mt-6">
                {/* ข้อมูลการจอง */}
                <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <img src="/car1.png" alt="car" className="w-32 h-24 rounded-md object-cover" />
                        <div>
                            <h2 className="font-bold">Honda Civic 2023</h2>
                            <p className="text-sm text-gray-500">หมายเลขการจอง <strong>21356</strong></p>
                            <p className="text-sm text-gray-500">จุดรับรถ - จุดคืนรถ</p>
                            <p className="text-sm font-bold">สนามบินดอนเมือง</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 mt-4 rounded-lg">
                        <p className="text-sm">วัน-เวลารับรถ: <strong>29/03/2025</strong></p>
                        <p className="text-sm">วัน-เวลาคืนรถ: <strong>31/03/2025</strong></p>
                    </div>

                    {/* รายละเอียดราคา */}
                    <div className="mt-6">
                        <h2 className="font-bold">รายละเอียด</h2>
                        <div className="flex justify-between mt-2 text-gray-700">
                            <p>ค่าเช่ารถ 3 วัน</p>
                            <p>฿13,000</p>
                        </div>
                        <p className="text-sm text-gray-400">ราคาต่อวัน 4444 × 3 วัน</p>

                        <div className="flex justify-between mt-2 text-gray-700">
                            <p>ค่ารับ - ค่าส่ง</p>
                            <p>฿200</p>
                        </div>
                        <p className="text-sm text-gray-400">ค่ารับ 100, ค่ารถ 100</p>

                        <div className="flex justify-between mt-2 text-gray-700">
                            <p>ค่ามัดจำ</p>
                            <p className="text-gray-400">฿5000</p>
                        </div>
                        <p className="text-sm text-red-500">ราคานี้ไม่รวมส่วนลดและโปรโมชั่น</p>
                    </div>
                </div>

                {/* สถานะการจอง */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-6">
                    <h2 className="text-lg font-bold mb-2">สถานะการจอง</h2>
                    <div className="bg-gray-50 p-20 rounded-lg text-center">
                        <span className="text-3xl font-bold text-blue-600">ชำระเงินเสร็จสิ้น</span>
                    </div>
                </div>

                {/* ราคารวม */}
                <div className="col-span-3 bg-gray-100 p-6 rounded-lg shadow-md text-center">
                    <h2 className="font-bold text-lg">ราคารวมทั้งหมด</h2>
                    <p className="text-2xl font-bold mt-2">฿13,500</p>
                </div>
            </div>
        </div>
    );
}
