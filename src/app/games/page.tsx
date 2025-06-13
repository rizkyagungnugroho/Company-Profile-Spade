import Image from "next/image";

const games = [
  { title: "Aliens", path: "/games/aliens.jpg" },
  { title: "Among Us", path: "/games/among.jpeg" },
  { title: "Attack on Titan 2", path: "/games/attack.jpg" },
  { title: "Chainsaw Warrior", path: "/games/chainsaw.jpeg" },
  { title: "Dead Rising", path: "/games/dead.jpg" },
  { title: "Devil May Cry", path: "/games/devil.jpg" },
  { title: "Dragon Ball", path: "/games/dragon.jpg" },
  { title: "Dying Light", path: "/games/dying.jpeg" },
  { title: "Earth Defense Force", path: "/games/earth.jpg" },
  { title: "Evil West", path: "/games/evil.jpg" },
  { title: "Goat Simulator", path: "/games/goat.jpg" },
  { title: "GTA V", path: "/games/gtaV.jpeg" },
  { title: "Green Hell", path: "/games/gh.jpg" },
  { title: "Human Fall Flat", path: "/games/human.jpg" },
  { title: "Lethal Company", path: "/games/lethal.jpg" },
  { title: "Naruto", path: "/games/naruto.jpg" },
  { title: "Rocket League", path: "/games/rocket.jpeg" },
  { title: "Valorant", path: "/games/valorant.jpg" },
  { title: "Point Blank", path: "/games/pb.jpg" },
  { title: "Call of Duty MW", path: "/games/cod.jpg" },
 
];

export default function GameLauncher() {
  return (
    <main className="bg-black min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Game Launcher</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden flex flex-col justify-between h-48 hover:scale-105 transition-transform">
            <div className="relative flex-1">
              <Image src={game.path} alt={game.title} fill className="object-cover" />
            </div>
            <p className="text-xs text-center py-1 truncate">{game.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
