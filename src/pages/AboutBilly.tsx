import { useState } from 'react'
import Section from '@/components/Section'
import ImageUpload from '@/components/ImageUpload'
import HorseImage from '@/components/HorseImage'
import Lightbox from '@/components/Lightbox'

export default function AboutBilly() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <>
      <Section className="bg-white">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-forest-green mb-4">
            Section 1: About Billy
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Having background information about your horse's origins and characteristics is very important to understand how to properly care for your horse. A horse's breed can give you important information about their capabilities, temperament, and conformational traits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="bg-cream rounded-softer p-6">
              <h2 className="text-2xl font-serif text-forest-green mb-4">
                Physical Description
              </h2>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-semibold text-navy-blue">Registered Name:</span>
                  <span className="ml-2">Predictable Cash Flo</span>
                </div>
                <div>
                  <span className="font-semibold text-navy-blue">Common Name:</span>
                  <span className="ml-2">Billy</span>
                </div>
                <div>
                  <span className="font-semibold text-navy-blue">Breed:</span>
                  <span className="ml-2">American Quarter Horse</span>
                </div>
                <div>
                  <span className="font-semibold text-navy-blue">Sex:</span>
                  <span className="ml-2">Gelding</span>
                </div>
                <div>
                  <span className="font-semibold text-navy-blue">Age:</span>
                  <span className="ml-2">22 years</span>
                </div>
                <div>
                  <span className="font-semibold text-navy-blue">Height:</span>
                  <span className="ml-2">16.1 hands</span>
                </div>
                <div>
                  <span className="font-semibold text-navy-blue">Color:</span>
                  <span className="ml-2">Chestnut</span>
                </div>
                <div>
                  <span className="font-semibold text-navy-blue">Markings:</span>
                  <span className="ml-2">Star and socks</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-softer p-6 border border-gray-200">
              <h2 className="text-2xl font-serif text-forest-green mb-4">
                Ownership History
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Billy was donated to Cal Poly 15 years ago. He was previously used for research classes and as a riding horse for beginners.
              </p>
            </div>

            <div className="bg-white rounded-softer p-6 border border-gray-200">
              <h2 className="text-2xl font-serif text-forest-green mb-4">
                Activity Level
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-navy-blue">Activity Level:</span> Idle
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-navy-blue">Justification:</span> Billy is currently idle due to chronic low-grade lameness.
              </p>
            </div>

            <div className="bg-white rounded-softer p-6 border border-gray-200">
              <h2 className="text-2xl font-serif text-forest-green mb-4">
                Breed History & Status
              </h2>
              <p className="text-gray-700 leading-relaxed">
              [CITE]The American Quarter Horse Association was founded on March 15, 1940 in Fort Worth, Texas. Bob Denhardt gathered 75 breeders
