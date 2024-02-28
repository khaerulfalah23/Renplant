import Image from 'next/image';

export function HeroImage() {
  return (
    <div>
      <Image src={'/background.svg'} width={400} height={400} alt="hero" />
    </div>
  );
}
