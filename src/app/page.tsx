"use client";

import { useTranslation } from "next-i18next";

import Cabang from "@/components/Cabang";
import Jenis from "@/components/Jenis";
import Jumbotron from "@/components/Jumbotron";
import Keunggulan from "@/components/Keunggulan";
import YouTubeEmbedFromUrl from "@/components/logic/YouTubeEmbed";

import MemberForm from "@/components/MemberForm";
import PlayNowSection from "@/components/Playnosection";
import StatisticsSection from "@/components/StatisticsSection";
import Testimonials from "@/components/Testimonial";
import LokasiCarousel from "@/components/LokasiCarousel ";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div>
      <Jumbotron />
      <main className="min-h-screen py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 mt-4">{t("feel_immersive_play")}</h1>
        <YouTubeEmbedFromUrl url="https://www.youtube.com/watch?v=Sq5VVdM6Uno" />
        <Cabang />
        <Keunggulan />
        <Jenis />
        <Testimonials />
        <StatisticsSection />
        <LokasiCarousel />
        <PlayNowSection />
        <MemberForm />
      </main>
    </div>
  );
}
