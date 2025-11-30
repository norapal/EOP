import Section from '@/components/Section'
import ImageUpload from '@/components/ImageUpload'

export default function Facility() {
  return (
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
              The Oppenheimer Family Equine Center features stables, riding arenas, and pastures to [Add detailed description of the facility, including stall dimensions, turnout areas, arena facilities, etc.]
            </p>
          </div>

          <div className="bg-white rounded-softer p-6 border border-gray-200">
            <h2 className="text-2xl font-serif text-forest-green mb-4">
              Areas for Improvement
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>[Assessment point 1]</li>
              <li>[Assessment point 2]</li>
              <li>[Assessment point 3]</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <ImageUpload
            label="Aerial Facility Layout"
            aspectRatio="aspect-auto"
          />
          <ImageUpload
            label="Facility Photo 1"
            aspectRatio="aspect-auto"
          />
          <ImageUpload
            label="Facility Photo 2"
            aspectRatio="aspect-auto"
          />
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
  )
}

