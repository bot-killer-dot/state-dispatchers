'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/images/hero-truck-dusk.png', alt: 'White semi-truck on an open desert highway at dusk', pos: '74% 55%' },
  { src: '/images/equipment/auto-carrier-hero.png', alt: 'Loaded car hauler on the interstate at golden hour', pos: '70% 50%' },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="hero__media">
      {SLIDES.map((s, n) => (
        <Image key={s.src} src={s.src} alt={n === i ? s.alt : ''} aria-hidden={n !== i} fill priority={n === 0}
          sizes="100vw" className={'hero__slide' + (n === i ? ' is-active' : '')} style={{ objectPosition: s.pos }} />
      ))}
    </div>
  );
}
