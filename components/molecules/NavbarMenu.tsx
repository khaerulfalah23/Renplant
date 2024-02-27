import { NavbarDropdown, NavbarLink } from '../atoms';

const dataNavMenu = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'More',
    href: '/more',
  },
  {
    title: 'Contact',
    href: '/contect',
  },
];

export function NavbarMenu() {
  return (
    <ul className="nav-layout-menu">
      {dataNavMenu.map((item, idx) => (
        <li key={idx}>
          <NavbarLink href={item.href} title={item.title} />
        </li>
      ))}
      <NavbarDropdown />
    </ul>
  );
}
