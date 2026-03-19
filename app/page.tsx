"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const riseIn = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardManagement = [
  {
    title: "Private BIN paths",
    desc: "Multiple issuing routes with cleaner selection and less friction for high-volume payment teams.",
  },
  {
    title: "Instant issuing",
    desc: "Create cards in seconds with live state updates and a faster operational rhythm.",
  },
  {
    title: "Shared balance",
    desc: "Cards draw from one operating balance so teams avoid repetitive top-ups and manual transfers.",
  },
  {
    title: "Automatic confirmation",
    desc: "Reduce extra steps during payment flows with a smoother confirmation experience.",
  },
  {
    title: "Smart labels",
    desc: "Group cards by campaign, region, vendor, or internal logic for clearer portfolio control.",
  },
];

const teamManagement = [
  {
    title: "User limits",
    desc: "Assign spend capacity to teammates without constant wallet adjustments or manual oversight.",
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
    desc: "Track payment performance with widgets, filtering, and cleaner summaries inside one interface.",
  },
  {
    title: "Transaction API",
    desc: "Push transaction data into your own reporting stack or internal databases.",
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
    desc: "A tighter client fit helps keep service quality higher and long-term risk lower.",
  },
  {
    title: "Driven by real workflows",
    desc: "Feature direction follows concrete operational pain points instead of bloated product checklists.",
  },
];

function BuveiLogo() {
  return (
    <Image
      src="/buvei-logo.svg"
      alt="Buvei"
      width={180}
      height={48}
      className="h-auto w-[140px] sm:w-[170px] object-contain"
      priority
    />
  );
}

function SectionIntro({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-blue-200/80">
        {eyebrow}
      </div>
      <h2 className="text-[34px] font-semibold tracking-[-0.055em] text-white sm:text-[48px] lg:text-[58px]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
        {desc}
      </p>
    </div>
  );
}

function PrimaryButton({
  children,
  href = "https://app.buvei.com/",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex items-center justify-center rounded-[20px] bg-white px-6 py-4 text-sm font-semibold text-[#071021] shadow-[0_18px_60px_rgba(255,255,255,.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_75px_rgba(255,255,255,.18)] active:translate-y-0"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  children,
  href = "https://app.buvei.com/",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-medium text-white/88 backdrop-blur-xl transition duration-300 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.1]"
    >
      {children}
    </Link>
  );
}

function FeatureCard({
  title,
  desc,
  i,
}: {
  title: string;
  desc: string;
  i: number;
}) {
  return (
    <motion.div
      custom={i}
      variants={riseIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-white/[0.055]"
    >
      <div className="mb-5 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(120,150,255,.34),rgba(255,255,255,.08))] shadow-[0_8px_30px_rgba(80,110,255,.20)] transition duration-300 group-hover:shadow-[0_12px_40px_rgba(80,110,255,.28)]" />
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
      <p className="mt-3 leading-7 text-white/58">{desc}</p>
    </motion.div>
  );
}

function BrowserDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
    </div>
  );
}

