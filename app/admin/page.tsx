"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChartBar, FaUsers, FaCar, FaClipboardList, FaMoneyBillWave } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const Card = ({ href, icon: Icon, title, bgColor }: { href: string; icon: React.ElementType; title: string; bgColor: string }) => (
    <Link href={href} className={`p-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-4 ${bgColor}`}>
        <Icon className="text-white text-3xl" />
        <span className="text-lg font-medium text-white">{title}</span>
    </Link>
);

const AdminDashboard: React.FC = () => {
    const [visitData, setVisitData] = useState([]);
    const [bookingData, setBookingData] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res1 = await fetch("/api/user-management");
                const res2 = await fetch("/api/car-management");
                const res3 = await fetch("/api/rating");

                const visits = await res1.json();
                const bookings = await res2.json();
                const statsData = await res3.json();

                setVisitData(visits);
                setBookingData(bookings);
                setStats(statsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="mt-20 px-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <p className="text-gray-600 mb-10">Manage all aspects of the platform efficiently.</p>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card href="/admin/user-management" icon={FaUsers} title="User Management" bgColor="bg-yellow-500 hover:bg-yellow-600" />
                <Card href="/admin/car-management" icon={FaCar} title="Car Management" bgColor="bg-green-500 hover:bg-green-600" />
                <Card href="/admin/staff-management" icon={FaUsers} title="Staff Management" bgColor="bg-red-500 hover:bg-yellow-600" />
                <Card href="/admin/rating" icon={FaChartBar} title="Rating" bgColor="bg-blue-500 hover:bg-blue-600" />
                <Card href="/admin/payment-verification" icon={FaMoneyBillWave} title="ตรวจสอบการชำระเงิน" bgColor="bg-purple-500 hover:bg-purple-600" />
            </div>

            {/* Analytics Section */}
            <section className="mt-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">วิเคราะห์ข้อมูล</h2>

                {/* Filters */}
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-wrap gap-4 items-center">
                    <select className="p-2 border rounded-lg flex-grow">
                        <option>ทั้งหมด</option>
                        <option>รายวัน</option>
                        <option>รายสัปดาห์</option>
                        <option>รายเดือน</option>
                    </select>
                    <input type="date" className="p-2 border rounded-lg" />
                    <input type="date" className="p-2 border rounded-lg" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">ค้นหา</button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {stats.map(({ title, value, color, change, changeColor = "text-green-500" }, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-gray-500 mb-2">{title}</h3>
                            <p className={`text-3xl font-bold ${color}`}>{value}</p>
                            <p className={`text-sm mt-1 ${changeColor}`}>{change} จากเดือนที่แล้ว</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Charts Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4">สถิติการเข้าชม</h2>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={visitData}>
                                <XAxis dataKey="date" stroke="#8884d8" />
                                <YAxis />
                                <Tooltip />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="visits" fill="#8884d8" barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4">สถิติการจองรถ</h2>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={bookingData}>
                                <XAxis dataKey="date" stroke="#82ca9d" />
                                <YAxis />
                                <Tooltip />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="bookings" fill="#82ca9d" barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            {/* Recent Activities */}
            <section className="bg-white p-6 rounded-xl shadow-md mt-12">
                <h2 className="text-xl font-semibold mb-4">กิจกรรมล่าสุด</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-center p-3 border-b last:border-b-0">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <p className="font-medium">ผู้ใช้งานใหม่ #{item}234</p>
                                <p className="text-sm text-gray-500">สมัครสมาชิกเมื่อ {item} ชั่วโมงที่แล้ว</p>
                            </div>
                            <span className="text-sm text-gray-500">{item}:30 น.</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AdminDashboard;