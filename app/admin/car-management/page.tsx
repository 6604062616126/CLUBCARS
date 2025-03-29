"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const CarManagementPage: React.FC = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const router = useRouter();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await fetch("/api/getcar");
                const data = await res.json();
                setCars(data);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };
        fetchCars();
    }, []);

    // ฟังก์ชันลบรถ
    const handleDelete = async (carId: string) => {
        if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบรถคันนี้?")) {
            try {
                const res = await fetch(`/api/getcar?id=${carId}`, {
                    method: "DELETE",
                });

                if (res.ok) {
                    alert("ลบรถสำเร็จ!");
                    setCars(cars.filter(car => car.id !== carId));
                } else {
                    const errorData = await res.json();
                    alert("เกิดข้อผิดพลาด: " + errorData.message);
                }
            } catch (error) {
                alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
            }
        }
    };

    // กรองรถตามสถานะและคำค้นหา
    const filteredCars = cars.filter(car => {
        const matchesSearch = car.LPlate.includes(searchTerm) ||
            car.model.includes(searchTerm) ||
            car.brand.includes(searchTerm);
        const matchesTab = activeTab === "all" || car.status === activeTab;
        return matchesSearch && matchesTab;
    });

    return (
        <div className="pt-20 min-h-screen p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">การจัดการข้อมูลรถ</h1>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <Link href="/admin">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                            ย้อนกลับ
                        </button>
                    </Link>
                    <Link href="/admin/car-management/add">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                            เพิ่มข้อมูลรถใหม่
                        </button>
                    </Link>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <input
                        type="text"
                        placeholder="ค้นหาจากทะเบียนรถ, รุ่น, ยี่ห้อ..."
                        className="p-2 border rounded-lg md:w-96"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "all" ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                        >
                            ทั้งหมด
                        </button>
                        <button
                            onClick={() => setActiveTab("พร้อมให้เช่า")}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "พร้อมให้เช่า" ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                        >
                            พร้อมให้เช่า
                        </button>
                        <button
                            onClick={() => setActiveTab("กำลังเช่า")}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "กำลังเช่า" ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
                        >
                            กำลังเช่า
                        </button>
                        <button
                            onClick={() => setActiveTab("ซ่อมบำรุง")}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "ซ่อมบำรุง" ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                        >
                            ซ่อมบำรุง
                        </button>
                    </div>
                </div>
            </div>

            {/* Cars List */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {/* หัวข้อหลัก */}
                <div className="grid grid-cols-7 gap-4 py-4 font-semibold text-gray-800 border-b">
                    <div>ทะเบียน</div>
                    <div>รุ่น</div>
                    <div>ยี่ห้อ</div>
                    <div>ประเภท</div>
                    <div>สถานะ</div>
                    <div>ราคาเช่า</div>
                    <div>การจัดการ</div>
                </div>

                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <div key={car.id} className="grid grid-cols-7 gap-4 py-4 border-b hover:bg-gray-50">
                            <div className="truncate">{car.LPlate}</div>
                            <div className="truncate">{car.model}</div>
                            <div className="truncate">{car.brand}</div>
                            <div className="truncate">{car.carType}</div>
                            <div>
                                <span className={`px-2 py-1 rounded-full text-xs ${car.status === "พร้อมให้เช่า" ? "bg-green-100 text-green-800" :
                                        car.status === "กำลังเช่า" ? "bg-yellow-100 text-yellow-800" :
                                            "bg-red-100 text-red-800"
                                    }`}>
                                    {car.status}
                                </span>
                            </div>
                            <div>{car.rentalPrice} บาท</div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => router.push(`/admin/car-management/edit?id=${car.id}`)}
                                    className="text-blue-600 hover:text-blue-800 p-1"
                                    title="แก้ไข"
                                >
                                    <FiEdit size={18} />
                                </button>
                                <button
                                    onClick={() => handleDelete(car.id)}
                                    className="text-red-600 hover:text-red-800 p-1"
                                    title="ลบ"
                                >
                                    <FiTrash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-lg text-gray-500 py-4">ไม่พบข้อมูลรถ</p>
                )}
            </div>
        </div>
    );
};

export default CarManagementPage;