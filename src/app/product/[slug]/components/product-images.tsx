"use client"
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string
  imageUrls: string[]
}

const ProductImages = ({imageUrls, name}: ProductImagesProps) => {
  const [currentImage, setCurrentImages] = useState(imageUrls[0])

  const handleImageClick = (imageUrl: string) => {
    setCurrentImages(imageUrl)
  }

  return ( 
    <div className="flex flex-col">
      <div className="bg-accent flex h-[380px] w-full items-center justify-center">
        <Image 
          src={currentImage} 
          alt={name} 
          height={0} 
          width={0} 
          sizes="100vw" 
          className="h-auto max-h-[70&] w-auto max-w-[80%]" 
          style={{
            objectFit: "contain"
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-5">
        {imageUrls.map((imageUrl) => (
          <button key={imageUrl} className={`bg-accent rounded-lg flex h-[100px] items-center justify-center
            ${imageUrl === currentImage && 'border-2 border-solid border-primary'}
          `}
          onClick={() => handleImageClick(imageUrl)}
          >
            <Image 
              src={imageUrl} 
              alt={name} 
              height={0} 
              width={0} 
              sizes="100vw" 
              className="h-auto max-h-[70&] w-auto max-w-[80%]" 
            />
          </button>
        ))}
      </div>
    </div>
   );
}
 
export default ProductImages;