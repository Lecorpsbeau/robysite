import Hero from '@/components/Hero';
import LinksSection from '@/components/LinksSection';
import BodycountRace from '@/components/BodycountRace';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Hero />
      <LinksSection />
      <BodycountRace />
    </main>
  );
}