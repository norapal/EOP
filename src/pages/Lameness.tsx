import { useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '@/components/Section'
import HorseImage from '@/components/HorseImage'
import Lightbox from '@/components/Lightbox'

export default function Lameness() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <Section className="bg-white">
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Lameness Evaluation
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Evaluating lameness is very important for horse owners. Basic lameness evaluations helps identify any issues early on to determine when veterinary assistance is needed. 
        </p>
      </div>

      {/* Lameness History */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          History of Lameness
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Billy has chronic lameness that affects the right side of both of his limbs. Billy's right forelimb lameness is caused by navicular syndrome, a chronic degenerative condition that affects his hoof. When Billy trots he bobs his head, shortens his stride length on his lame limb, and has an irregular rhythm. Billy's lameness is also noticeable when circling in both directions. His right hind limb lameness is more subtle at the walk but becomes more noticeable when he goes uphill or downhill. Upon examination, a bony knob was palpated on his right hock joint, suggesting that Billy could have another degenerative joint condition. This lameness could have developed after Billy constantly shifted weight away from his right forelimb. In addition, Billy has many conformational faults like a steep shoulder angle, splay-footed stance, and cow-hocked hindquarters that could have slowly caused his lameness when he was a riding horse <sup><Link to="/citations#navicular-usu" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[8]</Link></sup> <sup><Link to="/citations#navicular-merck" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[9]</Link></sup>.
        </p>
      </div>

      {/* Video Documentation */}
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-6">
          Lameness Video Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <video 
              controls 
              className="w-full rounded-soft h-64 object-contain bg-gray-900"
              preload="metadata"
            >
              <source src="./videos/right-frontlimb-lameness-trot.MOV" type="video/quicktime" />
              <source src="./videos/right-frontlimb-lameness-trot.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Right forelimb lameness at trot showing head bobbing and shortened stride
            </p>
            <p className="text-sm text-gray-600 italic mt-1 text-center">
              <sup><Link to="/citations#self-video-right-frontlimb-lameness" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Video Source]</Link></sup>
            </p>
          </div>
          <div>
            <video 
              controls 
              className="w-full rounded-soft h-64 object-contain bg-gray-900"
              preload="metadata"
            >
              <source src="./videos/right-hindlimb-lameness.mov" type="video/quicktime" />
              <source src="./videos/right-hindlimb-lameness.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Right hind limb lameness visible during movement
            </p>
            <p className="text-sm text-gray-600 italic mt-1 text-center">
              <sup><Link to="/citations#self-video-right-hindlimb-lameness" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Video Source]</Link></sup>
            </p>
          </div>
          <div>
            <video 
              controls 
              className="w-full rounded-soft h-64 object-contain bg-gray-900"
              preload="metadata"
            >
              <source src="./videos/billy-circle.mov" type="video/quicktime" />
              <source src="./videos/billy-circle.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Circling movement showing lameness more apparent in turns
            </p>
            <p className="text-sm text-gray-600 italic mt-1 text-center">
              <sup><Link to="/citations#self-video-billy-circle" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Video Source]</Link></sup>
            </p>
          </div>
        </div>
      </div>

      {/* AAEP Lameness Scale */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          AAEP Lameness Scale
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Billy's Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">Lameness not perceptible under any circumstances</td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is difficult to observe and is not consistently apparent, regardless of circumstances</td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is difficult to observe at a walk or when trotting in a straight line but consistently apparent under certain circumstances</td>
                <td className="border border-gray-300 px-4 py-2">Right hind limb</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is consistently observable at a trot under all circumstances</td>
                <td className="border border-gray-300 px-4 py-2">Right forelimb</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is obvious at a walk</td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">Lameness produces minimal weight bearing in motion and/or at rest or a complete inability to move</td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-700">
          <span className="font-semibold text-navy-blue">Billy's Lameness Grade:</span> Billy scores a level 3 out of 5 on the AAEP lameness scale for his right forelimb and a 2 out of 5 for his right hind limb. His right forelimb lameness is consistently observed at the trot under all circumstances. His right hind limb lameness is subtle at the walk but is more noticeable when he goes uphill or downhill, and when circling in both directions <sup><Link to="/citations#aaep-lameness" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[10]</Link></sup>.
        </p>
      </div>

      {/* Lameness Detection Methodology */}
      <div className="bg-cream rounded-softer p-6">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Lameness Detection Methodology
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          As an owner, detecting lameness early is essential for maintaining your horse's health and wellbeing. The following steps outline a basic lameness evaluation that can be performed prior to calling a veterinarian:
        </p>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Visual Observation:</h3>
            <p>Daily observations of routine handling and everyday movement are a great way to detect lameness. Look for shortened strides, head bobbing, inability to move a limb, or constantly trying to avoid putting pressure on a hurt area. Behavioral changes like irritability or resistance to move can also signal lameness. When evaluating Billy's lameness, observing all his movements helped identify right forelimb lameness at the trot, with head bobbing and shortened stride length being particularly noticeable <sup><Link to="/citations#aaep-lameness" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[10]</Link></sup>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Hands-On Examination:</h3>
            <p>For a basic evaluation, palpating limbs, joints, or muscles to detect the source of pain is a great way to begin determining lameness. For Billy, a swollen right hock joint was found upon palpation, and behavioral signals were evident when pressure was applied to sore areas. Hoof testers are also a great way to determine pain in the hoof region. A joint flexion test can allow lameness identification during a trot by temporarily stressing the joint to see if lameness becomes more apparent <sup><Link to="/citations#aaep-lameness" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[10]</Link></sup>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Movement Evaluation:</h3>
            <p>Evaluating movement at a walk, trot, canter, and under special circumstances is another great way to determine lameness. Look at the horse moving in straight lines on different surfaces, as well as on circles in both directions. Looking at special circumstances like moving in a circle helped identify Billy's right hindlimb lameness, as it became more apparent during circling. Additionally, observe the horse going uphill and downhill, as this can reveal more subtle lameness that may not be visible on level ground <sup><Link to="/citations#aaep-lameness" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[10]</Link></sup>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Limitations:</h3>
            <p>Lameness evaluations performed by owners have limitations. Subtle lamenesses in horses can be hard to identify without experience or proper technique. Determining the exact location of lameness is also very difficult. A veterinarian, MRI, or CT scans are typically the only accurate ways to determine exact locations of lameness or conditions like navicular syndrome or degenerative joint disease. Moreover, when lameness is detected in a horse it is important to seek a veterinarian's guidance to create a treatment plan that best suits the horse <sup><Link to="/citations#aaep-lameness" target="_blank" rel="noopener noreferrer" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[10]</Link></sup>.</p>
          </div>
        </div>

        {/* Lameness Detection Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <HorseImage
              src="./images/lameness-detection.jpg"
              alt="Image 26: Professional lameness examination demonstrating proper evaluation techniques"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/lameness-detection.jpg')}
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Image 26: Professional lameness examination demonstrating proper evaluation techniques <sup><Link to="/citations#aaep-lameness-detection-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
            </p>
          </div>
          <div>
            <HorseImage
              src="./images/evaluating-horse.jpg"
              alt="Image 27: Evaluating horse for lameness detection"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/evaluating-horse.jpg')}
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Image 27: Evaluating horse for lameness detection <sup><Link to="/citations#evaluating-horse-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

