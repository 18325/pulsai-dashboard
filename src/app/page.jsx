'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Ticket, Megaphone, Users, Search } from 'lucide-react';
import StatCard from '@/components/dashboard/cards/StatCard';
import { AreaChart, SegmentedDonutChart } from '@/components/analytics/ChartWidgets';
import ActiveCampaigns from '@/components/dashboard/widgets/ActiveCampaigns';
import Link from 'next/link';
import RecentTickets from '@/components/dashboard/widgets/RecentTickets';
import PerformanceSection from '@/components/dashboard/widgets/PerformanceSection';
import { TICKET_STATS_NUMBERS, PERCENTAGES } from '@/constants/numbers';

export default function Home() {
  // Stat Data - Updated to strict colors (Blue, Green, Dark Gray only)
  const statsList = [
    { title: "Conversations totales", value: "1,284", change: "+12.5%", trend: "up", icon: MessageSquare, color: "blue" },
    { title: "Tickets ouverts", value: TICKET_STATS_NUMBERS.TOTAL_TICKETS.toString(), change: "-8.2%", trend: "up", icon: Ticket, color: "dark" },
    { title: "Contacts", value: "3,842", change: "+24.3%", trend: "up", icon: Users, color: "green" },
    { title: "Campagnes actives", value: "8", change: "+2", trend: "up", icon: Megaphone, color: "gray" }
  ];

  // Chart Data
  const weeklyConversations = [
    { label: 'Lun', total: PERCENTAGES.MINIMAL, resolved: PERCENTAGES.THRESHOLD_38 },
    { label: 'Mar', total: 60, resolved: PERCENTAGES.THRESHOLD_52 },
    { label: 'Mer', total: PERCENTAGES.THRESHOLD_55, resolved: PERCENTAGES.THRESHOLD_48 },
    { label: 'Jeu', total: 85, resolved: PERCENTAGES.MEDIUM_LOW },
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
          <h1 className="text-4xl font-bold font-unbounded text-gray-900 dark:text-white mb-2">Tableau de bord</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Bonjour Admin, voici ce qui se passe aujourd'hui.</p>
        </div>

        {/* Search Bar */}
        <div className="relative group w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-pulsai-blue transition-colors" />
          <input
            type="text"
            placeholder="Rechercher dans le tableau de bord..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 focus:border-pulsai-blue transition-all dark:text-white dark:placeholder-gray-500"
          />
        </div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsList.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

      {/* Charts & Widgets Grid - Reduced spacing ("touching" as requested) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
        {/* Conversations Chart */}
        <div className="h-full">
          <AreaChart title="Conversations cette semaine" data={weeklyConversations} />
        </div>

        {/* Ticket Distribution */}
        <div className="h-full">
          <SegmentedDonutChart title="Répartition des tickets" segments={ticketDistribution} height={200} />
        </div>
      </div>

      {/* Row 3: Recent Conversations & Active Campaigns (Side by Side) */}
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {/* Widget: Recent Conversations (No Scroll) */}
        <div className="bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold font-unbounded text-gray-900 dark:text-white">Conversations récentes</h3>
            <Link href="/inbox" className="text-pulsai-blue text-sm font-bold hover:underline">Voir plus</Link>
          </div>
          <div className="space-y-4">
            {recentItems.map((item) => (
              <Link href="/inbox" key={item.name} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors cursor-pointer group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pulsai-blue to-pulsai-green text-white font-bold text-sm">
                  {item.avatar.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm group-hover:text-pulsai-blue transition-colors">{item.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.msg}</p>
                </div>
                <span className="text-xs text-cool-gray-400 font-bold bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">{item.time}</span>
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