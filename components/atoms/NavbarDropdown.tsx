import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export function NavbarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1 items-center text-2xl font-medium">
        Plant Type’s <ChevronDown className="h-4 w-4 mt-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>All</DropdownMenuItem>
        <DropdownMenuItem>Type a</DropdownMenuItem>
        <DropdownMenuItem>Type B</DropdownMenuItem>
        <DropdownMenuItem>Type c</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
