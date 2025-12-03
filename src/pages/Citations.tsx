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
          <div id="purina-senior" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[4] Senior Feed for Horses</span>
            </p>
            <p className="text-sm">
              Purina. "Senior Feed for Horses: Purina Animal Nutrition." <em>Purina</em>, 3 Nov. 2025, <a href="https://www.purinamills.com/horse-feed/education/detail/feeding-options-for-senior-horses" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.purinamills.com/horse-feed/education/detail/feeding-options-for-senior-horses</a>.
            </p>
          </div>
          <div id="dengie-veteran" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[5] Feeding the Veteran Horse</span>
            </p>
            <p className="text-sm">
              Dengie Horse Feeds. "Feeding the Veteran Horse | Dengie Horse Feeds." <em>Dengie</em>, (n.d.), <a href="https://dengie.com/nutrition-hub/lifestages-workload/feeding-the-veteran-horse/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">dengie.com/nutrition-hub/lifestages-workload/feeding-the-veteran-horse/</a>.
            </p>
          </div>
          <div id="mclean-learning" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[6] The Application of Learning Theory in Horse Training</span>
            </p>
            <p className="text-sm">
              McLean, Andrew, and Janne Christensen. "The Application of Learning Theory in Horse Training." <em>Science Direct</em>, May 2017, <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168159117300710" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.sciencedirect.com/science/article/abs/pii/S0168159117300710</a>.
            </p>
          </div>
          <div id="oppenheimer-facility" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[7] Oppenheimer Family Equine Center</span>
            </p>
            <p className="text-sm">
              Animal Science Department. "Cal Poly." <em>Oppenheimer Family Equine Center</em>, (n.d.), <a href="https://animalscience.calpoly.edu/FacilitiesCenters/equine_center" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">animalscience.calpoly.edu/FacilitiesCenters/equine_center</a>.
            </p>
          </div>
          <div id="aqha-balanced-horse" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[8] Balanced Horse Conformation</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "American Quarter Horse Association." <em>Balanced Horse Conformation</em>, (n.d.), <a href="https://www.aqha.com/-/the-balanced-horse" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/-/the-balanced-horse</a>.
            </p>
          </div>
          <div id="aqha-western-pleasure" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[9] Showing Western Pleasure: The Basics</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "Showing Western Pleasure: The Basics." <em>AQHA</em>, 2020, <a href="https://www.aqha.com/widget/-/showing-western-pleasure-the-basics#:~:text=Lope,horse,s%20conformation%20at%20all%20gaits" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/widget/-/showing-western-pleasure-the-basics</a>.
            </p>
          </div>
          <div id="navicular-usu" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[10] Equine Navicular Syndrome</span>
            </p>
            <p className="text-sm">
              Hoopes, Karl. "Equine Navicular Syndrome." <em>Utah State University Extension</em>, June 2023, <a href="https://extension.usu.edu/equine/research/equine-navicular-syndrome" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">extension.usu.edu/equine/research/equine-navicular-syndrome</a>.
            </p>
          </div>
          <div id="navicular-merck" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[11] Navicular Syndrome in Horses</span>
            </p>
            <p className="text-sm">
              Moorman, Valerie J, et al. "Navicular Syndrome in Horses - Musculoskeletal System." <em>Merck Veterinary Manual</em>, June 2024, <a href="https://www.merckvetmanual.com/musculoskeletal-system/disorders-of-the-foot-in-horses/navicular-syndrome-in-horses" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.merckvetmanual.com/musculoskeletal-system/disorders-of-the-foot-in-horses/navicular-syndrome-in-horses</a>.
            </p>
          </div>
          <div id="aaep-lameness" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[12] Client Education Presentation: Lameness Exams</span>
            </p>
            <p className="text-sm">
              American Association of Equine Practitioners. "Client Education Presentation: Lameness Exams." <em>AAEP</em>, 30 May 2025, <a href="https://aaep.org/resource/client-education-presentation-lameness-exams/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">aaep.org/resource/client-education-presentation-lameness-exams/</a>.
            </p>
          </div>
          <div id="vt-physical-exam" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[13] SOP: Equine Physical Exam</span>
            </p>
            <p className="text-sm">
              Virginia Tech. "SOP: Equine Physical Exam." University Veterinarian and Animal Resources, 2017, <a href="https://www.research.vt.edu/content/dam/ouv_vt_edu/sops/large-animal/sop-equine-physical-exam.pdf" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.research.vt.edu/content/dam/ouv_vt_edu/sops/large-animal/sop-equine-physical-exam.pdf</a>.
            </p>
          </div>
          <div id="iowa-state-senior" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[14] Feeding the Senior Horse</span>
            </p>
            <p className="text-sm">
              Iowa State University. "Feeding the Senior Horse." <em>Iowa State University Extension and Outreach</em>, (n.d.), <a href="https://www.extension.iastate.edu/equine/feeding-senior-horse" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.extension.iastate.edu/equine/feeding-senior-horse</a>.
            </p>
          </div>
          <div id="iowa-state-bcs" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[15] The Body Condition Score</span>
            </p>
            <p className="text-sm">
              Iowa State University. "The Body Condition Score." <em>Iowa State University Extension and Outreach</em>, (n.d.), <a href="https://www.extension.iastate.edu/equine/body-condition-score" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.extension.iastate.edu/equine/body-condition-score</a>.
            </p>
          </div>
          <div id="dr-gray-flax" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[16] Benefits, Safety and Uses of Flax Seed for Horses</span>
            </p>
            <p className="text-sm">
              Dr. Gray. "Benefits, Safety and Uses of Flax Seed for Horses - Smartpak." <em>SmartPak Equine</em>, 2025, <a href="https://www.smartpakequine.com/learn-health/is-flax-seed-safe-to-use-in-horses?srsltid=AfmBOoouVcOvQcDvIjiixQgq0Np79ytxgFWbJYQH-hwajiWjkPguOz6w" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.smartpakequine.com/learn-health/is-flax-seed-safe-to-use-in-horses</a>.
            </p>
          </div>
          <div id="smartpak-joint" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[17] Horse Owner's Guide to Joint Supplements</span>
            </p>
            <p className="text-sm">
              SmartPak Equine. "Horse Owner's Guide to Joint Supplements." <em>SmartPak Equine</em>, 2023, <a href="https://www.smartpakequine.com/learn-health/why-feed-horse-joint-supplements?g_acctid=312-013-2860&g_adgroupid=120143888637&g_adid=780062827118&g_adtype=search&g_campaign=google_nb_dsasearch_3p_supplements_na_supplements_na_na_us_sr_ep&g_campaignid=12646386862&g_keyword=&g_keywordid=dsa-439585516007&g_network=g&utm_campaign=Joint&utm_content=google_nb_dsasearch_3p_supplements_na_supplements_na_na_us_sr_ep&utm_medium=cpc&utm_source=google&gclsrc=aw.ds&gad_source=1&gad_campaignid=12646386862&gbraid=0AAAAAD_uTlSUVN9FkeS78y6qp9ZoQylaE&gclid=CjwKCAiAlrXJBhBAEiwA-5pgwiDwi-nzeal_205m1IXJLRvRgMAQoTNPJ8OIrXkvLfC-mDzWVPHINxoC3QUQAvD_BwE" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.smartpakequine.com/learn-health/why-feed-horse-joint-supplements</a>.
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

