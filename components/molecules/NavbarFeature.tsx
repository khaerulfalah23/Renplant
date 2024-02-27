import { NavbarCart, NavbarSearch, NavbarToggle } from '../atoms';
import { Button } from '../ui/button';

export function NavbarFeature() {
  return (
    <div className="nav-layout-menu">
      <NavbarSearch />
      <NavbarCart />
      <NavbarToggle />
      <Button className="hidden lg:block">Login</Button>
    </div>
  );
}
