import Section from '@/components/Section'
import HorseImage from '@/components/HorseImage'

export default function HealthWellness() {

  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Your Horse's Wellness Program
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Making a wellness program for your horse is essential as a horse owner. Wellness programs help maintain your horse's health, prevent disease, and boost performance. This section outlines Billy's daily care, preventative measures, and health monitoring strategies to improve his quality of life. Physical exams, proper diet, vaccinations, parasite control, and biosecurity are important to support Billy in all stages of his life.
        </p>
      </div>

      {/* Physical Exam Findings and Worksheet */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Physical Exam Findings
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a 22-year-old idle horse, Billy is in good condition. In general, his vital signs are normal, and all major body systems work well. Billy's vital signs are normal for an idle adult horse. The only main concern with Billy is his bilateral lameness which needs ongoing care and attention. Overall, owners are able to monitor vital signs and the general health of their horse, but it is important to have a veterinarian conduct checks on the horse to detect serious issues that you cannot obviously observe (blood work, internal exams, advanced lameness detection, etc.).
          </p>
        </div>

        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Physical Exam Worksheet
          </h2>
          <div className="w-full h-[800px] border border-gray-300 rounded-soft overflow-hidden">
            <iframe
              src="./images/physical-exam.pdf#zoom=FitH"
              className="w-full h-full"
              title="Physical Exam Worksheet"
            />
          </div>
        </div>
      </div>

      {/* Physical Exam Process */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Thorough Physical Exam Process
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regular physical exams help owners monitor their horse and assist in identifying any problems early. Billy should be checked routinely due to his age and chronic conditions, like his lameness.
        </p>
        <p className="text-gray-700 leading-relaxed">
          [*** Add how a physical exam on a horse is conducted - systematic approach, what to check, and normal vs. abnormal findings]
        </p>
      </div>

      {/* Daily Diet */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Daily Diet
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Billy's diet was curated to meet the needs of a senior horse with idle activity levels. His diet was also made to support his joint health and prevent him from putting on weight. His diet was also designed to help him increase his BCS of 4 to more of an ideal range. Compared to younger horses, senior horses need calorie-dense diets to maintain a good body condition score due to their decreased digestive efficiency. [CITE]
        </p>
        
        <h3 className="text-xl font-serif text-forest-green mb-3 mt-6">Feeding Schedule</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Feed</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">Morning (7:00 AM)</td>
                <td className="border border-gray-300 px-4 py-2">
                  Grass hay<br />
                  Ground flaxseed<br />
                  Senior concentrate feed
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10 lbs<br />
                  4 oz<br />
                  2 lbs
                </td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2 font-medium">Afternoon (3:00 PM)</td>
                <td className="border border-gray-300 px-4 py-2">Grass hay</td>
                <td className="border border-gray-300 px-4 py-2">10 lbs</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">Evening (7:00 PM)</td>
                <td className="border border-gray-300 px-4 py-2">
                  Grass hay<br />
                  Joint supplement<br />
                  Senior concentrate feed
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  5 lbs<br />
                  1 scoop<br />
                  2 lbs
                </td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2 font-medium">Water</td>
                <td className="border border-gray-300 px-4 py-2" colSpan={2}>Free choice access to fresh clean water (minimum 10-12 gallons per day) [CITE]</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="bg-cream rounded-soft p-4">
            <p className="text-gray-700">
              <span className="font-semibold text-navy-blue">Total Daily Intake:</span> 25 lbs grass hay + 4 lbs concentrate = approximately 29 lbs (2.3% of Billy's body weight)
            </p>
          </div>
          
          <div className="space-y-3 text-gray-700">
            <p className="leading-relaxed">
              Billy gets about 29 lbs of feed per day. His feed consists of grass hay, concentrate, and some supplements for his joint health. Billy gets a little more than 2% of his body weight so he can gradually gain weight because his BCS is at 4 which is moderately thin. [CITE: https://equusmagazine.com/horse-care/feeding-weight-gain-25995]
            </p>
            
            <p className="leading-relaxed">
              Billy consumes 25 lbs of grass hay a day which is 2% of his body weight for maintenance and essential fiber intake for his digestive health. [CITE]
            </p>
            
            <p className="leading-relaxed">
              Billy needs 4 lbs of concentrate because he is moderately thin with a BCS of 4. Billy needs extra calories to gain weight and increase his BCS to the ideal range of 4.5-5. [CITE] Older horses typically struggle to maintain their weight due to less efficient digestive systems that are not as good at getting all the nutrients out of the hay. [CITE] The concentrate also makes it easier to consume more calories without having to significantly increase the amount of hay consumed. [CITE SOMETHING THAT COMPARES HAY CALS TO CONCENTRATE] Divided feedings also help improve digestion. [CITE]
            </p>
            
            <p className="leading-relaxed">
              Ground flaxseed provides Billy with Omega-3 fatty acids with anti-inflammatory benefits that help with his navicular syndrome and arthritis. [CITE THIS] The added fat also helps Billy gain some weight and ground flaxseed is needed so it does not get passed through like whole seeds. [CITE THIS]
            </p>
            
            <p className="leading-relaxed">
              Billy's joint supplement has glucosamine, chondroitin, and MSM to support his cartilage and joints. [CITE THIS]
            </p>
          </div>
        </div>
      </div>

      {/* Body Condition Score */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Body Condition Assessment
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Billy scores a 4 on Henneke's Body Condition Score Sheet. Billy's score is moderately thin and not in the ideal range. This is primarily caused by weight loss due to old age. [CITE]
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-navy-blue mb-2">
              Lateral Side View of Billy for BCS Assessment
            </label>
            <HorseImage
              src="./images/billy-side-1.jpg"
              alt="Image: Side profile view of Billy for body condition score assessment"
              title="Image: Side view for BCS assessment showing body condition"
              aspectRatio="aspect-auto"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-blue mb-2">
              Henneke Body Condition Score Chart
            </label>
            <div className="w-full h-[800px] border border-gray-300 rounded-soft overflow-hidden">
              <iframe
                src="./images/BCS.pdf#zoom=FitH"
                className="w-full h-full"
                title="Henneke Body Condition Score Chart"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vaccination Schedule */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Vaccination Schedule
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Billy receives all the core vaccines annually and risk-based vaccines every six months based on his living situation at Cal Poly's equine center. Every 6 months Billy gets Equine Herpesvirus-1, Equine Herpesvirus-4, West Nile Virus, and Equine Influenza Virus. He gets these vaccines once in the spring and once in the fall. Annually Billy gets Tetanus vaccines, Rabies vaccines, and Eastern/Western Encephalomyelitis vaccines in the spring. [CITE - American Association of Equine Practitioners 2023???]
        </p>
        
        <div className="bg-cream rounded-soft p-4 mb-4">
          <h3 className="font-semibold text-navy-blue mb-3">Vaccine Rationale:</h3>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>
              <span className="font-medium">EHV-1, EHV-4, and EIV (Every 6 months):</span> Billy lives at a university teaching facility and is constantly around new horses and lots of people which adds risk for respiratory diseases. [CITE????]
            </p>
            <p>
              <span className="font-medium">West Nile Virus (Every 6 months):</span> Administered due to California's mosquito populations. [CITE Bergen et al. 2021????]
            </p>
            <p>
              <span className="font-medium">Tetanus (Annual):</span> Protects against infections from wounds due to lots of bacteria in the soil that Billy gets exposed to.
            </p>
            <p>
              <span className="font-medium">EEE/WEE (Annual):</span> Given in the spring before mosquito season to protect against diseases caused by mosquitos. [CITE]
            </p>
            <p>
              <span className="font-medium">Rabies (Annual):</span> Given once a year because of California's wildlife. [CITE]
            </p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Vaccine</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Frequency</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Equine Herpesvirus-1 (EHV-1)</td>
                <td className="border border-gray-300 px-4 py-2">Every 6 months</td>
                <td className="border border-gray-300 px-4 py-2">Spring & Fall</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">Equine Herpesvirus-4 (EHV-4)</td>
                <td className="border border-gray-300 px-4 py-2">Every 6 months</td>
                <td className="border border-gray-300 px-4 py-2">Spring & Fall</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">West Nile Virus</td>
                <td className="border border-gray-300 px-4 py-2">Every 6 months</td>
                <td className="border border-gray-300 px-4 py-2">Spring & Fall</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">Equine Influenza Virus (EIV)</td>
                <td className="border border-gray-300 px-4 py-2">Every 6 months</td>
                <td className="border border-gray-300 px-4 py-2">Spring & Fall</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Tetanus</td>
                <td className="border border-gray-300 px-4 py-2">Annual</td>
                <td className="border border-gray-300 px-4 py-2">Spring</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">Rabies</td>
                <td className="border border-gray-300 px-4 py-2">Annual</td>
                <td className="border border-gray-300 px-4 py-2">Spring</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Eastern/Western Encephalomyelitis (EEE/WEE)</td>
                <td className="border border-gray-300 px-4 py-2">Annual</td>
                <td className="border border-gray-300 px-4 py-2">Spring</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Deworming Schedule */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Deworming Schedule
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Billy gets dewormed 2-3 times a year based on his fecal egg count. He does not get routinely dewormed. [American Association of Equine Practitioners 2019???]
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Late Fall/Early Winter:</h3>
            <p className="text-gray-700 text-sm">
              Billy gets dewormed with an Ivermectin and Praziquantel combination to mitigate bots, small/large strongyles, and tapeworms. [CITE]
            </p>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Late Spring (May/June):</h3>
            <p className="text-gray-700 text-sm">
              Billy gets Moxidectin and Praziquantel to treat smaller strongyles, large strongyles, and tapeworms during grazing season. [CITE]
            </p>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Fecal Egg Count Testing:</h3>
            <p className="text-gray-700 text-sm">
              Billy's fecal egg count is conducted 1-2 times a year to assess his parasites and to see if he needs more dewormers. This approach that determines if deworming is needed based on fecal egg count is more effective because it slows anthelmintic resistance. [CITE]
            </p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Timing</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Active Ingredients</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Target Parasites</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">Late Fall/Early Winter</td>
                <td className="border border-gray-300 px-4 py-2">Ivermectin + Praziquantel</td>
                <td className="border border-gray-300 px-4 py-2">Bots, small/large strongyles, tapeworms</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2 font-medium">Late Spring (May/June)</td>
                <td className="border border-gray-300 px-4 py-2">Moxidectin + Praziquantel</td>
                <td className="border border-gray-300 px-4 py-2">Small/large strongyles, tapeworms</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">1-2 times per year</td>
                <td className="border border-gray-300 px-4 py-2" colSpan={2}>Fecal Egg Count (FEC) Testing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Outbreak Prevention Strategies */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Outbreak Prevention Strategies
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          If any outbreak occurs at Cal Poly's equine facility, the infected horses will be isolated and separated from any healthy and unaffected horses. [CITE SOURCE]
        </p>
        <div className="space-y-4 text-gray-700">
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Equipment Sanitation:</h3>
            <p>All equipment like halters, grooming supplies, feed containers, and water buckets must be thoroughly sanitized between horses. To be even more cautious depending on the outbreak, the infected horses should use their own supplies to prevent any cross contamination.</p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Vaccination Requirements:</h3>
            <p>All horses must have their core vaccinations like Tetanus, EEE/WEE, West Nile Virus, and the Rabies virus. Any risk-based vaccines are also strongly encouraged to be extra cautious. Providing all horses with these vaccines promotes immunity amongst the entire herd and prevents any severe outbreaks. [CITE]</p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">New Horse Quarantine:</h3>
            <p>Any new horses that come to Cal Poly's facility should quarantine for a minimum of 7-14 days in an isolated area. While the new horses are isolated, vital signs, temperature, pulse, and general health indicators should be measured twice daily to catch any illnesses. Any horses that are quarantined should have their own equipment to keep supplies amongst other horses at the facility safe in case of illness. To be extra thorough, new horses should provide a negative Coggins test within a year, health certificates within a month, and documentation of vaccines. [CITE]</p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Areas for Improvement:</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Extending isolation periods to 21 days due to most diseases showing clinical signs at the 14+ day mark [CITE]</li>
              <li>Including signs for visitors about biosecurity practices</li>
              <li>Building a separate quarantine facility at the equine center to prevent any airborne transmission between quarantined horses and long-time residents</li>
              <li>Including parasite screening with incoming horses 30 days before they arrive to help determine any high shedders before being put out onto the pasture</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Genetic Diseases */}
      <div className="bg-white rounded-softer p-6 border border-gray-200">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Common Genetic Diseases in Quarter Horses
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Quarter Horses are predisposed to several hereditary disorders. Understanding these conditions is important for Billy's health management and breeding considerations.
        </p>
        <div className="space-y-6">
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Hyperkalemic Periodic Paralysis (HYPP)</h3>
            <p className="text-gray-700 text-sm">
              This disorder causes uncontrolled muscle twitches, weakness, and potential collapsing. [CITE] HYPP follows an autosomal dominant inheritance that gets inherited from the sire Impressive. [CITE] Billy has not shown any signs of muscle tremors or any unusual weaknesses, so the HYPP gene is not present. [CITE]
            </p>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Polysaccharide Storage Myopathy Type 1 (PSSM1)</h3>
            <p className="text-gray-700 text-sm">
              This disorder follows an autosomal dominant pattern and impacts Quarter Horse's muscle metabolism which can cause cramping, exercise intolerance, and "tying up." [CITE] PSSM1 affects around 6-12% of Quarter Horses. [CITE] Billy shows signs of exercise intolerance but it is most likely attributed to his chronic lameness. However, PSSM1 cannot be completely ruled out without genetic tests. [CITE]
            </p>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Hereditary Equine Regional Dermal Asthenia (HERDA)</h3>
            <p className="text-gray-700 text-sm">
              HERDA is an autosomal recessive skin disorder connected to Poco Bueno bloodlines. [CITE] This disorder causes fragile skin that tears. Billy has had normal skin for 22 years, so HERDA can be ruled out. [CITE] Although, he could be a carrier without showing signs of fragile skin. [CITE]
            </p>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Glycogen Branching Enzyme Deficiency (GBED)</h3>
            <p className="text-gray-700 text-sm">
              GBED is an autosomal recessive disorder that is fatal in foals within months of birth. [CITE] Due to Billy's age, he is definitely not affected by GBED.
            </p>
          </div>
        </div>
        <div className="mt-6 bg-navy-blue bg-opacity-5 rounded-soft p-4">
          <h3 className="font-semibold text-navy-blue mb-2">Assessment for Billy:</h3>
          <p className="text-gray-700">
            Assessing Billy's health history indicates that Billy is not impacted by GBED or HERDA. Billy also does not have any muscle tremors or collapses which makes HYPP very unlikely but not impossible. Though, PSSM1 remains as a possibility, but it is hard to really differentiate this disorder due to Billy's chronic lameness. Genetic tests would need to be conducted to fully rule out PSSM1. [CITE]
          </p>
        </div>
      </div>
    </Section>
  )
}

