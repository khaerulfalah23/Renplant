import { HeroImage, HeroText } from '../molecules';

export function Hero() {
  return (
    <section className="container flex pt-20 md:pt-28 lg:pt-40 justify-between flex-wrap">
      <HeroText />
      <HeroImage />
    </section>
  );
}
