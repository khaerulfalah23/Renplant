import Image from 'next/image';

export function NavbarLogoImg() {
  return <Image src={'/logo.svg'} alt="logo" width={48} height={48} />;
}
