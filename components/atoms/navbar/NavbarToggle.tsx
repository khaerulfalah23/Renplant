import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { AlignRight, LogIn, SquarePen } from 'lucide-react';
import Link from 'next/link';

const toggleMenu = [
  {
    icon: <LogIn className="w-4 h-4" />,
    title: 'Login',
    href: '/login',
  },
  {
    icon: <SquarePen className="w-4 h-4" />,
    title: 'Sign Up',
    href: '/signup',
  },
];

export function NavbarToggle() {
  return (
    <div className="nav-feature lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <AlignRight />
        </SheetTrigger>
        <SheetContent>
          <SheetFooter className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            {toggleMenu.map((item, idx) => (
              <SheetClose asChild key={idx}>
                <Button>
                  <Link href={item.href} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </Button>
              </SheetClose>
            ))}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
