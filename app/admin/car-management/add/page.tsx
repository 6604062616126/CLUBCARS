"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AddCarPage: React.FC = () => {
    const [LPlate, setLPlate] = useState("");
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [carType, setCarType] = useState("Sedan");
    const [status, setStatus] = useState("พร้อมให้เช่า");
    const [rentalPrice, setRentalPrice] = useState(""); // เปลี่ยนเป็น empty string
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const car = {
            LPlate,
            model,
            brand,
            carType,
            status,
            rentalPrice: Number(rentalPrice), // แปลงเป็น number ที่นี่
        };

        try {
            const res = await fetch("/api/addcar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(car),
            });

            const result = await res.json();

            if (res.ok) {
                alert("เพิ่มรถสำเร็จ!");
                router.push("/admin/car-management");
            } else {
                alert("เกิดข้อผิดพลาด: " + result.message);
            }
        } catch (error) {
            alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
        }
    };

    return (
        <div className="min-h-screen p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">เพิ่มรถใหม่</h1>
                    <Link href="/admin/car-management">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">ย้อนกลับ</button>
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ทะเบียนรถ</label>
                            <input
                                type="text"
                                value={LPlate}
                                onChange={(e) => setLPlate(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ยี่ห้อ</label>
                            <input
                                type="text"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">รุ่น</label>
                            <input
                                type="text"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
                            <select
                                value={carType}
                                onChange={(e) => setCarType(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Pickup">Pickup</option>
                                <option value="Van">Van</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">สถานะ</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="พร้อมให้เช่า">พร้อมให้เช่า</option>
                                <option value="กำลังเช่า">กำลังเช่า</option>
                                <option value="ซ่อมบำรุง">ซ่อมบำรุง</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ราคาเช่า (บาท/วัน)</label>
                            <input
                                type="number"
                                value={rentalPrice}
                                onChange={(e) => setRentalPrice(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-6">
                        <Link href="/admin/car-management">
                            <button
                                type="button"
                                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400"
                            >
                                ยกเลิก
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
                        >
                            บันทึก
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCarPage;