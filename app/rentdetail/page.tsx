"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// ข้อมูลรถ (สามารถรับจาก API หรือ props แทนได้)
const carData = {
    name: "Mercedes-AMG C 43 Coupe 2",
    images: ["/benz2.png", "/benz1.png", "/benz3.png"],
    specifications: [
        { icon: "/icon/caricon.png", label: "ประเภทรถ", value: "รถเก๋ง" },
        { icon: "/icon/seaticon.png", label: "ที่นั่ง", value: "4 ที่นั่ง" },
        { icon: "/icon/bagicon.png", label: "กระเป๋า", value: "2 กระเป๋า" },
        { icon: "/icon/dooricon.png", label: "ประตู", value: "2 ประตู" },
        { icon: "/icon/gearicon.png", label: "เกียร์", value: "ออโต้" },
        { icon: "/icon/oilicon.png", label: "เชื้อเพลิง", value: "เบนซิน" },
    ],
    pricePerDay: 4444,
    deposit: 5000,
    deliveryFee: 100,
    pickupFee: 100,
};

export default function CarDetails() {
    const [days, setDays] = useState(1);
    const [expandedImage, setExpandedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const { name, images, specifications, pricePerDay, deposit, deliveryFee, pickupFee } = carData;

    const totalRentalCost = days * pricePerDay;
    const totalFees = deliveryFee + pickupFee;
    const grandTotal = totalRentalCost + totalFees;

    const handleImageClick = (image: string) => {
        setExpandedImage(image === expandedImage ? null : image);
    };

    const handleRentClick = () => {
        setIsLoading(true);
        // Simulate a loading delay
        setTimeout(() => {
            router.push("/checkout");
        }, 1000);
    };

    return (
        <div className="mt-16">
            {/* ส่วนหัว */}
            <div className="flex flex-col px-6 py-4 bg-white ">
                {/* บรรทัดที่ 1: ปุ่มย้อนกลับ */}
                <div className="mb-3">
                    <Link
                        href="/SearchCars"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-1 text-base">
                        <span>&lt;</span> ย้อนกลับ
                    </Link>
                </div>

                {/* บรรทัดที่ 2: ชื่อหน้าและชื่อรถ */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">รายละเอียดรถเช่า</h1>
                    <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
                </div>
            </div>

            {/* แกลเลอรี่รูปภาพ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-1">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group flex justify-center items-center cursor-pointer"
                        onClick={() => handleImageClick(image)}
                    >
                        <div className="w-full h-full md:h-60 overflow-hidden flex justify-center items-center bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <Image
                                src={image}
                                alt={`car-${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* รูปภาพที่ขยายขึ้นเมื่อคลิก */}
            {expandedImage && (
                <div
                    className="fixed inset-0 bg-with bg-opacity-75 flex justify-center items-center cursor-pointer z-50"
                    onClick={() => setExpandedImage(null)}
                >
                    <Image
                        src={expandedImage}
                        alt="expanded"
                        width={800}
                        height={600}
                        className="rounded-lg object-contain"
                    />
                </div>
            )}

            {/* รายละเอียดรถ */}
            <div className="grid md:grid-cols-3 gap-1 my-1">
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 ">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex  gap-4 py-3">
                            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                                <Image src={spec.icon} alt={spec.label} width={20} height={20} />
                            </div>
                            <div>
                                <p className="text-gray-600 text-s font-medium">{spec.label}</p>
                                <p className="text-black font-bold text-sm">{spec.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* คำนวณราคา */}
                <div className="bg-white rounded-lg shadow-md p-6 space-y-1">
                    <h3 className="font-semibold text-black text-lg">รายละเอียดการจอง</h3>
                    {/* ค่าเช่ารถ */}
                    <div className="space-y-1">
                        {/* บรรทัด 1: ราคาต่อวัน × จำนวนวัน และช่องกรอกจำนวนวัน */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500">ราคาต่อวัน {pricePerDay.toLocaleString()} × {days} วัน</p>
                            <div className="flex items-center gap-2">
                                <label htmlFor="days" className="text-gray-600">จำนวนวัน:</label>
                                <input
                                    type="number"
                                    id="days"
                                    value={days}
                                    min="1"
                                    max="31"
                                    onChange={(e) => setDays(Number(e.target.value))}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>

                        {/* บรรทัด 2: ค่าเช่ารถ X วัน และราคารวม */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700 font-semibold">ค่าเช่ารถ {days} วัน</p>
                            <p className="font-semibold text-blue-600">฿{(days * pricePerDay).toLocaleString()}</p>
                        </div>
                    </div>

                    {/* เส้นคั่น */}
                    <hr className="border-t border-gray-200" />

                    {/* ค่ารับ - ค่าส่ง */}
                    <div className="space-y-1">
                        <p className="text-gray-700 font-semibold">ค่ารับ - ค่าส่ง</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500">ค่าส่งรถ {deliveryFee}, ค่ารับรถ {pickupFee}</p>
                            <p className="font-semibold text-blue-600">฿{(deliveryFee + pickupFee).toLocaleString()}</p>
                        </div>
                    </div>

                    {/* เส้นคั่น */}
                    <hr className="border-t border-gray-200" />

                    {/* ค่ามัดจำ */}
                    <div className="space-y-1">
                        <p className="text-gray-700 font-semibold">ค่ามัดจำ</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500">ค่ามัดจำในวันรับรถ (ได้คืนวันคืนรถ)</p>
                            <p className="font-semibold text-blue-600">฿{deposit.toLocaleString()}</p>
                        </div>
                    </div>

                    <p className="text-red-500 text-center text-sm font-medium mt-4">
                        ราคานี้ยังไม่รวมส่วนลดและโปรโมชั่น
                    </p>
                </div>
            </div>

            {/* แถบราคาและปุ่มเช่า */}
            <div className="bg-blue-100 p-3 rounded-t-lg text-xl font-semibold flex justify-between items-center fixed bottom-0 left-0 w-full shadow-md px-8 md:px-20">
                <span className="text-blue-900">
                    ราคาทั้งหมด: <span className="font-bold text-blue-700">฿{grandTotal.toLocaleString()}</span>
                </span>
                <Link href="/paymentdetail">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-lg px-6 py-3 shadow-md transition-all"
                        onClick={handleRentClick}
                        disabled={isLoading}
                    >
                        {isLoading ? "กำลังโหลด..." : "เช่ารถคันนี้"}
                    </button>
                </Link>
            </div>
        </div>
    );
}