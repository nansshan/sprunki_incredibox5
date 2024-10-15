'use client';

import { useEffect, useRef, useState } from 'react';

interface GameEmbedProps {
  url: string;
  title: string;
}

export default function GameEmbed({ url, title }: GameEmbedProps) {
  const [height, setHeight] = useState('100vh');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const windowHeight = window.innerHeight;
        const topOffset = ref.current.getBoundingClientRect().top;
        const newHeight = windowHeight - topOffset;
        setHeight(`${newHeight}px`);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div ref={ref} className="w-full bg-white shadow-lg overflow-hidden border-2 border-sprunki-pink mb-8">
      <h2 className="text-xl font-semibold p-4 bg-sprunki-green text-white text-center">{title}</h2>
      <div style={{ height }} className="relative">
        <iframe src={url} title={title} className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe>
      </div>
    </div>
  );
}