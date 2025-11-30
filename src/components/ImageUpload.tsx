import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageUploadProps {
  onImageSelect?: (file: File) => void
  currentImage?: string
  label?: string
  className?: string
  aspectRatio?: string
}

export default function ImageUpload({
  onImageSelect,
  currentImage,
  label = 'Upload Image',
  className,
  aspectRatio = 'aspect-video',
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      onImageSelect?.(file)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      onImageSelect?.(file)
    }
  }

  const handleRemove = () => {
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Use object-contain for aspect-auto to preserve full image, object-cover for fixed ratios
  const objectFitClass = aspectRatio === 'aspect-auto' ? 'object-contain' : 'object-cover'
  // Add max-height for aspect-auto to prevent vertical images from becoming too large
  const imageClass = aspectRatio === 'aspect-auto' ? 'max-h-[600px]' : aspectRatio

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-navy-blue mb-2">
          {label}
        </label>
      )}
      <div
        className={cn(
          "border-2 border-dashed rounded-softer p-6 transition-colors",
          preview ? "border-forest-green bg-cream" : "border-gray-300 hover:border-forest-green"
        )}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {preview ? (
          <div className="relative flex justify-center items-center bg-gray-50 rounded-soft">
            <img
              src={preview}
              alt="Preview"
              className={cn("w-full rounded-soft", objectFitClass, imageClass)}
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              aria-label="Remove image"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <label
                htmlFor="file-upload"
                className="cursor-pointer rounded-soft bg-forest-green px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
              >
                Choose file
              </label>
              <input
                id="file-upload"
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              <p className="mt-2 text-xs text-gray-500">
                or drag and drop
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

