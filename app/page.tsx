export default function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(168,85,247,0.14), transparent 24%), #0a0f18",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
    } as const,
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    } as const,
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "28px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    } as const,
    brand: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    } as const,
    brandIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(255,255,255,0.12)",
      fontWeight: 700,
      letterSpacing: "0.2em",
    } as const,
    nav: {
      display: "flex",
      gap: "28px",
      color: "rgba(255,255,255,0.72)",
      fontSize: "14px",
    } as const,
    navLink: {
      color: "rgba(255,255,255,0.72)",
      textDecoration: "none",
    } as const,
    btnRow: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
    } as const,
    ghostBtn: {
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.05)",
      color: "#fff",
      padding: "11px 16px",
      borderRadius: "14px",
      fontSize: "14px",
      fontWeight: 600,
      textDecoration: "none",
    } as const,
    solidBtn: {
      background: "#fff",
      color: "#000",
      padding: "11px 16px",
      borderRadius: "14px",
      fontSize: "14px",
      fontWeight: 700,
      textDecoration: "none",
    } as const,
    hero: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "56px",
      padding: "72px 0 96px",
      alignItems: "center",
    } as const,
    badge: {
      display: "inline-block",
      padding: "8px 12px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.7)",
      fontSize: "12px",
      marginBottom: "20px",
    } as const,
    h1: {
      fontSize: "58px",
      lineHeight: 1.08,
      fontWeight: 800,
      margin: 0,
      maxWidth: "760px",
    } as const,
    lead: {
      fontSize: "20px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.68)",
      marginTop: "22px",
      maxWidth: "720px",
    } as const,
    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "22px",
      marginTop: "36px",
    } as const,
    statTitle: {
      fontSize: "30px",
      fontWeight: 700,
    } as const,
    statDesc: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.45)",
      marginTop: "6px",
    } as const,
    panel: {
      borderRadius: "28px",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: "24px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.32)",
      backdropFilter: "blur(12px)",
    } as const,
    panelTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    } as const,
    tiny: {
      fontSize: "12px",
      color: "rgba(255,255,255,0.45)",
    } as const,
    active: {
      padding: "6px 12px",
      borderRadius: "999px",
      background: "rgba(16,185,129,0.12)",
      border: "1px solid rgba(16,185,129,0.2)",
      color: "#86efac",
      fontSize: "12px",
    } as const,
    metrics: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "14px",
      marginTop: "22px",
    } as const,
    metricCard: {
      borderRadius: "18px",
      background: "#0f1726",
      padding: "16px",
      border: "1px solid rgba(255,255,255,0.05)",
    } as const,
    metricValue: {
      marginTop: "10px",
      fontSize: "28px",
      fontWeight: 700,
    } as const,
    section: {
      padding: "84px 0",
    } as const,
    sectionTitle: {
      fontSize: "42px",
      fontWeight: 800,
      margin: 0,
    } as const,
    sectionDesc: {
      marginTop: "16px",
      fontSize: "18px",
      color: "rgba(255,255,255,0.65)",
      maxWidth: "760px",
      lineHeight: 1.7,
    } as const,
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px",
      marginTop: "40px",
    } as const,
    card: {
      borderRadius: "28px",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: "28px",
    } as const,
    cardTitle: {
      fontSize: "28px",
      fontWeight: 700,
      margin: 0,
    } as const,
    cardDesc: {
      marginTop: "16px",
      fontSize: "15px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.65)",
    } as const,
    item: {
      marginTop: "12px",
      borderRadius: "14px",
      padding: "14px 16px",
      background: "#0f1726",
      border: "1px solid rgba(255,255,255,0.06)",
      fontSize: "14px",
      color: "rgba(255,255,255,0.82)",
    } as const,
    strip: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.02)",
    } as const,
    gridFeatures: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px",
    } as const,
    featureCard: {
      borderRadius: "24px",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "#0d1421",
      padding: "24px",
    } as const,
    split: {
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "48px",
      alignItems: "start",
    } as const,
    useGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "16px",
    } as const,
    cta: {
      borderRadius: "32px",
      border: "1px solid rgba(255,255,255,0.1)",
      background:
        "linear-gradient(90deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1))",
      padding: "60px 32px",
      textAlign: "center" as const,
    },
    footer: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "28px 0 40px",
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

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.brand}>
            <div
  style={{
    width: 44,
    height: 44,
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 20,
    color: "#fff",
  }}
