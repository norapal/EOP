import { useState } from 'react'
import Section from '@/components/Section'
import HorseImage from '@/components/HorseImage'
import Lightbox from '@/components/Lightbox'

export default function Facility() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <>
      <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Facility: Oppenheimer Family Equine Center
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          The layout and design of a horse's facility is crucial for its health, safety, and well-being. Planning the layout, features, and potential areas to improve the facility promotes good management practices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="bg-cream rounded-softer p-6">
            <h2 className="text-2xl font-serif text-forest-green mb-4">
              Facility Description
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Billy currently resides at the Oppenheimer Family Equine Center on Cal Poly's campus. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Oppenheimer Family Equine Center has multiple barns that are specialized for different disciplines, like a breeding lab, foaling barn, stallion barn, forty-stall barn, and a mare barn. The equine center also has two arenas, five round corrals, and over 150 acres of pastures. The Oppenheimer Family Equine Center is an important unit to Cal Poly as it provides learning opportunities for students, breeding operations, riding teams, and boarding for personal horses. 
            </p>
          </div>

          <div className="bg-white rounded-softer p-6 border border-gray-200">
            <h2 className="text-2xl font-serif text-forest-green mb-4">
              Areas for Improvement
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Oppenheimer Family Equine Facility is well maintained overall, but there are some areas in the center that could use attention to implement better management practices:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Stall corners and floors are wearing down with lots of use and erosion. These areas need consistent cleaning and repair.</li>
              <li>Feed bins need maintenance and sanitation improvements. Visible signs of rust and wear are present.</li>
              <li>Water troughs need regular cleanings and upkeeping to make sure the water quality is good. </li>
            </ol>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif text-forest-green mb-4">
              Aerial Facility Layout
            </h2>
            <HorseImage
              src="./images/equine-aerial.jpg"
              alt="Aerial view of Oppenheimer Family Equine Center showing barns, arenas, and pastures"
              title="Aerial facility layout"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/equine-aerial.jpg')}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Aerial view of the Oppenheimer Family Equine Center facility
            </p>
          </div>
        </div>
      </div>

      {/* Facility Photos */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif text-forest-green mb-6">
          Facility Photos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <HorseImage
              src="./images/barn-front.jpg"
              alt="Front view of the barn at Oppenheimer Family Equine Center"
              title="Barn exterior"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/barn-front.jpg')}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Barn exterior showing facility structure
            </p>
          </div>
          <div>
            <HorseImage
              src="./images/stall-front.jpg"
              alt="Front view of horse stall"
              title="Stall front"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/stall-front.jpg')}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Stall front showing design and accessibility
            </p>
          </div>
          <div>
            <HorseImage
              src="./images/stall-inside.jpg"
              alt="Interior view of horse stall"
              title="Stall interior"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/stall-inside.jpg')}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Interior stall view showing space and bedding
            </p>
          </div>
        </div>
      </div>

      {/* Areas for Improvement Photos */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif text-forest-green mb-6">
          Maintenance and Improvement Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <HorseImage
              src="./images/gross-corner.jpg"
              alt="Stall corner showing wear and requiring cleaning"
              title="Stall corner maintenance needed"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/gross-corner.jpg')}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Stall corner requiring cleaning and maintenance
            </p>
          </div>
          <div>
            <HorseImage
              src="./images/feeding-bin.jpg"
              alt="Feeding bin requiring maintenance and sanitation"
              title="Feeding bin maintenance needed"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/feeding-bin.jpg')}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Feeding bin needing sanitation improvements
            </p>
          </div>
          <div>
            <HorseImage
              src="./images/water-trough.jpg"
              alt="Water trough requiring cleaning and upkeep"
              title="Water trough maintenance needed"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/water-trough.jpg')}
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Water trough requiring cleaning and upkeep
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-softer p-6 border border-gray-200">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Location Map
        </h2>
        <div className="aspect-video bg-gray-100 rounded-soft overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9904071331775!2d-120.66669602410022!3d35.309325050314186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf12ee0390977%3A0x6a5e47700b3aff8d!2sOppenheimer%20Family%20Equine%20Center!5e1!3m2!1sen!2sus!4v1764489774658!5m2!1sen!2sus" 
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>

      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  )
}
