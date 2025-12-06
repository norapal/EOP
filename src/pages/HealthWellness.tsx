import { Link } from 'react-router-dom'
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
        <p className="text-gray-700 leading-relaxed mt-4">
            The first step of your physical exam is to look at the horse from a distance and assess the stance, general behavior, body condition score, coat health, and respiratory rate <sup><Link to="/citations#vt-physical-exam" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[11]</Link></sup>. The head and neck examination starts by lifting the upper lip to determine color, moisture, and capillary refill time in the upper membranes. The horse’s dentition condition should also be noted. It is important to look for any chips or irregularities in the teeth. Proper reflexes in the eyes can then be checked, and an evaluation of the nares for symmetry and airflow can follow <sup><Link to="/citations#vt-physical-exam" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[11]</Link></sup>. Also note any abnormal discharge from the nose, eyes, or mouth. Next, you should palpate the ears for temperature, lymph nodes for swelling, and the pulse should be recorded via the facial artery <sup><Link to="/citations#vt-physical-exam" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[11]</Link></sup>. During the thoracic region assessment, listen for proper lung function by paying close attention to breathing sounds. Compare these sounds on both sides and pay close attention to inspiration being louder than expiration <sup><Link to="/citations#vt-physical-exam" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[11]</Link></sup>. Then listen to the heart rate on both sides to check valve function and the heart rate of your horse <sup><Link to="/citations#vt-physical-exam" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[11]</Link></sup>. When examining the abdominal region, listen for rumbling gut sounds on both sides. The last step would be the musculoskeletal portion, which identifies any swelling, heat, or pain on all four limbs <sup><Link to="/citations#vt-physical-exam" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[11]</Link></sup>. In this portion, the digital pulse in each limb should also be taken, and an assessment of muscle symmetry should be conducted <sup><Link to="/citations#vt-physical-exam" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[11]</Link></sup>.
        </p>
      </div>

      {/* Daily Diet */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Daily Diet
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Billy's diet was curated to meet the needs of a senior horse with idle activity levels. His diet was made to support his joint health while helping him reach an ideal body condition score. Senior horses are prone to digestive and dentition changes <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. Older horses have reduced fiber fermentation capabilities in the hindgut and decreased protein digestion in their small intestine <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. As a result, senior horses need higher-quality and more digestible feed sources <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. Older horses benefit more from high-quality protein sources like alfalfa, which provides fiber that is easier to digest and amino acids that support muscle maintenance <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>.
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
                  Alfalfa pellets<br />
                  Ground flaxseed<br />
                  Senior concentrate feed
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  8 lbs<br />
                  3 lbs<br />
                  4 oz<br />
                  1 lb
                </td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2 font-medium">Afternoon (3:00 PM)</td>
                <td className="border border-gray-300 px-4 py-2">
                  Grass hay<br />
                  Alfalfa pellets
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  8 lbs<br />
                  2 lbs
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">Evening (7:00 PM)</td>
                <td className="border border-gray-300 px-4 py-2">
                  Grass hay<br />
                  Alfalfa pellets<br />
                  Joint supplement<br />
                  Senior concentrate feed
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  5 lbs<br />
                  2 lbs<br />
                  1 scoop<br />
                  1 lb
                </td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2 font-medium">Water</td>
                <td className="border border-gray-300 px-4 py-2" colSpan={2}>Free choice access to fresh clean water (minimum 10-12 gallons per day) <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="bg-cream rounded-soft p-4">
            <p className="text-gray-700">
              <span className="font-semibold text-navy-blue">Total Daily Intake:</span> 21 lbs grass hay + 7 lbs alfalfa pellets + 2 lbs concentrate + joint supplement = 30 lbs (2.4% body weight)
            </p>
          </div>
          
          <div className="space-y-3 text-gray-700">
            <p className="leading-relaxed">
              Billy consumes about 30 lbs of feed per day, which consists of grass hay, alfalfa pellets, senior concentrate, and joint supplements. Billy's total feed intake is more than 2% of his body weight to promote gradual weight gain. Billy's body condition score is 4.17, which is moderately thin. The ideal body condition score ranges from 4-6, and since Billy is on the lower end of that scale, a gradual increase in his weight with calorie-dense feeds will help improve his body condition score and overall health <sup><Link to="/citations#iowa-state-bcs" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[14]</Link></sup>.
            </p>
            
            <p className="leading-relaxed">
              Grass hay (21 lbs) makes up the bulk of Billy's diet to provide essential fiber for his digestive health. For older horses that have a body condition score less than 4, it is recommended to feed 1.5-2% of the horse's body weight in a good-quality grass hay <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. The grass hay in Billy's diet is supplemented with grain-based concentrate at 0.5-1% of his body weight to increase his body condition score <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. The 7 lbs of alfalfa pellets are included in Billy's diet to provide extra highly digestible fiber, high-quality protein to prevent further muscle loss, and add additional calories <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. Older horses are not able to process protein as efficiently, which can decrease body condition score and muscle, which is why alfalfa is needed in his diet <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>.
            </p>
            
            <p className="leading-relaxed">
              Billy gets 2 lbs of senior concentrate that is divided between morning and evening meal times. Iowa State University recommends concentrate rations to be about 0.5-1% of the horse's body weight with 12-14% crude protein and 4% fat <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. However, Billy's diet prioritizes highly digestible fiber like alfalfa pellets over starch based concentrates to boost his gut health and minimize any stress on his body. Due to his age of 22, navicular disease, joint issues, and idle activity level a lower addition of concentrate combined with alfalfa in his diet gives Billy enough feed to gradually meet more of an ideal body condition score. Older horses need their diet to have more calories from energy sources like alfalfa to maintain their weight <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. Furthermore, giving Billy multiple small meals throughout the day boosts digestive efficiency <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>.
            </p>
            
            <p className="leading-relaxed">
              Ground flaxseed (4 oz) is included in Billy's diet to act as an anti-inflammatory <sup><Link to="/citations#dr-gray-flax" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[15]</Link></sup>. Ground flaxseeds have omega-3 fatty acids that can help manage Billy's navicular disease and arthritis <sup><Link to="/citations#dr-gray-flax" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[15]</Link></sup>. Omega-3 fatty acids have been proven to support joint health and reduce discomfort during exercise <sup><Link to="/citations#dr-gray-flax" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[15]</Link></sup>. The ground flaxseeds were also incorporated to add dietary fat to support weight gain <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>. The flaxseeds in Billy's diet need to be ground rather than whole so that they can get digested and provide the desired nutrient benefits <sup><Link to="/citations#dr-gray-flax" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[15]</Link></sup>. Grinding the seed also releases the omega-3 fatty acids and the other good benefits <sup><Link to="/citations#dr-gray-flax" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[15]</Link></sup>.
            </p>
            
            <p className="leading-relaxed">
              Billy's diet includes 2.5 scoops of a joint supplement that promotes his cartilage health and joint function to help manage his pain from lameness. This joint supplement contains MSM, hylauranic acid, boswellia serrata, ASU, and cetyl myristoleate <sup><Link to="/citations#platinum-joint" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[26]</Link></sup>. MSM helps reduce the wear of joint tissues that are caused by exercise. Hylauronic acid reduces the friction between bones during movement, boswellia serrata reduces inflammation, ASU maintains the health of the cartilage, and cetyl myristoleate also helps with inflammation <sup><Link to="/citations#platinum-joint" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[26]</Link></sup>.
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
          Billy scores a 4.17 on Henneke's Body Condition Score Sheet. Billy's score is moderately thin and not in the ideal range. This is primarily caused by weight loss due to old age <sup><Link to="/citations#iowa-state-senior" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[13]</Link></sup>.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-navy-blue mb-2">
              Lateral Side View of Billy for BCS Assessment
            </label>
            <HorseImage
              src="./images/billy-side-1.jpg"
              alt="Image 28: Side profile view of Billy for body condition score assessment"
              title="Image 28: Side view for BCS assessment showing body condition"
              aspectRatio="aspect-[4/3]"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              <sup><Link to="/citations#self-img-billy-photos" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
            </p>
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
          Based on the guidelines of the AAEP, Billy receives all the core vaccines annually <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>. Billy receives some of the risk-based vaccines every 6 months based on his living situation at the Oppenheimer Family Equine Center. Every 6 months Billy received Equine Herpesvirus-1 (EHV-1), Equine Herpesvirus-4 (EHV-4), West Nile Virus, and Equine Influenza Virus (EIV) <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>. He gets these vaccines once in the spring and fall. On an annual basis, Billy gets the Tetanus, Rabies, and Eastern/Western Encephalomyelitis vaccines in the spring <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>.
        </p>
        
        <div className="bg-cream rounded-soft p-4 mb-4">
          <h3 className="font-semibold text-navy-blue mb-3">Vaccine Rationale:</h3>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>
              <span className="font-medium">EHV-1, EHV-4, and EIV (Every 6 months):</span> Billy lives at a University teaching center's equine facility. He is constantly around new horses due to student boarding opportunities, so Billy is constantly around new horses which puts him at risk for respiratory diseases <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>.
            </p>
            <p>
              <span className="font-medium">West Nile Virus (Every 6 months):</span> Billy receives this vaccine because of California's mosquito populations <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>.
            </p>
            <p>
              <span className="font-medium">Tetanus (Annual):</span> This vaccine is given to Billy to protect him against any infections from wounds due to lots of bacteria in the soil that he is exposed to when he is on pasture <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>.
            </p>
            <p>
              <span className="font-medium">EEE/WEE (Annual):</span> This is given in the spring before the start of mosquito season to protect against any diseases transmitted by mosquitoes <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>.
            </p>
            <p>
              <span className="font-medium">Rabies (Annual):</span> Given once a year because of California's wildlife <sup><Link to="/citations#aaep-vaccination" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[17]</Link></sup>.
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
          Billy gets dewormed 1-2 times a year to have a basic foundation to target parasites <sup><Link to="/citations#smartpak-deworming" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[18]</Link></sup>. Billy gets additional treatments based on his fecal egg count <sup><Link to="/citations#smartpak-deworming" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[18]</Link></sup>.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Late Fall/Early Winter:</h3>
            <p className="text-gray-700 text-sm">
              Billy gets dewormed with an Ivermectin and Praziquantel combination to mitigate bots, small/large strongyles, and tapeworms <sup><Link to="/citations#smartpak-deworming" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[18]</Link></sup>.
            </p>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Late Spring (May/June):</h3>
            <p className="text-gray-700 text-sm">
              Billy receives Moxidectin and Praziquantel to treat smaller strongyles, large strongyles, and tapeworms during grazing season <sup><Link to="/citations#smartpak-deworming" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[18]</Link></sup>.
            </p>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Fecal Egg Count Testing:</h3>
            <p className="text-gray-700 text-sm">
              Billy receives a fecal egg count 1-2 times a year to determine his parasites and to see if he needs additional treatments <sup><Link to="/citations#smartpak-deworming" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[18]</Link></sup>. This approach is the most effective in seeing whether or not deworming is necessary based on his fecal egg count to avoid anthelmintic resistance <sup><Link to="/citations#smartpak-deworming" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[18]</Link></sup>.
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
          If there are any outbreaks at Cal Poly's equine facility, any of the infected horses will be immediately isolated from any healthy and unaffected horses <sup><Link to="/citations#aaep-infectious" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[19]</Link></sup>.
        </p>
        <div className="space-y-4 text-gray-700">
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Equipment Sanitation:</h3>
            <p>All equipment like halters, grooming supplies, feed containers, and water buckets must be thoroughly sanitized between horses. To be even more cautious depending on the outbreak, the infected horses should use their own supplies to prevent any cross contamination <sup><Link to="/citations#aaep-biosecurity" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[20]</Link></sup>.</p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Vaccination Requirements:</h3>
            <p>All horses must have their core vaccinations like Tetanus, EEE/WEE, West Nile Virus, and the Rabies virus. Any risk-based vaccines are also strongly encouraged to be extra cautious. Providing all horses with these vaccines promotes immunity amongst the entire herd and prevents any severe outbreaks <sup><Link to="/citations#aaep-biosecurity" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[20]</Link></sup>.</p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">New Horse Quarantine:</h3>
            <p>Any new horses that come to Cal Poly's facility should quarantine for a minimum of 7-14 days in an isolated area. While the new horses are isolated, vital signs, temperature, pulse, and general health indicators should be measured twice daily to catch any illnesses. Any horses that are quarantined should have their own equipment to keep supplies amongst other horses at the facility safe in case of illness. To be extra thorough, new horses should provide a negative Coggins test within a year, health certificates within a month, and documentation of vaccines <sup><Link to="/citations#aaep-biosecurity" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[20]</Link></sup>.</p>
          </div>
          <div className="bg-white rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Areas for Improvement:</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Extending isolation periods to 21 days due to most diseases showing clinical signs at the 14+ day mark <sup><Link to="/citations#aaep-biosecurity" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[20]</Link></sup></li>
              <li>Including signs for visitors about biosecurity practices <sup><Link to="/citations#aaep-biosecurity" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[20]</Link></sup></li>
              <li>Building a separate quarantine facility at the equine center to prevent any airborne transmission between quarantined horses and long-time residents <sup><Link to="/citations#aaep-biosecurity" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[20]</Link></sup></li>
              <li>Including parasite screening with incoming horses 30 days before they arrive to help determine any high shedders before being put out onto the pasture <sup><Link to="/citations#aaep-biosecurity" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[20]</Link></sup></li>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 text-sm">
                  This disorder causes uncontrolled muscle twitches, weakness, and potential collapse <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. HYPP follows an autosomal dominant inheritance pattern <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. Billy has not shown any signs of muscle tremors or any unusual weaknesses, which makes HYPP unlikely.
                </p>
              </div>
              <div>
                <HorseImage
                  src="./images/hypp.jpg"
                  alt="Image 30: Hyperkalemic Periodic Paralysis (HYPP) in horses"
                  aspectRatio="aspect-auto"
                />
                <p className="text-sm text-gray-600 italic mt-2 text-center">
                  Image 30: HYPP in horses <sup><Link to="/citations#hypp-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Polysaccharide Storage Myopathy Type 1 (PSSM1)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 text-sm">
                  This disorder follows an autosomal dominant pattern and impacts Quarter Horse's muscle metabolism which can cause cramping, exercise intolerance, and "tying up" <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. PSSM1 affects more than 10% of Quarter Horses <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. Billy shows signs of exercise intolerance but it is most likely attributed to his chronic lameness. However, PSSM1 cannot be completely ruled out without genetic tests <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>.
                </p>
              </div>
              <div>
                <HorseImage
                  src="./images/common-diseases.jpg"
                  alt="Image 31: Polysaccharide Storage Myopathy (PSSM) in horses"
                  aspectRatio="aspect-auto"
                />
                <p className="text-sm text-gray-600 italic mt-2 text-center">
                  Image 31: PSSM in horses <sup><Link to="/citations#pssm-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Hereditary Equine Regional Dermal Asthenia (HERDA)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 text-sm">
                  HERDA is an autosomal recessive skin disorder impacting less than 4% of Quarter Horses <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. This disorder is caused by a collagen defect that causes fragile skin that tears away from the muscle <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. Billy has had normal skin for 22 years, so HERDA can be ruled out. Although he could be a carrier without showing signs of fragile skin <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>.
                </p>
              </div>
              <div>
                <HorseImage
                  src="./images/herda-signs.jpg"
                  alt="Image 32: Hereditary Equine Regional Dermal Asthenia (HERDA) signs"
                  aspectRatio="aspect-auto"
                />
                <p className="text-sm text-gray-600 italic mt-2 text-center">
                  Image 32: HERDA signs in horses <sup><Link to="/citations#herda-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Glycogen Branching Enzyme Deficiency (GBED)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 text-sm">
                  GBED is an autosomal recessive trait that is fatal in foals within months of birth if 2 copies of this gene are passed on <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. GBED is characterized by an issue in glycogen use and storage in the body <sup><Link to="/citations#ker-genetic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[21]</Link></sup>. Due to Billy's age, he is definitely not affected by GBED, but he could be a carrier without showing symptoms.
                </p>
              </div>
              <div>
                <HorseImage
                  src="./images/gbed.jpg"
                  alt="Image 33: Glycogen Branching Enzyme Deficiency (GBED) in horses"
                  aspectRatio="aspect-auto"
                />
                <p className="text-sm text-gray-600 italic mt-2 text-center">
                  Image 33: GBED in horses <sup><Link to="/citations#gbed-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-navy-blue bg-opacity-5 rounded-soft p-4">
          <h3 className="font-semibold text-navy-blue mb-2">Assessment for Billy:</h3>
          <p className="text-gray-700">
            Assessing Billy's health history indicates that Billy is not affected by GBED or HERDA. Billy also does not have any muscle tremors, collapses, or muscle cramping, which makes HYPP and PSSM1 very unlikely. Billy's exercise intolerance is due to his chronic lameness. Genetic testing would need to be done to completely rule out HYPP and PSSM1 <sup><Link to="/citations#aqha-dna" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[22]</Link></sup>.
          </p>
        </div>
      </div>
    </Section>
  )
}

