
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, User, Shield, Target } from 'lucide-react';
import { PageRoute } from '../types';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'الرئيسية', path: PageRoute.HOME },
    { name: 'الأسلحة', path: PageRoute.PRODUCTS },
    { name: 'بع الآن', path: PageRoute.SELL },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-dark text-gray-100 font-sans selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="bg-surface/90 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-[100] transition-all">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <Link to={PageRoute.HOME} className="flex items-center gap-2 group shrink-0">
            <Target className="text-primary w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-lg sm:text-2xl font-black tracking-tighter text-white">POWER <span className="text-primary">PLUS</span></span>
          </Link>

          {/* Desktop Nav */}
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to={PageRoute.LOGIN} className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1.5 px-3 py-2">
               <User size={18} />
               <span>دخول</span>
            </Link>
            <Link to={PageRoute.REGISTER} className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded font-black text-xs uppercase transition-all shadow-lg shadow-red-900/20 active:scale-95">
              انضم إلينا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar Navigation */}
        <div className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 pointer-events-none ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto`} onClick={() => setIsMenuOpen(false)} />
            <div className={`absolute left-0 top-0 bottom-0 w-4/5 max-w-xs bg-surface border-r border-gray-800 p-8 flex flex-col gap-6 transform transition-transform duration-300 pointer-events-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link to={PageRoute.HOME} className="flex items-center gap-2 mb-8">
                    <Target className="text-primary w-8 h-8" />
                    <span className="text-2xl font-black text-white">POWER PLUS</span>
                </Link>
                
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`text-xl font-bold ${isActive(link.path) ? 'text-primary' : 'text-gray-300'}`}
                    >
                        {link.name}
                    </Link>
                ))}
                
                <div className="mt-auto flex flex-col gap-4 border-t border-gray-800 pt-8">
                    <Link to={PageRoute.LOGIN} className="w-full text-center py-4 border border-gray-700 rounded-xl font-bold">دخول</Link>
                    <Link to={PageRoute.REGISTER} className="w-full text-center py-4 bg-primary rounded-xl font-bold shadow-lg shadow-red-900/20">تسجيل جديد</Link>
                </div>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-right">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white">POWER <span className="text-primary">PLUS</span></h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                وجهتك الأولى لبيع وشراء المعدات التكتيكية والأسلحة المرخصة بشكل قانوني وآمن. نحن نربط المحترفين بأفضل العتاد.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6 border-r-2 border-primary pr-3">روابط</h4>
                  <ul className="space-y-4 text-sm text-gray-500">
                    <li><Link to={PageRoute.PRODUCTS} className="hover:text-primary transition-colors">المنتجات</Link></li>
                    <li><Link to={PageRoute.SELL} className="hover:text-primary transition-colors">أعلن هنا</Link></li>
                    <li><Link to={PageRoute.LOGIN} className="hover:text-primary transition-colors">حسابي</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6 border-r-2 border-primary pr-3">قانوني</h4>
                  <ul className="space-y-4 text-sm text-gray-500">
                    <li><Link to={PageRoute.PRIVACY} className="hover:text-primary transition-colors">الخصوصية</Link></li>
                    <li><Link to={PageRoute.TERMS} className="hover:text-primary transition-colors">الشروط</Link></li>
                    <li>
                        <div className="inline-flex items-center gap-1.5 text-green-500 font-bold">
                            <Shield size={14} />
                            <span>موثق</span>
                        </div>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1 border-t border-gray-800 pt-12 md:border-t-0 md:pt-0">
               <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6 border-r-2 border-primary pr-3">اشترك</h4>
               <p className="text-gray-500 text-sm mb-4">كن أول من يعرف عن وصول القطع النادرة</p>
               <div className="flex bg-dark border border-gray-700 p-1 rounded-lg focus-within:border-primary transition-colors">
                  <input type="email" placeholder="بريدك الإلكتروني" className="bg-transparent border-none focus:ring-0 text-sm w-full px-3 py-2 outline-none text-right" />
                  <button className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded font-bold text-xs">اشتراك</button>
               </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em]">
            &copy; 2025 POWER PLUS. جميع الحقوق محفوظة لشركتنا
          </div>
        </div>
      </footer>
    </div>
  );
};
