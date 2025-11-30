import { Download } from 'lucide-react'

export default function PDFExport() {
  const handleExportPDF = () => {
    window.print()
  }

  return (
    <button
      onClick={handleExportPDF}
      className="fixed bottom-8 right-8 bg-forest-green text-white px-6 py-3 rounded-softer shadow-lg hover:bg-opacity-90 transition-all flex items-center space-x-2 no-print z-40"
      aria-label="Export to PDF"
    >
      <Download size={20} />
      <span>Export PDF</span>
    </button>
  )
}

