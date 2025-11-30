import { useState } from 'react'
import Section from '@/components/Section'

export default function Performance() {
  const [videoUrl, setVideoUrl] = useState('')

  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Section 2: Your Horse's Performance
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Understanding the quality of movement and how it relates to conformation is essential for assessing a horse's performance capabilities and identifying potential issues. Movement analysis connects form to function, revealing how structural traits impact gait quality.
        </p>
      </div>

      {/* Video Embed Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Movement Video Documentation
        </h2>
        <div className="bg-cream rounded-softer p-6 mb-6">
          <label className="block text-sm font-medium text-navy-blue mb-2">
            Video URL (YouTube or Vimeo)
          </label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            className="w-full px-4 py-2 border border-gray-300 rounded-soft focus:outline-none focus:ring-2 focus:ring-forest-green"
          />
        </div>
        {videoUrl && (
          <div className="aspect-video bg-gray-100 rounded-soft overflow-hidden mb-4">
            <iframe
              src={videoUrl.replace('watch?v=', 'embed/').replace('vimeo.com/', 'player.vimeo.com/video/')}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {!videoUrl && (
          <div className="aspect-video bg-gray-100 rounded-soft flex items-center justify-center">
            <p className="text-gray-500">Video will appear here when URL is entered</p>
          </div>
        )}
      </div>

      {/* Gait Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h3 className="text-xl font-serif text-forest-green mb-4">
            Walk Analysis
          </h3>
          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold text-navy-blue">Rhythm:</span>
              <p className="mt-1">[Describe the rhythm of the walk - regularity of footfalls]</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Tempo:</span>
              <p className="mt-1">[Describe the tempo - speed of the gait]</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Cadence:</span>
              <p className="mt-1">[Describe the cadence - quality and expression of movement]</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h3 className="text-xl font-serif text-forest-green mb-4">
            Trot Analysis
          </h3>
          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold text-navy-blue">Rhythm:</span>
              <p className="mt-1">[Describe the rhythm of the trot - regularity of footfalls]</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Tempo:</span>
              <p className="mt-1">[Describe the tempo - speed of the gait]</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Cadence:</span>
              <p className="mt-1">[Describe the cadence - quality and expression of movement]</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h3 className="text-xl font-serif text-forest-green mb-4">
            Canter/Lope Analysis
          </h3>
          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold text-navy-blue">Rhythm:</span>
              <p className="mt-1">[Describe the rhythm of the canter - regularity of footfalls]</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Tempo:</span>
              <p className="mt-1">[Describe the tempo - speed of the gait]</p>
            </div>
            <div>
              <span className="font-semibold text-navy-blue">Cadence:</span>
              <p className="mt-1">[Describe the cadence - quality and expression of movement]</p>
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
          Draw connections between the conformation described in Section 1 and the quality of movement displayed here:
        </p>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Conformational Impact on Movement:</h3>
            <p>[Explain how specific conformational traits (shoulder angle, pastern angle, etc.) influence the quality of movement observed in the video]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Movement Quality Assessment:</h3>
            <p>[Assess the overall quality of movement, noting strengths and areas where conformation may be limiting performance]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Performance Implications:</h3>
            <p>[Discuss how the observed movement quality relates to Billy's intended use and performance capabilities]</p>
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
            <p className="text-gray-700">[Describe what ideal movement would look like for this breed/discipline]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Billy's Movement:</h3>
            <p className="text-gray-700">[Compare Billy's movement to the ideal, noting similarities and differences]</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

