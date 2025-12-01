import Section from '@/components/Section'

export default function Performance() {
  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Section 2: Billy's Performance
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
        Being able to analyze the quality of movement of your horse and how it relates relates to their conformation is essential for determing a horse's performance and overall wellbeing. Form to function demonstrates how structure impacts the quality of a horse's gait. 
        </p>
      </div>

      {/* Gait Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h3 className="text-xl font-serif text-forest-green mb-4">
            Walk Analysis
          </h3>
          <div className="mb-4">
            <video 
              controls 
              className="w-full rounded-soft h-64 object-contain bg-gray-900"
              preload="metadata"
            >
              <source src="/videos/billy-walk.MOV" type="video/quicktime" />
              <source src="/videos/billy-walk.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold text-navy-blue">Rhythm:</span>
              <p className="mt-1">Billy's rhythm is a four beat pattern, but is irregular due to his lameness in his limbs. The timing of his footfalls are uneven. Billy shows a slight lateral sequence, but he tries to minimize weight on his right side causing his legs to move closer together.</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Tempo:</span>
              <p className="mt-1">Billy's tempo is slower and his strides are shorter due to lameness.</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Cadence:</span>
              <p className="mt-1">Billy's cadence is not harmonious and not relaxed due to his protected movement from pain in his limbs.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h3 className="text-xl font-serif text-forest-green mb-4">
            Trot Analysis
          </h3>
          <div className="mb-4">
            <video 
              controls 
              className="w-full rounded-soft h-64 object-contain bg-gray-900"
              preload="metadata"
            >
              <source src="/videos/billy-trot.MOV" type="video/quicktime" />
              <source src="/videos/billy-trot.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold text-navy-blue">Rhythm:</span>
              <p className="mt-1">The rhythm of Billy's trot has a two beat diagonal pattern, but he still showcases irregularity (in the right pair) due to lameness on that side of his body.</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Tempo:</span>
              <p className="mt-1">Billy's tempo is shortened and not consistent due to his shortened strides on the right side.</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Cadence:</span>
              <p className="mt-1">The trot has a better cadence (flow) than the walk. It appears more regular and rhythmic, but his cadence is still not as harmonious due to the restraint that is caused by his poor body conformation and lameness.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h3 className="text-xl font-serif text-forest-green mb-4">
            Canter/Lope Analysis
          </h3>
          <div className="mb-4">
            <video 
              controls 
              className="w-full rounded-soft h-64 object-contain bg-gray-900"
              preload="metadata"
            >
              <source src="/videos/billy-canter.MOV" type="video/quicktime" />
              <source src="/videos/billy-canter.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-700 mb-3 italic">
            Due to Billy's chronic low grade lameness it was very hard to get him to canter, so his canter is very similar to his trot.
          </p>
          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold text-navy-blue">Rhythm:</span>
              <p className="mt-1">The rhythm in Billy's canter was very irregular and difficult to maintain because he had trouble fully extending his right forelimb. Billy had difficulty maintaining a right lead canter and when he did so it looked unbalanced due to an avoidance to bear weight on the right side.</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Tempo:</span>
              <p className="mt-1">The tempo was inconsistent and rushed. He could not find a comfortable tempo.</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Cadence:</span>
              <p className="mt-1">Billy's cadence was very poor. The canter had no suspension and did not flow. Billy did not want to use his hindquarters to propel him and the avoidance to fully use his limbs created an uncomfortable canter that Billy was unable to maintain.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form to Function Connection */}
      <div className="bg-cream rounded-softer p-6 mb-12">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Form to Function Connection
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Billy's conformational issues directly impact his quality of movement which was observed during his lameness evaluation. 
        </p>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Conformational Impact on Movement:</h3>
            <p>Billy's steep shoulder angle of 60 degrees shortens his stride and puts a lot of stress on his forelimbs. This stress on his forelimbs was identified during his irregular gait patterns and shortened tempo across all his gaits. His 1:1.5 topline to bottomline ratio affects Billy's weight distribution and movement quality, which causes the uneven footfalls in his walk and trot. Furthermore, the splay-footed limb conformation on Billy's frontlimbs stresses his joints with each step. The cow-hocked and camped under conformation on his hindlimbs stresses the hock joints. This ultimately prevents Billy from fully utilizing his hindquarters to push forward movement. This was most noteable in his canter and trot sequence.  </p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Movement Quality Assessment:</h3>
            <p>Billy's quality of movement is severely impacted across all three of his gaits. This is caused by his confirmational limitations that has caused lameness. Billy's lameness on his right side causes him to minimize weight on that side of his body. This creates irregularities in his rhythm and shortens his strides. All of his gaits demonstrate a lack of harmony in his movement. Billy has very restrained movement patterns to avoid any extra pain. </p>
          </div>
        </div> 
      </div>

      {/* Side-by-Side Comparison Option */}
      <div className="bg-white rounded-softer p-6 border border-gray-200">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Comparative Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Ideal Movement:</h3>
            <p className="text-gray-700">Based on the standards of the American Quarter Horse Association the ideal movement of horses from this breed registry should have a consistent rhythm with even regular footfalls in all gaits. The walk should have a clear four beat pattern with relaxed strides. The trot should be a steady and clear two beat diagonal rhythm that has balanced movement with a moment of suspension. Additionally, the horse's canter should be a smooth three beat pattern with clear suspension. The hindquarters should also be engaged for suspension. For Quarter Horses movement should be harmonious and balanced.  </p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Billy's Movement:</h3>
            <p className="text-gray-700">Billy's movement is different from that of an ideal Quarter Horse. Billy's gait is very irregular which is primarily caused by confirmational issues and lameness on his right side. As mentioned ideal movement should be rhythmic and even, but Billy's footfalls are uneven. He also avoids pressure on his right side which makes his strides short and restricted. The most significant area of restraint in movement is in the canter. Billy is not able to maintain a canter and suspend. The movement lacks a relaxed and effortless movement forward. He appears very guarded and cautious in his movement.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

