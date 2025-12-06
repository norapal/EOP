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
          <div id="mclean-learning" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[4] The Application of Learning Theory in Horse Training</span>
            </p>
            <p className="text-sm">
              McLean, Andrew, and Janne Christensen. "The Application of Learning Theory in Horse Training." <em>Science Direct</em>, May 2017, <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168159117300710" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.sciencedirect.com/science/article/abs/pii/S0168159117300710</a>.
            </p>
          </div>
          <div id="oppenheimer-facility" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[5] Oppenheimer Family Equine Center</span>
            </p>
            <p className="text-sm">
              Animal Science Department. "Cal Poly." <em>Oppenheimer Family Equine Center</em>, (n.d.), <a href="https://animalscience.calpoly.edu/FacilitiesCenters/equine_center" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">animalscience.calpoly.edu/FacilitiesCenters/equine_center</a>.
            </p>
          </div>
          <div id="aqha-balanced-horse" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[6] Balanced Horse Conformation</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "American Quarter Horse Association." <em>Balanced Horse Conformation</em>, (n.d.), <a href="https://www.aqha.com/-/the-balanced-horse" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/-/the-balanced-horse</a>.
            </p>
          </div>
          <div id="aqha-western-pleasure" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[7] Showing Western Pleasure: The Basics</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "Showing Western Pleasure: The Basics." <em>AQHA</em>, 2020, <a href="https://www.aqha.com/widget/-/showing-western-pleasure-the-basics#:~:text=Lope,horse,s%20conformation%20at%20all%20gaits" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/widget/-/showing-western-pleasure-the-basics</a>.
            </p>
          </div>
          <div id="navicular-usu" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[8] Equine Navicular Syndrome</span>
            </p>
            <p className="text-sm">
              Hoopes, Karl. "Equine Navicular Syndrome." <em>Utah State University Extension</em>, June 2023, <a href="https://extension.usu.edu/equine/research/equine-navicular-syndrome" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">extension.usu.edu/equine/research/equine-navicular-syndrome</a>.
            </p>
          </div>
          <div id="navicular-merck" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[9] Navicular Syndrome in Horses</span>
            </p>
            <p className="text-sm">
              Moorman, Valerie J, et al. "Navicular Syndrome in Horses - Musculoskeletal System." <em>Merck Veterinary Manual</em>, June 2024, <a href="https://www.merckvetmanual.com/musculoskeletal-system/disorders-of-the-foot-in-horses/navicular-syndrome-in-horses" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.merckvetmanual.com/musculoskeletal-system/disorders-of-the-foot-in-horses/navicular-syndrome-in-horses</a>.
            </p>
          </div>
          <div id="aaep-lameness" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[10] Client Education Presentation: Lameness Exams</span>
            </p>
            <p className="text-sm">
              American Association of Equine Practitioners. "Client Education Presentation: Lameness Exams." <em>AAEP</em>, 30 May 2025, <a href="https://aaep.org/resource/client-education-presentation-lameness-exams/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">aaep.org/resource/client-education-presentation-lameness-exams/</a>.
            </p>
          </div>
          <div id="vt-physical-exam" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[11] SOP: Equine Physical Exam</span>
            </p>
            <p className="text-sm">
              Virginia Tech. "SOP: Equine Physical Exam." University Veterinarian and Animal Resources, 2017, <a href="https://www.research.vt.edu/content/dam/ouv_vt_edu/sops/large-animal/sop-equine-physical-exam.pdf" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.research.vt.edu/content/dam/ouv_vt_edu/sops/large-animal/sop-equine-physical-exam.pdf</a>.
            </p>
          </div>
          <div id="iowa-state-senior" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[12] Feeding the Senior Horse</span>
            </p>
            <p className="text-sm">
              Iowa State University. "Feeding the Senior Horse." <em>Iowa State University Extension and Outreach</em>, (n.d.), <a href="https://www.extension.iastate.edu/equine/feeding-senior-horse" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.extension.iastate.edu/equine/feeding-senior-horse</a>.
            </p>
          </div>
          <div id="iowa-state-bcs" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[13] The Body Condition Score</span>
            </p>
            <p className="text-sm">
              Iowa State University. "The Body Condition Score." <em>Iowa State University Extension and Outreach</em>, (n.d.), <a href="https://www.extension.iastate.edu/equine/body-condition-score" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.extension.iastate.edu/equine/body-condition-score</a>.
            </p>
          </div>
          <div id="dr-gray-flax" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[14] Benefits, Safety and Uses of Flax Seed for Horses</span>
            </p>
            <p className="text-sm">
              Dr. Gray. "Benefits, Safety and Uses of Flax Seed for Horses - Smartpak." <em>SmartPak Equine</em>, 2025, <a href="https://www.smartpakequine.com/learn-health/is-flax-seed-safe-to-use-in-horses?srsltid=AfmBOoouVcOvQcDvIjiixQgq0Np79ytxgFWbJYQH-hwajiWjkPguOz6w" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.smartpakequine.com/learn-health/is-flax-seed-safe-to-use-in-horses</a>.
            </p>
          </div>
          <div id="smartpak-joint" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[15] Horse Owner's Guide to Joint Supplements</span>
            </p>
            <p className="text-sm">
              SmartPak Equine. "Horse Owner's Guide to Joint Supplements." <em>SmartPak Equine</em>, 2023, <a href="https://www.smartpakequine.com/learn-health/why-feed-horse-joint-supplements?g_acctid=312-013-2860&g_adgroupid=120143888637&g_adid=780062827118&g_adtype=search&g_campaign=google_nb_dsasearch_3p_supplements_na_supplements_na_na_us_sr_ep&g_campaignid=12646386862&g_keyword=&g_keywordid=dsa-439585516007&g_network=g&utm_campaign=Joint&utm_content=google_nb_dsasearch_3p_supplements_na_supplements_na_na_us_sr_ep&utm_medium=cpc&utm_source=google&gclsrc=aw.ds&gad_source=1&gad_campaignid=12646386862&gbraid=0AAAAAD_uTlSUVN9FkeS78y6qp9ZoQylaE&gclid=CjwKCAiAlrXJBhBAEiwA-5pgwiDwi-nzeal_205m1IXJLRvRgMAQoTNPJ8OIrXkvLfC-mDzWVPHINxoC3QUQAvD_BwE" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.smartpakequine.com/learn-health/why-feed-horse-joint-supplements</a>.
            </p>
          </div>
          <div id="aaep-vaccination" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[16] Vaccination Guidelines</span>
            </p>
            <p className="text-sm">
              American Association of Equine Practitioners. "Vaccination Guidelines." <em>AAEP</em>, (n.d.), <a href="https://aaep.org/guidelines-resources/vaccination-guidelines/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">aaep.org/guidelines-resources/vaccination-guidelines/</a>.
            </p>
          </div>
          <div id="smartpak-deworming" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[17] Modern Guide to Horse Deworming - Equine Parasite Control</span>
            </p>
            <p className="text-sm">
              SmartPak Equine. "Modern Guide to Horse Deworming - Equine Parasite Control." <em>SmartPak Equine</em>, 2024, <a href="https://www.smartpakequine.com/learn-health/the-modern-guide-to-horse-deworming?srsltid=AfmBOoqu34bZzMGQ9o9p37whhCP3lfWzRPLaKdN2xQRw0o9Fp_7Y4agF" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.smartpakequine.com/learn-health/the-modern-guide-to-horse-deworming</a>.
            </p>
          </div>
          <div id="aaep-infectious" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[18] Infectious Disease Control</span>
            </p>
            <p className="text-sm">
              American Association of Equine Practitioners. "Infectious Disease Control." <em>AAEP</em>, (n.d.), <a href="https://aaep.org/guidelines-resources/vaccination-guidelines/infectious-disease-control/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">aaep.org/guidelines-resources/vaccination-guidelines/infectious-disease-control/</a>.
            </p>
          </div>
          <div id="aaep-biosecurity" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[19] General Biosecurity Guidelines</span>
            </p>
            <p className="text-sm">
              AAEP. "General Biosecurity Guidelines." <em>AAEP Biosecurity Guidelines</em>, 2022, <a href="https://aaep.org/wp-content/uploads/2022/01/AAEP-General-Biosecurity-Guidelines_1.pdf" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">aaep.org/wp-content/uploads/2022/01/AAEP-General-Biosecurity-Guidelines_1.pdf</a>.
            </p>
          </div>
          <div id="ker-genetic" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[20] Common Genetic Diseases in Quarter Horses</span>
            </p>
            <p className="text-sm">
              Kentucky Equine Research Staff. "Common Genetic Diseases in Quarter Horses - Kentucky Equine Research." <em>Equinews Nutrition and Health Daily</em>, 2013, <a href="https://ker.com/equinews/common-genetic-diseases-quarter-horses/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">ker.com/equinews/common-genetic-diseases-quarter-horses/</a>.
            </p>
          </div>
          <div id="aqha-dna" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[21] DNA and Parentage Verification</span>
            </p>
            <p className="text-sm">
              American Quarter Horse Association. "DNA and Parentage Verification." <em>AQHA</em>, 2018, <a href="https://www.aqha.com/widget/-/dna-and-parentage-verification" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.aqha.com/widget/-/dna-and-parentage-verification</a>.
            </p>
          </div>
          <div id="umn-senior-horse" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[22] Caring for Your Senior Horse</span>
            </p>
            <p className="text-sm">
              University of Minnesota Extension. "Caring for Your Senior Horse." <em>Extension at the University of Minnesota</em>, 2024, <a href="https://extension.umn.edu/horse-health/caring-your-senior-horse" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">extension.umn.edu/horse-health/caring-your-senior-horse</a>.
            </p>
          </div>
          <div id="calpoly-sales" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[23] Sales & Services: Cal Poly Horses</span>
            </p>
            <p className="text-sm">
              Cal Poly. "Sales & Services: Cal Poly Horses." <em>Performance Horse Sales</em>, (n.d.), <a href="https://ranchhorse.calpoly.edu/content/sales" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">ranchhorse.calpoly.edu/content/sales</a>.
            </p>
          </div>
          <div id="pbs-flaxseed" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[24] Ground Flax Seed for Horses</span>
            </p>
            <p className="text-sm">
              PBS Animal Health. "Ground Flax Seed for Horses." <em>PBS Animal Health</em>, (n.d.), <a href="https://www.pbsanimalhealth.com/ground-flax-seed-for-horses/p/14871/?v=2" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.pbsanimalhealth.com/ground-flax-seed-for-horses/p/14871/?v=2</a>.
            </p>
          </div>
          <div id="platinum-joint" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[25] Joint Supplements for Horses: Equine Joint Support</span>
            </p>
            <p className="text-sm">
              Platinum Performance. "Joint Supplements for Horses: Equine Joint Support: Hyaluronic Acid." <em>Platinum Performance</em>, (n.d.), <a href="https://www.platinumperformance.com/platinum-performance-cj/epcjg--kepppcj--set.html" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.platinumperformance.com/platinum-performance-cj/epcjg--kepppcj--set.html</a>.
            </p>
          </div>
          <div id="century-vaccine" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[26] 2022 Vaccine Clinic</span>
            </p>
            <p className="text-sm">
              "2022 Vaccine Clinic." <em>Century Equine Veterinary Services</em>, 2022, <a href="https://centuryequine.com/2020-vaccine-clinic/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">centuryequine.com/2020-vaccine-clinic/</a>.
            </p>
          </div>
          <div id="tractor-ivermectin" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[27] Equimax Ivermectin/Praziquantel Horse Paste</span>
            </p>
            <p className="text-sm">
              Tractor Supply Co. <em>Equimax Ivermectin/Praziquantel Horse Paste</em>, 2025, <a href="https://www.tractorsupply.com/tsc/product/equimax-ivermectin-187-praiquantel-1403-paste-642-g" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.tractorsupply.com/tsc/product/equimax-ivermectin-187-praiquantel-1403-paste-642-g</a>.
            </p>
          </div>
          <div id="tractor-quest" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[28] Quest Plus Gel Horse Dewormer and Boticide</span>
            </p>
            <p className="text-sm">
              Tractor Supply Co. "Quest Plus Gel Horse Dewormer and Boticide, 0.5 Oz." <em>Tractor Supply Co</em>, 2025, <a href="https://www.tractorsupply.com/tsc/product/quest-plus-gel" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.tractorsupply.com/tsc/product/quest-plus-gel</a>.
            </p>
          </div>
          <div id="foundation-clinic" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[29] Foundation Equine Clinic Services</span>
            </p>
            <p className="text-sm">
              Foundation Equine Clinic. "Services." <em>Foundation Equine Clinic</em>, (n.d.), <a href="https://www.foundationequineclinic.com/services" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.foundationequineclinic.com/services</a>.
            </p>
          </div>
          <div id="dixie-farrier" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[30] Dixie's Farrier Service Pricing</span>
            </p>
            <p className="text-sm">
              Dixie's Farrier Service. "Pricing." <em>Dixie's Farrier Service</em>, 2024, <a href="https://www.dixiesfarrierservice.com/pricing/" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">www.dixiesfarrierservice.com/pricing/</a>.
            </p>
          </div>
          <div id="usu-hoof-care" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[31] Proper Basic Hoof Care</span>
            </p>
            <p className="text-sm">
              Utah State University. "Proper Basic Hoof Care." <em>USU</em>, 14 Dec. 2023, <a href="https://extension.usu.edu/equine/research/proper-basic-hoof-care" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">extension.usu.edu/equine/research/proper-basic-hoof-care</a>.
            </p>
          </div>
          <div id="aaep-fee-survey" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="mb-2">
              <span className="font-semibold text-navy-blue">[32] Equine Veterinary Fee Survey</span>
            </p>
            <p className="text-sm">
              American Association of Equine Practitioners. "Equine Veterinary Fee Survey: DecadeOne and Veterinary Management Group 16 Data." <em>American Association of Equine Practitioners</em>, 2024, <a href="https://aaep.org/wp-content/uploads/2024/02/Decade-One-VMG-Combined-Fee-Survey.pdf" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">aaep.org/wp-content/uploads/2024/02/Decade-One-VMG-Combined-Fee-Survey.pdf</a>.
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

      <div id="image-video-sources" className="bg-white rounded-softer p-6 border border-gray-200">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Image & Video Sources
        </h2>
        <div className="space-y-3 text-gray-700">
          <div id="video-behavior-mod" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="font-semibold text-navy-blue mb-1">Video 1: Behavior Modification Demonstration</p>
            <p className="text-sm text-gray-600">Source: <a href="https://www.youtube.com/embed/JwoyxETo-t0?start=270" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">https://www.youtube.com/embed/JwoyxETo-t0?start=270</a></p>
          </div>
          <div id="aqha-rulebook-img" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="font-semibold text-navy-blue mb-1">AQHA Rulebook Image</p>
            <p className="text-sm text-gray-600">Source: <a href="https://www.aqha.com/aqha-rulebook" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">https://www.aqha.com/aqha-rulebook</a></p>
          </div>
          <div id="what-is-quarter-horse-img" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="font-semibold text-navy-blue mb-1">What is a Quarter Horse - Ideal Conformation Image</p>
            <p className="text-sm text-gray-600">Source: <a href="https://www.aqha.com/-/what-is-a-quarter-horse" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">https://www.aqha.com/-/what-is-a-quarter-horse</a></p>
          </div>
          <div id="balanced-horse-ratios-img" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="font-semibold text-navy-blue mb-1">Balanced Horse Ratio Images (Sloping Shoulder, Neck, Top/Bottom Line, Square Hip)</p>
            <p className="text-sm text-gray-600">Source: <a href="https://www.aqha.com/-/the-balanced-horse" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">https://www.aqha.com/-/the-balanced-horse</a></p>
          </div>
          <div id="ideal-legs-img" className="bg-white rounded-soft p-4 transition-all duration-300">
            <p className="font-semibold text-navy-blue mb-1">Ideal Quarter Horse Front Legs</p>
            <p className="text-sm text-gray-600">Source: <a href="https://www.aqha.com/-/you-be-the-judge-front-legs" target="_blank" rel="noopener noreferrer" className="text-navy-blue underline hover:text-forest-green transition-colors">https://www.aqha.com/-/you-be-the-judge-front-legs</a></p>
          </div>
        </div>
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

