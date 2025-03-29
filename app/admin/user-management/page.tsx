"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserManagementPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const router = useRouter();

    // ข้อมูลผู้ใช้งานตัวอย่าง (เพิ่ม phoneNumber)
    const users = [
        {
            id: 1,
            userId: "USR001",
            name: "John Doe",
            email: "john@example.com",
            phoneNumber: "0812345678", // เพิ่มเบอร์โทร
            address: "123 Bangkok",
            status: "Active",
            joinDate: "10/06/2023"
        },
        {
            id: 2,
            userId: "USR002",
            name: "Jane Smith",
            email: "jane@example.com",
            phoneNumber: "0898765432", // เพิ่มเบอร์โทร
            address: "456 Chiang Mai",
            status: "Inactive",
            joinDate: "15/06/2023"
        },
        {
            id: 3,
            userId: "USR003",
            name: "Bob Johnson",
            email: "bob@example.com",
            phoneNumber: "0823456789", // เพิ่มเบอร์โทร
            address: "789 Phuket",
            status: "Active",
            joinDate: "20/06/2023"
        }
    ];

    // กรองผู้ใช้งานตามสถานะ (เพิ่ม phoneNumber ในเงื่อนไขค้นหา)
    const filteredUsers = users.filter(user => {
        const matchesSearch = user.userId.includes(searchTerm) ||
            user.name.includes(searchTerm) ||
            user.email.includes(searchTerm) ||
            user.phoneNumber.includes(searchTerm); // เพิ่มค้นหาจากเบอร์โทร
        const matchesTab = activeTab === "all" || user.status === activeTab;
        return matchesSearch && matchesTab;
    });

    // ไปหน้าเพิ่มผู้ใช้งาน
    const goToAddUser = () => {
        router.push("/admin/user-management/add");
    };

    // ไปหน้าแก้ไขผู้ใช้งาน
    const goToEditUser = (userId: string) => {
        router.push(`/admin/user-management/edit?id=${userId}`);
    };

    return (
        <div className="pt-20 min-h-screen p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">การจัดการผู้ใช้งาน</h1>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <Link href="/admin">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                            ย้อนกลับ
                        </button>
                    </Link>
                    <button
                        onClick={goToAddUser}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        เพิ่มผู้ใช้งาน
                    </button>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <input
                        type="text"
                        placeholder="ค้นหาจากรหัสผู้ใช้งาน, ชื่อ, อีเมล, เบอร์โทร..."
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
                            onClick={() => setActiveTab("Active")}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "Active" ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                        >
                            Active
                        </button>
                        <button
                            onClick={() => setActiveTab("Inactive")}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "Inactive" ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                        >
                            Inactive
                        </button>
                    </div>
                </div>
            </div>

            {/* Users List */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold text-gray-700">
                    <div className="col-span-1">รหัสผู้ใช้งาน</div>
                    <div className="col-span-1">ชื่อ</div>
                    <div className="col-span-2">อีเมล</div>
                    <div className="col-span-1">เบอร์โทร</div> {/* เพิ่มคอลัมน์เบอร์โทร */}
                    <div className="col-span-2">ที่อยู่</div>
                    <div className="col-span-1">สถานะ</div>
                    <div className="col-span-2">วันที่สมัคร</div>
                    <div className="col-span-2">การจัดการ</div>
                </div>

                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div key={user.id} className="grid grid-cols-12 p-4 border-b hover:bg-gray-50">
                            <div className="col-span-1 font-medium truncate">{user.userId}</div>
                            <div className="col-span-1 truncate">{user.name}</div>
                            <div className="col-span-2 truncate">
                                <span className="inline-block min-w-0 max-w-full overflow-hidden text-ellipsis">
                                    {user.email}
                                </span>
                            </div>
                            <div className="col-span-1 truncate">{user.phoneNumber}</div> {/* แสดงเบอร์โทร */}
                            <div className="col-span-2 truncate">{user.address}</div>
                            <div className="col-span-1">
                                <span className={`px-2 py-1 rounded-full text-xs ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                    {user.status}
                                </span>
                            </div>
                            <div className="col-span-2 truncate">{user.joinDate}</div>
                            <div className="col-span-2 flex gap-2">
                                <button
                                    onClick={() => goToEditUser(user.userId)}
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-8 text-center text-gray-500">
                        ไม่พบข้อมูลผู้ใช้งานที่ค้นหา
                    </div>
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg">ย้อนกลับ</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                    <button className="px-4 py-2 bg-gray-200 rounded-lg">2</button>
                    <button className="px-4 py-2 bg-gray-200 rounded-lg">3</button>
                    <button className="px-4 py-2 bg-gray-200 rounded-lg">ถัดไป</button>
                </div>
            </div>
        </div>
    );
};

export default UserManagementPage;