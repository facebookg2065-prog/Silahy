
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, User, Shield, Target, ChevronDown } from 'lucide-react';
import { PageRoute } from '../types';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFooterSection, setOpenFooterSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'الرئيسية', path: PageRoute.HOME },
    { name: 'الأسلحة', path: PageRoute.PRODUCTS },
    { name: 'بع الآن', path: PageRoute.SELL },
  ];

  const toggleFooter = (section: string) => {
    setOpenFooterSection(openFooterSection === section ? null : section);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-dark text-gray-100 font-sans selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="bg-surface/90 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-[100]">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center h-16 sm:h-20">
          <Link to={PageRoute.HOME} className="flex items-center gap-2 group shrink-0">
            <Target className="text-primary w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-lg sm:text-2xl font-black tracking-tighter text-white">POWER <span className="text-primary">PLUS</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to={PageRoute.LOGIN} className="text-xs font-bold hover:text-primary transition-colors flex items-center gap-1.5 px-3">
               <User size={16} />
               <span>دخول</span>
            </Link>
            <Link to={PageRoute.REGISTER} className="bg-primary hover:bg-red-700 text-white px-5 py-2 rounded font-black text-[10px] uppercase transition-all active:scale-95 shadow-lg shadow-red-900/20">
              انضم إلينا
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 pointer-events-none ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto`} onClick={() => setIsMenuOpen(false)} />
            <div className={`absolute left-0 top-0 bottom-0 w-3/4 max-w-[280px] bg-surface border-r border-gray-800 p-6 flex flex-col gap-6 transform transition-transform duration-300 pointer-events-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link to={PageRoute.HOME} className="flex items-center gap-2 mb-4">
                    <Target className="text-primary w-6 h-6" />
                    <span className="text-xl font-black text-white">POWER PLUS</span>
                </Link>
                {navLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={`text-lg font-bold ${isActive(link.path) ? 'text-primary' : 'text-gray-300'}`}>
                        {link.name}
                    </Link>
                ))}
                <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-gray-800">
                    <Link to={PageRoute.LOGIN} className="w-full text-center py-3 border border-gray-700 rounded-lg font-bold text-sm">دخول</Link>
                    <Link to={PageRoute.REGISTER} className="w-full text-center py-3 bg-primary rounded-lg font-bold text-sm shadow-lg shadow-red-900/20">تسجيل</Link>
                </div>
            </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Responsive Footer */}
      <footer className="bg-surface border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-white">POWER <span className="text-primary">PLUS</span></h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                وجهتك الأولى لبيع وشراء المعدات التكتيكية والأسلحة المرخصة بشكل قانوني وآمن.
              </p>
            </div>
            
            <div className="space-y-4">
                {/* Collapsible Footer Link Sections for Mobile */}
                <div className="border-b border-gray-800 md:border-none">
                    <button 
                        onClick={() => toggleFooter('links')} 
                        className="w-full flex md:block items-center justify-between py-4 md:py-0 text-right outline-none group"
                    >
                        <h4 className="text-xs font-black text-white uppercase tracking-widest md:mb-6 md:border-r-2 md:border-primary md:pr-3">روابط سريعة</h4>
                        <ChevronDown className={`md:hidden transition-transform ${openFooterSection === 'links' ? 'rotate-180' : ''}`} size={16} />
                    </button>
                    <ul className={`space-y-3 text-xs text-gray-500 overflow-hidden transition-all duration-300 ${openFooterSection === 'links' ? 'max-h-40 pb-4' : 'max-h-0 md:max-h-full'}`}>
                        <li><Link to={PageRoute.PRODUCTS} className="hover:text-primary transition-colors">جميع المنتجات</Link></li>
                        <li><Link to={PageRoute.SELL} className="hover:text-primary transition-colors">اعلن عن سلاحك</Link></li>
                        <li><Link to={PageRoute.LOGIN} className="hover:text-primary transition-colors">حسابي</Link></li>
                    </ul>
                </div>

                <div className="border-b border-gray-800 md:border-none">
                    <button 
                        onClick={() => toggleFooter('legal')} 
                        className="w-full flex md:block items-center justify-between py-4 md:py-0 text-right outline-none group"
                    >
                        <h4 className="text-xs font-black text-white uppercase tracking-widest md:mb-6 md:border-r-2 md:border-primary md:pr-3">قانوني</h4>
                        <ChevronDown className={`md:hidden transition-transform ${openFooterSection === 'legal' ? 'rotate-180' : ''}`} size={16} />
                    </button>
                    <ul className={`space-y-3 text-xs text-gray-500 overflow-hidden transition-all duration-300 ${openFooterSection === 'legal' ? 'max-h-40 pb-4' : 'max-h-0 md:max-h-full'}`}>
                        <li><Link to={PageRoute.PRIVACY} className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
                        <li><Link to={PageRoute.TERMS} className="hover:text-primary transition-colors">الشروط والأحكام</Link></li>
                        <li><div className="inline-flex items-center gap-1 text-green-500 font-bold"><Shield size={12} /> <span>مرخص ومعتمد</span></div></li>
                    </ul>
                </div>
            </div>

            <div className="pt-4 md:pt-0">
               <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 md:mb-6 md:border-r-2 md:border-primary md:pr-3">النشرة الإخبارية</h4>
               <div className="flex bg-dark border border-gray-800 p-1 rounded-lg focus-within:border-primary transition-colors">
                  <input type="email" placeholder="بريدك الإلكتروني" className="bg-transparent border-none focus:ring-0 text-xs w-full px-3 py-2 outline-none text-right" />
                  <button className="bg-primary hover:bg-red-700 text-white px-3 py-1.5 rounded font-bold text-[10px] uppercase">اشتراك</button>
               </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-600 text-[9px] uppercase tracking-widest">
            &copy; 2025 POWER PLUS. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};
