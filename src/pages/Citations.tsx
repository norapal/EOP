import Section from '@/components/Section'

export default function Citations() {
  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Citations & References
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          All sources used in this portfolio are cited using appropriate Animal Science (ASCI) citation format. Sources are referenced both within the text and listed below.
        </p>
      </div>

      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Works Cited
        </h2>
        <div className="space-y-4 text-gray-700">
          <div className="bg-white rounded-soft p-4">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[Citation 1]</span>
            </p>
            <p className="text-sm">
              [Format according to ASCI citation style. Include author, year, title, publication, etc.]
            </p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[Citation 2]</span>
            </p>
            <p className="text-sm">
              [Format according to ASCI citation style]
            </p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[Citation 3]</span>
            </p>
            <p className="text-sm">
              [Format according to ASCI citation style]
            </p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600 italic">
            Add additional citations as needed. Remember to cite:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
            <li>Breed registry websites and publications</li>
            <li>Veterinary and equine science textbooks</li>
            <li>Peer-reviewed journal articles</li>
            <li>Class lectures and PowerPoint presentations</li>
            <li>Images and videos (include URL source)</li>
            <li>Websites and online resources</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-softer p-6 border border-gray-200">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Image & Video Sources
        </h2>
        <div className="space-y-3 text-gray-700">
          <div>
            <p className="font-semibold text-navy-blue mb-1">Image 1: [Description]</p>
            <p className="text-sm text-gray-600">Source: [URL or citation]</p>
          </div>
          <div>
            <p className="font-semibold text-navy-blue mb-1">Image 2: [Description]</p>
            <p className="text-sm text-gray-600">Source: [URL or citation]</p>
          </div>
          <div>
            <p className="font-semibold text-navy-blue mb-1">Video 1: [Description]</p>
            <p className="text-sm text-gray-600">Source: [URL or citation]</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600 italic">
          Continue listing all images and videos used throughout the portfolio with their sources.
        </p>
      </div>

      <div className="bg-cream rounded-softer p-6 mt-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Citation Format Guidelines
        </h2>
        <div className="space-y-3 text-gray-700 text-sm">
          <div>
            <h3 className="font-semibold text-navy-blue mb-1">Website Citation Format:</h3>
            <p className="italic">Author. Year. Title. Website Name. URL. Accessed [Date].</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-1">Book Citation Format:</h3>
            <p className="italic">Author. Year. Title. Publisher, Location.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-1">Journal Article Format:</h3>
            <p className="italic">Author. Year. Title. Journal Name. Volume(Issue): Pages.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-1">Lecture/PowerPoint Format:</h3>
            <p className="italic">Instructor. Year. Lecture Title. Course Name. Institution.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

