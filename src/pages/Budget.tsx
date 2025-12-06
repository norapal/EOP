import { Link } from 'react-router-dom'
import Section from '@/components/Section'

export default function Budget() {
  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Annual Horse Expense Sheet/Budget
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Owning a horse is a lot of responsibility. Being a good horse owner requires careful financial planning and budgeting to ensure that all your horses' needs are met. It can be a struggle to prioritize the quality of products while also keeping costs low. This budget provides a guideline for Billy's annual expenses. Making a budget can help you understand the true cost of owning a horse and can help you make informed decisions about management <sup><Link to="/citations#umn-senior-horse" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[22]</Link></sup>.
        </p>
      </div>

      {/* Embedded Google Sheet */}
      <div className="bg-white rounded-softer p-6 border border-gray-200">
        <div className="w-full overflow-x-auto" style={{ height: '1100px' }}>
          <iframe 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSPZ0zOxRnq83XZ_xQk50MXLmpF9NCxGmZqiSGAdh6xC1PXp-Ci-_wgImz_3Y-3xZPjx863SYWvWWri/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            className="w-full h-full border-0"
            style={{ minWidth: '900px' }}
            title="Billy's Annual Budget Spreadsheet"
          />
        </div>
        
        {/* Citation Notes */}
        <div className="mt-6 space-y-3">
          <h3 className="text-xl font-serif text-forest-green mb-4">Budget Citation References</h3>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Board Costs (All 12 months):</span> Monthly board costs ($750/month) for self-care board including feed (hay/grain) and shavings are sourced from Cal Poly Performance Horse Sales <sup><Link to="/citations#calpoly-sales" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[23]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Feed - Grass Hay, Alfalfa Pellets, Senior Concentrate:</span> Daily amounts (21 lbs grass hay, 7 lbs alfalfa pellets, 2 lbs senior concentrate) included in board costs are based on Cal Poly feeding guidelines <sup><Link to="/citations#calpoly-sales" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[23]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Ground Flaxseed:</span> Pricing for 8 lb buckets at $27.59 (12 buckets/year for 4 oz/day feeding rate) is from PBS Animal Health <sup><Link to="/citations#pbs-flaxseed" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[24]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Platinum Performance Joint Supplement:</span> Cost of $899 per 50 lb bucket with 290 servings (3.15 buckets needed annually for 2.5 scoops/day) is from Platinum Performance <sup><Link to="/citations#platinum-joint" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[25]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Vaccines (EIV/EHV-1/EHV-4, West Nile Virus, Rabies, EEE/WEE/Tetanus):</span> All vaccine pricing for semi-annual and annual vaccinations is based on Century Equine Veterinary Services 2022 vaccine clinic rates <sup><Link to="/citations#century-vaccine" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[26]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Late Fall/Early Winter Deworming:</span> Ivermectin + Praziquantel product pricing ($24.99) for treating bots, strongyles, and tapeworms is from Tractor Supply Co. <sup><Link to="/citations#tractor-ivermectin" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[27]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Late Spring Deworming:</span> Moxidectin + Praziquantel (Quest Plus) product pricing ($21.99) for treating strongyles and tapeworms is from Tractor Supply Co. <sup><Link to="/citations#tractor-quest" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[28]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Fecal Egg Count Test & Dental Float:</span> Pricing for fecal egg count testing ($80 for 1-2 tests annually) and annual dental float/care ($215) is from Foundation Equine Clinic <sup><Link to="/citations#foundation-clinic" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[29]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">Farrier - Unshoed Trim:</span> Trimming frequency (every 10 weeks) is based on Utah State University hoof care guidelines <sup><Link to="/citations#usu-hoof-care" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[31]</Link></sup>. Pricing of $70 per four-foot trim (approximately 5 times per year = $350 annually) is from Dixie's Farrier Service <sup><Link to="/citations#dixie-farrier" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[30]</Link></sup>.
            </p>
          </div>
          
          <div className="bg-cream rounded-soft p-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-navy-blue">General Veterinary Expenses (Physical Exam & Lameness Evaluation):</span> Annual costs for physical exams ($80) and lameness evaluations ($110) are based on the AAEP Equine Veterinary Fee Survey <sup><Link to="/citations#aaep-fee-survey" className="text-navy-blue font-semibold underline hover:text-forest-green transition-colors">[32]</Link></sup>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

