"use client";

import { Lock, DollarSign, Shield, Hash, ChevronDown, Zap, CreditCard, Eye, ThumbsUp, Trophy } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1019] overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0f1019]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                <rect x="0" y="0" width="12" height="12" rx="3" fill="#2a3a5a"/>
                <rect x="0" y="20" width="12" height="12" rx="3" fill="#2a3a5a"/>
                <rect x="16" y="2" width="10" height="12" rx="5" fill="#5a8fd5"/>
                <rect x="16" y="18" width="10" height="12" rx="5" fill="#5a8fd5"/>
              </svg>
              <span className="text-xl font-bold">BUVEI</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Buvei Plus</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</a>
            </nav>
            <div className="hidden lg:flex items-center gap-4">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Log In</a>
              <a href="#" className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                Request Invite
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1b26] border border-white/10 rounded-full">
                <Lock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Private</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Payment solution built for industry leaders
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-md">
                Manage teams, cards, and ad spend — all in one seamless flow.
              </motion.p>
              <motion.a
                variants={fadeInUp}
                href="#"
                className="inline-flex items-center px-6 py-3 bg-[#1a1b26] border border-white/10 rounded-lg font-medium hover:bg-[#252636] transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request invite
              </motion.a>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="relative"
            >
              <motion.div
                className="bg-[#1a1b26] rounded-xl border border-white/10 p-4 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <span className="text-pink-400 text-sm">T</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Traffic Whales</div>
                    <div className="text-xs text-gray-500">Cash • $65,000.00</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-[#252636] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Transactions</div>
                    <div className="text-lg font-semibold">4.3K</div>
                  </div>
                  <div className="bg-[#252636] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Spend</div>
                    <div className="text-lg font-semibold">$1.25M</div>
                  </div>
                  <div className="bg-[#252636] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Settled</div>
                    <div className="text-lg font-semibold text-green-400">$650.00</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "GOOGLE*ADS1759915", amount: "$832.00", status: "Settled" },
                    { name: "FACEBK*TGGYM28CA2", amount: "$1,250.00", status: "Pending" },
                  ].map((tx, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between bg-[#252636] rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-xs">G</div>
                        <span className="text-sm text-gray-300">{tx.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm">{tx.amount}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${tx.status === "Settled" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                          {tx.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Card Management */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Advanced card management</h2>
            <p className="text-lg text-gray-400">Cut the routine with bulk actions, hotkeys, and one-click copying — optimized for speed at scale.</p>
          </motion.div>
          <motion.div
            variants={scaleIn}
            className="mt-12 bg-[#1a1b26] rounded-xl border border-white/10 p-4"
          >
            <div className="space-y-2">
              {[
                { id: "6230", name: "GGL Kath", status: "Active", limit: "$2,250.00", spend: "$1,850.00" },
                { id: "2357", name: "Cab1 Card", status: "Active", limit: "$1,500.00", spend: "$980.00" },
                { id: "3231", name: "Fb extra1", status: "Frozen", limit: "$800.00", spend: "$320.00" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-4 px-3 py-3 rounded-lg transition-colors"
                >
                  <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded" />
                  <span className="text-sm text-gray-400 w-16">••{card.id}</span>
                  <span className="text-sm text-gray-200 flex-1">{card.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${card.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}>
                    {card.status}
                  </span>
                  <span className="text-sm text-gray-400 w-24 text-right">{card.limit}</span>
                  <span className="text-sm text-gray-300 w-24 text-right">{card.spend}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: "Shared balance", desc: "Cards draw from a single balance — no manual top-ups." },
              { icon: Shield, title: "Automatic 3DS", desc: "Payments confirm instantly — no OTP required." },
              { icon: Hash, title: "Card tags", desc: "Sort by geo, offers, verticals — or any pattern you need.", soon: true },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <f.icon className="w-5 h-5 text-gray-400" />
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  {f.soon && <span className="px-2 py-0.5 text-xs bg-white/10 text-gray-400 rounded-full">Coming soon</span>}
                </div>
                <p className="text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Control */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Full-spectrum team control</h2>
            <p className="text-lg text-gray-400">Build clean, role-based team structures — easy to manage, even as you grow.</p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Victor Cloakman", role: "Team Lead", limit: "$15,089 / $47,000", color: "bg-purple-500" },
              { name: "Lenny Pixelstorm", role: "Admin", limit: "$2,820 / $5,000", color: "bg-blue-500" },
              { name: "Gary Funnelsworth", role: "Finance", limit: "$550 / $1,000", color: "bg-green-500" },
              { name: "Zane Leadbender", role: "Employee", limit: "$350 / $500", color: "bg-orange-500" },
            ].map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-[#1a1b26] rounded-xl p-4 border border-white/10 cursor-pointer transition-shadow hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${m.color} flex items-center justify-center text-white font-medium`}>
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{m.name}</div>
                    <div className="text-xs text-blue-400">{m.role}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">{m.limit}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleIn}
        className="py-16 lg:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote
            variants={fadeInUp}
            className="text-xl sm:text-2xl font-medium leading-relaxed mb-8"
          >
            "Buvei is one of our main payment solutions. A smooth interface, great terms, a wide variety of BINs, and excellent support. Definitely recommended!"
          </motion.blockquote>
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-semibold">TS</span>
            </div>
            <div className="font-medium">Timur Sharipov, Avalon</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Balance */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Crystal-clear balance</h2>
            <p className="text-lg text-gray-400">Monitor funds in real time. Analyze any spend, customize summaries, and export only what you need.</p>
          </motion.div>
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.01 }}
            className="mt-12 bg-[#1a1b26] rounded-xl border border-white/10 p-6"
          >
            <div className="flex justify-between mb-8">
              <div>
                <div className="text-sm text-gray-500">Available balance</div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold"
                >
                  $150,000.00
                </motion.div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Pending</div>
                <div className="text-2xl font-semibold text-gray-300">$1,105.31</div>
              </div>
            </div>
            <svg className="w-full h-32" viewBox="0 0 400 100">
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M0 80 L50 70 L100 75 L150 50 L200 60 L250 40 L300 45 L350 25 L400 30"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <path d="M0 80 L50 70 L100 75 L150 50 L200 60 L250 40 L300 45 L350 25 L400 30 L400 100 L0 100 Z" fill="url(#chartGrad)"/>
            </svg>
          </motion.div>
        </div>
      </motion.section>

      {/* Payment Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fast crypto top-up", desc: "Funds hit your balance in seconds." },
              { icon: CreditCard, title: "Partner payouts", desc: "International partners can send payments via WIRE." },
              { icon: Eye, title: "No-strings withdrawals", desc: "Your money stays safe, never locked — withdraw anytime." },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <f.icon className="w-5 h-5 text-gray-400" />
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                </div>
                <p className="text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Beyond Expectations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={slideInLeft}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Beyond your expectations</h2>
              <p className="text-lg text-gray-400">A solution built as part of your infrastructure.</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="space-y-10"
            >
              {[
                { icon: ThumbsUp, title: "Building real partnerships", desc: "When experts talk to experts, collaboration lasts." },
                { icon: Lock, title: "Not for everyone — for a reason", desc: "We focus on teams that run serious business." },
                { icon: Trophy, title: "Shaping a product that brings real value", desc: "We use real problems as fuel for better features." },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 cursor-pointer"
                >
                  <v.icon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                    <p className="text-gray-400">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="relative py-24 lg:py-32 overflow-hidden stars-bg"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          >
            This is where everything changes and finally matches your level
          </motion.h2>
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Request invite
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">Buvei, 2025</div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms and Conditions</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Telegram</a>
              <span className="text-sm text-gray-400">Eng</span>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
