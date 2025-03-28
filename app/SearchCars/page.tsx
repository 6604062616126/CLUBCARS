"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import '../SearchCars/globals.css';

const SearchCars = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto mt-[2cm] w-[90%]">
      
        <div className="col-span-1">
          <div className="bg-[#F2F2F2] shadow-md rounded-lg p-6 w-[95%] h-[90%]">
          <h3 className="text-gray-600">จุดรับ-คืนรถ</h3>
          <p className="text-lg font-bold">สนามบินดอนเมือง</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-[#F2F2F2] shadow-md rounded-lg p-6 w-[160%] h-[90%]">
            <h3 className="text-gray-600">วัน-เวลารับรถ</h3>
            <p className="text-lg font-bold">29/03/2025 11:30 น.</p>
          </div>

        </div>
        <div className="col-span-1 flex justify-between">
          <div><br></br>
            <h3 className="text-gray-600">วัน-เวลาคืนรถ</h3>
            <p className="text-lg font-bold">29/03/2025 11:30 น.</p>
          </div>

          <button className="bg-[#0D3489] text-white w-[130px] h-[50px] mt-4 px-6 py-2 rounded-md hover:bg-[#092C5D] transition">
            ค้นหารถเช่า
          </button>
        </div>
          

      
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 md:col-span-1 h-[520px]">
          <h2 className="text-xl font-bold mb-4">ตัวกรองการค้นหา</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">ช่วงราคา</label>
            <div className="flex space-x-2">
              <input type="number" min="1" className="border p-2 w-full rounded-md" placeholder="ขั้นต่ำ" />
              <input type="number" min="1" className="border p-2 w-full rounded-md" placeholder="สูงสุด" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">ประเภทของรถ</label>
            <select className="border p-2 w-full rounded-md">
              <option>รถเก๋ง</option>
              <option>รถกระบะ</option>
              <option>SUV</option>
              <option>MPV</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">สถานที่รับรถ</label>
            <select className="border p-2 w-full rounded-md">
              <option>สนามบินดอนเมือง</option>
              <option>สนามบินสุวรรณภูมิ</option>
              <option>ตัวเมืองกรุงเทพ</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">สถานที่คืนรถ</label>
            <select className="border p-2 w-full rounded-md">
              <option>สนามบินดอนเมือง</option>
              <option>สนามบินสุวรรณภูมิ</option>
              <option>ตัวเมืองกรุงเทพ</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">ระยะเวลาเช่า (วัน)</label>
            <input type="number" min="1" className="border p-2 w-full rounded-md" placeholder="ระบุจำนวนวัน" />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#0D3489] text-white px-6 py-2 rounded-md hover:bg-[#092C5D] transition">
              ค้นหา
            </button>
          </div>
        </div>

        {/* ผลการค้นหา */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-6">ผลการค้นหา : รถว่างทั้งหมด</h1>
          <div className="grid grid-cols-1 gap-6">
            {[1, 2].map((car, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex w-[95%]">
                <Image src="/car1.png" alt="Toyota Yaris ATIV 2023" width={320} height={150} className="rounded-lg object-cover" />
                <div className="ml-4 flex flex-col justify-between w-full">
                  <h2 className="text-xl font-bold">Toyota Yaris ATIV 2023</h2>
                  <p className="text-gray-600">รถเก๋ง 4 ประตู เกียร์ออโต้</p>
                  <p className="text-gray-600">ฟรีประกันภัยชั้น 1</p>
                  <p className="text-gray-600">ประเภท: รถเก๋ง (Sedan)</p>
                  <p className="text-gray-600">จำนวนที่นั่ง: 4-5 ที่นั่ง</p>
                  <p className="text-blue-600 font-bold text-lg w-full text-right">1,500 บาท / วัน</p>
                  <Link href="/rentdetail">
                    <div className="text-right">
                      <button className="bg-[#0D3489] text-white px-6 py-2 rounded-md hover:bg-[#092C5D] transition">
                        รายละเอียดรถเช่า
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCars;