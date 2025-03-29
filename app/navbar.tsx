"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        setIsLoggedIn(!!user);
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        setIsLoggedIn(false);
        router.push("/");
    };

    return (
        <nav className="bg-white 600 p-4 shadow -md fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold">
                    <img src="/logo.png" alt="CLUBCARS" className="h-10" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/rental" className="text-black hover:underline">
                        การจองของฉัน
                    </Link>
                    <Link href="/contact" className="text-black hover:underline">
                        ติดต่อ
                    </Link>
                    <Link href="/profile" className="text-black hover:underline">
                        โปรไฟล์
                    </Link>

                    {/* ไอคอนโทรศัพท์ */}
                    <Phone size={20} className="text-black" />
                    <h2 className="text-black">092-623-1151</h2>

                    {!isLoggedIn ? (
                        <button classname="bg-blue"
                            onClick={() => {
                                router.prefetch("/signin");
                                router.push("/signin");
                            }}
                            className="bg-gray text-black-600 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                            สมัครสมาชิก / ลงชื่อเข้าใช้
                        </button>
                    ) : (
                        <button onClick={handleLogout} className="text-white hover:underline">
                            ออกจากระบบ
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-blue-700 p-4 space-y-3">
                    <Link href="/" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/rental" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                        การจองของฉัน
                    </Link>
                    <Link href="/contact" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                        ติดต่อ
                    </Link>
                    <Link href="/profile" className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                        โปรไฟล์
                    </Link>

                    {!isLoggedIn ? (
                        <button
                            onClick={() => {
                                router.push("/signin");
                                setIsOpen(false);
                            }}
                            className="bg-white text-blue-600 px-4 py-2 rounded-md"
                        >
                            สมัครสมาชิก / ลงชื่อเข้าใช้
                        </button>
                    ) : (
                        <button onClick={handleLogout} className="text-white hover:underline">
                            ออกจากระบบ
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;