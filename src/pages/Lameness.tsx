import { useState } from 'react'
import Section from '@/components/Section'
import ImageUpload from '@/components/ImageUpload'

export default function Lameness() {
  const [videoUrl, setVideoUrl] = useState('')

  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Lameness Evaluation
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Detecting and evaluating lameness is a critical skill for horse owners. Understanding how to perform a basic lameness examination helps identify issues early and determine when veterinary intervention is necessary.
        </p>
      </div>

      {/* Lameness History */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          History of Lameness
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <span className="font-semibold text-navy-blue">Status:</span> Billy has a history of chronic low-grade lameness.
        </p>
        <p className="text-gray-700 leading-relaxed">
          [Describe the history of lameness, including when it was first noticed, affected limb(s), severity, and any known causes or diagnoses]
        </p>
      </div>

      {/* Video Upload/Embed */}
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Lameness Video Documentation
        </h2>
        <div className="bg-white rounded-softer p-6 border border-gray-200 mb-6">
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
                <td className="border border-gray-300 px-4 py-2">[ ]</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is difficult to observe and is not consistently apparent, regardless of circumstances</td>
                <td className="border border-gray-300 px-4 py-2">[ ]</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is difficult to observe at a walk or when trotting in a straight line but consistently apparent under certain circumstances</td>
                <td className="border border-gray-300 px-4 py-2">[ ]</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is consistently observable at a trot under all circumstances</td>
                <td className="border border-gray-300 px-4 py-2">[ ]</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">Lameness is obvious at a walk</td>
                <td className="border border-gray-300 px-4 py-2">[ ]</td>
              </tr>
              <tr className="bg-cream">
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">Lameness produces minimal weight bearing in motion and/or at rest or a complete inability to move</td>
                <td className="border border-gray-300 px-4 py-2">[ ]</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-700">
          <span className="font-semibold text-navy-blue">Billy's Lameness Grade:</span> [Select grade and provide justification]
        </p>
      </div>

      {/* Physical Exam Findings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Physical Exam Findings
          </h2>
          <textarea
            className="w-full h-64 px-4 py-2 border border-gray-300 rounded-soft focus:outline-none focus:ring-2 focus:ring-forest-green"
            placeholder="Document physical examination findings, including palpation, range of motion, heat, swelling, etc."
          />
        </div>

        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Physical Exam Worksheet
          </h2>
          <ImageUpload
            label="Upload completed physical exam worksheet"
            aspectRatio="aspect-[4/3]"
          />
        </div>
      </div>

      {/* Lameness Detection Methodology */}
      <div className="bg-cream rounded-softer p-6">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Lameness Detection Methodology
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          As an owner, describe how you detect lameness and the steps you would take to perform a lameness evaluation prior to calling a veterinarian:
        </p>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Visual Observation:</h3>
            <p>[Describe what to look for when observing the horse at rest and in motion]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Hands-On Examination:</h3>
            <p>[Describe palpation techniques, checking for heat, swelling, pain response, etc.]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Movement Evaluation:</h3>
            <p>[Describe how to evaluate movement in hand, on a circle, on different surfaces, etc.]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Limitations:</h3>
            <p>[Describe the limitations of owner-performed lameness exams and when veterinary intervention with diagnostic equipment is necessary]</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