>
  B
</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.04em" }}>BUVEI</div>
              <div style={styles.tiny}>Payment Infrastructure</div>
            </div>
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
            <div style={styles.badge}>Private infrastructure for serious teams</div>
            <h1 style={styles.h1}>Payment solution built for teams that operate at scale</h1>
            <p style={styles.lead}>
              Buvei helps businesses manage cards, team structures, balances,
              and digital payment operations through a cleaner and more
              professional workflow.
            </p>

            <div style={{ ...styles.btnRow, marginTop: 28 }}>
              <a href="https://app.buvei.com" style={styles.solidBtn}>Request Invite</a>
              <a href="#solutions" style={styles.ghostBtn}>View Platform</a>
            </div>

            <div style={styles.stats}>
              <div>
                <div style={styles.statTitle}>Fast</div>
                <div style={styles.statDesc}>Issuing flow</div>
              </div>
              <div>
                <div style={styles.statTitle}>Clear</div>
                <div style={styles.statDesc}>Balance visibility</div>
              </div>
              <div>
                <div style={styles.statTitle}>Flexible</div>
                <div style={styles.statDesc}>Team control</div>
              </div>
              <div>
                <div style={styles.statTitle}>Global</div>
                <div style={styles.statDesc}>Digital payments</div>
              </div>
            </div>
          </div>

          <div style={styles.panel}>
            <div style={styles.panelTop}>
              <div>
                <div style={styles.tiny}>Workspace</div>
                <div style={{ marginTop: 6, fontSize: 20, fontWeight: 700 }}>Buvei Business</div>
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

            <div style={{ ...styles.metricCard, marginTop: 18 }}>
              <div style={{ ...styles.panelTop, marginBottom: 12 }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.72)" }}>Recent transactions</span>
                <span style={styles.tiny}>Live view</span>
              </div>

              {[
                ["Google Ads", "$1,240.00", "Settled"],
                ["Meta Ads", "$890.00", "Pending"],
                ["OpenAI", "$120.00", "Settled"],
              ].map(([name, amount, status]) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 14,
                    padding: "14px 14px",
                    background: "rgba(255,255,255,0.03)",
                    marginTop: 10,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
                    <div style={styles.tiny}>Operational payment</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 14 }}>{amount}</div>
                    <div style={styles.tiny}>{status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
      </div>

      <section id="features" style={styles.strip}>
        <div style={{ ...styles.container, ...styles.section }}>
          <div style={styles.gridFeatures}>
            {features.map((feature) => (
              <div key={feature.title} style={styles.featureCard}>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>{feature.title}</h3>
                <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={styles.container}>
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
                <div style={{ marginTop: 10, fontSize: 44, fontWeight: 800 }}>$150,000.00</div>
                <div style={{ marginTop: 22, height: 10, borderRadius: 999, background: "rgba(255,255,255,0.08)" }}>
                  <div
                    style={{
                      width: "72%",
                      height: "100%",
                      borderRadius: 999,
                      background: "linear-gradient(90deg, #60a5fa, #a855f7)",
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
            <h2 style={{ margin: 0, fontSize: 42, fontWeight: 800 }}>
              Build a cleaner payment workflow with Buvei
            </h2>
            <p
              style={{
                margin: "18px auto 0",
                maxWidth: 760,
                color: "rgba(255,255,255,0.68)",
                fontSize: 18,
                lineHeight: 1.7,
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
}
