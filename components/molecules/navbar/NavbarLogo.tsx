import Link from 'next/link';
import { NavbarLogoImg, NavbarLogotext } from '../../atoms';

export function NavbarLogo() {
  return (
    <Link href={'/'} className="flex items-center gap-1">
      <NavbarLogoImg />
      <NavbarLogotext />
    </Link>
  );
}
