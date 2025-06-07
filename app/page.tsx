export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-3 sm:mb-4 tracking-tight text-gray-900">Mark Wen</h1>
        <p className="italic text-gray-600 mb-2 sm:mb-3 text-lg sm:text-2xl">System Builder · Founder · Cross-Border Bridge</p>
        <p className="text-gray-500 mb-6 sm:mb-10 text-base sm:text-xl">You don't have to be famous to build for history. You just have to be faithful.</p>

        <div className="space-y-8 sm:space-y-14 text-base sm:text-2xl text-gray-900 leading-relaxed">
          <section>
            <p className="mb-4 sm:mb-6">I design systems across <strong>technology, storytelling, education, and philosophy</strong> — with one goal: <strong>to help people build for meaning, not just scale</strong>.</p>
            <p className="mb-4 sm:mb-6">I dropped out of college in China in my early 20s and founded a mobile-first vertical e-commerce platform that reached <strong>20 million users</strong>. I raised <strong>$20M</strong> from <strong>Sequoia China</strong> and <strong>Tencent</strong>, building my first startup in Beijing.</p>
            <p className="mb-4 sm:mb-6">Later, I co-founded a <strong>comic reading platform</strong> that became a <strong>unicorn</strong>, with <strong>40 million monthly active users</strong>, reshaping how young people in China consume digital content.</p>
            <p className="mb-4 sm:mb-6">I've built <strong>a bridge between China and the U.S.</strong> — connecting <strong>tech founders, business leaders, and rising young talent</strong> across <strong>Stanford, Harvard</strong>, and beyond. I focus on long-term collaboration, cultural depth, and system design across borders.</p>
            <p className="mb-4 sm:mb-6">In 2023, I moved to the Bay Area. I overcame language and cultural barriers to join the AI wave, and began building:</p>
            <ul className="list-disc list-inside pl-5 sm:pl-6 space-y-1 sm:space-y-2">
              <li><span className="text-blue-700 font-medium">Little Hero</span> — an AI-native personalized storybook platform for early childhood imagination</li>
              <li><a href="https://stanford-ai-club.vercel.app" className="text-blue-700 underline hover:text-blue-900">Stanford AI Builder Club</a> — a launchpad for AI-native student founders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 mt-8 sm:mt-12 text-gray-900">What I Stand For</h2>
            <ul className="space-y-2 sm:space-y-3 text-base sm:text-2xl text-gray-900 list-disc list-inside pl-5 sm:pl-6">
              <li><strong>Lifelong ambition</strong>: Designing the next 50 years to contribute to civilization — through startups, policy, think tanks, philanthropy, and global collaboration.</li>
              <li><strong>Legacy mindset</strong>: Building a legendary family with a foundation focused on education and fighting inequality.</li>
              <li><strong>Community builder</strong>: Based in Menlo Park, growing ecosystems near Sand Hill Road and Stanford.</li>
            </ul>
          </section>

          <section id="projects">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 mt-8 sm:mt-12 text-gray-900">Projects</h2>
            <ul className="space-y-1 sm:space-y-2 text-base sm:text-2xl text-gray-900 list-disc list-inside pl-5 sm:pl-6">
              <li><span className="text-blue-700 font-medium">Little Hero</span> — personalized storybooks powered by generative AI</li>
              <li><a href="https://stanford-ai-club.vercel.app" className="text-blue-700 underline hover:text-blue-900">Stanford AI Builder Club</a> — accelerating the next generation of AI-native builders</li>
            </ul>
          </section>

          <section id="topics">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 mt-8 sm:mt-12 text-gray-900">Topics I Think About</h2>
            <ul className="list-disc list-inside pl-5 sm:pl-6 text-base sm:text-2xl text-gray-900 space-y-1 sm:space-y-2">
              <li>Raising children for <strong>meaning</strong>, not just success</li>
              <li>Designing institutions that <strong>heal</strong>, not extract</li>
              <li>How <strong>AI</strong> reshapes identity, storytelling, and power</li>
              <li><strong>Diaspora builders</strong> as bridges, not orphans</li>
              <li>The next chapter of human civilization — from <strong>scarcity to generative grace</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 mt-8 sm:mt-12 text-gray-900">Who I'm Looking to Meet</h2>
            <ul className="list-disc list-inside pl-5 sm:pl-6 text-base sm:text-2xl text-gray-900 space-y-1 sm:space-y-2">
              <li><strong>Builders</strong> with global ambition</li>
              <li><strong>Founders, educators, and creators</strong> shaping the future of <strong>AI, learning, and storytelling</strong></li>
              <li>Collaborators in <strong>fundraising, product, design, team-building</strong>, and <strong>personal growth</strong></li>
              <li><strong>Thinkers who build — and builders who think</strong></li>
            </ul>
          </section>
        </div>

        <footer className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t text-center text-gray-700 text-lg sm:text-2xl">
          <p className="mb-2">Let's connect — I'm often on <strong>Stanford campus</strong>.</p>
          <p className="text-blue-700 font-medium">
            📬 <a href="mailto:wenchenghui93@gmail.com" className="underline hover:text-blue-900">wenchenghui93@gmail.com</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
