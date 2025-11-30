import { useState } from 'react'
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
            Evaluating a horse's conformation based on breed guidelines reveals how structural correctness impacts movement, performance, and soundness. Understanding the relationship between form and function is essential for responsible ownership and management decisions.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-forest-green mb-6">
            Conformational Views
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <HorseImage
                src="/images/billy-front-1.jpg"
                alt="Image 1: Front view of Billy showing chestnut coat, white blaze, and white socks for conformational analysis"
                title="Image 1: Front view showing structural correctness"
                aspectRatio="aspect-[3/4]"
                onClick={() => setLightboxImage('/images/billy-front-1.jpg')}
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Image 1: Front view showing leg alignment, shoulder width, and head carriage
              </p>
            </div>
            <div>
              <HorseImage
                src="/images/billy-side-1.jpg"
                alt="Image 2: Lateral view of Billy showing side profile conformation"
                title="Image 2: Lateral view showing topline, angles, and proportions"
                aspectRatio="aspect-[3/4]"
                onClick={() => setLightboxImage('/images/billy-side-1.jpg')}
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Image 2: Lateral view showing shoulder angle, pastern angle, and topline
              </p>
            </div>
            <div>
              <HorseImage
                src="/images/billy-rear.jpg"
                alt="Image 3: Rear view of Billy showing hindquarters, white socks, and leg conformation"
                title="Image 3: Rear view showing hindquarter muscling and leg alignment"
                aspectRatio="aspect-[3/4]"
                onClick={() => setLightboxImage('/images/billy-rear.jpg')}
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Image 3: Rear view showing hindquarter structure, croup, and leg straightness
              </p>
            </div>
          </div>
        </div>

        {/* Conformational Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-cream rounded-softer p-6">
            <h2 className="text-2xl font-serif text-forest-green mb-4">
              Conformational Analysis Based on AQHA Standards
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-navy-blue mb-2">Head & Neck:</h3>
                <p>[Analysis of head and neck conformation, angles, and correctness]</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-blue mb-2">Shoulder & Withers:</h3>
                <p>[Analysis of shoulder angle, withers height, and structure]</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-blue mb-2">Back & Loin:</h3>
                <p>[Analysis of back length, loin strength, and topline]</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-blue mb-2">Hindquarters:</h3>
                <p>[Analysis of hip angle, croup, and hindquarter muscling]</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-blue mb-2">Legs & Feet:</h3>
                <p>[Analysis of leg conformation, pastern angles, and hoof quality]</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-softer p-6 border border-gray-200">
            <h2 className="text-2xl font-serif text-forest-green mb-4">
              Annotation Notes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lines and angles should be drawn on images to indicate correctness. Use the images above to annotate:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Shoulder angle (ideally 45-50 degrees)</li>
              <li>Pastern angle (ideally 45-50 degrees)</li>
              <li>Hip angle and croup slope</li>
              <li>Topline alignment</li>
              <li>Leg alignment and straightness</li>
            </ul>
          </div>
        </div>

        {/* Form to Function */}
        <div className="bg-white rounded-softer p-6 border border-gray-200 mb-12">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Form to Function Analysis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Relate the conformational traits described above to how they impact Billy's movement, performance capabilities, and potential soundness issues:
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Positive Conformational Traits:</h3>
              <p>[Describe how specific conformational strengths support movement and performance]</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Areas of Concern:</h3>
              <p>[Describe how conformational weaknesses may impact movement, performance, or soundness]</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue mb-2">Connection to Performance:</h3>
              <p>[Explain how Billy's conformation relates to his intended use and performance capabilities]</p>
            </div>
          </div>
        </div>

        {/* Additional Conformation Views */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-forest-green mb-6">
            Additional Conformational Views
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <HorseImage
                src="/images/billy-hindquarters.jpg"
                alt="Image 4: Close-up view of Billy's hindquarters and back showing topline and muscling"
                title="Image 4: Hindquarters and back view for topline assessment"
                aspectRatio="aspect-[4/3]"
                onClick={() => setLightboxImage('/images/billy-hindquarters.jpg')}
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Image 4: Hindquarters and back view showing topline, croup, and muscling
              </p>
            </div>
            <div>
              <HorseImage
                src="/images/billy-side-2.jpg"
                alt="Image 5: Additional side profile view of Billy"
                title="Image 5: Additional lateral view"
                aspectRatio="aspect-[4/3]"
                onClick={() => setLightboxImage('/images/billy-side-2.jpg')}
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Image 5: Additional lateral view for conformation analysis
              </p>
            </div>
          </div>
        </div>

        {/* Breed Standard Comparison */}
        <div className="bg-cream rounded-softer p-6">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Breed Standard Comparison
          </h2>
          <p className="text-gray-700 leading-relaxed">
            [Compare Billy's conformation to the ideal AQHA breed standard, noting areas where he meets or deviates from the standard]
          </p>
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

