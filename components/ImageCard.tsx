import Image from "next/image"
import { ImageCardProps } from "@/type"



const ImageCard = ({image, onClick }: ImageCardProps) => {
  return (
    <div
      className="relative group cursor-pointer transform transition hover:scale-105 rounded-md overflow-hidden w-[380px] h-[250px]"
      onClick={onClick}
    >
      <Image
        src={image.download_url}
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, 50vm"
        alt={`Photo by ${image.author}`}
        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-200 "
      />
      <div className="absolute bottom-0 left-0 right-0 bg-slate-500/60 bg-opacity-60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
        <p className="text-sm">{image.author}</p>
      </div>
    </div>
    
  )
}
export default ImageCard