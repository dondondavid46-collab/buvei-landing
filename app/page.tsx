"use client";

import { motion } from "framer-motion";

const riseIn = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardManagement = [
  {
    title: "Private BIN paths",
    desc: "Multiple issuing routes, cleaner selection, and less friction when teams need reliable payment options.",
  },
  {
    title: "Instant issuing",
    desc: "Create cards in seconds with live updates and less waiting across high-volume workflows.",
  },
  {
    title: "Shared balance",
    desc: "Cards draw from one operating balance so teams avoid repetitive top-ups and manual coordination.",
  },
  {
    title: "Automatic confirmation",
    desc: "Reduce extra steps during payment flows with a smoother confirmation experience.",
  },
  {
    title: "Smart labels",
    desc: "Organize by geo, campaign, vendor, or internal logic for cleaner portfolio management.",
  },
];

const teamManagement = [
  {
    title: "User limits",
    desc: "Assign spend capacity to teammates without constant wallet adjustments.",
  },
  {
    title: "Card transfer",
    desc: "Move card ownership and operational responsibility in a few clicks.",
  },
  {
    title: "Sub-accounts",
    desc: "Separate teams, budgets, and permissions while keeping administration centralized.",
  },
];

const analyticsItems = [
  {
    title: "Built-in analytics",
    desc: "Track performance inside the app with widgets, filtering, and cleaner summaries.",
  },
  {
    title: "Transaction API",
    desc: "Push transaction data into your own internal databases or reporting pipelines.",
  },
  {
    title: "Fast crypto top-up",
    desc: "Keep balances moving quickly so payment operations do not stall.",
  },
  {
    title: "Partner payouts",
    desc: "Support international payout flows for teams operating across multiple markets.",
  },
  {
    title: "Flexible withdrawals",
    desc: "Maintain treasury access with fewer restrictions and better liquidity control.",
  },
];

const valuePoints = [
  {
    title: "Built through real partnerships",
    desc: "You work with people who understand operational payment infrastructure, not generic software support.",
  },
  {
    title: "Selective by design",
    desc: "A tighter client fit keeps service quality higher and long-term risk lower.",
  },
  {
    title: "Driven by real workflows",
    desc: "Feature direction follows concrete operational pain points instead of inflated product checklists.",
  },
];

function BuveiLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#081224] shadow-[0_10px_30px_rgba(255,255,255,.12)]">
        <div className="grid grid-cols-2 gap-0.5">
          <span className="block h-3.5 w-3 rounded-tl-[8px] rounded-br-[5px] bg-[#081224]" />
          <span className="block h-3.5 w-2 rounded-tr-[8px] bg-[#081224]" />
          <span className="block h-3.5 w-3 rounded-bl-[8px] rounded-tr-[5px] bg-[#081224]" />
          <span className="block h-3.5 w-2 rounded-br-[8px] bg-[#081224]" />
        </div>
      </div>
      <span className="text-[30px] font-semibold tracking-[0.02em] text-white">BUVEI</span>
    </div>
  );
}

function SectionIntro({ eyebrow, title, desc, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-blue-200/80">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-[56px]">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-white/58">{desc}</p>
    </div>
  );
}

function MetricPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[820px]"
    >
      <div className="absolute -left-6 top-24 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-6 top-8 h-44 w-44 rounded-full bg-indigo-400/18 blur-3xl" />

      <div className="relative rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.03))] p-4 shadow-[0_30px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(84,118,255,.22),transparent_32%),linear-gradient(180deg,#101a30_0%,#091222_58%,#060d19_100%)] p-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <div>
              <div className="text-xs text-white/45">Workspace</div>
              <div className="mt-1 text-[28px] font-semibold tracking-[-0.03em] text-white">Buvei Enterprise</div>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
              Active
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["Cards", "126"],
              ["Team users", "18"],
              ["Spend", "$82K"],
            ].map(([label, value], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-white/8 bg-[#071224]/95 p-4"
              >
                <div className="text-sm text-white/48">{label}</div>
                <div className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">{value}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.08fr_.92fr]">
            <div className="rounded-[24px] border border-white/8 bg-[#071224]/95 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white/85">Recent transactions</div>
                  <div className="text-xs text-white/42">Live operational view</div>
                </div>
                <div className="text-xs text-white/42">Updated now</div>
              </div>
              <div className="space-y-3">
                {[
                  ["Google Ads", "$1,240.00", "Settled"],
                  ["Meta Ads", "$890.00", "Pending"],
                  ["OpenAI", "$420.00", "Approved"],
                ].map(([name, amount, status], i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
                    className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-4"
                  >
                    <div>
                      <div className="font-medium text-white">{name}</div>
                      <div className="text-sm text-white/42">Operational payment</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-white">{amount}</div>
                      <div className="text-sm text-white/42">{status}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#08142c]/95 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white/85">Spend analytics</div>
                  <div className="text-xs text-white/42">This month</div>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/46">
                  Live widgets
                </div>
              </div>

              <div className="mt-5 flex h-44 items-end gap-2 rounded-2xl border border-white/6 bg-white/[0.03] px-4 pb-4 pt-6">
                {[44, 61, 57, 76, 62, 91, 72, 86].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0.35 }}
                    animate={{ height: `${h}%`, opacity: 1 }}
                    transition={{ delay: 0.35 + i * 0.06, duration: 0.55 }}
                    className="flex-1 rounded-t-xl bg-[linear-gradient(180deg,rgba(151,177,255,.96),rgba(61,93,196,.30))]"
                  />
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <MetricPill label="Approval" value="96.4%" />
                <MetricPill label="Processing" value="1.2s" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_.92fr]">
            <div className="rounded-[24px] border border-white/8 bg-[linear-gradient(135deg,rgba(18,39,82,.98),rgba(8,16,32,.97))] p-5">
              <div className="text-sm text-white/50">Card preview</div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative mt-4 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.16),transparent_26%),linear-gradient(135deg,#17316d_0%,#0b1935_54%,#08111f_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.12)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.12),transparent)] animate-[pulse_3.2s_ease-in-out_infinite]" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-white/42">BUVEI</div>
                    <div className="mt-8 text-xl font-semibold text-white">Private Card</div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-white/10" />
                </div>
                <div className="relative z-10 mt-14 text-lg tracking-[0.30em] text-white/90">•••• 8124</div>
                <div className="relative z-10 mt-5 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-white/40">Card holder</div>
                    <div className="mt-1 text-sm font-medium text-white">Ops Team</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-white/40">Valid thru</div>
                    <div className="mt-1 text-sm font-medium text-white">09/29</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#071224]/95 p-5">
              <div className="text-sm font-medium text-white/85">Team activity</div>
              <div className="mt-4 space-y-4">
                {[
                  ["Campaign team", "New spend policy approved"],
                  ["Finance admin", "Balance threshold updated"],
                  ["Ops workspace", "2 new cards issued"],
                ].map(([title, sub], i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.08, duration: 0.45 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] p-3"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(123,150,255,.28),rgba(255,255,255,.08))] text-sm font-semibold text-white">
                      {title.split(" ")[0][0]}
                    </div>
                    <div>
                      <div className="font-medium text-white">{title}</div>
                      <div className="text-sm text-white/42">{sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, desc, i }) {
  return (
    <motion.div
      custom={i}
      variants={riseIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
    >
      <div className="mb-5 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(120,150,255,.34),rgba(255,255,255,.08))] shadow-[0_8px_30px_rgba(80,110,255,.20)]" />
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
      <p className="mt-3 leading-7 text-white/58">{desc}</p>
    </motion.div>
  );
}

function AppPreview({ title = "Payment operations", compact = false }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.03))] p-4 shadow-[0_24px_90px_rgba(0,0,0,.38)] backdrop-blur-2xl">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(84,118,255,.18),transparent_28%),linear-gradient(180deg,#0f182d_0%,#081121_100%)] p-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
          <div>
            <div className="text-xs text-white/40">Preview</div>
            <div className="mt-1 text-xl font-semibold text-white">{title}</div>
          </div>
          <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">Live</div>
        </div>

        <div className={compact ? "mt-4 grid gap-3 sm:grid-cols-2" : "mt-4 grid gap-3 sm:grid-cols-3"}>
          <div className="rounded-2xl border border-white/8 bg-[#071224]/90 p-4">
            <div className="text-sm text-white/45">Workspace</div>
            <div className="mt-3 text-2xl font-semibold text-white">18 teams</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-[#071224]/90 p-4">
            <div className="text-sm text-white/45">Cards</div>
            <div className="mt-3 text-2xl font-semibold text-white">126 active</div>
          </div>
          {!compact && (
            <div className="rounded-2xl border border-white/8 bg-[#071224]/90 p-4">
              <div className="text-sm text-white/45">Volume</div>
              <div className="mt-3 text-2xl font-semibold text-white">$82K</div>
            </div>
          )}
        </div>

        <div className="mt-4 rounded-[24px] border border-white/8 bg-[#071224]/92 p-4">
          <div className="mb-4 text-sm font-medium text-white/82">Workflow snapshot</div>
          <div className="space-y-3">
            {[
              ["Bulk actions", "Run team-wide tasks faster"],
              ["Role visibility", "See access and ownership clearly"],
              ["Export-ready", "Clean reporting and summaries"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
                <div className="font-medium text-white">{a}</div>
                <div className="mt-1 text-sm text-white/45">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuveiEnterpriseLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030817] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(54,92,255,.22),transparent_24%),radial-gradient(circle_at_86%_12%,rgba(100,120,255,.15),transparent_18%),radial-gradient(circle_at_76%_56%,rgba(77,110,255,.10),transparent_28%),linear-gradient(180deg,#040914_0%,#030817_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_82%)] opacity-70" />

      <header className="sticky top-0 z-40 border-b border-white/[0.05] bg-[#030817]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <BuveiLogo />

          <nav className="hidden items-center gap-9 text-sm text-white/68 md:flex">
            <a href="#card-management" className="transition hover:text-white">Card Management</a>
            <a href="#team-management" className="transition hover:text-white">Team Management</a>
            <a href="#analytics" className="transition hover:text-white">Analytics</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 transition hover:bg-white/[0.08] md:block">
              Learn More
            </button>
            <button className="rounded-[20px] bg-white px-5 py-3 text-sm font-semibold text-[#071021] shadow-[0_10px_40px_rgba(255,255,255,.14)] transition hover:-translate-y-0.5">
              Request Invite
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 pb-24 pt-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-14">
        <motion.div initial="hidden" animate="show" variants={riseIn} className="max-w-[560px]">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Private infrastructure for serious teams
          </div>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[82px]">
            Payment solution built for industry-grade teams
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-white/58 sm:text-xl">
            Manage teams, cards, and operational spend inside one seamless workflow designed for speed, structure, and scale.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-[20px] bg-white px-6 py-4 text-sm font-semibold text-[#071021] shadow-[0_18px_60px_rgba(255,255,255,.12)] transition hover:-translate-y-0.5">
              Request Invite
            </button>
          </div>
        </motion.div>

        <HeroVisual />
      </section>

      <section id="card-management" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionIntro
          eyebrow="Card Management"
          title="Advanced card management"
          desc="Cut routine work with faster issuing, shared balances, and cleaner controls built for teams running at scale."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {cardManagement.map((item, i) => (
            <FeatureCard key={item.title} title={item.title} desc={item.desc} i={i} />
          ))}
        </div>
      </section>

      <section id="team-management" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionIntro
          eyebrow="Team Management"
          title="Full-spectrum team control"
          desc="Build role-based structures that stay easy to manage even as your workflows become more complex."
          center
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <AppPreview title="Team control center" />

          <div className="space-y-5">
            {teamManagement.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={riseIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(120,150,255,.34),rgba(255,255,255,.08))]" />
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/58">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl"
        >
          <p className="text-xl leading-8 text-white/78">
            “Buvei works like infrastructure, not just a card tool. The interface is smooth, team control is clear, and operations stay fast as volume grows.”
          </p>
          <div className="mt-5 text-sm text-white/45">Operations Lead, performance marketing team</div>
        </motion.div>
      </section>

      <section id="analytics" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionIntro
          eyebrow="Balances & Analytics"
          title="Crystal-clear balance visibility"
          desc="Monitor funds in real time, review activity, analyze spend, and export only the data your team actually needs."
          center
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[.94fr_1.06fr]">
          <div className="space-y-5 order-2 lg:order-1">
            {analyticsItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={riseIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[26px] border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-xl"
              >
                <div className="text-xl font-semibold tracking-[-0.025em] text-white">{item.title}</div>
                <div className="mt-2 leading-7 text-white/58">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <AppPreview title="Analytics workspace" compact />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionIntro
          eyebrow="Why Buvei"
          title="Beyond standard expectations"
          desc="A solution designed to become part of your infrastructure rather than another isolated dashboard."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {valuePoints.map((item, i) => (
            <FeatureCard key={item.title} title={item.title} desc={item.desc} i={i} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
        <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(89,117,255,.20),transparent_35%),linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03))] px-8 py-14 text-center backdrop-blur-xl sm:px-12 sm:py-18">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-[58px]">
              This is where payment operations finally match your level
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">
              Bring together issuing, team structure, balance visibility, and operational speed in one professional payment layer.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-[20px] bg-white px-6 py-4 text-sm font-semibold text-[#071021] transition hover:-translate-y-0.5">
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/8 px-6 py-8 text-sm text-white/42 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>© Buvei, 2026</div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#" className="transition hover:text-white">Terms</a>
          <a href="#" className="transition hover:text-white">Privacy</a>
          <a href="#" className="transition hover:text-white">Telegram</a>
        </div>
      </footer>
    </div>
  );
}
