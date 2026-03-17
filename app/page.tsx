export default function Home() {
  const coreCards = [
    {
      title: "Advanced card management",
      desc: "Issue, organize, and manage virtual cards with a workflow built for speed and scale.",
      items: ["Instant issuing", "Shared balance", "Flexible controls"],
    },
    {
      title: "Team-based payment operations",
      desc: "Create a cleaner structure for teams, roles, budgets, and card ownership.",
      items: ["Role-based access", "Sub-accounts", "User limits"],
    },
    {
      title: "Clear balance visibility",
      desc: "Track available funds, recent activity, and spending patterns in one place.",
      items: ["Built-in analytics", "Transaction history", "Export-ready data"],
    },
  ];

  const features = [
    {
      title: "Virtual cards for modern workflows",
      desc: "Use cards for ad platforms, SaaS subscriptions, AI tools, and business operations.",
    },
    {
      title: "Fast funding flow",
      desc: "Move from balance funding to active card usage with less friction and more control.",
    },
    {
      title: "Operational clarity",
      desc: "Reduce manual work with a cleaner structure for teams, budgets, and card activity.",
    },
    {
      title: "Global business readiness",
      desc: "Built for companies handling digital payments across products, services, and regions.",
    },
    {
      title: "Scalable team setup",
      desc: "Support multiple users, functions, and spending responsibilities without losing visibility.",
    },
    {
      title: "Practical payment infrastructure",
      desc: "Treat payments as a workflow layer of your business, not just a single card action.",
    },
  ];

  const useCases = [
    "Advertising platform payments",
    "AI and SaaS subscriptions",
    "Team spend management",
    "Digital service procurement",
    "Cross-border business payments",
    "Operational virtual card workflows",
  ];

  return (
    <main className="min-h-screen bg-[#0a0f18] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <span className="text-sm font-bold tracking-[0.2em]">B</span>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-wide">BUVEI</div>
                <div className="text-xs text-white/45">Payment Infrastructure</div>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#solutions" className="hover:text-white">Solutions</a>
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#analytics" className="hover:text-white">Analytics</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://buvei.io"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Learn More
              </a>
              <a
                href="https://app.buvei.com"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
              >
                Request Invite
              </a>
            </div>
          </header>

          <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/65">
                Private infrastructure for serious teams
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Payment solution built for teams that operate at scale
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                Buvei helps businesses manage cards, team structures, balances,
                and digital payment operations through a cleaner and more
                professional workflow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://app.buvei.com"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Request Invite
                </a>
                <a
                  href="#solutions"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Platform
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
                <div>
                  <div className="text-2xl font-semibold">Fast</div>
                  <div className="mt-1 text-sm text-white/45">Issuing flow</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Clear</div>
                  <div className="mt-1 text-sm text-white/45">Balance visibility</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Flexible</div>
                  <div className="mt-1 text-sm text-white/45">Team control</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Global</div>
                  <div className="mt-1 text-sm text-white/45">Digital payments</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/45">Workspace</div>
                    <div className="mt-1 text-lg font-semibold">Buvei Business</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Active
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-[#0f1726] p-4 ring-1 ring-white/5">
                    <div className="text-xs text-white/45">Cards</div>
                    <div className="mt-2 text-2xl font-semibold">126</div>
                  </div>
                  <div className="rounded-2xl bg-[#0f1726] p-4 ring-1 ring-white/5">
                    <div className="text-xs text-white/45">Team users</div>
                    <div className="mt-2 text-2xl font-semibold">18</div>
                  </div>
                  <div className="rounded-2xl bg-[#0f1726] p-4 ring-1 ring-white/5">
                    <div className="text-xs text-white/45">Spend</div>
                    <div className="mt-2 text-2xl font-semibold">$82K</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#0f1726] p-4 ring-1 ring-white/5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-white/70">Recent transactions</span>
                    <span className="text-xs text-white/40">Live view</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["Google Ads", "$1,240.00", "Settled"],
                      ["Meta Ads", "$890.00", "Pending"],
                      ["OpenAI", "$120.00", "Settled"],
                    ].map(([name, amount, status]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-3"
                      >
                        <div>
                          <div className="text-sm font-medium">{name}</div>
                          <div className="text-xs text-white/40">Operational payment</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">{amount}</div>
                          <div className="text-xs text-white/45">{status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/15 to-purple-500/15 p-4">
                  <div className="text-sm font-medium">Structured for payment operations</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">
                    Manage issuing, teams, balances, and spend through one
                    coherent layer of infrastructure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">A platform built around operational clarity</h2>
          <p className="mt-4 text-white/65">
            Use a more structured payment layer for cards, users, balances, and
            day-to-day business workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {coreCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7"
            >
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/65">{card.desc}</p>
              <div className="mt-6 space-y-3">
                {card.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/8 bg-[#0f1726] px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-white/10 bg-[#0d1421] p-6"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="analytics" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Balance and transaction visibility</h2>
            <p className="mt-4 text-white/65">
              Monitor balances, follow recent activity, and maintain a more
              transparent view of business spending.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/45">Available balance</div>
              <div className="mt-2 text-4xl font-bold">$150,000.00</div>
              <div className="mt-6 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
              </div>
              <div className="mt-3 text-xs text-white/45">Operational liquidity view</div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0f1726] px-5 py-4 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8" id="contact">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Build a cleaner payment workflow with Buvei
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            For teams managing virtual cards, subscriptions, advertising spend,
            and digital business payments.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.buvei.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Request Invite
            </a>
            <a
              href="https://buvei.io"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
