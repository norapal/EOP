import Section from '@/components/Section'

export default function Pedigree() {
  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Pedigree Analysis
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Analyzing a horse's pedigree provides valuable information about genetic traits, potential health concerns, and performance capabilities. Understanding genetic disorder linkages helps make informed breeding and management decisions.
        </p>
      </div>

      {/* Pedigree Chart */}
      <div className="bg-cream rounded-softer p-6 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Pedigree Chart
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Billy's pedigree chart showing his lineage:
        </p>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-soft p-6 border border-gray-300">
            <h3 className="font-semibold text-navy-blue mb-4">Pedigree Information:</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <div>
                <span className="font-semibold">Sire:</span> [Sire's name and registration number]
              </div>
              <div>
                <span className="font-semibold">Dam:</span> [Dam's name and registration number]
              </div>
              <div>
                <span className="font-semibold">Grandsire (Paternal):</span> [Name]
              </div>
              <div>
                <span className="font-semibold">Granddam (Paternal):</span> [Name]
              </div>
              <div>
                <span className="font-semibold">Grandsire (Maternal):</span> [Name]
              </div>
              <div>
                <span className="font-semibold">Granddam (Maternal):</span> [Name]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Genetic Disorder Analysis */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Genetic Disorder Analysis
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Research and analyze Billy's pedigree for genetic disorder linkages. Common genetic disorders in American Quarter Horses include:
        </p>
        <div className="space-y-4">
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">HYPP (Hyperkalemic Periodic Paralysis):</h3>
            <textarea
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-soft"
              placeholder="Analyze risk based on pedigree, particularly Impressive lineage..."
            />
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">GBED (Glycogen Branching Enzyme Deficiency):</h3>
            <textarea
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-soft"
              placeholder="Analyze risk based on pedigree..."
            />
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">HERDA (Hereditary Equine Regional Dermal Asthenia):</h3>
            <textarea
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-soft"
              placeholder="Analyze risk based on pedigree..."
            />
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">PSSM (Polysaccharide Storage Myopathy):</h3>
            <textarea
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-soft"
              placeholder="Analyze risk based on pedigree..."
            />
          </div>
          <div className="bg-cream rounded-soft p-4">
            <h3 className="font-semibold text-navy-blue mb-2">Other Genetic Concerns:</h3>
            <textarea
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-soft"
              placeholder="Document any other genetic disorders or concerns identified in the pedigree..."
            />
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white rounded-softer p-6 border border-gray-200">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Risk Assessment
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Overall Genetic Risk Profile:</h3>
            <p>[Provide an overall assessment of Billy's genetic risk profile based on the pedigree analysis]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Management Implications:</h3>
            <p>[Describe how the genetic risk assessment informs management decisions, including any special considerations for diet, exercise, or health monitoring]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Breeding Considerations:</h3>
            <p>[If applicable, discuss breeding implications and recommendations based on genetic analysis]</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

