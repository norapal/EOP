import { useState } from 'react'
import Lightbox from './Lightbox'
import { cn } from '@/lib/utils'

interface HorseImageProps {
  src: string
  alt: string
  title?: string
  className?: string
  aspectRatio?: string
  onClick?: () => void
}

export default function HorseImage({ 
  src, 
  alt, 
  title, 
  className,
  aspectRatio = 'aspect-[4/3]',
  onClick 
}: HorseImageProps) {
  const [showLightbox, setShowLightbox] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      setShowLightbox(true)
    }
  }

  // Use object-contain for aspect-auto to preserve full image, object-cover for fixed ratios
  const objectFitClass = aspectRatio === 'aspect-auto' ? 'object-contain' : 'object-cover'
  // Add max-height for aspect-auto to prevent vertical images from becoming too large
  const containerClass = aspectRatio === 'aspect-auto' ? 'max-h-[600px]' : aspectRatio

  return (
    <>
      <div
        className={cn(
          "relative rounded-soft overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group bg-gray-50",
          containerClass,
          className
        )}
        onClick={handleClick}
      >
        <img
          src={src}
          alt={alt}
          className={cn("w-full h-full", objectFitClass)}
          onError={(e) => {
            // Fallback if image doesn't exist
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                  Image: ${alt}
                </div>
              `
            }
          }}
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
            {title}
          </div>
        )}
      </div>
      {showLightbox && (
        <Lightbox
          image={src}
          onClose={() => setShowLightbox(false)}
          title={title || alt}
        />
      )}
    </>
  )
}

