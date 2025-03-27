"use client";
import { useState } from "react";
import Link from "next/link"; 
import '../payment/globals.css';
const Payment : React.FC = () => (
  <div className="full-screen-background">
    <div className="min-h-screen flex flex-col py-6 m-0" >
       <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl px-3 font-bold text-white text-left mt-16">วิธีการชำระเงิน</h2>
    </div>
        <div className="w-full max-w-5xl px-3 grid grid-cols-4 gap-4 mx-auto mt-6">
    <div className="bg-white p-4 rounded-lg col-span-2">
      <p className="text-xl font-bold">รายละเอียด</p>
      <hr className="my-4 border-t-1 border-[#D9D9D9]"/>
      <div className="flex justify-between w-full px-4">
        <p>ชื่อลูกค้า</p>
        <p className="text-right">นาย สมชาย ใจดี</p>
      </div>
      <div className="flex justify-between w-full px-4">
        <p>ชำระก่อน</p>
        <p className="text-right">29 มกราคม 2567</p>
      </div>
      <hr className="my-4 border-t-1 border-[#D9D9D9]"/>
      <div className="flex justify-between w-full px-4">
        <p className="font-bold">ยอดรวมทั้งหมด</p>
        <p className="font-bold text-right">13,500.00 บาท</p>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg row-span-2 col-span-2">
         <p className = "font-bold text-xl mb-4 ">เลือกช่องทางการชำระเงิน</p>
        <button className="p-3 bg-[#F2F2F2] hover:bg-gray-300 w-full rounded-lg text-lg font-bold flex items-center justify-start mb-4">
          <img src="/visa.svg" alt="Visa" className="h-20 w-20 mr-20" />
          บัตรเครดิต
        </button>
          <button className="p-3  bg-[#F2F2F2] hover:bg-gray-300 w-full  rounded-lg text-lg font-bold flex items-center justify-start mb-4">
          <img src="/truemoney.png" alt="True" className="h-15 w-15 mr-20" />
            wallet
          </button>
          <button className="px-4 py-3  bg-[#F2F2F2] hover:bg-gray-300 w-full rounded-lg text-lg font-bold flex items-center justify-start mb-4">
          <img src="/bualuang.png" alt="Bua" className="h-15 w-15 mr-0" />
          <div>
            <p className="block">ธนาคาร</p>
            <ul className="ml-12 text-sm font-normal list-disc list-inside">
              <li>เลขที่บัญชี : 2520-2318-131919</li>
              <li>คลับคาร์ โดย นาย หน่วง ทวีทรัพย์</li>
            </ul>
          </div>
          </button>
          <Link href="/paymentSuccess">
          <button className="bg-[#004FFA] hover:bg-blue-800 p-3  w-full text-xl btn-shadow text-white rounded-xl font-bold">
            ดำเนินการต่อ
          </button>
          </Link>
      
    </div>

    <div className=" p-3  rounded-lg col-span-2 ">
    <img src="QR.png" alt="Promtpay" className="w-full h-full object-cover rounded-lg transform scale-105" />
      </div>      
    </div>
    </div>
    </div>


    
);
  
export default Payment; 