"use client"; 
import { motion } from "framer-motion";

const StatsCard = ({ title, value, trend, icon }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
    >
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-pulsai-gray-dark">{value}</h3>
        <span className={`text-xs font-bold px-2 py-1 rounded-full mt-2 inline-block ${
          trend > 0 ? 'bg-pulsai-green/20 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {trend > 0 ? `+${trend}%` : `${trend}%`} ce mois
        </span>
      </div>
      <div className="p-3 bg-pulsai-blue/10 rounded-xl text-pulsai-blue">
        {icon}
      </div>
    </motion.div>
  );
};

export default StatsCard;