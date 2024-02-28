import { NavbarLink } from '../../atoms';
import { dataNavMenu } from './dataNavMenu';

export function NavbarMenu() {
  return (
    <ul className="hidden lg:flex items-center gap-5">
      {dataNavMenu.map((item, idx) => (
        <li key={idx}>
          <NavbarLink href={item.href} title={item.title} />
        </li>
      ))}
    </ul>
  );
}
