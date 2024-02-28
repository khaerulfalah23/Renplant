import Image from 'next/image';

export function NavbarLogoImg() {
  return (
    <Image
      src={'/logo.svg'}
      alt="logo"
      width={48}
      height={48}
      className="w-9 h-9 lg:w-12 lg:h-12"
    />
  );
}
