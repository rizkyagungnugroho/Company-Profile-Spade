interface MapIframeProps {
  location: string;
}

const MapIframe: React.FC<MapIframeProps> = ({ location }) => {
  const encodedLocation = encodeURIComponent(location);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 h-full flex flex-col justify-between">
      <h3 className="text-lg font-semibold text-center mb-2">{location}</h3>
      <div className="w-full aspect-[16/9] rounded-lg overflow-hidden h-64 md:h-80">
        <iframe
          title={`Google Maps - ${location}`}
          className="w-full h-full"
          src={`https://www.google.com/maps?q=${encodedLocation}&output=embed`}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-center bg-black text-white font-medium py-2 px-4 rounded-md hover:bg-gray-800"
      >
        📍 Lihat di Google Maps
      </a>
    </div>
  );
};

export default MapIframe;
