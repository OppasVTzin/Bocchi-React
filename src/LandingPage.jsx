import React from 'react';
import bocchiImage from './assets/anime.jpg'

const navItems = ['Home', 'Sobre', 'Músicas'];

const highlights = [
  {
    title: 'Ansiedade Social',
    description: 'Mesmo tímida, ela transforma o medo em coragem ao se apresentar ao mundo.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 100 8 4 4 0 000-8zm-7 16a7 7 0 0114 0" />
      </svg>
    ),
  },
  {
    title: 'Talento Oculto',
    description: 'Sua habilidade com a guitarra cresce em silêncio, mas encanta quem a escuta.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18l8-8 4 4 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10l4 4" />
      </svg>
    ),
  },
  {
    title: 'Amor pela Guitarra',
    description: 'Cada acorde é uma forma de se expressar quando as palavras faltam.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V8.5a2.5 2.5 0 014.5-1.5l1.5 1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 7L16 4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 20a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fdf6f9] text-slate-800">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-full border border-pink-100/70 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-semibold tracking-[0.2em] text-pink-500">
              BOCCHI
            </a>
            <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-300 hover:text-pink-500"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main id="home" className="flex-1 py-6 sm:py-8 lg:py-10">
          <section className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-[#fff7fb] via-[#fffdfd] to-[#f7faff] p-6 shadow-sm sm:p-8 lg:p-12">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-pink-200/50 blur-3xl" />
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />
              <div className="absolute bottom-0 right-10 h-28 w-28 rounded-full bg-amber-100/60 blur-3xl" />
              <div className="absolute left-1/3 top-1/3 h-24 w-24 rotate-12 rounded-[2rem] border border-pink-200/60" />
            </div>

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-2xl">
                <p className="mb-4 inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm font-medium text-pink-600">
                  Nova era de música e coragem
                </p>
                <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Hitori Gotoh — A Guitarrista Solitária
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                  Entre acordes e silêncios, ela aprende que a música pode ser um caminho para romper a ansiedade social e encontrar sua voz.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#músicas"
                    className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-pink-600"
                  >
                    Ouvir no Spotify
                  </a>
                  <a
                    href="#sobre"
                    className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-6 py-3 text-base font-semibold text-sky-700 transition hover:bg-sky-100"
                  >
                    Conhecer a Kessoku Band
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-pink-200/50 via-transparent to-sky-200/50 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-xl backdrop-blur">
                    <img
                      src={bocchiImage}
                      alt="Ilustração de Hitori Gotoh"
                      className="h-full w-full rounded-[1.5rem] object-cover"
                      style={{ animation: 'float 5s ease-in-out infinite' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="sobre" className="mt-8 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">Sobre ela</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">O coração de uma artista única</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Bocchi é um retrato de vulnerabilidade e força, onde cada detalhe da sua personalidade vira parte da música que ela cria.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-100 bg-[#fcfdff] p-5 shadow-sm">
                  <div className="mb-4 inline-flex rounded-2xl bg-pink-50 p-3 text-pink-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
