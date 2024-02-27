import Link from 'next/link';

type NavbarLinkProps = {
  href: string;
  title: string;
};

export function NavbarLink({ href, title }: NavbarLinkProps) {
  return (
    <Link className="capitalize text-2xl font-medium" href={href}>
      {title}
    </Link>
  );
}
