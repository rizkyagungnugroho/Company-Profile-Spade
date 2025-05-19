// components/Jumbotron.js
export default function Jumbo() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-6">
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-black mb-4 leading-tight">
          DISCOVER, AND COLLECT <br />
          DIGITAL ART <span className="whitespace-nowrap">NFTS</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
          Explore Now
        </button>
        <div className="flex space-x-8 mt-10 text-center">
          <div>
            <p className="text-2xl font-bold">98K+</p>
            <p className="text-gray-500 text-sm">Artwork</p>
          </div>
          <div>
            <p className="text-2xl font-bold">12K+</p>
            <p className="text-gray-500 text-sm">Auction</p>
          </div>
          <div>
            <p className="text-2xl font-bold">15K+</p>
            <p className="text-gray-500 text-sm">Artist</p>
          </div>
        </div>
      </div>

      {/* Right (NFT Card) */}
      <div className="relative mt-12 lg:mt-0">
        <div className="bg-gradient-to-br from-purple-500 to-blue-400 rounded-2xl p-6 w-72 text-white shadow-xl">
          <h2 className="text-lg font-semibold mb-1">Abstr Gradient NFT</h2>
          <p className="text-sm mb-4">Arkhan17</p>
          <div className="bg-white/20 rounded-lg p-3 text-sm flex justify-between items-center">
            <div>
              <p className="text-white/80">Current Bid</p>
              <p className="font-bold">0.25 ETH</p>
            </div>
            <div>
              <p className="text-white/80">Ends in</p>
              <p className="font-bold">12h 43m 42s</p>
            </div>
          </div>
        </div>
        <div className="absolute -left-6 top-6 bg-pink-200 text-xs px-3 py-1 rounded-full rotate-[-25deg] font-semibold text-pink-700 shadow">
          LIVE AUCTION
        </div>
        <div className="absolute top-4 left-6 w-72 h-full rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-500 opacity-40 blur-md z-[-1]"></div>
      </div>
    </div>
  );
}