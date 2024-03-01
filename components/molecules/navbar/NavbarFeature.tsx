import { NavbarCart, NavbarSearch, NavbarToggle } from '../../atoms';
import { Button } from '../../ui/button';

export function NavbarFeature() {
  return (
    <div className="flex items-center gap-3">
      <NavbarSearch />
      <NavbarCart />
      <NavbarToggle />
      <Button className="hidden lg:block" variant={'outline'}>
        Login
      </Button>
    </div>
  );
}
