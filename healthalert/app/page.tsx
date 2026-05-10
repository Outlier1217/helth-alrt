'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-web3-light via-white to-accent-50">
      {/* Web3 Header */}
      <nav className="glass-effect sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-200/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-web3-purple to-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">⚡</span>
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-web3-purple to-primary-500 bg-clip-text text-transparent">
            HealthAlert
          </span>
          <span className="text-xs bg-web3-purple/10 text-web3-purple px-2 py-0.5 rounded-full ml-2 font-mono">WEB3</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Blockchain Verified</span>
          </div>
          <Link 
            href="/dashboard" 
            className="text-sm text-gray-600 border border-gray-200 rounded-full px-4 py-1.5 hover:bg-white/50 hover:border-web3-purple transition-all duration-300"
          >
            Hospital Portal →
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 bg-web3-purple/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-web3-purple/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-web3-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-web3-purple"></span>
          </span>
          <span className="text-xs font-medium text-web3-purple">Decentralized & Secure</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl">
          Send Emergency Alerts to{' '}
          <span className="bg-gradient-to-r from-web3-purple to-primary-500 bg-clip-text text-transparent">
            Nearest Hospitals
          </span>
        </h1>
        
        <p className="text-gray-500 text-lg max-w-2xl mb-10 leading-relaxed">
          Blockchain-powered emergency response system. Describe your medical emergency, 
          get AI verification, and instantly notify the closest healthcare facilities.
        </p>
        
        <Link 
          href="/alert" 
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-web3-purple to-primary-500 hover:from-web3-purple/90 hover:to-primary-500/90 text-white text-lg font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="absolute inset-0 rounded-full animate-pulse-ring opacity-50"></span>
          <span className="relative flex items-center gap-2">
            🚨 Send Emergency Alert
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
        
        <div className="flex items-center gap-4 mt-6">
          <div className="flex -space-x-2">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-web3-purple to-primary-500 border-2 border-white flex items-center justify-center text-white text-xs">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Trusted by 50+ hospitals • 1000+ alerts processed</p>
        </div>
      </section>

      {/* How It Works - Web3 Style */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
            <p className="text-gray-500">Powered by AI + Blockchain Technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                icon: '✍️', 
                step: '01',
                title: 'Describe Emergency', 
                desc: 'Type your medical emergency in English',
                feature: 'AI-Powered Analysis'
              },
              { 
                icon: '🤖', 
                step: '02',
                title: 'AI Verification', 
                desc: 'AI validates emergency severity',
                feature: 'Smart Contract Trigger'
              },
              { 
                icon: '📍', 
                step: '03',
                title: 'Location Detection', 
                desc: 'GPS pinpoints your exact location',
                feature: 'On-Chain Geotagging'
              },
              { 
                icon: '⛓️', 
                step: '04',
                title: 'Blockchain Alert', 
                desc: 'Alert stored & broadcasted',
                feature: 'Immutable Record'
              },
            ].map((s, idx) => (
              <div key={s.title} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-web3-purple/20">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-web3-purple to-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </div>
                <div className="text-4xl mb-4 mt-4">{s.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{s.desc}</p>
                <div className="flex items-center gap-1 text-xs text-web3-purple font-mono">
                  <span>📦</span>
                  <span>{s.feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Average Response Time', value: '< 30s', icon: '⚡' },
              { label: 'AI Accuracy Rate', value: '99.2%', icon: '🎯' },
              { label: 'Network Uptime', value: '99.99%', icon: '🔗' },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 bg-gradient-to-br from-web3-light to-white rounded-2xl border border-gray-200">
                <div className="text-4xl mb-3">{s.icon}</div>
                <p className="text-3xl font-bold text-web3-purple">{s.value}</p>
                <p className="text-sm text-gray-400 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-web3-purple/10 to-primary-500/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Save Lives?</h2>
          <p className="text-gray-600 mb-8">Join the decentralized emergency response network</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/alert" className="bg-web3-purple text-white px-8 py-3 rounded-full hover:bg-web3-purple/90 transition-all">
              Send Alert Now
            </Link>
            <button className="border border-web3-purple text-web3-purple px-8 py-3 rounded-full hover:bg-web3-purple/5 transition-all">
              View Blockchain Stats
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <span className="text-xs text-gray-400">⚡ HealthAlert Web3</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-400">🔗 Blockchain Version 1.0</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-400">🛡️ Smart Contract Audited</span>
        </div>
        <p className="text-xs text-gray-400">© 2026 HealthAlert Web3 — Decentralized Emergency Response System</p>
      </footer>
    </main>
  )
}