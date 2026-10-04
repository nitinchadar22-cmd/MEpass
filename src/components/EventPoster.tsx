import Image from "next/image";

interface EventPosterProps {
  src: string;
  alt: string;
}

export default function EventPoster({ src, alt }: EventPosterProps) {
  return (
    <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-sm">
      <Image 
        src={src} 
        alt={alt} 
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
