import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/about', label: 'About Billy' },
    { path: '/facility', label: 'Facility' },
    { path: '/conformation', label: 'Conformation' },
    { path: '/performance', label: 'Performance' },
    { path: '/lameness', label: 'Lameness' },
    { path: '/health', label: 'Health & Wellness' },
    { path: '/pedigree', label: 'Pedigree' },
    { path: '/budget', label: 'Budget' },
    { path: '/citations', label: 'Citations' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold text-forest-green">
                EOP
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-soft text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-forest-green text-white"
                      : "text-navy-blue hover:bg-cream"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-navy-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-soft text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-forest-green text-white"
                      : "text-navy-blue hover:bg-cream"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-forest-green text-cream py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Equine Ownership Portfolio - Predictable Cash Flo (Billy)
          </p>
        </div>
      </footer>
    </div>
  )
}

