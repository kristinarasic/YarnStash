
import React from "react";

const features = [
  {
    icon: "✦",
    title: "All your patterns",
    description:
      "Keep knitting, crochet, embroidery, punch needle and other projects together in one organized space.",
  },
  {
    icon: "♡",
    title: "Track your projects",
    description:
      "Know what's finished, what's in progress, and what you're desperately pretending you'll finish someday.",
  },
  {
    icon: "⌕",
    title: "Find anything fast",
    description:
      "Sort and filter your patterns by craft, status, difficulty, or whatever makes sense for your workflow.",
  },
];

const patterns = [
  {
    name: "Raglan Sweater",
    type: "Knitting",
    status: "In progress",
    progress: "68%",
  },
  {
    name: "Granny Square Blanket",
    type: "Crochet",
    status: "Planning",
    progress: "20%",
  },
  {
    name: "Floral Embroidery",
    type: "Embroidery",
    status: "Completed",
    progress: "100%",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#29232f]">
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="border-b border-[#e9e4eb] bg-[#faf9f7]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#663c83] text-xl text-white shadow-sm">
              🧶
            </div>

            <span className="text-xl font-bold tracking-tight text-[#35263d]">
              Yarn<span className="text-[#5f8f6a]">Stash</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-[#716875] transition hover:text-[#663c83]"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#716875] transition hover:text-[#663c83]"
            >
              How it works
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[#716875] transition hover:text-[#663c83]"
            >
              About
            </a>
          </div>

          {/* Nav CTA */}
          <button className="rounded-xl bg-[#663c83] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#56336e] hover:shadow-md">
            Get started
          </button>
        </nav>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <main>
        <section className="relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d9eadb] opacity-50 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#e7d9ed] opacity-60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
            {/* Hero copy */}
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ded3e4] bg-[#f4edf7] px-4 py-2 text-sm font-medium text-[#663c83]">
                <span className="h-2 w-2 rounded-full bg-[#6c9b75]" />
                Your projects. Your patterns. One place.
              </div>

              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#302438] sm:text-6xl lg:text-7xl">
                Your craft.
                <br />
                <span className="text-[#663c83]">Your stash.</span>
                <br />
                Finally organized.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#716875]">
                Yarn Stash keeps your patterns and creative projects organized
                so you can spend less time searching through folders and more
                time actually making things.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-xl bg-[#663c83] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#663c83]/20 transition hover:-translate-y-0.5 hover:bg-[#56336e] hover:shadow-xl">
                  Start organizing
                  <span className="ml-2">→</span>
                </button>

                <a
                  href="#how-it-works"
                  className="rounded-xl border border-[#dcd5df] bg-white px-6 py-3.5 text-center font-semibold text-[#4c4052] transition hover:border-[#bcaac5] hover:bg-[#fdfbfe]"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-[#847b87]">
                <div className="flex -space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#faf9f7] bg-[#d8eadb]">
                    🧶
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#faf9f7] bg-[#eadcf0]">
                    🪡
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#faf9f7] bg-[#f1dfd5]">
                    ✂️
                  </div>
                </div>

                <span>Made for people who love making things.</span>
              </div>
            </div>

            {/* =========================
                DASHBOARD PREVIEW
            ========================== */}
            <div className="relative">
              {/* Floating decorative card */}
              <div className="absolute -right-3 -top-8 z-20 hidden rounded-2xl border border-[#e7dfe9] bg-white px-4 py-3 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e1f0e3]">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs text-[#8a818d]">Projects finished</p>
                    <p className="font-bold text-[#35263d]">24 this year</p>
                  </div>
                </div>
              </div>

              {/* Main dashboard */}
              <div className="rounded-3xl border border-[#e2dce4] bg-white p-4 shadow-2xl shadow-[#4a3153]/10 sm:p-6">
                {/* Fake browser header */}
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#9a919d]">
                      My stash
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-[#35263d]">
                      My Projects
                    </h2>
                  </div>

                  <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#663c83] text-lg text-white">
                    +
                  </button>
                </div>

                {/* Search */}
                <div className="mb-5 flex items-center gap-3 rounded-xl border border-[#e9e4eb] bg-[#faf9f7] px-4 py-3 text-sm text-[#9a919d]">
                  <span>⌕</span>
                  <span>Search your patterns...</span>
                </div>

                {/* Filters */}
                <div className="mb-5 flex gap-2 overflow-hidden">
                  <span className="whitespace-nowrap rounded-lg bg-[#663c83] px-3 py-1.5 text-xs font-semibold text-white">
                    All
                  </span>

                  <span className="whitespace-nowrap rounded-lg bg-[#f3f0f4] px-3 py-1.5 text-xs font-medium text-[#716875]">
                    Knitting
                  </span>

                  <span className="whitespace-nowrap rounded-lg bg-[#f3f0f4] px-3 py-1.5 text-xs font-medium text-[#716875]">
                    Crochet
                  </span>

                  <span className="whitespace-nowrap rounded-lg bg-[#f3f0f4] px-3 py-1.5 text-xs font-medium text-[#716875]">
                    Completed
                  </span>
                </div>

                {/* Pattern cards */}
                <div className="space-y-3">
                  {patterns.map((pattern, index) => (
                    <div
                      key={pattern.name}
                      className="group rounded-2xl border border-[#ece8ed] p-4 transition hover:border-[#cbbbd2] hover:shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        {/* Image placeholder */}
                        <div
                          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${
                            index === 0
                              ? "bg-[#e8dced]"
                              : index === 1
                              ? "bg-[#dcebdd]"
                              : "bg-[#f0e0d8]"
                          }`}
                        >
                          <span className="text-2xl">
                            {index === 0 ? "🧶" : index === 1 ? "🪡" : "🌸"}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="truncate font-semibold text-[#403445]">
                                {pattern.name}
                              </h3>

                              <p className="mt-1 text-xs text-[#8b818d]">
                                {pattern.type}
                              </p>
                            </div>

                            <span
                              className={`hidden rounded-full px-2.5 py-1 text-[10px] font-semibold sm:block ${
                                pattern.status === "Completed"
                                  ? "bg-[#e3f0e5] text-[#527c5b]"
                                  : pattern.status === "In progress"
                                  ? "bg-[#eee3f2] text-[#69447b]"
                                  : "bg-[#f4ebe5] text-[#936d53]"
                              }`}
                            >
                              {pattern.status}
                            </span>
                          </div>

                          <div className="mt-3 flex items-center gap-3">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#eeeaf0]">
                              <div
                                className="h-full rounded-full bg-[#6c9b75]"
                                style={{ width: pattern.progress }}
                              />
                            </div>

                            <span className="text-[10px] font-medium text-[#8b818d]">
                              {pattern.progress}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dashboard footer */}
                <div className="mt-5 flex items-center justify-between rounded-xl bg-[#faf9f7] px-4 py-3">
                  <span className="text-xs text-[#827985]">
                    18 patterns in your stash
                  </span>

                  <span className="text-xs font-semibold text-[#663c83]">
                    View all →
                  </span>
                </div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-[#e7dfe9] bg-white px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🧵</div>

                  <div>
                    <p className="text-xs text-[#8a818d]">Current project</p>
                    <p className="font-semibold text-[#35263d]">
                      Cozy Raglan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            FEATURES
        ========================== */}
        <section
          id="features"
          className="border-y border-[#e9e4eb] bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6c9b75]">
                Everything in one place
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#35263d] sm:text-4xl">
                Less organizing chaos.
                <br />
                More making things.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#776d79]">
                Your craft deserves better than 47 browser tabs, screenshots
                buried in your camera roll, and a folder called
                <span className="font-medium text-[#594d5d]">
                  {" "}
                  FINAL_PATTERN_2_REAL_FINAL.pdf
                </span>
                .
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-[#e9e4eb] bg-[#faf9f7] p-7 transition hover:-translate-y-1 hover:border-[#d3c3da] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9dff0] text-xl text-[#663c83]">
                    {feature.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#403445]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#776d79]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            HOW IT WORKS
        ========================== */}
        <section
          id="how-it-works"
          className="overflow-hidden bg-[#f2eee9]"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
            {/* Left */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6c9b75]">
                How it works
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#35263d] sm:text-4xl">
                From “where did I save that?”
                <br />
                to “there it is.”
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#776d79]">
                Add your patterns, give them a little information, and let
                Yarn Stash handle the organizing.
              </p>

              <div className="mt-10 space-y-7">
                {[
                  {
                    number: "01",
                    title: "Add your pattern",
                    text: "Choose a craft, add the pattern, upload an image and save it to your stash.",
                  },
                  {
                    number: "02",
                    title: "Keep track",
                    text: "Mark projects as planned, in progress, or completed.",
                  },
                  {
                    number: "03",
                    title: "Find it when you need it",
                    text: "Search, sort and filter your stash instead of digging through your phone.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#663c83] text-xs font-bold text-white">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#403445]">
                        {step.title}
                      </h3>

                      <p className="mt-1 leading-6 text-[#776d79]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="rounded-[2rem] bg-[#663c83] p-8 shadow-2xl shadow-[#4c2c60]/20 sm:p-10">
                <div className="rounded-3xl bg-[#faf9f7] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#968c99]">
                        New project
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-[#35263d]">
                        Add a pattern
                      </h3>
                    </div>

                    <span className="text-3xl">🧶</span>
                  </div>

                  <div className="mt-7 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-[#5f5362]">
                        Pattern name
                      </label>

                      <div className="mt-2 rounded-xl border border-[#e4dfe5] bg-white px-4 py-3 text-sm text-[#a29aa4]">
                        My next project...
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#5f5362]">
                        Craft
                      </label>

                      <div className="mt-2 flex gap-2">
                        <span className="rounded-lg bg-[#663c83] px-3 py-2 text-xs font-semibold text-white">
                          Knitting
                        </span>

                        <span className="rounded-lg bg-[#ece8ed] px-3 py-2 text-xs font-medium text-[#776d79]">
                          Crochet
                        </span>

                        <span className="rounded-lg bg-[#ece8ed] px-3 py-2 text-xs font-medium text-[#776d79]">
                          Other
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#5f5362]">
                        Status
                      </label>

                      <div className="mt-2 rounded-xl border border-[#e4dfe5] bg-white px-4 py-3 text-sm text-[#6c9b75]">
                        In progress
                      </div>
                    </div>

                    <button className="mt-2 w-full rounded-xl bg-[#663c83] py-3 font-semibold text-white">
                      Save pattern
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative green circle */}
              <div className="absolute -bottom-8 -right-8 -z-0 h-28 w-28 rounded-full bg-[#b9d5bd] opacity-70" />
            </div>
          </div>
        </section>

        {/* =========================
            CTA
        ========================== */}
        <section id="about" className="bg-[#35263d]">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6c9b75] text-3xl">
              🧶
            </div>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Your next project is
              <br />
              probably already in your stash.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#cfc5d3]">
              Give all those beautiful ideas a home. Keep your patterns
              organized, your projects moving, and your creative brain just a
              little less chaotic.
            </p>

            <button className="mt-9 rounded-xl bg-white px-7 py-3.5 font-bold text-[#663c83] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f7f3f8]">
              Start your stash →
            </button>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-[#29212f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧶</span>
            <span className="font-semibold text-white">Yarn Stash</span>
          </div>

          <p className="text-sm text-[#958b99]">
            Made for makers, crafters, and people with too many projects.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