and owners to found this association. The American Quarter Horse got its name from its ability to run a quarter mile in 23 seconds.
The very first registered Quarter Horse's name was "Wimpy" who was a King Ranch stallion that was registered in March 1941.
<br /><br />
The American Quarter Horse has become the largest breed association in the world. Some important milestones for this breed began in
1974 when the American Quarter Horse Association reached 1 million registered horses. In 1983 the registry reached 2 million horse
that were registered and in 2020 the registry had over 225,000 members. In addition, as of the year 2020 the AQHA had 6 million
registered horses.
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-blue mb-2">
                Main Photo of Billy
              </label>
              <HorseImage
                src="/images/billy-front-1.jpg"
                alt="Image 1: Front view of Billy showing chestnut coat, white blaze, and white socks"
                title="Image 1: Front view showing color and markings"
                aspectRatio="aspect-auto"
                onClick={() => setLightboxImage('/images/billy-front-1.jpg')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-blue mb-2">
                Side Profile View
              </label>
              <HorseImage
                src="/images/billy-side-1.jpg"
                alt="Image 2: Side profile view of Billy showing conformation"
                title="Image 2: Lateral view for conformation assessment"
                aspectRatio="aspect-auto"
                onClick={() => setLightboxImage('/images/billy-side-1.jpg')}
              />
            </div>
          </div>
        </div>

        {/* Breed Registry Requirements - Full Width */}
        <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Breed Registry Requirements
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">
                1. Parentage and Breeding Documentation
              </h3>
              <p className="leading-relaxed">
                The sire and dam's names and registration numbers must be identified in the American Quarter Horse Association's registry. The breeder's certificate also needs to be provided with the dates from the stallion owner and the mare owner. A registration application must be completed by the owner of the mare during foaling and how the foal was produced must be listed (artificial insemination, embryo transfer, etc.) on the document as well. In addition, the stallion owners have to file annual breeding reports. To be registered in the American Quarter Horse Association either both the parents must be registered American Quarter Horses, or one parent must be an American Quarter Horse and the other parent must be a registered thoroughbred, or if a horse were to move from the Appendix registry to the numbered registry the horse must earn a register of merit in open classes in addition to having a veterinarian write that the horse has no undesirable traits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">
                2. Physical Identifiers and Documentation
              </h3>
              <p className="leading-relaxed">
                When registering your foal with the American Quarter Horse Association you must list the foal's date of birth, gender, and coloring. You must also include their markings on the documents as well with pictures of their left side, right side, front, back, and a markings diagram. The photos that are submitted must show all the markings of the horse that you documented for identification. Any other unique features must also be noted on the document.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">
                3. DNA Testing and Parentage Verification
              </h3>
              <p className="leading-relaxed">
                All breeding stallions and mares need to be DNA tested before the foal can be registered. The parent must be genetically verified if the foal was produced by an embryo transfer, produced by transported semen, produced by frozen semen, produced by a mare that was bred to more than one stallion in a month, produced by a stallion or mare that is a descendant of the stallion Impressive (genetic issues), produced by a stallion that is under 2 years of age, or if the offspring was produced by a stallion that was over 48 months of age. The DNA testing performed looks at the DNA genotypes of the parents. This profile also has the specific markers from the parents to identify the parents correctly. Furthermore, additional documents of verification are required for racehorses or weanlings. Racehorses need to have their parent line verified before official identification to run in a race. Weanlings need to also have their parent line verified before they compete at the American Quarter Horse Association World Championship show.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            <span className="font-semibold text-navy-blue">Registry Type:</span> Closed
          </p>
        </div>

        {/* Behavior Modification Technique - Full Width */}
        <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Behavior Modification Technique
          </h2>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-cream rounded-soft p-4">
              <h3 className="font-semibold text-navy-blue text-lg mb-2">Selected Technique:</h3>
              <p className="leading-relaxed">Pressure and Release Method (Negative Reinforcement)</p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">Target Behavior:</h3>
              <p className="leading-relaxed">
                Modifying Billy's behavior when he does not follow the cue to move forward or trot during ground work.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">Overview:</h3>
              <p className="leading-relaxed">
                The pressure and release method is based on using negative reinforcement for training. When the horse performs the desired behavior like moving forward or trotting, the stimulus is removed. The removal of pressure is a reinforcer that increases the horse's association with the requested response.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">Stimuli:</h3>
              <p className="leading-relaxed">
                With Billy, the verbal cue "walk" along with a slight guide of his reins and forward movement from the handler can be the initial stimulus. If Billy stays put and does not follow the command within a few seconds, apply a flag that pressures the horse. Wave the flag near the horse's hindquarters to create slight discomfort from the horse to pressure forward movement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">Response and Reinforcement:</h3>
              <p className="leading-relaxed">
                When Billy takes a step forward (response), immediately remove the flag movement and drop the flag to your side. The removal of the flag that causes Billy discomfort is an example of negative reinforcement, which is characterized by rewarding Billy for forward movement by removing this uncomfortable stimulus.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-soft">
              <h3 className="font-semibold text-navy-blue text-lg mb-2">Critical Success Factors:</h3>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <span className="font-semibold">Timing:</span> Pressure and release training is only successful when the timing of it is correct. The release of the stimulus must happen immediately (a few seconds) after the correct response is performed so that Billy can associate his movement with the release of this uncomfortable pressure.
                </p>
                <p>
                  <span className="font-semibold">Repetition:</span> Release and pressure will only be successful with repetition. Billy will be able to learn the relationship of moving forward, making the uncomfortable stimulus stop. This is escape learning and avoidance conditioning.
                </p>
                <p>
                  <span className="font-semibold">Consistency:</span> Horses thrive off a predictable pattern that prevents confusion. It helps Billy clearly associate the exact behavior that is asked. You must begin with a simple pressure like a verbal cue and advance it with the flag and an immediate release.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-navy-blue text-lg mb-2">Expected Progression:</h3>
              <p className="leading-relaxed">
                As training continues and Billy is consistent with the pressure and release pattern, the time between a cue and response latency will decrease and Billy will eventually be able to follow verbal cues without the flag (or before it is applied). Billy will demonstrate avoidance learning when he moves forward to avoid the flag pressure without seeing it. However, this will only work if this training is consistent.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-navy-blue mb-2">
              Video Documentation - Behavior modification demonstration
            </label>
            <div className="aspect-video bg-gray-100 rounded-soft overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/JwoyxETo-t0?start=270"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif text-forest-green mb-6">
            Image Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HorseImage
              src="/images/billy-front-1.jpg"
              alt="Image 1: Front view of Billy showing chestnut coat, white blaze, and white socks"
              title="Image 1: Front view showing color and markings"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('/images/billy-front-1.jpg')}
            />
            <HorseImage
              src="/images/billy-side-1.jpg"
              alt="Image 2: Side profile view of Billy showing conformation"
              title="Image 2: Lateral view for conformation assessment"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('/images/billy-side-1.jpg')}
            />
            <HorseImage
              src="/images/billy-side-2.jpg"
              alt="Image 3: Additional side profile view of Billy"
              title="Image 3: Additional lateral view"
              aspectRatio="aspect-auto"
              onClick={() => setLightboxImage('/images/billy-side-2.jpg')}
            />
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

