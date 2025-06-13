"use client";
import Script from "next/script";

export default function GoogleReviewsWidget() {
  return (
    <>
      <div className="my-10 bg-white dark:bg-gray-900 px-4 py-6 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
        <div className="elfsight-app-864549f0-27d0-4020-b0b2-f7473dedbdb8"></div>
      </div>

      <Script
        src="https://apps.elfsight.com/p/platform.js"
        strategy="lazyOnload"
      />
    </>
  );
}
