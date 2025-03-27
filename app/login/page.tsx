"use client";
import { useState } from "react";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import Link from "next/link"; 
import '../login/globals.css';

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!phone.trim() || !password.trim()) {
      setError("กรุณากรอกเบอร์โทรศัพท์และรหัสผ่านให้ครบถ้วน");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      sessionStorage.setItem("user", JSON.stringify({ phone, password }));
      setLoading(false);
      alert("เข้าสู่ระบบสำเร็จ!");
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    alert(`เปิดหน้าต่างล็อคอิน ${provider}`);
    // ที่นี่สามารถใช้ OAuth หรือ Firebase Authentication เพื่อเข้าสู่ระบบจริง
  };

  return (
    <div className="full-screen-background">
      <div className="rounded-xl p-4 max-w-sm w-full text-center mt-20">
        <div className="text-left">
          <img src="/logo.png" alt="Logo" className="h-30 mb-2 ml-[-20px]" />
          <h2 className="text-xl font-bold mb-2">ยินดีต้อนรับกลับมา !</h2>
          <p className="text-500 mb-2">สถานที่เช่ารถที่ดีที่สุดสำหรับคุณ</p>
        </div>

        <input
          type="tel"
          className="text-center w-full p-2 border-b border-gray-400 placeholder-gray-500 bg-transparent mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="เบอร์โทรศัพท์"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="password"
          className="text-center w-full p-2 border-b border-gray-400 placeholder-gray-500 bg-transparent mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        
        <p className="text-black-250 text-sm mb-4">หรือ</p>
        <button onClick={() => handleSocialLogin("Google")} className="w-full bg-white hover:bg-gray-200 text-black py-2 rounded-lg btn-shadow mb-4 flex items-center justify-center gap-2 border border-gray-300">
          <img src="/google.svg" alt="Google" className="h-5 w-5" /> เข้าสู่ระบบ Google
        </button>

        <button onClick={() => handleSocialLogin("Apple")} className="w-full bg-white hover:bg-gray-200 text-black py-2 rounded-lg mb-4 btn-shadow flex items-center justify-center gap-2">
          <FaApple className="text-black-500 h-6 w-6" /> เข้าสู่ระบบ Apple
        </button>
        
        <button onClick={() => handleSocialLogin("Facebook")} className="w-full bg-white hover:bg-gray-200 text-black py-2 rounded-lg mb-6 btn-shadow flex items-center justify-center gap-2">
          <FaFacebook className="text-blue-600 h-5 w-5" /> เข้าสู่ระบบ Facebook
        </button>

        <button onClick={handleSubmit} className="block mx-auto w-[35%] bg-[#0D3489] hover:bg-[#092C5D] btn-shadow text-white py-2 rounded-2xl mb-4 text-center">
          เข้าสู่ระบบ
        </button>

        <p className="mt-4 text-black ml-2">
          หรือ {" "}
          <Link href="/signin" className="text-[#004FFA] underline">
            สมัครสมาชิก
          </Link>{" "}กับเรา
        </p>
      </div>
    </div>
  );
};

export default Login;
