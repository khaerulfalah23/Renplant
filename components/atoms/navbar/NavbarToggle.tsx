import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { AlignRight } from 'lucide-react';
import Link from 'next/link';
import { dataNavMenu } from '@/components/molecules';
import { dataToggle } from './dataToggleMenu';
import { NavbarLink } from '.';

export function NavbarToggle() {
  return (
    <div className="nav-feature lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <AlignRight />
        </SheetTrigger>
        <SheetContent>
          <SheetFooter className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            <ul className="text-center flex gap-5 flex-col mb-4">
              {dataNavMenu.map((menu, idx) => (
                <li key={idx}>
                  <NavbarLink href={menu.href} title={menu.title} />
                </li>
              ))}
            </ul>
            {dataToggle.map((toggle, idx) => (
              <SheetClose asChild key={idx}>
                <Button>
                  <Link href={toggle.href} className="flex items-center gap-2">
                    {toggle.icon}
                    <span>{toggle.title}</span>
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
