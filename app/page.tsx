const features = [
  {
    number: "01",
    title: "Build your professional story",
    description:
      "Bring your experience, education, projects, and skills together in one clear, structured profile.",
  },
  {
    number: "02",
    title: "Create a verifiable fingerprint",
    description:
      "Prepare a cryptographic fingerprint of a resume snapshot so its integrity can be checked independently.",
  },
  {
    number: "03",
    title: "Share with confidence",
    description:
      "Give recruiters a simple way to review your profile and understand what has—and has not—been verified.",
  },
];

const steps = [
  ["Create", "Build and maintain your professional profile."],
  ["Fingerprint", "Generate a cryptographic digest for a specific resume version."],
  ["Verify", "Compare a submitted version with its recorded fingerprint."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <header className="border-b border-white/10">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
        >
          <a href="#home" className="flex items-center gap-3" aria-label="ChainCV home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 font-black text-[#07111f]">
              C
            </span>
            <span className="text-xl font-semibold tracking-tight">ChainCV</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
            <a className="transition hover:text-emerald-300" href="#features">Features</a>
            <a className="transition hover:text-emerald-300" href="#how-it-works">How it works</a>
            <a className="transition hover:text-emerald-300" href="#about">About</a>
          </div>
          <a
            href="#get-started"
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#07111f] transition hover:bg-emerald-300"
          >
            Explore ChainCV
          </a>
        </nav>
      </header>

      <section id="home" className="relative">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="relative">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Professional identity, with integrity
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Your career deserves to be
              <span className="text-emerald-300"> verifiable.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              ChainCV is being built to help professionals present their
              experience and make resume integrity easier to verify with
              cryptographic proofs.
            </p>
            <div id="get-started" className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#how-it-works"
                className="rounded-full bg-emerald-400 px-7 py-3.5 text-center font-semibold text-[#07111f] transition hover:bg-emerald-300"
              >
                Discover how it works <span aria-hidden="true">→</span>
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-slate-200 transition hover:border-emerald-300/60 hover:text-emerald-300"
              >
                Explore the vision
              </a>
            </div>
            <p className="mt-8 text-xs leading-6 text-slate-500">
              Product foundation preview · Blockchain and storage integrations
              are not represented as live until configured and independently verified.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold">Professional profile</p>
                  <p className="mt-1 text-xs text-slate-500">Illustrative preview</p>
                </div>
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                  Demo concept
                </span>
              </div>
              <div className="py-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-teal-700 text-2xl font-bold text-[#07111f]">
                    JD
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Jordan Developer</p>
                    <p className="mt-1 text-sm text-slate-400">Product-minded software engineer</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-black/20 p-4">
                    <p className="text-xs text-slate-500">Experience</p>
                    <p className="mt-2 text-2xl font-semibold">5+ years</p>
                  </div>
                  <div className="rounded-2xl bg-black/20 p-4">
                    <p className="text-xs text-slate-500">Core skills</p>
                    <p className="mt-2 text-2xl font-semibold">12 skills</p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-300/15 text-emerald-300" aria-hidden="true">⌁</span>
                    <div>
                      <p className="text-sm font-semibold text-emerald-200">Integrity proof concept</p>
                      <p className="mt-1 text-xs text-slate-400">A fingerprint can identify changes to a resume snapshot.</p>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-emerald-300" />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-500">Illustrative UI · No on-chain status is claimed</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-teal-500/20 blur-3xl" />
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">The platform</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A clearer way to establish trust in professional experience.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Designed around user-owned information, transparent verification,
              and a practical experience for both candidates and recruiters.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.number} className="rounded-2xl border border-white/10 bg-[#0b192a] p-7">
                <p className="text-sm font-semibold text-emerald-300">{feature.number}</p>
                <h3 className="mt-8 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">The process</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">From profile to proof.</h2>
          <p className="mt-5 leading-7 text-slate-400">
            A verification flow should be understandable, reproducible, and
            explicit about what the underlying evidence proves.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(([title, description], index) => (
            <li key={title} className="relative border-l border-emerald-300/30 pl-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-emerald-300">STEP 0{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="border-t border-white/10 bg-[#0a1727]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-2xl font-semibold">Build trust into your next opportunity.</p>
            <p className="mt-2 text-sm text-slate-400">ChainCV · Blockchain-verified resume platform concept</p>
          </div>
          <a href="https://github.com/Strong-Bee/Chain-CV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-emerald-300 hover:text-emerald-300">
            View source on GitHub <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ChainCV. Built for a more verifiable professional future.
      </footer>
    </main>
  );
}
