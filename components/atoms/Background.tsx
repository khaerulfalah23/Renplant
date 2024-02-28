import Image from 'next/image';

export function Background() {
  return (
    <div className="absolute -z-50 w-full">
      <Image
        className="object-cover w-full"
        priority
        src={'/background.svg'}
        width={1728}
        height={2592}
        alt="bakground"
      />
    </div>
  );
}
