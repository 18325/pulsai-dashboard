"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Ticket, Megaphone, Users, Search } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import { AreaChart, SegmentedDonutChart } from '@/components/analytics/ChartWidgets';
import ActiveCampaigns from '@/components/dashboard/ActiveCampaigns';
import Link from 'next/link';
import RecentTickets from '@/components/dashboard/RecentTickets';
import PerformanceSection from '@/components/dashboard/PerformanceSection';

export default function Home() {
  // Stat Data - Updated to strict colors (Blue, Green, Dark Gray only)
  const stats = [
    { title: "Conversations totales", value: "1,284", change: "+12.5%", trend: "up", icon: MessageSquare, color: "blue" },
    { title: "Tickets ouverts", value: "47", change: "-8.2%", trend: "up", icon: Ticket, color: "dark" },
    { title: "Contacts", value: "3,842", change: "+24.3%", trend: "up", icon: Users, color: "green" },
    { title: "Campagnes actives", value: "8", change: "+2", trend: "up", icon: Megaphone, color: "gray" }
  ];

  // Chart Data
  const weeklyConversations = [
    { label: 'Lun', total: 45, resolved: 38 },
    { label: 'Mar', total: 60, resolved: 52 },
    { label: 'Mer', total: 55, resolved: 48 },
    { label: 'Jeu', total: 85, resolved: 75 },
    { label: 'Ven', total: 70, resolved: 62 },
    { label: 'Sam', total: 40, resolved: 35 },
    { label: 'Dim', total: 30, resolved: 28 },
  ];

  // Ticket Distribution - Strict Colors
  const ticketDistribution = [
    { label: 'Ouverts', value: 30, color: 'blue' },
    { label: 'En cours', value: 45, color: 'dark' },
    { label: 'Résolus', value: 80, color: 'green' },
    { label: 'Fermés', value: 25, color: 'gray' },
  ];

  const recentItems = [
    { name: "Sophie Martin", msg: "Problème facture...", time: "2m", avatar: "Sophie" },
    { name: "Jean Dupont", msg: "Question sur...", time: "15m", avatar: "Jean" },
    { name: "Lucas Petit", msg: "Merci beaucoup !", time: "1h", avatar: "Lucas" },
  ];

  return (
    <div className="space-y-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold font-unbounded text-gray-900 mb-2">Tableau de bord</h1>
          <p className="text-gray-500 font-medium">Bonjour Admin, voici ce qui se passe aujourd'hui.</p>
        </div>

        {/* Search Bar */}
        <div className="relative group w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-pulsai-blue transition-colors" />
          <input
            type="text"
            placeholder="Rechercher dans le tableau de bord..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 focus:border-pulsai-blue transition-all"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Charts & Widgets Grid - Reduced spacing ("touching" as requested) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[420px]">
        {/* Conversations Chart */}
        <div className="lg:col-span-2 h-full">
          <AreaChart title="Conversations cette semaine" data={weeklyConversations} />
        </div>

        {/* Ticket Distribution */}
        <div className="lg:col-span-1 h-full">
          <SegmentedDonutChart title="Répartition des tickets" segments={ticketDistribution} />
        </div>
      </div>

      {/* Row 3: Recent Conversations & Active Campaigns (Side by Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Widget: Recent Conversations (No Scroll) */}
        <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold font-unbounded text-gray-900">Conversations récentes</h3>
            <Link href="/inbox" className="text-pulsai-blue text-sm font-bold hover:underline">Voir plus</Link>
          </div>
          <div className="space-y-4">
            {recentItems.map((item, i) => (
              <Link href="/inbox" key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.avatar}`} className="w-10 h-10 rounded-full bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-sm group-hover:text-pulsai-blue transition-colors">{item.name}</h4>
                  <p className="text-xs text-gray-500 truncate">{item.msg}</p>
                </div>
                <span className="text-xs text-cool-gray-400 font-bold bg-gray-100 px-2 py-1 rounded-md">{item.time}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Widget: Active Campaigns */}
        <div className="h-full">
          <ActiveCampaigns />
        </div>
      </div>

      {/* Row 4: Recent Tickets (Full Width) */}
      <div className="w-full">
        <RecentTickets />
      </div>

      {/* Row 5: Performance & AI Insights */}
      <div className="w-full pb-10">
        <PerformanceSection />
      </div>
    </div>
  );
}