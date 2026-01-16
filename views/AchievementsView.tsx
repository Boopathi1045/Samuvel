
import React from 'react';
import { Link } from 'react-router-dom';
import { MILESTONES } from '../constants';

const AchievementsView: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 md:px-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-[1200px] w-full">
        {/* Hero Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl rotate-2 transition-transform group-hover:rotate-0"></div>
              <div className="relative aspect-[4/3] bg-primary/5 rounded-sm overflow-hidden border border-primary/10 shadow-2xl">
                <div 
                  className="w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTXzye79syfOCtIJyrPSQcEBnF5WaMauwTdbdHDHICWsUZI3gokl0QXVZq_cpRcm06aKhj0sJQ6Tr2OCVa7e8NuJN4jmozlsldVhZOZVezQjgEEP-h3-PuRrRikLWPuf11sLLV6u8OpqXBds-SAyr6qlkV_o9HG9CDqJa09t4HsSrLTe8wFBmPOAbaI9xtZgy_8Yyxg5uehz4EOJ5YDVRdPoLFsZXgXpBCreS00gt-zK2jHhYMs6Kno6jsPh1vVoq03VDgE5aa_SeX')" }}
                ></div>
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-brass text-white p-6 rounded-sm shadow-xl hidden lg:block">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary dark:text-accent-brass">
                  <span className="h-[1px] w-8 bg-current opacity-50"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Professional Journey</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight dark:text-white font-display">
                  Growth & Achievement
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-400 font-normal leading-relaxed italic">
                  "Excellence is not an act, but a habit. Each milestone represents a commitment to the highest standards of the legal profession."
                </p>
                <p className="text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                  Proven success across complex legal challenges through dedicated practice and meticulous legal research. Focused on delivering strategic solutions within the District and High Court jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-20 text-center" id="timeline">
          <span className="text-accent-brass font-bold uppercase tracking-[0.4em] text-xs mb-4 block">The Road So Far</span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 font-display">Career Milestones</h2>
          <div className="w-12 h-1 bg-primary mx-auto opacity-30 rounded-full"></div>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative timeline-line space-y-16 mb-32 max-w-4xl mx-auto">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className={`relative flex items-center justify-between w-full group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-[45%]"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-800 text-primary border-4 border-primary/20 rounded-full shadow-2xl transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-lg">{m.icon}</span>
              </div>
              <div className="w-[85%] md:w-[45%] bg-white dark:bg-zinc-900 p-8 rounded-sm border border-primary/5 shadow-sm transition-all group-hover:shadow-2xl group-hover:border-primary/20 relative">
                {/* Year Badge */}
                <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0 md:left-auto md:right-0' : 'left-0'} -translate-y-1/2 px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm`}>
                  {m.year}
                </div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="text-[10px] text-accent-brass font-bold uppercase tracking-[0.2em]">{m.badge}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-display">{m.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Distinctions Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-display">Recognitions & Contributions</h2>
            <div className="w-8 h-1 bg-accent-brass mx-auto opacity-40 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col group bg-white dark:bg-zinc-900 border border-primary/5 hover:border-primary/20 transition-all rounded-sm overflow-hidden shadow-sm hover:shadow-2xl">
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=800')" }}></div>
              </div>
              <div className="p-8">
                <p className="text-accent-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Legal Publication</p>
                <h4 className="text-xl font-bold font-display leading-tight mb-3">Published Insights</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">Legal insights published across respected platforms, reflecting clarity, research, and practical relevance.</p>
              </div>
            </div>
            <div className="flex flex-col group bg-white dark:bg-zinc-900 border border-primary/5 hover:border-primary/20 transition-all rounded-sm overflow-hidden shadow-sm hover:shadow-2xl">
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800')" }}></div>
              </div>
              <div className="p-8">
                <p className="text-accent-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Advocacy Training</p>
                <h4 className="text-xl font-bold font-display leading-tight mb-3">Moot Court Honors</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">Recognized for precision, research, and persuasive argumentation during rigorous academic legal training.</p>
              </div>
            </div>
            <div className="flex flex-col group bg-white dark:bg-zinc-900 border border-primary/5 hover:border-primary/20 transition-all rounded-sm overflow-hidden shadow-sm hover:shadow-2xl">
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800')" }}></div>
              </div>
              <div className="p-8">
                <p className="text-accent-brass text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Bar Recognition</p>
                <h4 className="text-xl font-bold font-display leading-tight mb-3">Professional Conduct</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">Maintaining the highest standards of ethics and integrity within the Theni and High Court Bar circles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bio Card */}

      </div>
    </div>
  );
};

export default AchievementsView;
