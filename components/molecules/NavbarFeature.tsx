import { NavbarCart, NavbarSearch } from '../atoms';
import { NavbarToggle } from '../atoms/NavbarToggle';

export function NavbarFeature() {
  return (
    <div className="nav-layout-menu">
      <NavbarSearch />
      <NavbarCart />
      <NavbarToggle />
    </div>
  );
}
