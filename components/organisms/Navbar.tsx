import { NavbarLogo, NavbarMenu } from '../molecules';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <NavbarLogo />
      <NavbarMenu />
    </nav>
  );
}
