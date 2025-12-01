import { useState, useMemo } from 'react'
import Section from '@/components/Section'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#2C5530', '#1B4B5A', '#F5F1E8', '#8B7355', '#A8C090', '#6B8E6B']

export default function Budget() {
  const [expenses, setExpenses] = useState([
    { category: 'Housing/Board', monthly: 0, annual: 0, notes: '' },
    { category: 'Feed', monthly: 0, annual: 0, notes: '' },
    { category: 'Vaccines', monthly: 0, annual: 0, notes: '' },
    { category: 'Deworming', monthly: 0, annual: 0, notes: '' },
    { category: 'Dental Care', monthly: 0, annual: 0, notes: '' },
    { category: 'Farrier', monthly: 0, annual: 0, notes: '' },
    { category: 'Veterinary Exams', monthly: 0, annual: 0, notes: '' },
  ])

  const updateExpense = (index: number, field: 'monthly' | 'annual' | 'notes', value: string | number) => {
    const newExpenses = [...expenses]
    if (field === 'monthly') {
      newExpenses[index].monthly = Number(value)
      newExpenses[index].annual = Number(value) * 12
    } else if (field === 'annual') {
      newExpenses[index].annual = Number(value)
      newExpenses[index].monthly = Number(value) / 12
    } else {
      newExpenses[index].notes = value as string
    }
    setExpenses(newExpenses)
  }

  const totals = useMemo(() => {
    const monthlyTotal = expenses.reduce((sum, exp) => sum + exp.monthly, 0)
    const annualTotal = expenses.reduce((sum, exp) => sum + exp.annual, 0)
    return { monthly: monthlyTotal, annual: annualTotal }
  }, [expenses])

  const chartData = expenses
    .filter(exp => exp.annual > 0)
    .map(exp => ({
      name: exp.category,
      value: exp.annual,
    }))

  return (
    <Section className="bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-forest-green mb-4">
          Section 4: Annual Horse Expense Sheet/Budget
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Responsible horse ownership requires careful financial planning. This budget provides a comprehensive breakdown of annual expenses for Billy, helping you understand the true cost of equine ownership and make informed management decisions.
        </p>
      </div>

      {/* Expense Table */}
      <div className="bg-white rounded-softer p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Itemized Expense Report
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-forest-green text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Monthly Cost ($)</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Annual Cost ($)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                  <td className="border border-gray-300 px-4 py-2 font-medium">{expense.category}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      value={expense.monthly || ''}
                      onChange={(e) => updateExpense(idx, 'monthly', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      value={expense.annual || ''}
                      onChange={(e) => updateExpense(idx, 'annual', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={expense.notes}
                      onChange={(e) => updateExpense(idx, 'notes', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder="e.g., Board includes stall, turnout, hay"
                    />
                  </td>
                </tr>
              ))}
              <tr className="bg-navy-blue text-white font-bold">
                <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  ${totals.monthly.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  ${totals.annual.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-cream rounded-softer p-6">
          <h3 className="text-lg font-serif text-forest-green mb-2">Monthly Average</h3>
          <p className="text-3xl font-bold text-navy-blue">${totals.monthly.toFixed(2)}</p>
        </div>
        <div className="bg-cream rounded-softer p-6">
          <h3 className="text-lg font-serif text-forest-green mb-2">Annual Total</h3>
          <p className="text-3xl font-bold text-navy-blue">${totals.annual.toFixed(2)}</p>
        </div>
        <div className="bg-cream rounded-softer p-6">
          <h3 className="text-lg font-serif text-forest-green mb-2">Daily Average</h3>
          <p className="text-3xl font-bold text-navy-blue">${(totals.annual / 365).toFixed(2)}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Cost Breakdown (Pie Chart)
          </h2>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-gray-400">
              Enter expense data to see chart
            </div>
          )}
        </div>

        <div className="bg-white rounded-softer p-6 border border-gray-200">
          <h2 className="text-2xl font-serif text-forest-green mb-4">
            Annual Expenses by Category (Bar Chart)
          </h2>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                <Legend />
                <Bar dataKey="value" fill="#2C5530" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-gray-400">
              Enter expense data to see chart
            </div>
          )}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="bg-cream rounded-softer p-6">
        <h2 className="text-2xl font-serif text-forest-green mb-4">
          Budget Notes & Assumptions
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Geographic Location:</h3>
            <p>[Specify your geographic area and how it affects costs]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Research Sources:</h3>
            <p>[Note where you obtained cost estimates - local barns, feed stores, veterinarians, etc.]</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy-blue mb-2">Additional Considerations:</h3>
            <p>[Note any additional expenses not included above, such as emergency veterinary care, training, equipment, insurance, etc.]</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

