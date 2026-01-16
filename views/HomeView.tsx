import React from 'react';
import { PRACTICE_AREAS } from '../constants';
import { Link } from 'react-router-dom';

const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-12 md:py-24 px-6 md:px-20 min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJhsLIBnEw2BEvjlgAA4yYBUwiRhtPV23CbYvRVGZ52f8RADlhKK9-cC_HfuzMZRXSFfFIifNMhdNq2FiTzz4IrtcLC--OJs5xwloTGhgnFoHIwRELNxMH9KIetlZOM1PBmptYqhH4uJ9M259f7IAnljJo54qYeKn7_ApHDfabs8uTjCl_JaHMObwplYVbryjjgXAAH9nsIlHBusHf-KXVnc76ManbbV9y4itZ-TzdteGSibd7iBBT-HS-gsI5jQmZwBUCcQYQNWx0')" }}></div>
        <div className="absolute inset-0 z-10 hero-overlay"></div>
        <div className="max-w-[1200px] w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-primary dark:text-white">
                  Adv. J. Samuvel
                </h1>
                <p className="text-xl md:text-2xl font-display italic text-[#4a5a54] dark:text-[#a1b3ab]">
                  BA., LL.B Advocate
                </p>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
                <h2 className="text-lg md:text-xl font-normal leading-relaxed max-w-lg text-[#2d3632] dark:text-gray-200">
                  Reliable Legal Counsel in Theni. Expert representation in District Court matters, Civil, and Criminal law.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded h-12 px-6 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 shadow-lg shadow-primary/20">
                  Consult Today
                </Link>
                <Link to="/articles" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded h-12 px-6 border-2 border-primary text-primary dark:text-white dark:border-white/20 text-base font-bold transition-all hover:bg-primary/5">
                  Read Legal Articles
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-xl -rotate-2 transition-transform group-hover:rotate-0"></div>
                <div 
                  className="relative w-full aspect-[4/5] bg-center bg-no-repeat bg-cover rounded-lg shadow-2xl border-4 border-white dark:border-background-dark" 
                  style={{ backgroundImage: "url('WhatsApp Image 2026-01-16 at 4.57.34 PM.jpeg')" }}
                ></div>
                <div className="absolute bottom-6 -left-6 bg-white dark:bg-background-dark p-6 rounded shadow-xl border border-primary/10 hidden md:block">
                  <p className="text-primary font-bold text-2xl">Proven</p>
                  <p className="text-sm opacity-70">District Court Counsel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary/5 dark:bg-white/5 py-12 px-6 md:px-20 border-y border-primary/10 dark:border-white/10 relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-6 p-6 bg-white/60 dark:bg-background-dark/50 rounded border border-primary/10 backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl text-primary">verified</span>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest opacity-60">Bar Council</p>
                <p className="text-xl font-bold font-display">Registered Advocate</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white/60 dark:bg-background-dark/50 rounded border border-primary/10 backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl text-primary">location_on</span>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest opacity-60">Location</p>
                <p className="text-xl font-bold font-display">Theni District Court</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white/60 dark:bg-background-dark/50 rounded border border-primary/10 backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl text-primary">handshake</span>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest opacity-60">Approach</p>
                <p className="text-xl font-bold font-display">Justice First</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Focus Areas */}
      <section className="py-24 px-6 md:px-20 relative bg-[#f7f3ed] dark:bg-[#1a1f1d]">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold font-display mb-4">Practice Focus Areas</h2>
              <p className="text-lg opacity-80">Legal representation across major judicial branches in Theni and surrounding areas.</p>
            </div>
            <Link to="/articles" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View legal insights <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRACTICE_AREAS.map((area, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer p-2 rounded-lg bg-white/40 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-all shadow-sm hover:shadow-md">
                <div className="relative overflow-hidden rounded mb-4 aspect-square">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
                  <div 
                    className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${area.imageUrl})` }}
                  ></div>
                </div>
                <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors px-2">{area.title}</h3>
                <p className="text-sm leading-relaxed opacity-70 px-2 pb-2">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 md:px-20 bg-background-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-center bg-cover opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUN7eUKK7hwdPFMdGkfZCEHcgioCM1mQRQqV4lYnBJO-IdmTB214sqyoUvz13z5iRMqXSIwlvxZ1f7E8XM22KBBTYzDRbuEBD5jt_bHOoZxVxj9qJmgVEpBoxDmHuIJ48oGMsm1bjKZ5vD3YZxyKhjWyU3jKPCJUCVBRuisz6rgaGNr_8vZIzNxy0Tv2Qv_M-WyaLhOp6yySLlWNO8Jy1QNwT7jQZYs2HTZTzyyOV6emP5dpuJvk2-mcVT6FcR4lWrgRECOad62IET')" }}></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Expert Legal Consultation</h2>
              <p className="text-xl opacity-80 mb-10 max-w-2xl">Accessible and ethical legal advice for your disputes. Contact the office in Lakshmipuram, Theni.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded font-bold text-lg transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Request Meeting
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 border border-white/20 rounded bg-white/5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="text-lg font-medium">+91 9080485223</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
