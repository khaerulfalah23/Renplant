import { NavbarLogoImg, NavbarLogotext } from '../atoms';

export function NavbarLogo() {
  return (
    <div className="flex items-center gap-1">
      <NavbarLogoImg />
      <NavbarLogotext />
    </div>
  );
}
