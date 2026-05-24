import Hero from '@/components/Hero';
import SectionReveal from '@/components/SectionReveal';
import Link from 'next/link';
import { videos, products, guideSections } from '@/lib/data';
import VideoCard from '@/components/VideoCard';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const latestVideos = videos.slice(0, 3);
  const liveDrops = products.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Diary Preview */}
      <section className="section container">
        <SectionReveal>
          <div className="flex flex--between" style={{ marginBottom: 'var(--space-2xl)' }}>
            <div>
              <span className="label label--accent">01 // THE DIARY</span>
              <h2 style={{ marginTop: '0.5rem' }}>Derniers Vlogs & Guides</h2>
            </div>
            <Link href="/diary" className="btn btn--ghost hide-mobile">
              Voir tout le Diary →
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid--3">
          {latestVideos.map((video, index) => (
            <SectionReveal key={video.id} delay={0.1 + index * 0.1}>
              <VideoCard video={video} index={index} />
            </SectionReveal>
          ))}
        </div>
        
        <div className="hide-desktop" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/diary" className="btn btn--ghost">
            Voir tout le Diary →
          </Link>
        </div>
      </section>

      {/* Chiefs Preview */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <SectionReveal>
            <div className="flex flex--between" style={{ marginBottom: 'var(--space-2xl)' }}>
              <div>
                <span className="label label--accent">02 // THE CHIEFS</span>
                <h2 style={{ marginTop: '0.5rem' }}>Communauté</h2>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid--1" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <SectionReveal delay={0.1}>
              <div className="card card--interactive" style={{ height: '100%', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Chiefs Club</h3>
                <p style={{ marginBottom: '2rem' }}>Rejoins la communauté Discord. Partage ta progression, participe aux rencontres et connecte-toi avec d&apos;autres Dreamers.</p>
                <Link href="/chiefs" className="btn btn--primary">
                  Découvrir le club
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="section container">
        <SectionReveal>
          <div className="flex flex--between" style={{ marginBottom: 'var(--space-2xl)' }}>
            <div>
              <span className="label label--accent">03 // STORE</span>
              <h2 style={{ marginTop: '0.5rem' }}>Derniers Drops</h2>
            </div>
            <Link href="/shop" className="btn btn--ghost hide-mobile">
              Accéder au Shop →
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid--3">
          {liveDrops.map((product, index) => (
            <SectionReveal key={product.id} delay={0.1 + index * 0.1}>
              <ProductCard product={product} index={index} />
            </SectionReveal>
          ))}
        </div>
      </section>
      
      {/* Guide Preview */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="label label--accent">04 // ENCYCLOPEDIA</span>
              <h2 style={{ marginTop: '0.5rem' }}>L&apos;Ingénierie du Nouveau Lycéen</h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 0' }}>La métamorphose n&apos;est pas un hasard, c&apos;est un système. Explore les 5 piliers de l&apos;optimisation.</p>
            </div>
          </SectionReveal>

          <div className="grid grid--4">
            {guideSections.slice(0, 4).map((section, index) => (
              <SectionReveal key={section.slug} delay={index * 0.1}>
                <Link href={`/guide/${section.slug}`} className="card card--interactive" style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem', color: section.color }}>{section.icon}</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{section.title}</h4>
                  <p style={{ fontSize: '0.8125rem' }}>{section.subtitle}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <SectionReveal delay={0.4}>
              <Link href="/guide" className="btn btn--primary btn--lg">
                Explorer le Guide Complet
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
