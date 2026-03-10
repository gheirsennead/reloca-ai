"use client";

import { useState } from "react";

interface CostCategory {
  category: string;
  emoji: string;
  amount: number;
}

interface CityData {
  city: string;
  country: string;
  flag: string;
  costs: CostCategory[];
}

const CITIES: Record<string, CityData> = {
  "Lisbon": { city: "Lisbon", country: "Portugal", flag: "🇵🇹", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 900 }, { category: "Groceries", emoji: "🛒", amount: 300 }, { category: "Utilities", emoji: "💡", amount: 120 }, { category: "Transport", emoji: "🚇", amount: 40 }, { category: "Healthcare", emoji: "🏥", amount: 50 }, { category: "Dining Out", emoji: "🍽️", amount: 200 }, { category: "Internet + Phone", emoji: "📱", amount: 40 }
  ]},
  "Barcelona": { city: "Barcelona", country: "Spain", flag: "🇪🇸", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 1100 }, { category: "Groceries", emoji: "🛒", amount: 280 }, { category: "Utilities", emoji: "💡", amount: 130 }, { category: "Transport", emoji: "🚇", amount: 45 }, { category: "Healthcare", emoji: "🏥", amount: 0 }, { category: "Dining Out", emoji: "🍽️", amount: 220 }, { category: "Internet + Phone", emoji: "📱", amount: 35 }
  ]},
  "Rome": { city: "Rome", country: "Italy", flag: "🇮🇹", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 950 }, { category: "Groceries", emoji: "🛒", amount: 290 }, { category: "Utilities", emoji: "💡", amount: 140 }, { category: "Transport", emoji: "🚇", amount: 35 }, { category: "Healthcare", emoji: "🏥", amount: 0 }, { category: "Dining Out", emoji: "🍽️", amount: 200 }, { category: "Internet + Phone", emoji: "📱", amount: 30 }
  ]},
  "Athens": { city: "Athens", country: "Greece", flag: "🇬🇷", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 550 }, { category: "Groceries", emoji: "🛒", amount: 250 }, { category: "Utilities", emoji: "💡", amount: 110 }, { category: "Transport", emoji: "🚇", amount: 30 }, { category: "Healthcare", emoji: "🏥", amount: 40 }, { category: "Dining Out", emoji: "🍽️", amount: 150 }, { category: "Internet + Phone", emoji: "📱", amount: 30 }
  ]},
  "Valletta": { city: "Valletta", country: "Malta", flag: "🇲🇹", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 1000 }, { category: "Groceries", emoji: "🛒", amount: 280 }, { category: "Utilities", emoji: "💡", amount: 100 }, { category: "Transport", emoji: "🚇", amount: 26 }, { category: "Healthcare", emoji: "🏥", amount: 50 }, { category: "Dining Out", emoji: "🍽️", amount: 180 }, { category: "Internet + Phone", emoji: "📱", amount: 35 }
  ]},
  "Nicosia": { city: "Nicosia", country: "Cyprus", flag: "🇨🇾", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 750 }, { category: "Groceries", emoji: "🛒", amount: 270 }, { category: "Utilities", emoji: "💡", amount: 120 }, { category: "Transport", emoji: "🚇", amount: 40 }, { category: "Healthcare", emoji: "🏥", amount: 45 }, { category: "Dining Out", emoji: "🍽️", amount: 160 }, { category: "Internet + Phone", emoji: "📱", amount: 35 }
  ]},
  "Tallinn": { city: "Tallinn", country: "Estonia", flag: "🇪🇪", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 700 }, { category: "Groceries", emoji: "🛒", amount: 250 }, { category: "Utilities", emoji: "💡", amount: 130 }, { category: "Transport", emoji: "🚇", amount: 30 }, { category: "Healthcare", emoji: "🏥", amount: 40 }, { category: "Dining Out", emoji: "🍽️", amount: 150 }, { category: "Internet + Phone", emoji: "📱", amount: 25 }
  ]},
  "Andorra la Vella": { city: "Andorra la Vella", country: "Andorra", flag: "🇦🇩", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 1100 }, { category: "Groceries", emoji: "🛒", amount: 300 }, { category: "Utilities", emoji: "💡", amount: 110 }, { category: "Transport", emoji: "🚇", amount: 50 }, { category: "Healthcare", emoji: "🏥", amount: 60 }, { category: "Dining Out", emoji: "🍽️", amount: 200 }, { category: "Internet + Phone", emoji: "📱", amount: 35 }
  ]},
  "Singapore": { city: "Singapore", country: "Singapore", flag: "🇸🇬", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 2500 }, { category: "Groceries", emoji: "🛒", amount: 350 }, { category: "Utilities", emoji: "💡", amount: 130 }, { category: "Transport", emoji: "🚇", amount: 80 }, { category: "Healthcare", emoji: "🏥", amount: 100 }, { category: "Dining Out", emoji: "🍽️", amount: 300 }, { category: "Internet + Phone", emoji: "📱", amount: 40 }
  ]},
  "Dubai": { city: "Dubai", country: "UAE", flag: "🇦🇪", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 1800 }, { category: "Groceries", emoji: "🛒", amount: 400 }, { category: "Utilities", emoji: "💡", amount: 150 }, { category: "Transport", emoji: "🚇", amount: 100 }, { category: "Healthcare", emoji: "🏥", amount: 200 }, { category: "Dining Out", emoji: "🍽️", amount: 350 }, { category: "Internet + Phone", emoji: "📱", amount: 60 }
  ]},
  "Chiang Mai": { city: "Chiang Mai", country: "Thailand", flag: "🇹🇭", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 400 }, { category: "Groceries", emoji: "🛒", amount: 150 }, { category: "Utilities", emoji: "💡", amount: 50 }, { category: "Transport", emoji: "🚇", amount: 30 }, { category: "Healthcare", emoji: "🏥", amount: 30 }, { category: "Dining Out", emoji: "🍽️", amount: 120 }, { category: "Internet + Phone", emoji: "📱", amount: 20 }
  ]},
  "Kuala Lumpur": { city: "Kuala Lumpur", country: "Malaysia", flag: "🇲🇾", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 450 }, { category: "Groceries", emoji: "🛒", amount: 150 }, { category: "Utilities", emoji: "💡", amount: 50 }, { category: "Transport", emoji: "🚇", amount: 25 }, { category: "Healthcare", emoji: "🏥", amount: 30 }, { category: "Dining Out", emoji: "🍽️", amount: 100 }, { category: "Internet + Phone", emoji: "📱", amount: 20 }
  ]},
  "São Paulo": { city: "São Paulo", country: "Brazil", flag: "🇧🇷", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 550 }, { category: "Groceries", emoji: "🛒", amount: 200 }, { category: "Utilities", emoji: "💡", amount: 70 }, { category: "Transport", emoji: "🚇", amount: 30 }, { category: "Healthcare", emoji: "🏥", amount: 60 }, { category: "Dining Out", emoji: "🍽️", amount: 120 }, { category: "Internet + Phone", emoji: "📱", amount: 20 }
  ]},
  "Santiago": { city: "Santiago", country: "Chile", flag: "🇨🇱", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 600 }, { category: "Groceries", emoji: "🛒", amount: 250 }, { category: "Utilities", emoji: "💡", amount: 70 }, { category: "Transport", emoji: "🚇", amount: 35 }, { category: "Healthcare", emoji: "🏥", amount: 50 }, { category: "Dining Out", emoji: "🍽️", amount: 150 }, { category: "Internet + Phone", emoji: "📱", amount: 25 }
  ]},
  "Buenos Aires": { city: "Buenos Aires", country: "Argentina", flag: "🇦🇷", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 400 }, { category: "Groceries", emoji: "🛒", amount: 180 }, { category: "Utilities", emoji: "💡", amount: 30 }, { category: "Transport", emoji: "🚇", amount: 15 }, { category: "Healthcare", emoji: "🏥", amount: 60 }, { category: "Dining Out", emoji: "🍽️", amount: 100 }, { category: "Internet + Phone", emoji: "📱", amount: 15 }
  ]},
  "Montevideo": { city: "Montevideo", country: "Uruguay", flag: "🇺🇾", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 650 }, { category: "Groceries", emoji: "🛒", amount: 250 }, { category: "Utilities", emoji: "💡", amount: 80 }, { category: "Transport", emoji: "🚇", amount: 30 }, { category: "Healthcare", emoji: "🏥", amount: 50 }, { category: "Dining Out", emoji: "🍽️", amount: 140 }, { category: "Internet + Phone", emoji: "📱", amount: 25 }
  ]},
  "Asunción": { city: "Asunción", country: "Paraguay", flag: "🇵🇾", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 300 }, { category: "Groceries", emoji: "🛒", amount: 150 }, { category: "Utilities", emoji: "💡", amount: 40 }, { category: "Transport", emoji: "🚇", amount: 20 }, { category: "Healthcare", emoji: "🏥", amount: 40 }, { category: "Dining Out", emoji: "🍽️", amount: 60 }, { category: "Internet + Phone", emoji: "📱", amount: 15 }
  ]},
  "Mexico City": { city: "Mexico City", country: "Mexico", flag: "🇲🇽", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 650 }, { category: "Groceries", emoji: "🛒", amount: 200 }, { category: "Utilities", emoji: "💡", amount: 50 }, { category: "Transport", emoji: "🚇", amount: 20 }, { category: "Healthcare", emoji: "🏥", amount: 40 }, { category: "Dining Out", emoji: "🍽️", amount: 150 }, { category: "Internet + Phone", emoji: "📱", amount: 25 }
  ]},
  "Panama City": { city: "Panama City", country: "Panama", flag: "🇵🇦", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 700 }, { category: "Groceries", emoji: "🛒", amount: 250 }, { category: "Utilities", emoji: "💡", amount: 80 }, { category: "Transport", emoji: "🚇", amount: 35 }, { category: "Healthcare", emoji: "🏥", amount: 50 }, { category: "Dining Out", emoji: "🍽️", amount: 150 }, { category: "Internet + Phone", emoji: "📱", amount: 30 }
  ]},
  "San José": { city: "San José", country: "Costa Rica", flag: "🇨🇷", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 600 }, { category: "Groceries", emoji: "🛒", amount: 250 }, { category: "Utilities", emoji: "💡", amount: 60 }, { category: "Transport", emoji: "🚇", amount: 30 }, { category: "Healthcare", emoji: "🏥", amount: 50 }, { category: "Dining Out", emoji: "🍽️", amount: 120 }, { category: "Internet + Phone", emoji: "📱", amount: 30 }
  ]},
  "San Salvador": { city: "San Salvador", country: "El Salvador", flag: "🇸🇻", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 400 }, { category: "Groceries", emoji: "🛒", amount: 180 }, { category: "Utilities", emoji: "💡", amount: 50 }, { category: "Transport", emoji: "🚇", amount: 20 }, { category: "Healthcare", emoji: "🏥", amount: 35 }, { category: "Dining Out", emoji: "🍽️", amount: 80 }, { category: "Internet + Phone", emoji: "📱", amount: 25 }
  ]},
  "Medellín": { city: "Medellín", country: "Colombia", flag: "🇨🇴", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 450 }, { category: "Groceries", emoji: "🛒", amount: 180 }, { category: "Utilities", emoji: "💡", amount: 60 }, { category: "Transport", emoji: "🚇", amount: 25 }, { category: "Healthcare", emoji: "🏥", amount: 40 }, { category: "Dining Out", emoji: "🍽️", amount: 100 }, { category: "Internet + Phone", emoji: "📱", amount: 20 }
  ]},
  "Cuenca": { city: "Cuenca", country: "Ecuador", flag: "🇪🇨", costs: [
    { category: "Rent (1BR center)", emoji: "🏠", amount: 350 }, { category: "Groceries", emoji: "🛒", amount: 150 }, { category: "Utilities", emoji: "💡", amount: 40 }, { category: "Transport", emoji: "🚇", amount: 20 }, { category: "Healthcare", emoji: "🏥", amount: 50 }, { category: "Dining Out", emoji: "🍽️", amount: 80 }, { category: "Internet + Phone", emoji: "📱", amount: 30 }
  ]},
};

