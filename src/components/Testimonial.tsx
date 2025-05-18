"use client";
import Script from "next/script";

export default function GoogleReviewsWidget() {
  return (
    <>
      <div className="my-10">
        <div className="elfsight-app-864549f0-27d0-4020-b0b2-f7473dedbdb8"></div>
      </div>

      <Script
        src="https://apps.elfsight.com/p/platform.js"
        strategy="lazyOnload"
      />
    </>
  );
}
