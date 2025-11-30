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
          The layout and design of the horse's facility is crucial for its health, safety, and well-being. Planning the layout, features, and potential areas to improve the facility promotes good management practices.
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
              [Add detailed description of the facility, including stall dimensions, turnout areas, arena facilities, etc.]
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
            aspectRatio="aspect-square"
          />
          <ImageUpload
            label="Facility Photo 1"
            aspectRatio="aspect-[4/3]"
          />
          <ImageUpload
            label="Facility Photo 2"
            aspectRatio="aspect-[4/3]"
          />
        </div>
      </div>

      <div className="bg-white rounded-softer p-6 border border-gray-200">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Location Map
        </h2>
        <div className="aspect-video bg-gray-100 rounded-soft flex items-center justify-center">
          <p className="text-gray-500">
            [Embed Google Maps or other map service here]
          </p>
        </div>
      </div>
    </Section>
  )
}

