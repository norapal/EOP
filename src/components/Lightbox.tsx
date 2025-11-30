import { X } from 'lucide-react'
import { useEffect } from 'react'

interface LightboxProps {
  image: string
  onClose: () => void
  title?: string
}

export default function Lightbox({ image, onClose, title }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          aria-label="Close"
        >
          <X size={32} />
        </button>
        {title && (
          <p className="absolute -top-10 left-0 text-white text-lg font-serif">
            {title}
          </p>
        )}
        <img
          src={image}
          alt={title || 'Full size image'}
          className="max-w-full max-h-[90vh] object-contain rounded-soft"
        />
      </div>
    </div>
  )
}

