
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import HomeView from './views/HomeView';
import AchievementsView from './views/AchievementsView';
import ArticlesView from './views/ArticlesView';
import ArticleDetailView from './views/ArticleDetailView';
import ContactView from './views/ContactView';
import { Article } from './types';
import { INITIAL_ARTICLES } from './constants';

const DisclaimerModal: React.FC<{ onAgree: () => void }> = ({ onAgree }) => {
  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-background-dark/95 backdrop-blur-xl">
      <div className="bg-white dark:bg-background-dark w-full max-w-2xl rounded-none shadow-2xl overflow-hidden border border-primary/20 flex flex-col max-h-[90vh]">
        <div className="px-8 py-6 border-b border-primary/10 bg-primary/5">
          <h2 className="text-2xl font-bold font-display text-primary dark:text-white flex items-center gap-3">
            <span className="material-symbols-outlined">gavel</span>
            Legal Disclaimer
          </h2>
        </div>
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="font-bold text-primary dark:text-accent-brass uppercase tracking-widest text-xs">Important Information</p>
            <p>
              The rules of the Bar Council of India do not permit advertisement or solicitation by Advocates in any form or manner.
            </p>
            <p>
              This website and the contents thereof are merely for informational purposes and not in the nature of solicitation or an advertisement. Similarly, any matter / information / content posted by <strong>Adv. J. Samuvel</strong> on this website shall not be construed as legal advice.
            </p>
            <p>
              <strong>Adv. J. Samuvel</strong> takes no liability for consequences of any action taken by you relying on the matter / information / content posted on this website.
            </p>
            <p>
              By entering this website, you confirm and acknowledge that you have voluntarily sought the information relating to and/or posted by <strong>Adv. J. Samuvel</strong> and there has been no solicitation / advertisement / inducement by either Adv. J. Samuvel and/or its partners and/or its members.
            </p>
          </div>
        </div>
        <div className="p-8 border-t border-primary/10 bg-primary/5 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleDisagree}
            className="flex-1 px-6 py-4 border border-primary/20 text-primary dark:text-white font-bold uppercase tracking-widest text-xs hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
          >
            I Disagree
          </button>
          <button 
            onClick={onAgree}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            I Agree & Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onLogin: (pass: string) => void;
  error: string;
}> = ({ isOpen, onClose, onLogin, error }) => {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white dark:bg-background-dark w-full max-w-sm rounded-lg shadow-2xl overflow-hidden border border-primary/20">
        <div className="px-6 py-4 border-b border-primary/10 flex justify-between items-center">
          <h3 className="text-xl font-bold font-display">Admin Access</h3>
          <button onClick={onClose} className="material-symbols-outlined hover:text-primary transition-colors">close</button>
        </div>
        <div className="p-8 flex flex-col gap-4">
          <p className="text-sm opacity-60">Please enter the administrative credentials to continue.</p>
          <input 
            type="password"
            autoFocus
            className="w-full border-primary/10 rounded focus:ring-primary focus:border-primary dark:bg-zinc-800"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onLogin(password)}
          />
          {error && <p className="text-xs text-red-500 font-bold">{error}</p>}
          <button 
            onClick={() => onLogin(password)}
            className="bg-primary text-white w-full py-3 rounded font-bold hover:opacity-90 transition-opacity"
          >
            Authenticate
          </button>
        </div>
      </div>
    </div>
  );
};

const ChangePasswordModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: (old: string, newPass: string) => boolean;
}> = ({ isOpen, onClose, onSave }) => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    if (newPass !== confirmPass) {
      setError("Passwords do not match");
      return;
    }
    if (newPass.length < 4) {
      setError("Password too short");
      return;
    }
    const success = onSave(oldPass, newPass);
    if (success) {
      onClose();
      setOldPass('');
      setNewPass('');
      setConfirmPass('');
      setError('');
    } else {
      setError("Incorrect current password");
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white dark:bg-background-dark w-full max-w-md rounded-lg shadow-2xl overflow-hidden border border-primary/20">
        <div className="px-6 py-4 border-b border-primary/10 flex justify-between items-center">
          <h3 className="text-xl font-bold font-display">Security Settings</h3>
          <button onClick={onClose} className="material-symbols-outlined hover:text-primary transition-colors">close</button>
        </div>
        <div className="p-8 flex flex-col gap-5">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-60">Current Password</label>
            <input 
              type="password"
              className="w-full border-primary/10 rounded focus:ring-primary focus:border-primary dark:bg-zinc-800"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-60">New Password</label>
            <input 
              type="password"
              className="w-full border-primary/10 rounded focus:ring-primary focus:border-primary dark:bg-zinc-800"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-60">Confirm New Password</label>
            <input 
              type="password"
              className="w-full border-primary/10 rounded focus:ring-primary focus:border-primary dark:bg-zinc-800"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          {error && <p className="text-xs text-red-500 font-bold">{error}</p>}
          <div className="flex gap-3 pt-2">
            <button onClick={onClose} className="flex-1 px-4 py-3 border border-primary/20 rounded font-bold hover:bg-primary/5 transition-colors">Cancel</button>
            <button onClick={handleSave} className="flex-1 bg-primary text-white py-3 rounded font-bold hover:opacity-90 transition-opacity">Update Credentials</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC<{ 
  isAdmin: boolean; 
  onLoginClick: () => void; 
  onLogout: () => void;
  onChangePass: () => void;
}> = ({ isAdmin, onLoginClick, onLogout, onChangePass }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Close menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 dark:border-white/10 px-6 md:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-primary dark:text-[#ecefed]">
          <span className="material-symbols-outlined text-3xl">gavel</span>
          <h2 className="text-lg font-bold leading-tight tracking-tight font-display hidden sm:block">Adv. J. Samuvel</h2>
          <h2 className="text-lg font-bold leading-tight tracking-tight font-display sm:hidden">Samuvel</h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary border-b-2 border-primary' : ''}`}>Profile</Link>
            <Link to="/achievements" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/achievements') ? 'text-primary border-b-2 border-primary' : ''}`}>Achievements</Link>
            <Link to="/articles" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/articles') || location.pathname.startsWith('/articles/') ? 'text-primary border-b-2 border-primary' : ''}`}>Articles</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contact') ? 'text-primary border-b-2 border-primary' : ''}`}>Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            {isAdmin ? (
              <div className="flex items-center bg-primary/10 rounded-lg p-1 border border-primary/20">
                <button 
                  onClick={onChangePass}
                  className="flex items-center justify-center w-8 h-8 rounded text-primary hover:bg-primary/20 transition-colors"
                  title="Security Settings"
                >
                  <span className="material-symbols-outlined text-sm">settings</span>
                </button>
                <div className="w-[1px] h-4 bg-primary/20 mx-1"></div>
                <button 
                  onClick={onLogout}
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="hidden sm:flex px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest border border-primary/20 text-primary transition-all hover:bg-primary/5"
              >
                Admin Log-in
              </button>
            )}
            <Link to="/contact" className="hidden xs:flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded bg-primary text-white text-sm font-bold h-10 px-5 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Consult Now
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-primary transition-transform active:scale-90"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-primary/10 shadow-xl overflow-hidden animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-6">
            <Link to="/" className={`text-lg font-bold font-display ${isActive('/') ? 'text-primary' : 'opacity-70'}`}>Profile</Link>
            <Link to="/achievements" className={`text-lg font-bold font-display ${isActive('/achievements') ? 'text-primary' : 'opacity-70'}`}>Achievements</Link>
            <Link to="/articles" className={`text-lg font-bold font-display ${isActive('/articles') || location.pathname.startsWith('/articles/') ? 'text-primary' : 'opacity-70'}`}>Articles</Link>
            <Link to="/contact" className={`text-lg font-bold font-display ${isActive('/contact') ? 'text-primary' : 'opacity-70'}`}>Contact</Link>
            <div className="h-[1px] bg-primary/10 w-full my-2"></div>
            {!isAdmin && (
              <button 
                onClick={onLoginClick}
                className="text-left text-sm font-bold uppercase tracking-widest text-primary"
              >
                Admin Log-in
              </button>
            )}
            <Link to="/contact" className="flex items-center justify-center rounded bg-primary text-white text-sm font-bold h-12 px-5 mt-2">
              Consult Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="relative py-16 px-6 md:px-20 border-t border-primary/20 overflow-hidden bg-background-dark text-white">
    <div className="max-w-[1200px] mx-auto relative z-20">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-white mb-2">
            <span className="material-symbols-outlined">gavel</span>
            <span className="font-bold font-display text-xl tracking-tight">Samuvel & Associates</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed">Providing dedicated legal counsel across civil, criminal, and district court jurisdictions. Committed to justice and ethical advocacy for over a decade.</p>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 md:ml-20">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white/90 uppercase text-xs tracking-[0.2em]">Practice</p>
            <Link to="/" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Civil Law</Link>
            <Link to="/" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Criminal Defense</Link>
            <Link to="/" className="text-sm opacity-50 hover:opacity-100 transition-opacity">District Court</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white/90 uppercase text-xs tracking-[0.2em]">Office</p>
            <Link to="/" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Our Story</Link>
            <Link to="/achievements" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Achievements</Link>
            <Link to="/articles" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Legal Insights</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white/90 uppercase text-xs tracking-[0.2em]">Legal</p>
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Disclaimer</a>
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-40 uppercase tracking-[0.3em]">
        <p>© 2024 Adv. J. Samuvel. All Rights Reserved.</p>
        <p>Justice Through Excellence</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [hasAgreedDisclaimer, setHasAgreedDisclaimer] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isChangePassModalOpen, setIsChangePassModalOpen] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const navigate = useNavigate();

  const [adminPassword, setAdminPassword] = useState(() => {
    return localStorage.getItem('ThorneAdminPassword') || 'admin123';
  });

  const [articles, setArticles] = useState<Article[]>(() => {
    const saved = localStorage.getItem('ThorneArticles');
    return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
  });

  useEffect(() => {
    localStorage.setItem('ThorneArticles', JSON.stringify(articles));
  }, [articles]);

  const handleAgreeDisclaimer = () => {
    setHasAgreedDisclaimer(true);
    navigate('/'); // Always redirect to profile/home after agreement
  };

  const handleLogin = (pass: string) => {
    if (pass === adminPassword) {
      setIsAdmin(true);
      setIsLoginModalOpen(false);
      setLoginError('');
    } else {
      setLoginError('Invalid administrative credentials.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleChangePassword = (oldP: string, newP: string) => {
    if (oldP === adminPassword) {
      setAdminPassword(newP);
      localStorage.setItem('ThorneAdminPassword', newP);
      return true;
    }
    return false;
  };

  const handleCreateArticle = (article: Article) => {
    setArticles([article, ...articles]);
  };

  const handleUpdateArticle = (updated: Article) => {
    setArticles(articles.map(a => a.id === updated.id ? updated : a));
  };

  const handleDeleteArticle = (id: string) => {
    setArticles(articles.filter(a => a.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!hasAgreedDisclaimer && <DisclaimerModal onAgree={handleAgreeDisclaimer} />}
      
      <Header 
        isAdmin={isAdmin} 
        onLoginClick={() => setIsLoginModalOpen(true)} 
        onLogout={handleLogout}
        onChangePass={() => setIsChangePassModalOpen(true)}
      />
      <main className={`flex-grow ${!hasAgreedDisclaimer ? 'blur-sm pointer-events-none' : ''}`}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/achievements" element={<AchievementsView />} />
          <Route 
            path="/articles" 
            element={
              <ArticlesView 
                isAdmin={isAdmin} 
                articles={articles} 
                onCreate={handleCreateArticle}
                onUpdate={handleUpdateArticle}
                onDelete={handleDeleteArticle}
              />
            } 
          />
          <Route 
            path="/articles/:id" 
            element={<ArticleDetailView articles={articles} isAdmin={isAdmin} onUpdate={handleUpdateArticle} />} 
          />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </main>
      <Footer />
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLogin={handleLogin}
        error={loginError}
      />

      <ChangePasswordModal 
        isOpen={isChangePassModalOpen}
        onClose={() => setIsChangePassModalOpen(false)}
        onSave={handleChangePassword}
      />
      
      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-8 right-8 z-[100] group" href="https://wa.me/919080485223" target="_blank">
        <div className="relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
          </svg>
          <span className="absolute right-full mr-4 bg-background-dark text-white text-[10px] font-bold py-1 px-3 rounded uppercase tracking-tighter whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Quick WhatsApp Consult
          </span>
        </div>
      </a>
    </div>
  );
};

export default App;
