
import React from 'react';
import { MILESTONES } from '../constants';

const AchievementsView: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 md:px-20">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] bg-primary/5 rounded-xl overflow-hidden border border-primary/10">
              <div 
                className="w-full h-full bg-center bg-cover" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTXzye79syfOCtIJyrPSQcEBnF5WaMauwTdbdHDHICWsUZI3gokl0QXVZq_cpRcm06aKhj0sJQ6Tr2OCVa7e8NuJN4jmozlsldVhZOZVezQjgEEP-h3-PuRrRikLWPuf11sLLV6u8OpqXBds-SAyr6qlkV_o9HG9CDqJa09t4HsSrLTe8wFBmPOAbaI9xtZgy_8Yyxg5uehz4EOJ5YDVRdPoLFsZXgXpBCreS00gt-zK2jHhYMs6Kno6jsPh1vVoq03VDgE5aa_SeX')" }}
              ></div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Professional Milestones</span>
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight dark:text-white">
                  Achievements & Recognition
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                  A legacy of legal excellence, professional integrity, and significant contributions to corporate law over 15 years of dedicated practice.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-all hover:shadow-lg">
                  Download CV
                </button>
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border-2 border-primary/20 text-primary dark:text-white text-base font-bold hover:bg-primary/5 transition-all">
                  Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">A Career of Distinction</h2>
          <div className="w-16 h-1 bg-primary mx-auto opacity-30"></div>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative timeline-line space-y-12 mb-24">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className={`relative flex items-center justify-between w-full group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow-xl">
                <span className="material-symbols-outlined text-sm">{m.icon}</span>
              </div>
              <div className="w-full md:w-5/12 bg-white dark:bg-zinc-900 p-6 rounded-lg border border-primary/10 shadow-sm transition-all group-hover:shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">{m.year}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest">{m.badge}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Distinctions Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-8 font-display">Notable Publications & Speaking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 p-5 bg-white dark:bg-zinc-900 rounded-lg border border-primary/5">
              <div className="w-full aspect-square bg-slate-200 rounded overflow-hidden">
                <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCmE9KpUTiSHa6K9D9i-g0sFFIV1_iEhlZi-qZtIIGSzzKIpkAzz7DgpeEq2NnDpRWxNAz3tPddvAvMdyF0DOUOh3c_5oknPdKzWHnYBvrt0S9vUwfhW-5BLXZFAtNKFUSX8J4OH6n7URe3q7M8JoH9xT5rd5LvAvKhp9PDqf0BbBsZwlSlF8ArwBNX89Y8qonOF8LR5wVD16hnQ5y0bzLBWXBv7ZtNRvFV1qEAvWLLL0cxialpZcvF6vgxBJaqamao-T5Pvng4d9n')" }}></div>
              </div>
              <div>
                <p className="text-primary text-xs font-bold uppercase mb-1">International Journal</p>
                <h4 className="text-lg font-bold leading-tight mb-2">Legal Publication A</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Authored a peer-reviewed article on equity and contemporary corporate structures.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-5 bg-white dark:bg-zinc-900 rounded-lg border border-primary/5">
              <div className="w-full aspect-square bg-slate-200 rounded overflow-hidden">
                <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-GnmVFYnDwVz9M8_QfIF5fe19WjKv9Vb_l1BPHRwvUg5HwGqQrjM0il23B-x4lenX2wIRZ8Y3vICVHppK71DSvgV70GS00v44ydgCA9j2E1ot_J3JAf9kpI-EQtLT1w1mDbVJHT2Lsaqoy9M5jSNxGIbtEpBnI_wfQDBTwa3L6eKz8e9-JroRvW9jDVL4-MDKw1bLe2Xyujt_fTb1zPqpdZBrZL-4xF3m7MxfnT121KSitIYG_mRUbZ9g1bTgToLFWbA9HpLMMny_')" }}></div>
              </div>
              <div>
                <p className="text-primary text-xs font-bold uppercase mb-1">2021 Keynote</p>
                <h4 className="text-lg font-bold leading-tight mb-2">National Law Summit</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Addressed 500+ legal professionals on emerging digital regulations in commerce.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-5 bg-white dark:bg-zinc-900 rounded-lg border border-primary/5">
              <div className="w-full aspect-square bg-slate-200 rounded overflow-hidden">
                <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSQWLoA7427n_nMsQcad8_5zBi6Ei9p2TR28nXzOyETCPpMAkjt2_dcHA9WfeUIPIonZFrgttLQZ_I9QDhzXP6zDRyvd1udAz4HhUkhsdXscE-rLJ4FwMI4vZmRH-cJcCRLKw63FkS-cnCNYFSIJn6MFhNYjcw-XgzOKY_xIE7srUOPCGGODtK1Jhn6wjHJCeWfWJkHLbI1x9kyx5yw1XI5H41U20RB00nDZ39DToPt5UEHzL3BujidvaEDA2hyk_CVrZEYnYQXI4w')" }}></div>
              </div>
              <div>
                <p className="text-primary text-xs font-bold uppercase mb-1">Council Award</p>
                <h4 className="text-lg font-bold leading-tight mb-2">Advocate of the Year</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Recognized for outstanding client representation in cross-border litigation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsView;
