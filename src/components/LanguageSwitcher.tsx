"use client";

import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function changeLanguage(locale: string) {
    // pindah ke URL dengan locale baru
    router.push(`/${locale}${pathname}${searchParams ? "?" + searchParams.toString() : ""}`);
  }

  return (
    <div className="flex gap-2">
      {["id", "en"].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className="px-3 py-1 border rounded"
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
