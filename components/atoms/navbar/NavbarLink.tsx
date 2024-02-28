import Link from 'next/link';

type NavbarLinkProps = {
  href: string;
  title: string;
};

export function NavbarLink({ href, title }: NavbarLinkProps) {
  return (
    <Link
      className="nav-hover capitalize text-2xl font-medium px-3 py-2 rounded-md"
      href={href}
    >
      {title}
    </Link>
  );
}
