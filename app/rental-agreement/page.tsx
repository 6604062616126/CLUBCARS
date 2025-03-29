"use client";

import { useRouter } from "next/router";

export default function RentalAgreement() {
  const router = useRouter();
  const { firstName, lastName, email, phone, address, additionalInfo } = router.query;

  return (
    <div>
      <h1>สัญญาการเช่ารถ</h1>
      <p>ชื่อจริง: {firstName}</p>
      <p>นามสกุล: {lastName}</p>
      <p>อีเมล: {email}</p>
      <p>เบอร์โทร: {phone}</p>
      <p>ที่อยู่: {address}</p>
      <p>รายละเอียดเพิ่มเติม: {additionalInfo}</p>
    </div>
  );
}