const cityKeys = Object.keys(CITIES);

export function CostBreakdownChart({ cityA: initA, cityB: initB }: { cityA?: string; cityB?: string }) {
  const [cityA, setCityA] = useState(initA || "Lisbon");
  const [cityB, setCityB] = useState(initB || "Chiang Mai");

  const a = CITIES[cityA];
  const b = CITIES[cityB];
  if (!a || !b) return null;

  const totalA = a.costs.reduce((s, c) => s + c.amount, 0);
  const totalB = b.costs.reduce((s, c) => s + c.amount, 0);
  const maxAmount = Math.max(...a.costs.map(c => c.amount), ...b.costs.map(c => c.amount));
  const savings = totalA - totalB;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white">
        <h3 className="text-lg font-bold mb-3">Monthly Cost of Living Comparison</h3>
        <div className="grid grid-cols-2 gap-4">
          <select value={cityA} onChange={(e) => setCityA(e.target.value)} className="bg-white/20 text-white rounded-lg px-3 py-2 text-sm font-medium border border-white/30 w-full appearance-none cursor-pointer">
            {cityKeys.map(c => <option key={c} value={c} className="text-gray-900">{CITIES[c].flag} {c}</option>)}
          </select>
          <select value={cityB} onChange={(e) => setCityB(e.target.value)} className="bg-white/20 text-white rounded-lg px-3 py-2 text-sm font-medium border border-white/30 w-full appearance-none cursor-pointer">
            {cityKeys.map(c => <option key={c} value={c} className="text-gray-900">{CITIES[c].flag} {c}</option>)}
          </select>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {a.costs.map((costA, i) => {
          const costB = b.costs[i];
          return (
            <div key={costA.category}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-500">{costA.emoji} {costA.category}</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-12 text-xs text-gray-400 text-right">{a.flag}</div>
                  <div className="flex-1 bg-gray-50 rounded-full h-5 overflow-hidden">
                    <div className="h-5 bg-[#38b2ac] rounded-full flex items-center justify-end px-2" style={{ width: `${(costA.amount / maxAmount) * 100}%`, minWidth: costA.amount > 0 ? '40px' : '0' }}>
                      <span className="text-[10px] font-bold text-white">${costA.amount}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 text-xs text-gray-400 text-right">{b.flag}</div>
                  <div className="flex-1 bg-gray-50 rounded-full h-5 overflow-hidden">
                    <div className="h-5 bg-[#1a365d] rounded-full flex items-center justify-end px-2" style={{ width: `${(costB.amount / maxAmount) * 100}%`, minWidth: costB.amount > 0 ? '40px' : '0' }}>
                      <span className="text-[10px] font-bold text-white">${costB.amount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">{a.flag} {a.city} Total</span>
          <span className="text-lg font-bold text-[#38b2ac]">${totalA.toLocaleString()}/mo</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-600">{b.flag} {b.city} Total</span>
          <span className="text-lg font-bold text-[#1a365d]">${totalB.toLocaleString()}/mo</span>
        </div>
        {savings !== 0 && (
          <div className={`text-center text-sm font-medium ${savings > 0 ? "text-green-600" : "text-red-500"}`}>
            {savings > 0 
              ? `💰 Save $${savings.toLocaleString()}/mo ($${(savings * 12).toLocaleString()}/yr) in ${b.city}`
              : `${a.city} is $${Math.abs(savings).toLocaleString()}/mo cheaper`
            }
          </div>
        )}
      </div>

      <div className="p-6 bg-gradient-to-r from-[#38b2ac]/5 to-[#1a365d]/5 text-center">
        <p className="text-sm text-gray-600 mb-3">Get a cost breakdown personalized to your budget & lifestyle</p>
        <a href="/plan-36" className="inline-block bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold px-6 py-3 rounded-xl transition text-sm">
          Get My Cost Analysis →
        </a>
      </div>
    </div>
  );
}
