"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Interface สำหรับข้อมูลรีวิว
interface Review {
    user_name: string;
    rating: number;
    review: string;
    created_at: string;
}

// Interface สำหรับข้อมูลรถ
interface Car {
    id: number;
    brand: string;
    model: string;
    reviews: Review[]; // เก็บรีวิวของรถนั้นๆ
}

const RatingPage: React.FC = () => {
    const [carsWithReviews, setCarsWithReviews] = useState<Car[]>([]); // เก็บรถที่มีการรีวิว
    const router = useRouter();

    useEffect(() => {
        const fetchCarsWithReviews = async () => {
            try {
                // เรียก API เพื่อดึงข้อมูลรถที่มีการรีวิว
                const res = await fetch("/api/cars/with-reviews");
                const data = await res.json();

                // เช็คว่าได้ข้อมูลหรือไม่
                if (res.ok && data.length > 0) {
                    setCarsWithReviews(data); // กำหนดข้อมูลรถที่มีรีวิว
                } else {
                    console.log("ไม่มีรถที่มีการรีวิว");
                }
            } catch (error) {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูลรถ:", error);
            }
        };

        fetchCarsWithReviews();
    }, []);

    // ฟังก์ชันในการแสดงรีวิวของรถ
    const renderReviews = (reviews: Review[]) => {
        return reviews.map((review) => (
            <div key={review.created_at} className="border-b pb-4">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">{review.user_name}</span>
                    <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                </div>
                <p className="mt-2">{review.review}</p>
                <span className="text-sm text-gray-500">
                    รีวิวเมื่อ {new Date(review.created_at).toLocaleDateString()}
                </span>
            </div>
        ));
    };

    return (
        <div className="min-h-screen mt-20">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
                {/* ตั้งค่า flex สำหรับปุ่มย้อนกลับและหัวข้อ */}
                <div className="flex justify-between items-center mb-8">
                    {/* หัวข้อ "รถที่ได้รับรีวิว" */}
                    <h1 className="text-3xl font-semibold text-gray-900">รถที่ได้รับรีวิว</h1>
                    
                    {/* ปุ่มย้อนกลับ */}
                    <Link href="/admin">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg shadow-md transition-all transform hover:scale-105">
                            ย้อนกลับ
                        </button>
                    </Link>


                </div>

                {carsWithReviews.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">ไม่มีรถที่ได้รับรีวิว</p>
                ) : (
                    carsWithReviews.map((car) => (
                        <div key={car.id} className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{car.brand} {car.model}</h2>

                            {car.reviews.length > 0 ? (
                                renderReviews(car.reviews) // เรียกใช้ฟังก์ชันเพื่อแสดงรีวิว
                            ) : (
                                <p className="text-gray-500">ยังไม่มีรีวิวสำหรับรถคันนี้</p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>



    );
};

export default RatingPage;
