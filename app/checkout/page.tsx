"use client";

import React, { useState } from "react";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    additionalInfo: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <body className="bg-[#F2F2F2]">
        <div className="flex items-center justify-center p-6 bg-gray-100 min-h-screen mt-20">
            <div className="flex w-full max-w-4xl space-x-6">
                <div className="w-[65%] bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold mb-2">กรอกข้อมูลผู้เช่า</h3>
                  <p className="text-sm text-gray-300 mb-4 ">________________________________________________________________</p>
                  <div className="mb-4">
                    <label className="font-semibold">ชื่อจริง</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="* ชื่อจริง" className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="font-semibold">นามสกุล</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="* นามสกุล" className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="font-semibold">อีเมล</label>
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="* อีเมล" className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="font-semibold">เบอร์โทร</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="* +66" className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="font-semibold">ที่อยู่</label>
                    <input name="address" value={formData.address} onChange={handleChange} placeholder="* ที่อยู่ที่สามารถติดต่อได้" className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="font-semibold">รายละเอียดเพิ่มเติม (หากมี)</label>
                    <input name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder="รายละเอียดเพิ่มเติม" className="w-full border p-2 rounded" />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded">ยืนยันข้อมูล</button>
            </div>

            <div className="w-[35%] bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">สรุปข้อมูลการเช่ารถ</h3>
              <p className="text-sm text-gray-300 mb-4 ">___________________________________</p>
              <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-600 ">รูปภาพรถ</div>
              <p className="font-semibold">Mercedes-AMG C 43 Coupe 2</p>
              <p className="text-sm text-gray-300 mb-4 ">___________________________________</p>
              <p className="text-gray-500 ">จุดรับรถ-จุดคืนรถ:</p>
              <p className="text-black font-bold  ">สนามบินดอนเมือง</p>
              <p className="text-gray-500 mt-3 ">ระบบเกียร์</p>
              <p className="text-black font-bold ">เกียร์ออโต้</p>
              <p className="text-sm text-gray-300 mb-4 ">___________________________________</p>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
                <p className="text-gray-500 mt-1">วัน-เวลารับรถ</p>
                <p className="text-black font-semibold">29/03/2025 - 11:30 น.</p>
                <p className="text-gray-500 font-semibold mt-9">3 วัน</p>
                <p className="text-gray-500 mt-9">วัน-เวลาคืนรถ</p>
                <p className="text-black font-semibold">31/03/2025 - 12:00 น.</p>
              </div>
            </div>
          </div>
        </div>
    </body>
  );
}
