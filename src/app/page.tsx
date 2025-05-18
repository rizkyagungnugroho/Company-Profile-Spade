import Cabang from "@/components/Cabang";
import Footer from "@/components/Footer";
import Jenis from "@/components/Jenis";
import Jumbotron from "@/components/Jumbotron";
import Keunggulan from "@/components/Keunggulan";
import YouTubeEmbedFromUrl from "@/components/logic/YouTubeEmbed";
import LokasiCarousel from "@/components/LokasiCarousel ";


import PlayNowSection from "@/components/Playnosection";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      
      <Jumbotron />
      <main className="min-h-screenpy-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 mt-4">Feel immersive play</h1>
        <YouTubeEmbedFromUrl url="https://www.youtube.com/watch?v=Sq5VVdM6Uno" />
        <Cabang />
        <Keunggulan />
        <Jenis />
        <Testimonials />
        <LokasiCarousel  />
        <PlayNowSection/>
        
      </main>
    </div>
  );
}
