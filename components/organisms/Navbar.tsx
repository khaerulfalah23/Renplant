import { NavbarFeature, NavbarLogo, NavbarMenu } from '../molecules';

export function Navbar() {
  return (
    <nav className="w-full fixed z-50 flex items-center justify-between mt-2 md:mt-4 px-2 md:px-5">
      <NavbarLogo />
      <NavbarMenu />
      <NavbarFeature />
    </nav>
  );
}
