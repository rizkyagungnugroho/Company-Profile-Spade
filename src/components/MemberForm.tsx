"use client";

import { useState } from "react";

export default function MemberForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const phoneNumber = "6282243969805"; // Ganti no WA kamu

  const openWhatsApp = () => {
    const message = `Halo, saya ingin daftar member:\n\nNama: ${name}\nEmail: ${email}\nNo HP: ${phone}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <form className="space-y-4 max-w-md mx-auto p-4" onSubmit={(e) => e.preventDefault()}>
      <h1 className="text-xl font-semibold mb-4">Pendaftaran Member Spade Gaming</h1>

      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded p-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded p-2"
      />

      <input
        type="text"
        placeholder="No HP"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded p-2"
      />

      <button
        type="button"
        onClick={openWhatsApp}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Kirim ke WhatsApp
      </button>
    </form>
  );
}
