import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Section from '@/components/Section'

export default function Citations() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to and highlight the citation when hash is present
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          element.classList.add('ring-4', 'ring-forest-green', 'ring-opacity-50')
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-forest-green', 'ring-opacity-50')
          }, 3000)
        }, 100)
      }
    }
  }, [location])

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
          <div id="aqha-history" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[1] American Quarter Horse Association</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "American Quarter Horse Association." <em>The History of AQHA</em>, (n.d.), <a href="https://www.aqha.com/history-of-aqha" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/history-of-aqha</a>.
            </p>
          </div>
          <div id="aqha-milestone" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[2] AQHA Registry Milestone</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "AQHA Registry Hits Milestone – 6 Million Registered Horses." <em>American Quarter Horse Association</em>, (n.d.), <a href="https://www.aqha.com/-/aqha-registry-hits-milestone-6-million-registered-horses" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/-/aqha-registry-hits-milestone-6-million-registered-horses</a>.
            </p>
          </div>
          <div id="aqha-register-foal" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[3] How to Register Your AQHA Foal</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "How to Register Your AQHA Foal." <em>American Quarter Horse Association</em>, (n.d.), <a href="https://www.aqha.com/-/how-to-register-your-aqha-foal" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/-/how-to-register-your-aqha-foal</a>.
            </p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[Additional Citation]</span>
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

