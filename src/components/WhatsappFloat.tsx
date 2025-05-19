// components/WhatsappFloat.tsx
"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function WhatsappFloat() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);

  const whatsappNumber = "6282243969805"; // Ganti dengan nomor WA kamu
  const message = "Halo, saya ingin bertanya seputar warnet gaming Anda.";

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {visible && (
        <div className="bg-white shadow-lg rounded-xl p-4 w-64 text-sm text-gray-800 relative animate-fade-in">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
          <p className="font-bold">Hi! 👋</p>
          <p>Kamu bisa menghubungi kami via WhatsApp</p>
        </div>
      )}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.876 11.876 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.13 1.61 5.94L0 24l6.3-1.65A11.899 11.899 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zm-8.52 19.47a10.45 10.45 0 0 1-5.38-1.5l-.39-.23-3.74.97 1-3.64-.25-.37A10.448 10.448 0 0 1 1.5 12C1.5 6.75 6.25 2 12 2c2.83 0 5.49 1.1 7.49 3.11A10.442 10.442 0 0 1 22.5 12c0 5.25-4.75 10-10.5 10zm5.93-7.33c-.25-.13-1.47-.72-1.7-.8s-.4-.13-.57.12-.66.8-.82.96-.3.2-.55.07c-.25-.13-1.05-.38-2-1.23-.74-.66-1.25-1.47-1.4-1.72s-.02-.38.11-.5c.11-.11.25-.3.37-.45.12-.15.16-.25.25-.41.08-.16.04-.3-.02-.43s-.57-1.37-.78-1.88c-.2-.48-.4-.42-.57-.42l-.49-.01c-.17 0-.43.06-.66.3-.23.25-.87.85-.87 2.06s.89 2.38 1.02 2.55c.13.17 1.75 2.66 4.25 3.73.59.26 1.05.41 1.41.52.59.19 1.13.17 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.15-.48-.27z" />
        </svg>
      </a>
    </div>
  );
}
