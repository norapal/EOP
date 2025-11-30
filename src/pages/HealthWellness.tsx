import { useState } from 'react'
import Section from '@/components/Section'
import ImageUpload from '@/components/ImageUpload'
import HorseImage from '@/components/HorseImage'

export default function HealthWellness() {
  const [vaccines, setVaccines] = useState([
    { vaccine: 'Eastern/Western Encephalomyelitis', date: '', nextDue: '', notes: '' },
    { vaccine: 'West Nile Virus', date: '', nextDue: '', notes: '' },
    { vaccine: 'Tetanus', date: '', nextDue: '', notes: '' },
    { vaccine: 'Rabies', date: '', nextDue: '', notes: '' },
    { vaccine: 'Influenza', date: '', nextDue: '', notes: '' },
    { vaccine: 'Rhinopneumonitis (EHV-1/4)', date: '', nextDue: '', notes: '' },
  ])

  const [deworming, setDeworming] = useState([
    { date: '', product: '', activeIngredient: '', target: '', notes: '' },
  ])

  const [feedSchedule, setFeedSchedule] = useState([
    { time: 'Morning', roughage: '', amount: '', supplements: '', medication: '' },
    { time: 'Afternoon', roughage: '', amount: '', supplements: '', medication: '' },
    { time: 'Evening', roughage: '', amount: '', supplements: '', medication: '' },
  ])

  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Section 3: Your Horse's Wellness Program
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          A comprehensive wellness program is essential for maintaining your horse's health, preventing disease, and ensuring optimal performance. This section outlines the daily care, preventive measures, and health monitoring protocols for Billy.
        </p>
      </div>

      {/* Physical Exam Process */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Thorough Physical Exam Process
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          [Describe the process of a thorough physical exam using the worksheet provided. Include systematic approach, what to check, and normal vs. abnormal findings]
        </p>
        <div className="mt-4">
          <ImageUpload
            label="Upload completed physical exam worksheet"
            aspectRatio="aspect-auto"
          />
        </div>
      </div>

      {/* Daily Diet */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Daily Diet
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outline your healthy horse's daily diet (type of feed, total amount of feed/day in pounds) and justify your decisions based on Billy's age, activity level, and body condition.
        </p>
        
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Roughage</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Amount (lbs)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Supplements</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Medication</th>
              </tr>
            </thead>
            <tbody>
              {feedSchedule.map((feed, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                  <td className="border border-gray-300 px-4 py-2">{feed.time}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={feed.roughage}
                      onChange={(e) => {
                        const newSchedule = [...feedSchedule]
                        newSchedule[idx].roughage = e.target.value
                        setFeedSchedule(newSchedule)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="e.g., Timothy hay"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={feed.amount}
                      onChange={(e) => {
                        const newSchedule = [...feedSchedule]
                        newSchedule[idx].amount = e.target.value
                        setFeedSchedule(newSchedule)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="lbs"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={feed.supplements}
                      onChange={(e) => {
                        const newSchedule = [...feedSchedule]
                        newSchedule[idx].supplements = e.target.value
                        setFeedSchedule(newSchedule)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="e.g., Joint supplement"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={feed.medication}
                      onChange={(e) => {
                        const newSchedule = [...feedSchedule]
                        newSchedule[idx].medication = e.target.value
                        setFeedSchedule(newSchedule)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="e.g., Bute"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-semibold text-navy-blue">Total Daily Feed:</span> [Calculate and display total pounds per day]
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold text-navy-blue">Diet Justification:</span> [Explain why this diet is appropriate for Billy based on his age (22 years), activity level (idle), and health status]
          </p>
        </div>
      </div>

      {/* Body Condition Score */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Body Condition Score (BCS)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Assess your horse's body condition and assign an accurate Body Condition Score using the Henneke body condition score chart (1-9 scale).
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-navy-blue mb-2">
              Photo of Billy for BCS Assessment
            </label>
            <HorseImage
              src="/images/billy-side-1.jpg"
              alt="Image: Side profile view of Billy for body condition score assessment"
              title="Image: Side view for BCS assessment showing body condition"
              aspectRatio="aspect-auto"
            />
          </div>
          <div>
            <div className="bg-white rounded-soft p-4 mb-4">
              <h3 className="font-semibold text-navy-blue mb-2">BCS Assessment:</h3>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-soft">
                <option value="">Select BCS (1-9)</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="bg-white rounded-soft p-4">
              <h3 className="font-semibold text-navy-blue mb-2">BCS Justification:</h3>
              <textarea
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-soft"
                placeholder="Describe the visual and palpable indicators that support this BCS score..."
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ImageUpload
            label="Upload completed Henneke BCS chart"
            aspectRatio="aspect-auto"
          />
        </div>
      </div>

      {/* Vaccination Schedule */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Vaccination Schedule
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Specify your horse's vaccine schedule/protocol and provide rationale for your management decisions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Vaccine</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date Given</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Next Due</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((vaccine, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                  <td className="border border-gray-300 px-4 py-2 font-medium">{vaccine.vaccine}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="date"
                      value={vaccine.date}
                      onChange={(e) => {
                        const newVaccines = [...vaccines]
                        newVaccines[idx].date = e.target.value
                        setVaccines(newVaccines)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="date"
                      value={vaccine.nextDue}
                      onChange={(e) => {
                        const newVaccines = [...vaccines]
                        newVaccines[idx].nextDue = e.target.value
                        setVaccines(newVaccines)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={vaccine.notes}
                      onChange={(e) => {
                        const newVaccines = [...vaccines]
                        newVaccines[idx].notes = e.target.value
                        setVaccines(newVaccines)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="Notes"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-semibold text-navy-blue">Vaccination Protocol Rationale:</span> [Explain your vaccination decisions based on geographic location, risk factors, and Billy's age/health status]
          </p>
        </div>
      </div>

      {/* Deworming Schedule */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Deworming Schedule
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Specify your horse's deworming schedule/protocol and provide rationale for your management decisions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Active Ingredient</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Target Parasites</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {deworming.map((dew, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="date"
                      value={dew.date}
                      onChange={(e) => {
                        const newDeworming = [...deworming]
                        newDeworming[idx].date = e.target.value
                        setDeworming(newDeworming)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={dew.product}
                      onChange={(e) => {
                        const newDeworming = [...deworming]
                        newDeworming[idx].product = e.target.value
                        setDeworming(newDeworming)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="Product name"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={dew.activeIngredient}
                      onChange={(e) => {
                        const newDeworming = [...deworming]
                        newDeworming[idx].activeIngredient = e.target.value
                        setDeworming(newDeworming)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="e.g., Ivermectin"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={dew.target}
                      onChange={(e) => {
                        const newDeworming = [...deworming]
                        newDeworming[idx].target = e.target.value
                        setDeworming(newDeworming)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="e.g., Strongyles, Ascarids"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={dew.notes}
                      onChange={(e) => {
                        const newDeworming = [...deworming]
                        newDeworming[idx].notes = e.target.value
                        setDeworming(newDeworming)
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="Notes"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setDeworming([...deworming, { date: '', product: '', activeIngredient: '', target: '', notes: '' }])}
          className="mt-4 px-4 py-2 bg-navy-blue text-white rounded-soft hover:bg-opacity-90"
        >
          Add Deworming Entry
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-semibold text-navy-blue">Deworming Protocol Rationale:</span> [Explain your deworming strategy, including whether you use strategic deworming, targeted deworming, or FEC-based protocols]
          </p>
        </div>
      </div>

      {/* Disease Prevention */}
      <div className="bg-cream rounded-softer p-6">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Facility Intake Procedures & Outbreak Prevention
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Evaluate your horse's facility intake procedures and outbreak prevention strategies. Describe areas for improvement.
        </p>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Intake Procedures:</h3>
            <p>[Describe the facility's procedures for new horse intake, including health checks, quarantine protocols, vaccination requirements, etc.]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Outbreak Prevention Strategies:</h3>
            <p>[Describe measures in place to prevent disease outbreaks, including biosecurity protocols, isolation procedures, etc.]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Areas for Improvement:</h3>
            <p>[Identify and describe specific areas where intake procedures or outbreak prevention could be enhanced]</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

