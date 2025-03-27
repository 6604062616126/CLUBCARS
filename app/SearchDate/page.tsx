"use client";

import Link from "next/link";
import React from "react";

export default function BookingPage() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center">
            {/* หัวข้อ */}
            <h1 className="text-3xl font-bold text-center mb-4">ค้นหาวันและสถานที่ที่เหมาะสม</h1>

            {/* รูปภาพพื้นหลังพร้อมกล่องฟอร์ม */}
            <div className="relative w-full h-[500px] flex items-center justify-center" style={{ backgroundImage: "url('/car.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="bg-white p-10 rounded-lg shadow-2xl w-96 bg-opacity-90">
                    <div className="mb-6">
                        <label className="block text-gray-700">วัน / เดือน / ปี</label>
                        <div className="flex space-x-2">
                            <input type="text" className="w-1/3 p-2 border rounded" defaultValue="10" />
                            <input type="text" className="w-1/3 p-2 border rounded" defaultValue="05" />
                            <input type="text" className="w-1/3 p-2 border rounded" defaultValue="2568" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700">เวลา</label>
                        <div className="flex space-x-2">
                            <input type="text" className="w-1/4 p-2 border rounded" defaultValue="11" />
                            <span className="self-center">:</span>
                            <input type="text" className="w-1/4 p-2 border rounded" defaultValue="30" />
                            <span className="self-center">น.</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700">สถานที่รับรถ</label>
                        <select className="w-full p-2 border rounded">
                            <option>สถานี MRT พหลโยธิน</option>
                        </select>
                    </div>

                    {/* ปุ่มค้นหารถว่าง */}
                    <Link href="/SearchCars">
                        <button className="w-full py-2 bg-[#0D3489] text-white rounded-md hover:bg-[#092C5D] transition flex justify-center items-center mt-6">
                            ค้นหารถว่าง
                        </button>
                    </Link>
                </div>
            </div>

            {/* ปุ่มย้อนกลับ */}
            <button className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                ย้อนกลับ
            </button>
        </div>
    );
}
