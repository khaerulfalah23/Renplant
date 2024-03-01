import { HeroImage, HeroText } from '../molecules';

export function Hero() {
  return (
    <section className="container flex flex-wrap-reverse pt-24 gap-8 md:pt-28 lg:pt-40 justify-center items-center lg:items-end lg:justify-between">
      <HeroText />
      <HeroImage />
    </section>
  );
}
