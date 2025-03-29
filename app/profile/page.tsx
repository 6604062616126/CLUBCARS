"use client";
import { useState } from "react";
import Link from "next/link";
import Rental from '../rental/page';

export function NotificationSettings() {
  const [expandedNotification, setExpandedNotification] = useState(null);

  const notifications = [
    { id: 1, title: "🔔 ระบบ: การจองของคุณได้รับการยืนยันแล้ว", time: "วันนี้ 10:30 AM", details: "หมายเลขการจอง: 12345\nวันที่รับรถ: 1 เมษายน 2025\nสถานที่รับรถ: สนามบินสุวรรณภูมิ" },
    { id: 2, title: "🔔 ระบบ: รถที่คุณเช่าได้ถูกส่งมอบแล้ว", time: "เมื่อวาน 5:00 PM", details: "รถของคุณถูกส่งมอบแล้วที่สถานที่ที่กำหนด โปรดตรวจสอบและยืนยันการรับรถ" },
    { id: 3, title: "🔔 ระบบ: โปรโมชั่นพิเศษสำหรับคุณ! ลด 10% สำหรับการจองครั้งต่อไป", time: "2 วันที่แล้ว", details: "ใช้โค้ดส่วนลด SPECIAL10 เมื่อทำการจองครั้งต่อไปเพื่อรับส่วนลด 10%" },
  ];

  return (
    <div className="p-6 min-w-2xl  mx-auto border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-1">การแจ้งเตือน</h2>
      <p className="text-sm text-gray-300 mb-4 ">____________________________________________________________________________________________________________________________________________</p>
      <p className="text-sm text-gray-500 mb-4">การแจ้งเตือนจากระบบ</p>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-gray-100 p-4 rounded-lg">
            <div
              className="cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => setExpandedNotification(expandedNotification === notification.id ? null : notification.id)}
            >
              <p className="text-sm font-semibold">{notification.title}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
            {expandedNotification === notification.id && (
              <div className="mt-2 p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-sm whitespace-pre-line">{notification.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export function rentalFilter() {
  /*รอใส่ตัวกรองสถานะถึงข้อมุลประวัติรถ */
}


export default function Pro() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const menuItems = [
    { id: "profile", label: "จัดการบัญชีโปรไฟล์" },
    { id: "password", label: "เปลี่ยนรหัสผ่าน" },
    { id: "notification", label: "การแจ้งเตือน" },
    { id: "contact", label: "ติดต่อ" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="p-6 min-w-2xl mx-auto ">
            <h2 className="text-xl font-semibold mb-4">จัดการบัญชีโปรไฟล์</h2>
            <form className="flex flex-col space-y-4">
              <label>
                ชื่อ:
                <input type="text" className="border p-2 rounded-lg w-full" />
              </label>
              <label>
                อีเมล:
                <input type="email" className="border p-2 rounded-lg w-full" />
              </label>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                บันทึกการเปลี่ยนแปลง
              </button>
            </form>
          </div>
        );
      case "password":
        return (
          <div className="p-6 min-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">เปลี่ยนรหัสผ่าน</h2>
            <form className="flex flex-col space-y-4">
              <label>
                รหัสผ่านเดิม:
                <input type="password" className="border p-2 rounded-lg w-full" />
              </label>
              <label>
                รหัสผ่านใหม่:
                <input type="password" className="border p-2 rounded-lg w-full" />
              </label>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                บันทึกการเปลี่ยนแปลง
              </button>
            </form>
          </div>
        );
      case "notification":
        return <NotificationSettings />;
      case "contact":
        return (
          <div className="p-6 min-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">ติดต่อเรา</h2>
            <p>Email: support@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        );
      case "history":
        return (
          <div className=" min-w-2xl mx-auto">
            <div className="grid place-items-center w-full h-full relative">
              <div className="absolute top-0 left-0 w-full text-center text-white bg-white bg-opacity-100 p-5 ">
                <h2 className="text-black text-left text-2xl font-bold ">การจองของฉัน</h2>
                <div className="mt-4 border">
                </div>
                <p className="py-3 px-20 text-gray-800 text-right">สถานะการเช่ารถของฉัน : </p>
              </div>
              <Rental />
            </div>
          </div>
        );
      default:
        return <div className="p-6 min-w-2xl mx-auto">เลือกเมนูจากแถบด้านซ้าย</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-72 space-y-4 ml-10">
        <div className="flex flex-col items-center mb-10 mt-10">
          <h2 className="text-xl font-semibold mb-4 mt-20">โปรไฟล์</h2>
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">👤</div>
          <div className="mt-4 text-center">
            <p className="text-blue-600 cursor-pointer">แก้ไข</p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab("history")}
          className={`w-full text-left py-2 px-4 rounded-lg transition-all bg-white ${activeTab === "history" ? "bg-gray-200" : "hover:bg-gray-200"}`}
        >
          การจองของฉัน
        </button>

        <div className="bg-white shadow-lg rounded-lg p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left py-2 px-4 rounded-lg transition-all ${activeTab === item.id ? "bg-gray-200" : "hover:bg-gray-200"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setActiveTab("logout")}
          className={`w-full text-left py-2 px-4 rounded-lg transition-all bg-white ${activeTab === "logout" ? "bg-gray-200" : "hover:bg-gray-200"}`}
        >
          ออกจากระบบ
        </button>
      </div>
      <div className="flex-1 p-10 mt-20">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">{renderContent()}</div>
      </div>
    </div>
  );
}
