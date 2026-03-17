export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <header className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <span className="text-sm font-bold tracking-wider">B</span>
              </div>
              <span className="text-xl font-semibold tracking-wide">Buvei</span>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#advantages" className="hover:text-white">Advantages</a>
              <a href="#use-cases" className="hover:text-white">Use Cases</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                Global virtual card infrastructure
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Payment infrastructure built for modern teams
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Buvei helps teams manage virtual cards, ad spend, subscriptions,
                and operational payments with greater control, faster funding,
                and a cleaner workflow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://app.buvei.com"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get Started
                </a>
                <a
                  href="https://buvei.io"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <div className="text-2xl font-semibold">Global</div>
                  <div className="mt-1 text-sm text-white/60">Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Fast</div>
                  <div className="mt-1 text-sm text-white/60">Funding Flow</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Flexible</div>
                  <div className="mt-1 text-sm text-white/60">Card Controls</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Team</div>
                  <div className="mt-1 text-sm text-white/60">Management</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60">Workspace</div>
                    <div className="mt-1 text-lg font-semibold">Buvei Business</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Active
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-[#111827] p-4 ring-1 ring-white/5">
                    <div className="text-xs text-white/50">Cards</div>
                    <div className="mt-2 text-xl font-semibold">128</div>
                  </div>
                  <div className="rounded-2xl bg-[#111827] p-4 ring-1 ring-white/5">
                    <div className="text-xs text-white/50">Spend</div>
                    <div className="mt-2 text-xl font-semibold">$84.5K</div>
                  </div>
                  <div className="rounded-2xl bg-[#111827] p-4 ring-1 ring-white/5">
                    <div className="text-xs text-white/50">Teams</div>
                    <div className="mt-2 text-xl font-semibold">14</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#111827] p-4 ring-1 ring-white/5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-white/70">Recent activity</span>
                    <span className="text-xs text-white/40">Live</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-3">
                      <div>
                        <div className="text-sm font-medium">Google Ads</div>
                        <div className="text-xs text-white/45">Campaign payment</div>
                      </div>
                      <div className="text-sm text-white/85">$1,250.00</div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-3">
                      <div>
                        <div className="text-sm font-medium">OpenAI</div>
                        <div className="text-xs text-white/45">AI subscription</div>
                      </div>
                      <div className="text-sm text-white/85">$120.00</div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-3">
                      <div>
                        <div className="text-sm font-medium">Meta Ads</div>
                        <div className="text-xs text-white/45">Ad account spend</div>
                      </div>
                      <div className="text-sm text-white/85">$860.00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/15 to-purple-500/15 p-4">
                  <div className="text-sm font-medium">Built for operational control</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">
                    Create cards, organize teams, monitor usage, and manage
                    payment workflows from one place.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Core features</h2>
          <p className="mt-4 text-white/65">
            Built for businesses that need flexible payment infrastructure,
            practical controls, and a cleaner way to manage spend.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Virtual cards", "Issue cards for teams, subscriptions, and campaign usage."],
            ["Shared balance", "Reduce manual top-ups and streamline payment operations."],
            ["Team controls", "Organize roles, limits, and access across workflows."],
            ["Fast funding", "Move from funding to card usage with less friction."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="advantages" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              ["More payment control", "Manage spend visibility, team access, and payment structure in one workflow."],
              ["Built for scale", "Useful for media buying teams, SaaS operations, and businesses with recurring spend."],
              ["Cleaner operations", "Simplify card usage, reduce manual work, and centralize reporting logic."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-[#0f172a] p-7">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Common use cases</h2>
            <p className="mt-4 text-white/65">
              A simple structure for teams handling digital payments across
              products, ads, and operational subscriptions.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Advertising platform payments",
              "AI and SaaS subscriptions",
              "Team-based virtual card issuance",
              "Operational spend management",
              "Cross-border digital payment workflows",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to simplify your payment workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Start with a cleaner structure for virtual cards, team spending,
            and digital payment operations.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="https://app.buvei.com"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Open App
            </a>
            <a
              href="https://buvei.io"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
