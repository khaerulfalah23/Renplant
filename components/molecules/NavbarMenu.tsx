import { NavbarDropdown, NavbarLink } from '../atoms';

export function NavbarMenu() {
  return (
    <ul className="flex item-center gap-5">
      {['home', 'more', 'contact'].map((item, idx) => (
        <li key={idx}>
          <NavbarLink href={`/${item}`} title={item} />
        </li>
      ))}
      <NavbarDropdown />
    </ul>
  );
}
