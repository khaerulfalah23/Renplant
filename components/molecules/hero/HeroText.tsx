import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroText() {
  return (
    <div className="text-start sm:text-center lg:text-start">
      <p className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] font-semibold">
        Breath Natural
      </p>
      <p className="text-sm font-medium ml-[2px] leading-7 sm:text-[23px] sm:ml-1 mt-2 mb-5">
        Bring calm to your place with our ornamental plants,
        <br className="hidden md:block" />
        Find your dream plant for your home decoration.
      </p>
      <div className="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
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
