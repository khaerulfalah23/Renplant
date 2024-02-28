import { NavbarCart, NavbarSearch, NavbarToggle } from '../../atoms';
import { Button } from '../../ui/button';

export function NavbarFeature() {
  return (
    <div className="flex items-center gap-3">
      <NavbarSearch />
      <NavbarCart />
      <NavbarToggle />
      <Button className="hidden lg:block bg-primary-400 hover:bg-primary-800 transition-colors duration-300">
        Login
      </Button>
    </div>
  );
}
