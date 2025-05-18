'use client';

import React from 'react';

interface YouTubeEmbedFromUrlProps {
  url: string;
  title?: string;
}

const extractVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1);
    }

    if (
      hostname === 'www.youtube.com' ||
      hostname === 'youtube.com' ||
      hostname === 'm.youtube.com'
    ) {
      return parsedUrl.searchParams.get('v');
    }

    return null;
  } catch {
    return null;
  }
};

const YouTubeEmbedFromUrl: React.FC<YouTubeEmbedFromUrlProps> = ({ url, title }) => {
  const videoId = extractVideoId(url);

  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube URL</p>;
  }

  return (
    <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg border bg-g">
      {title && (
        <div className="px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
      )}
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title ?? 'YouTube video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbedFromUrl;
