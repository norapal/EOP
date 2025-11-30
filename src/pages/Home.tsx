import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/Section'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/billy-front-1.jpg"
          alt="Predictable Cash Flo (Billy) - Chestnut Quarter Horse with white blaze"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/80 to-navy-blue/80">
          <div className="absolute inset-0 bg-texture opacity-10"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-shadow">
            Predictable Cash Flo
          </h1>
          <p className="text-2xl md:text-3xl font-serif mb-2 text-shadow">
            (Billy)
          </p>
          <p className="text-lg md:text-xl mt-4 text-shadow">
            Equine Ownership Portfolio
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <Section className="bg-white">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif text-forest-green mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Having some background information about your horse's origins and characteristics helps you make better decisions regarding proper care, training, and use. A horse's breed can provide crucial information about the temperament, physical capabilities, and conformational traits. Understanding the connection between the standard of the breed and the horse's conformation reveals how the structure impacts movement and performance. In addition, understanding a horse's behavior, reinforcers, and responses is essential for behavior modification and skill development.
          </p>
        </div>
      </Section>

      {/* Quick Navigation */}
      <Section className="bg-cream">
        <h2 className="text-3xl font-serif text-forest-green mb-8 text-center">
          Portfolio Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { path: '/about', title: 'About Billy', desc: 'Physical description, breed information, and ownership history' },
            { path: '/facility', title: 'Facility', desc: 'Oppenheimer Family Equine Center layout and assessment' },
            { path: '/conformation', title: 'Conformation', desc: 'Analysis based on AQHA breed standards' },
            { path: '/performance', title: 'Performance', desc: 'Movement analysis and gait quality assessment' },
            { path: '/lameness', title: 'Lameness', desc: 'Lameness evaluation and detection methodology' },
            { path: '/health', title: 'Health & Wellness', desc: 'Wellness program, diet, and preventive care' },
            { path: '/pedigree', title: 'Pedigree', desc: 'Genetic analysis and disorder risk assessment' },
            { path: '/budget', title: 'Budget', desc: 'Annual expense breakdown and cost analysis' },
            { path: '/citations', title: 'Citations', desc: 'References and sources' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group bg-white rounded-softer p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-serif text-forest-green mb-2 group-hover:text-navy-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <div className="flex items-center text-forest-green group-hover:text-navy-blue">
                <span className="text-sm font-medium">View Section</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}

