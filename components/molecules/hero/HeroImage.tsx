import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function HeroImage() {
  return (
    <div className="flex md:gap-8 flex-col justify-center w-[80%] h-[350px] lg:w-[422px] lg:h-[522px] xl:w-[522px] xl:h-[644px] bg-white bg-opacity-5 backdrop-blur-sm border border-inherit mt-12 rounded-[42px] md:rounded-[84px]">
      <div className="-mt-28 md:-mt-72 w-full flex justify-center">
        <Image
          src={'/plant/Rose_Gold.svg'}
          width={459}
          height={459}
          className="object-cover"
          alt="hero"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-6 px-9 md:px-16">
        <p className="text-base md:text-[23px]">Trendy House Plant</p>
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-[38px]">Calathea plant</h1>
          <ChevronRight className="w-8 h-8 mt-1" />
        </div>
        <Button variant={'outline'} className="text-base w-1/2">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
