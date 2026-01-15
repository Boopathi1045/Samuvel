
import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-20 py-16">
      <div className="mb-16 text-center lg:text-left">
        <h1 className="text-5xl font-display font-black leading-tight tracking-tight mb-4">Get in Touch</h1>
        <p className="text-[#687d74] dark:text-[#a0b0a8] text-lg max-w-2xl">
          Consultation for Civil, Criminal, and Court matters. Visit our office in Theni or reach out via phone.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-[#2a3430] p-8 lg:p-12 border border-[#d8dfdc] dark:border-[#3d4a44] rounded-sm">
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">mail</span>
            Request Appointment
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-wider text-[#131615] dark:text-[#f9fafa]">Full Name</span>
                <input className="w-full rounded border-[#d8dfdc] dark:border-[#3d4a44] bg-background-light dark:bg-background-dark focus:ring-0 h-14 px-4 text-base" placeholder="Enter your name" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-wider text-[#131615] dark:text-[#f9fafa]">Contact Number</span>
                <input className="w-full rounded border-[#d8dfdc] dark:border-[#3d4a44] bg-background-light dark:bg-background-dark focus:ring-0 h-14 px-4 text-base" placeholder="Phone number" type="tel" />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold uppercase tracking-wider text-[#131615] dark:text-[#f9fafa]">Purpose of Inquiry</span>
              <textarea className="w-full rounded border-[#d8dfdc] dark:border-[#3d4a44] bg-background-light dark:bg-background-dark focus:ring-0 min-h-40 p-4 text-base" placeholder="Briefly explain your legal requirement..."></textarea>
            </label>
            <div className="pt-4">
              <button className="w-full md:w-auto px-10 h-14 bg-primary text-white font-bold rounded flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-[0.98]" type="submit">
                Submit Request
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
            <p className="text-xs text-[#687d74] italic mt-6 leading-relaxed">
              Disclaimer: Form submission is for scheduling purposes and does not establish an immediate attorney-client relationship.
            </p>
          </form>
        </div>

        {/* Office Details */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <section>
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 border-b border-[#d8dfdc] dark:border-[#3d4a44] pb-2">
              <span className="material-symbols-outlined text-primary">location_city</span>
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#687d74]">Advocate</p>
                  <p className="text-lg font-medium">J. Samuvel BA., LL.B</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#687d74]">Mobile Number</p>
                  <p className="text-lg font-medium">+91 9080485223</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#687d74]">Office Address</p>
                  <p className="text-base font-medium">No.06, MM Complex,<br />Near District Court Lakshmipuram,<br />Theni - 625523</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#687d74]">Residence</p>
                  <p className="text-base font-medium">Parasuramapuram, Batlagundu.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 border-b border-[#d8dfdc] dark:border-[#3d4a44] pb-2">
              <span className="material-symbols-outlined text-primary">share</span>
              Social Presence
            </h3>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:opacity-70 transition-opacity">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="font-bold text-sm uppercase tracking-widest">LinkedIn</span>
              </a>
              <a href="https://wa.me/919080485223" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:opacity-70 transition-opacity">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="font-bold text-sm uppercase tracking-widest">WhatsApp</span>
              </a>
            </div>
          </section>

          <div className="mt-auto p-6 bg-primary/5 dark:bg-primary/20 rounded-xl border-l-4 border-primary italic text-sm leading-relaxed text-[#131615] dark:text-[#f9fafa]">
            "Ethics and commitment are the foundations of successful legal practice. We provide honest counsel for all your disputes."
          </div>
        </div>
      </div>

      {/* Map Section Placeholder */}
      <div className="mt-20 overflow-hidden rounded-sm border border-[#d8dfdc] dark:border-[#3d4a44]">
        <div className="h-[400px] w-full bg-[#ecefed] relative overflow-hidden group">
          <img 
            className="w-full h-full object-cover filter grayscale opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApwg_2xV73wseIthM0QZpQJMCvC_bKfkgKJsPRTSoT8MRhHU88jw4z9bbJixSBMX2iAtntxTymr2byfGLZ08nKe47jZJRniSZs3Y2Y5yKIw6UoPJCISFrf3lIlEFM-MTrPR7qNMMctrKJSGM2jLi18tyyoAy_KSJtJDAka0b6ClweXYd_1_AERnPJv6GTWiYdvYRuDtcgUEg32JSnq9NtsZgKlqFbKeXzrOMj2VX_Er3tXDlFBV-n8WwO0hN_AlJe5d0muKyAaMxBB" 
            alt="Theni Office Map"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span className="material-symbols-outlined text-primary text-5xl drop-shadow-lg">location_on</span>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded shadow-lg text-xs font-bold whitespace-nowrap dark:text-black">
                Samuvel Advocate Chambers, Theni
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
