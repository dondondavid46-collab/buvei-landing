export default function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at 85% 10%, rgba(37,99,235,0.20), transparent 24%), radial-gradient(circle at 15% 85%, rgba(59,130,246,0.10), transparent 22%), linear-gradient(180deg, #050914 0%, #060b16 100%)",
      color: "#ffffff",
      fontFamily:
        'Inter, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    } as const,
    container: {
      maxWidth: "1240px",
      margin: "0 auto",
      padding: "0 28px",
    } as const,
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "28px 0",
      position: "sticky" as const,
      top: 0,
      zIndex: 20,
      backdropFilter: "blur(10px)",
      background: "rgba(5,9,20,0.72)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    } as const,
    brand: {
      display: "flex",
      alignItems: "center",
    } as const,
    nav: {
      display: "flex",
      gap: "34px",
      alignItems: "center",
      color: "rgba(255,255,255,0.72)",
      fontSize: "15px",
      fontWeight: 500,
    } as const,
    navLink: {
      color: "rgba(255,255,255,0.72)",
      textDecoration: "none",
    } as const,
    btnRow: {
      display: "flex",
      gap: "14px",
      alignItems: "center",
    } as const,
    ghostBtn: {
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.04)",
      color: "#fff",
      padding: "13px 20px",
      borderRadius: "16px",
      fontSize: "15px",
      fontWeight: 600,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
    } as const,
    solidBtn: {
      background: "#ffffff",
      color: "#020817",
      padding: "13px 20px",
      borderRadius: "16px",
      fontSize: "15px",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 30px rgba(255,255,255,0.08)",
    } as const,
    hero: {
      display: "grid",
      gridTemplateColumns: "1.02fr 0.98fr",
      gap: "64px",
      alignItems: "center",
      padding: "70px 0 88px",
    } as const,
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 14px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.04)",
      color: "rgba(255,255,255,0.72)",
      fontSize: "13px",
      marginBottom: "22px",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
    } as const,
    h1: {
      fontSize: "76px",
      lineHeight: 0.98,
      fontWeight: 800,
      letterSpacing: "-0.04em",
      margin: 0,
      maxWidth: "760px",
    } as const,
    lead: {
      fontSize: "22px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.68)",
      marginTop: "24px",
      maxWidth: "700px",
    } as const,
    heroActions: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      marginTop: "30px",
      flexWrap: "wrap" as const,
    },
    socialProof: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "18px",
      marginTop: "44px",
    } as const,
    proofCard: {
      borderRadius: "20px",
      padding: "18px 18px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
    } as const,
    proofValue: {
      fontSize: "30px",
      fontWeight: 800,
      letterSpacing: "-0.03em",
    } as const,
    proofLabel: {
      marginTop: "8px",
      fontSize: "14px",
      color: "rgba(255,255,255,0.5)",
    } as const,
    heroCardWrap: {
      position: "relative" as const,
    },
    heroGlow: {
      position: "absolute" as const,
      inset: "-40px -20px auto auto",
      width: "320px",
      height: "320px",
      background: "radial-gradient(circle, rgba(59,130,246,0.22), transparent 65%)",
      filter: "blur(20px)",
      pointerEvents: "none" as const,
    },
    panel: {
      position: "relative" as const,
      borderRadius: "34px",
      border: "1px solid rgba(255,255,255,0.10)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
      padding: "26px",
      boxShadow: "0 30px 80px rgba(0,0,0,0.42)",
      backdropFilter: "blur(16px)",
      overflow: "hidden" as const,
    } as const,
    panelTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    } as const,
    tiny: {
      fontSize: "12px",
      color: "rgba(255,255,255,0.48)",
    } as const,
    active: {
      padding: "7px 13px",
      borderRadius: "999px",
      background: "rgba(16,185,129,0.12)",
      border: "1px solid rgba(16,185,129,0.22)",
      color: "#86efac",
      fontSize: "12px",
      fontWeight: 600,
    } as const,
    metrics: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "14px",
      marginTop: "22px",
    } as const,
    metricCard: {
      borderRadius: "22px",
      background: "rgba(6,14,28,0.72)",
      padding: "18px",
      border: "1px solid rgba(255,255,255,0.04)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
    } as const,
    metricValue: {
      marginTop: "12px",
      fontSize: "30px",
      fontWeight: 800,
      letterSpacing: "-0.03em",
    } as const,
    txCard: {
      ...({
        borderRadius: "26px",
        background: "rgba(6,14,28,0.72)",
        padding: "18px",
        border: "1px solid rgba(255,255,255,0.04)",
        marginTop: "18px",
      } as const),
    },
    txRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "16px",
      padding: "16px 16px",
      background: "rgba(255,255,255,0.03)",
      marginTop: "12px",
    } as const,
    section: {
      padding: "96px 0",
    } as const,
    logoStrip: {
      padding: "26px 0 10px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.01)",
    } as const,
    logos: {
      display: "grid",
      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      gap: "18px",
      alignItems: "center",
    } as const,
    logoItem: {
      height: "68px",
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,0.05)",
      background: "rgba(255,255,255,0.03)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255,255,255,0.50)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.12em",
    } as const,
    sectionTitle: {
      fontSize: "48px",
      fontWeight: 800,
      letterSpacing: "-0.04em",
      margin: 0,
    } as const,
    sectionDesc: {
      marginTop: "18px",
      fontSize: "18px",
      color: "rgba(255,255,255,0.65)",
      maxWidth: "780px",
      lineHeight: 1.75,
    } as const,
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px",
      marginTop: "42px",
    } as const,
    card: {
      borderRadius: "30px",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
      padding: "28px",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
    } as const,
    cardTitle: {
      fontSize: "26px",
      fontWeight: 750,
      margin: 0,
      letterSpacing: "-0.03em",
    } as const,
    cardDesc: {
      marginTop: "14px",
      fontSize: "15px",
      lineHeight: 1.75,
      color: "rgba(255,255,255,0.65)",
    } as const,
    item: {
      marginTop: "12px",
      borderRadius: "16px",
      padding: "14px 16px",
      background: "rgba(7,14,27,0.78)",
      border: "1px solid rgba(255,255,255,0.05)",
      fontSize: "14px",
      color: "rgba(255,255,255,0.82)",
    } as const,
    split: {
      display: "grid",
      gridTemplateColumns: "0.94fr 1.06fr",
      gap: "54px",
      alignItems: "start",
    } as const,
    useGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "16px",
    } as const,
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px",
      marginTop: "38px",
    } as const,
    featureCard: {
      borderRadius: "24px",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "#0b1220",
      padding: "24px",
    } as const,
    cta: {
      borderRadius: "34px",
      border: "1px solid rgba(255,255,255,0.10)",
      background:
        "linear-gradient(135deg, rgba(59,130,246,0.10), rgba(37,99,235,0.04), rgba(255,255,255,0.03))",
      padding: "64px 34px",
      textAlign: "center" as const,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
    },
    footer: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "28px 0 42px",
      color: "rgba(255,255,255,0.5)",
      fontSize: "14px",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap" as const,
    },
  };

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

  const partnerLogos = ["META", "OPENAI", "SHOPIFY", "TIKTOK", "STRIPE"];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.brand}>
            <img
              src="/buvei-logo.svg"
              alt="Buvei logo"
              style={{
                width: 140,
                height: "auto",
                display: "block",
              }}
            />
          </div>

          <nav style={styles.nav}>
            <a href="#solutions" style={styles.navLink}>Solutions</a>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#analytics" style={styles.navLink}>Analytics</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>

          <div style={styles.btnRow}>
            <a href="https://buvei.io" style={styles.ghostBtn}>Learn More</a>
            <a href="https://app.buvei.com" style={styles.solidBtn}>Request Invite</a>
          </div>
        </header>

        <section style={styles.hero}>
          <div>
            <div style={styles.badge}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#60a5fa",
                  display: "inline-block",
                }}
              />
              Private infrastructure for serious teams
            </div>

            <h1 style={styles.h1}>Payment solution built for teams that operate at scale</h1>

            <p style={styles.lead}>
              Buvei helps businesses manage cards, team structures, balances,
              and digital payment operations through a cleaner and more
              professional workflow.
            </p>

            <div style={styles.heroActions}>
              <a href="https://app.buvei.com" style={styles.solidBtn}>Request Invite</a>
              <a href="#solutions" style={styles.ghostBtn}>View Platform</a>
            </div>

            <div style={styles.socialProof}>
              <div style={styles.proofCard}>
                <div style={styles.proofValue}>Fast</div>
                <div style={styles.proofLabel}>Issuing flow</div>
              </div>
              <div style={styles.proofCard}>
                <div style={styles.proofValue}>Clear</div>
                <div style={styles.proofLabel}>Balance visibility</div>
              </div>
              <div style={styles.proofCard}>
                <div style={styles.proofValue}>Flexible</div>
                <div style={styles.proofLabel}>Team control</div>
              </div>
              <div style={styles.proofCard}>
                <div style={styles.proofValue}>Global</div>
                <div style={styles.proofLabel}>Digital payments</div>
              </div>
            </div>
          </div>

          <div style={styles.heroCardWrap}>
            <div style={styles.heroGlow} />
            <div style={styles.panel}>
              <div style={styles.panelTop}>
                <div>
                  <div style={styles.tiny}>Workspace</div>
                  <div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em" }}>
                    Buvei Business
                  </div>
                </div>
                <div style={styles.active}>Active</div>
              </div>

              <div style={styles.metrics}>
                <div style={styles.metricCard}>
                  <div style={styles.tiny}>Cards</div>
                  <div style={styles.metricValue}>126</div>
                </div>
                <div style={styles.metricCard}>
                  <div style={styles.tiny}>Team users</div>
                  <div style={styles.metricValue}>18</div>
                </div>
                <div style={styles.metricCard}>
                  <div style={styles.tiny}>Spend</div>
                  <div style={styles.metricValue}>$82K</div>
                </div>
              </div>

              <div style={styles.txCard}>
                <div style={{ ...styles.panelTop, marginBottom: 10 }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", fontWeight: 600 }}>
                    Recent transactions
                  </span>
                  <span style={styles.tiny}>Live view</span>
                </div>

                {[
                  ["Google Ads", "$1,240.00", "Settled"],
                  ["Meta Ads", "$890.00", "Pending"],
                  ["OpenAI", "$120.00", "Settled"],
                ].map(([name, amount, status]) => (
                  <div key={name} style={styles.txRow}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700 }}>{name}</div>
                      <div style={styles.tiny}>Operational payment</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{amount}</div>
                      <div style={styles.tiny}>{status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section style={styles.logoStrip}>
        <div style={styles.container}>
          <div style={styles.logos}>
            {partnerLogos.map((logo) => (
              <div key={logo} style={styles.logoItem}>{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <div style={styles.container}>
        <section id="solutions" style={styles.section}>
          <h2 style={styles.sectionTitle}>A platform built around operational clarity</h2>
          <p style={styles.sectionDesc}>
            Use a more structured payment layer for cards, users, balances, and
            day-to-day business workflows.
          </p>

          <div style={styles.grid3}>
            {coreCards.map((card) => (
              <div key={card.title} style={styles.card}>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDesc}>{card.desc}</p>
                <div>
                  {card.items.map((item) => (
                    <div key={item} style={styles.item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Built for digital payment infrastructure</h2>
          <p style={styles.sectionDesc}>
            Combine card issuing, spend structure, team workflows, and payment
            visibility in a cleaner operating environment.
          </p>

          <div style={styles.featureGrid}>
            {features.map((feature) => (
              <div key={feature.title} style={styles.featureCard}>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 750, letterSpacing: "-0.03em" }}>
                  {feature.title}
                </h3>
                <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.65)" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="analytics" style={styles.section}>
          <div style={styles.split}>
            <div>
              <h2 style={styles.sectionTitle}>Balance and transaction visibility</h2>
              <p style={styles.sectionDesc}>
                Monitor balances, follow recent activity, and maintain a more
                transparent view of business spending.
              </p>

              <div style={{ ...styles.card, marginTop: 28 }}>
                <div style={styles.tiny}>Available balance</div>
                <div style={{ marginTop: 12, fontSize: 48, fontWeight: 800, letterSpacing: "-0.04em" }}>
                  $150,000.00
                </div>

                <div
                  style={{
                    marginTop: 24,
                    height: 12,
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "72%",
                      height: "100%",
                      borderRadius: 999,
                      background: "linear-gradient(90deg, #60a5fa, #2563eb, #1d4ed8)",
                    }}
                  />
                </div>

                <div style={{ ...styles.tiny, marginTop: 10 }}>Operational liquidity view</div>
              </div>
            </div>

            <div style={styles.useGrid}>
              {useCases.map((item) => (
                <div key={item} style={styles.item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ paddingBottom: 96 }}>
          <div style={styles.cta}>
            <h2 style={{ margin: 0, fontSize: 48, fontWeight: 800, letterSpacing: "-0.04em" }}>
              Build a cleaner payment workflow with Buvei
            </h2>
            <p
              style={{
                margin: "18px auto 0",
                maxWidth: 760,
                color: "rgba(255,255,255,0.68)",
                fontSize: 18,
                lineHeight: 1.75,
              }}
            >
              For teams managing virtual cards, subscriptions, advertising spend,
              and digital business payments.
            </p>

            <div style={{ ...styles.btnRow, justifyContent: "center", marginTop: 30 }}>
              <a href="https://app.buvei.com" style={styles.solidBtn}>Request Invite</a>
              <a href="https://buvei.io" style={styles.ghostBtn}>Visit Website</a>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <div>© 2026 Buvei. All rights reserved.</div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <a href="https://buvei.io" style={styles.navLink}>Website</a>
            <a href="https://app.buvei.com" style={styles.navLink}>App</a>
          </div>
        </footer>
      </div>
    </main>
  );
}这个还需要怎么优化更高级一点，还有我说的 图片 动效呢，完整的代码再给我一下 让我替换