function ImageFrame({
  src,
  alt,
  title,
  tag,
  metrics,
}: {
  src: string;
  alt: string;
  title: string;
  tag: string;
  metrics?: [string, string][];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-blue-500/16 blur-3xl" />
      <div className="absolute -right-4 top-4 h-28 w-28 rounded-full bg-indigo-400/16 blur-3xl" />

      <div className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.03))] p-3 shadow-[0_26px_90px_rgba(0,0,0,.42)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(0,0,0,.52)] sm:p-4">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0d1529_0%,#08101f_100%)]">
          <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center gap-3">
              <BrowserDots />
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/38">
                  Preview
                </div>
                <div className="mt-1 text-base font-semibold tracking-[-0.03em] text-white sm:text-lg">
                  {title}
                </div>
              </div>
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/46">
              {tag}
            </div>
          </div>

          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={1400}
              height={1000}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,24,0)_55%,rgba(6,12,24,.45)_100%)]" />
          </div>

          {metrics && (
            <div className="grid grid-cols-2 gap-3 border-t border-white/8 bg-white/[0.03] p-4 sm:grid-cols-4">
              {metrics.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {label}
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
        aria-label="Toggle navigation"
      >
        <div className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </div>
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-[72px] z-50 rounded-[24px] border border-white/10 bg-[#071224]/95 p-4 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-2 text-sm text-white/80">
            {[
              ["Card Management", "#card-management"],
              ["Team Management", "#team-management"],
              ["Analytics", "#analytics"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 transition hover:bg-white/[0.05] hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030817] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(54,92,255,.22),transparent_24%),radial-gradient(circle_at_86%_12%,rgba(100,120,255,.15),transparent_18%),radial-gradient(circle_at_76%_56%,rgba(77,110,255,.10),transparent_28%),linear-gradient(180deg,#040914_0%,#030817_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_82%)] opacity-70" />

      <header className="sticky top-0 z-40 border-b border-white/[0.05] bg-[#030817]/80 backdrop-blur-2xl">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
          <BuveiLogo />

          <nav className="hidden items-center gap-9 text-sm text-white/68 lg:flex">
            <a href="#card-management" className="transition duration-300 hover:text-white">
              Card Management
            </a>
            <a href="#team-management" className="transition duration-300 hover:text-white">
              Team Management
            </a>
            <a href="#analytics" className="transition duration-300 hover:text-white">
              Analytics
            </a>
            <a href="#about" className="transition duration-300 hover:text-white">
              About
            </a>
            <a href="#contact" className="transition duration-300 hover:text-white">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <SecondaryButton>Learn More</SecondaryButton>
            <PrimaryButton>Request Invite</PrimaryButton>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <PrimaryButton>Invite</PrimaryButton>
            <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:px-8 lg:gap-16 lg:pb-28 lg:pt-14">
        <motion.div
          initial="hidden"
          animate="show"
          variants={riseIn}
          className="order-2 max-w-[560px] lg:order-1"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Private infrastructure for serious teams
          </div>

          <h1 className="text-[38px] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-[52px] lg:text-[68px]">
            Payment solution built for industry-grade teams
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/58 sm:text-xl sm:leading-8">
            Manage teams, cards, and operational spend inside one seamless workflow
            designed for speed, structure, and scale.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton>Request Invite</PrimaryButton>
            <div className="lg:hidden">
              <SecondaryButton>Learn More</SecondaryButton>
            </div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <ImageFrame
            src="/hero-dashboard.png"
            alt="Buvei hero dashboard"
            title="Buvei Enterprise"
            tag="Live"
            metrics={[
              ["Cards", "126"],
              ["Team", "18"],
              ["Volume", "$82K"],
              ["Approval", "96.4%"],
            ]}
          />
        </div>
      </section>

      <section
        id="card-management"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionIntro
          eyebrow="Card Management"
          title="Advanced card management"
          desc="Cut routine work with faster issuing, shared balances, and cleaner controls built for teams running at scale."
          center
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5 lg:mt-14">
          {cardManagement.map((item, i) => (
            <FeatureCard key={item.title} title={item.title} desc={item.desc} i={i} />
          ))}
        </div>
      </section>

      <section
        id="team-management"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionIntro
          eyebrow="Team Management"
          title="Full-spectrum team control"
          desc="Build role-based structures that stay easy to manage even as your workflows become more complex."
          center
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-[1.08fr_.92fr]">
          <ImageFrame
            src="/hero-dashboard.png"
            alt="Buvei team control preview"
            title="Team control center"
            tag="Permissions"
            metrics={[
              ["Users", "18"],
              ["Roles", "6"],
              ["Policies", "12"],
              ["Views", "Live"],
            ]}
          />

          <div className="space-y-5">
            {teamManagement.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={riseIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-white/[0.055]"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(120,150,255,.34),rgba(255,255,255,.08))]" />
                <h3 className="text-[28px] font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
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
          className="mx-auto mt-12 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl sm:mt-16 sm:p-8"
        >
          <p className="text-lg leading-8 text-white/78 sm:text-xl">
            “Buvei works like infrastructure, not just a card tool. The interface is smooth,
            team control is clear, and operations stay fast as volume grows.”
          </p>
          <div className="mt-5 text-sm text-white/45">
            Operations Lead, performance marketing team
          </div>
        </motion.div>
      </section>

      <section
        id="analytics"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionIntro
          eyebrow="Balances & Analytics"
          title="Crystal-clear balance visibility"
          desc="Monitor funds in real time, review activity, analyze spend, and export only the data your team actually needs."
          center
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-[.94fr_1.06fr]">
          <div className="order-2 space-y-5 lg:order-1">
            {analyticsItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={riseIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[26px] border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-white/[0.055]"
              >
                <div className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </div>
                <div className="mt-2 leading-7 text-white/58">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <ImageFrame
              src="/hero-dashboard.png"
              alt="Buvei analytics preview"
              title="Analytics workspace"
              tag="Realtime"
              metrics={[
                ["Balance", "$26.4K"],
                ["Cards", "126"],
                ["Teams", "18"],
                ["Exports", "API"],
              ]}
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionIntro
          eyebrow="Why Buvei"
          title="Beyond standard expectations"
          desc="A solution designed to become part of your infrastructure rather than another isolated dashboard."
          center
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {valuePoints.map((item, i) => (
            <FeatureCard key={item.title} title={item.title} desc={item.desc} i={i} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-24 lg:pt-8"
      >
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(89,117,255,.20),transparent_35%),linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03))] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[36px] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[60px]">
              This is where payment operations finally match your level
            </h2>
            <p className="mt-5 text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              Bring together issuing, team structure, balance visibility, and operational
              speed in one professional payment layer.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton>Request Invite</PrimaryButton>
              <SecondaryButton>Contact Sales</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/8 px-4 py-8 text-sm text-white/42 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>© Buvei, 2026</div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#" className="transition duration-300 hover:text-white">
            Terms
          </a>
          <a href="#" className="transition duration-300 hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition duration-300 hover:text-white">
            Telegram
          </a>
        </div>
      </footer>
    </div>
  );
}
