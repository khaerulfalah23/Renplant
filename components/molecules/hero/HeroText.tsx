import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroText() {
  return (
    <div>
      <p className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] font-semibold">
        Breath Natural
      </p>
      <p className="text-sm sm:text-lg md:text-[23px] font-medium ml-[2px] sm:ml-1 my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <br className="hidden md:block" />
        elit, sed do eiusmod tempor incididunt ut labore et
        <br className="hidden md:block" />
        dolore magna aliqua.
      </p>
      <div className="flex items-center gap-3">
        <Button variant={'outline'}>Explore</Button>
        <div className="flex items-center gap-2 cursor-pointer hover:animate-pulse">
          <PlayCircle
            strokeWidth={0.5}
            className="w-12 h-12 md:w-[58px] md:h-[58px]"
          />
          <span>Live Demo...</span>
        </div>
      </div>
    </div>
  );
}
