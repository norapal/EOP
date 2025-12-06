import { useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '@/components/Section'
import HorseImage from '@/components/HorseImage'
import Lightbox from '@/components/Lightbox'

export default function Conformation() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <>
      <Section className="bg-white">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-forest-green mb-4">
            Conformation Analysis
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Billy's conformation does not match the AQHA's guidelines for the ideal Quarter Horse. Analyzing Billy's structure and proportions, we can identify several areas where balance, movement, and long-term soundness are affected.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-forest-green mb-6">
            Conformational Views
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <HorseImage
                src="./images/billy-front-1.jpg"
                alt="Image 11: Front view of Billy showing chestnut coat, white blaze, and white socks for conformational analysis"
                title="Image 11: Front view showing structural correctness"
                aspectRatio="aspect-[3/4]"
                onClick={() => setLightboxImage('./images/billy-front-1.jpg')}
              />
            </div>
            <div>
              <HorseImage
                src="./images/billy-side-1.jpg"
                alt="Image 12: Lateral view of Billy showing side profile conformation"
                title="Image 12: Lateral view showing topline, angles, and proportions"
                aspectRatio="aspect-[4/3]"
                onClick={() => setLightboxImage('./images/billy-side-1.jpg')}
              />
            </div>
            <div>
              <HorseImage
                src="./images/billy-rear.jpg"
                alt="Image 13: Rear view of Billy showing hindquarters, white socks, and leg conformation"
                title="Image 13: Rear view showing hindquarter muscling and leg alignment"
                aspectRatio="aspect-[3/4]"
                onClick={() => setLightboxImage('./images/billy-rear.jpg')}
              />
            </div>
            <div>
            <HorseImage
                src="./images/billy-hindquarters.jpg"
                alt="Image 14: Close-up view of Billy's hindquarters and back showing topline and muscling"
                title="Image 14: Hindquarters and back view for topline assessment"
                aspectRatio="aspect-auto"
                onClick={() => setLightboxImage('./images/billy-hindquarters.jpg')}
              />
            </div>
          </div>
        </div>

        {/* Conformational Analysis */}
        <div className="bg-cream rounded-softer p-6 mb-12">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Conformational Analysis Based on AQHA Standards
          </h2>
          
          {/* Ideal Quarter Horse Image */}
          <div className="mb-6 bg-white rounded-soft p-4 max-w-lg mx-auto">
            <HorseImage
              src="./images/what-is-a-quarter-horse.jpg"
              alt="Image 15: Ideal American Quarter Horse conformation based on AQHA standards"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('./images/what-is-a-quarter-horse.jpg')}
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Image 15: Ideal American Quarter Horse conformation based on AQHA standards <sup><Link to="/citations#what-is-quarter-horse-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Head & Neck:</h3>
              <p>The AQHA's guideline for neck topline to bottom line ratio is a long neck topline and a short neck bottom line. In Billy, his neck proportions are similar in length, which is a sign of poor formation. This imbalance in neck proportions is directly related to his steep shoulder angle <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Shoulder & Withers:</h3>
              <p>Billy has a steep shoulder of approximately 60 degrees. According to the standards of the American Quarter Horse Association, the sloped shoulder is the foundation of the horse's balance. Billy's steep shoulder does not align with the AQHA guidelines, which recommend an ideal shoulder angle of 45-50 degrees. Billy's steep angle is more vertical than the sloped shoulder that is the AQHA's ideal. The guidelines state that a steep shoulder will result in a shortened neck, shortened topline, and lengthened bodyline <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Back & Loin:</h3>
              <p>The AQHA's guideline for topline to bottom line ratio is a short topline to a long bottom line (1:2 ratio). Billy's ratio is 1:1.5, demonstrating that Billy's back is too long. His topline should be half the length of the bottom line, but it is closer to about 2/3 in length of the bottom line. Billy's ratio is not ideal, which is a clear indication of poor balance and a weaker back <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Hindquarters:</h3>
              <p>The American Quarter Horse Association's ideal hindquarter conformation is a square hindquarter with a long hip and a sloped croup. Billy's hip length is good, but he is cow-hocked and camped under. His legs are not properly positioned and this creates issues at the hock joint <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Legs & Feet:</h3>
              <p>Billy's front limbs show to be splay-footed. This affects Billy's center line and can cause stress on his joints and hooves, showing that his limb conformations are not ideal and do not match the AQHA's conformation guidelines. The cow-hocked and camped under conformation on the hindlimbs puts too much weight on the hock joints <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
          </div>
        </div>

        {/* Conformational Documentation with Annotations */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-forest-green mb-6">
            Conformational Documentation with Annotations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <HorseImage
                src="./images/billy-front-documentation.jpg"
                alt="Image 16: Annotated front view of Billy showing conformational measurements and angles"
                title="Image 16: Front view with conformational annotations"
                aspectRatio="aspect- auto"
                onClick={() => setLightboxImage('./images/billy-front-documentation.jpg')}
              />
            </div>
            <div>
              <HorseImage
                src="./images/billy-side-documentation.jpg"
                alt="Image 17: Annotated lateral view of Billy showing conformational measurements and angles"
                title="Image 17: Lateral view with conformational annotations"
                aspectRatio="aspect- auto"
                onClick={() => setLightboxImage('./images/billy-side-documentation.jpg')}
              />
            </div>
            <div>
              <HorseImage
                src="./images/billy-rear-documentation.jpg"
                alt="Image 18: Annotated rear view of Billy showing conformational measurements and angles"
                title="Image 18: Rear view with conformational annotations"
                aspectRatio="aspect- auto"
                onClick={() => setLightboxImage('./images/billy-rear-documentation.jpg')}
              />
            </div>
          </div>
        </div>

        {/* Ideal Quarter Horse Standards */}
        <div className="mb-12 bg-cream rounded-softer p-6">
          <h2 className="text-2xl font-serif text-forest-green mb-6">
            AQHA Ideal Conformation Standards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-soft p-4">
              <HorseImage
                src="./images/quarter-horse-ratio-1.jpg"
                alt="Image 19: Ideal Quarter Horse shoulder angle diagram showing 45-50 degree slope"
                aspectRatio="aspect-[4/3]"
                onClick={() => setLightboxImage('./images/quarter-horse-ratio-1.jpg')}
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Image 19: Ideal Quarter Horse shoulder angle diagram showing 45-50 degree slope <sup><Link to="/citations#balanced-horse-ratios-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
              </p>
            </div>
            
            <div className="bg-white rounded-soft p-4">
              <HorseImage
                src="./images/quarter-horse-ratio-2.jpg"
                alt="Image 20: Ideal Quarter Horse neck topline to bottomline ratio diagram"
                aspectRatio="aspect-[4/3]"
                onClick={() => setLightboxImage('./images/quarter-horse-ratio-2.jpg')}
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Image 20: Ideal Quarter Horse neck topline to bottomline ratio diagram <sup><Link to="/citations#balanced-horse-ratios-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
              </p>
            </div>
            
            <div className="bg-white rounded-soft p-4">
              <HorseImage
                src="./images/quarter-horse-ratio-3.jpg"
                alt="Image 21: Ideal Quarter Horse topline to bottomline 1:2 ratio diagram"
                aspectRatio="aspect-[4/3]"
                onClick={() => setLightboxImage('./images/quarter-horse-ratio-3.jpg')}
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Image 21: Ideal Quarter Horse topline to bottomline 1:2 ratio diagram <sup><Link to="/citations#balanced-horse-ratios-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
              </p>
            </div>
            
            <div className="bg-white rounded-soft p-4">
              <HorseImage
                src="./images/quarter-horse-ratio-4.jpg"
                alt="Image 22: Ideal Quarter Horse square hip ratio diagram"
                aspectRatio="aspect-[4/3]"
                onClick={() => setLightboxImage('./images/quarter-horse-ratio-4.jpg')}
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Image 22: Ideal Quarter Horse square hip ratio diagram <sup><Link to="/citations#balanced-horse-ratios-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
              </p>
            </div>
            
            <div className="bg-white rounded-soft p-4 max-w-[200px] mx-auto">
              <HorseImage
                src="./images/quarter-horse-ideal-legs.jpg"
                alt="Image 23: Ideal Quarter Horse front leg conformation"
                aspectRatio="aspect-auto"
                onClick={() => setLightboxImage('./images/quarter-horse-ideal-legs.jpg')}
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Image 23: Ideal Quarter Horse front leg conformation <sup><Link to="/citations#ideal-legs-img" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[Image Source]</Link></sup>
              </p>
            </div>
          </div>
        </div>

        {/* Form to Function */}
        <div className="bg-white rounded-softer p-6 border border-gray-200 mb-12">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Form to Function Analysis
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Positive Conformational Traits:</h3>
              <p>Billy demonstrates good hip length in his hindquarters, which is consistent with AQHA standards for Quarter Horse conformation <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Areas of Concern:</h3>
              <p>Billy's conformation that does not match the guidelines of the American Quarter Horse Association contributes to his functional limitations and chronic lameness. Billy's steep shoulder which does not have the ideal slope shortens his stride and stresses his forelimb structures. Billy's unideal topline to bottomline ratio affects Billy's weight distribution and quality of movement. In addition, Billy's splay-footed limb conformation on all of his limbs puts stress on his joints with each step. The cow-hocked and camped under conformation on the hindlimbs puts too much weight on the hock joints that causes lameness in the long run. Poor conformation and structure results in health issues in a horse <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Connection to Performance:</h3>
              <p>Billy's steep shoulder and unproportional sections (shoulder:back:hip ratio of 0.8:1:1 versus the ideal 1:1:1) affect his overall athletic capability and predisposing him to chronic soundness issues which he already displays <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup>.</p>
            </div>
          </div>
        </div>

        {/* Breed Standard Comparison */}
        <div className="bg-cream rounded-softer p-6">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Breed Standard Comparison
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li> Billy's 60-degree shoulder angle differs from the ideal 45-50 degrees recommended by AQHA <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup></li>
              <li> Billy's shorter 1:1.5 ratio translates into a back that is too long relative to his underline <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup></li>
              <li> Billy's neck topline and bottomline are proportional in length to each other, but they still lack the ideal ratio of a longer neck topline to shorter bottomline <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup></li>
              <li> Billy's shoulder:back:hip ratio of 0.8:1:1 is slightly unbalanced compared to the standard 1:1:1 <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup></li>
              <li> Billy's limbs are splay-footed and cow-hocked, with camped under hindlimbs that do not align with AQHA standards <sup><Link to="/citations#aqha-balanced-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[6]</Link></sup></li>
            </ul>
            <p className="leading-relaxed mt-4">
              These conformational issues severely impact Billy's balance and movement, leading to chronic lameness.
            </p>
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

