
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Zap, Globe, ChevronDown } from 'lucide-react';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/90 to-dark z-10"></div>
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1595053809115-f37085731b53?q=80&w=2070&auto=format&fit=crop" 
                alt="Tactical Background" 
                className="w-full h-full object-cover grayscale opacity-20 scale-100 transition-transform duration-[10000ms] ease-linear group-hover:scale-110"
            />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto py-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-8 animate-bounce-slow">
             المتجر التكتيكي الأول
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 text-white uppercase tracking-tighter leading-[1.1]">
            القوة <span className="text-primary drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">بين يديك</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-2xl mx-auto px-4">
            أفضل منصة لبيع وشراء الأسلحة والمعدات التكتيكية بطريقة آمنة، قانونية، وموثوقة تماماً.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-0">
            <Link 
              to={PageRoute.PRODUCTS} 
              className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-red-700 text-white rounded-lg font-black text-sm uppercase transition-all shadow-2xl shadow-red-900/30 flex items-center justify-center gap-3 group active:scale-95"
            >
              استعرض المجموعة <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link 
              to={PageRoute.SELL} 
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-700 hover:border-white text-white rounded-lg font-black text-sm uppercase transition-all active:scale-95"
            >
              أعلن عن سلاحك
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Accordion Section */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-widest uppercase">لماذا POWER PLUS؟</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-500 text-sm sm:text-base font-medium">استكشف لماذا نحن الخيار الأول للمحترفين في المنطقة</p>
          </div>
          
          <div className="space-y-4 px-2 sm:px-0">
            <AccordionItem 
              icon={<ShieldCheck size={24} />}
              title="آمن وقانوني"
              description="جميع العمليات تتم وفق الأنظمة والقوانين المحلية لضمان سلامة البائع والمشتري. نحن نضمن امتثال كل صفقة للمعايير القانونية الصارمة وندقق في التراخيص الرسمية لكل قطعة معروضة."
              defaultOpen={true}
            />
            <AccordionItem 
              icon={<Zap size={24} />}
              title="سرعة في العرض"
              description="لوحة تحكم سهلة تتيح لك عرض سلاحك للبيع في دقائق معدودة والوصول لآلاف المهتمين عبر واجهة مستخدم سريعة وخفيفة مصممة خصيصاً للهواتف الذكية والأجهزة اللوحية."
            />
            <AccordionItem 
              icon={<Globe size={24} />}
              title="تغطية واسعة"
              description="نصلك بأكبر شبكة من المهتمين بالأسلحة والمعدات التكتيكية في المنطقة، مما يضمن لك أفضل وصول وأسرع تنفيذ لعملية البيع بأفضل سعر ممكن في السوق."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const AccordionItem: React.FC<{ icon: React.ReactNode, title: string, description: string, defaultOpen?: boolean }> = ({ icon, title, description, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`group border transition-all duration-500 rounded-2xl overflow-hidden ${isOpen ? 'border-primary bg-surface/50 shadow-2xl shadow-red-900/10' : 'border-gray-800 bg-surface/20 hover:border-gray-600'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 sm:p-7 text-right outline-none"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <div className={`p-3 rounded-xl transition-all duration-300 ${isOpen ? 'bg-primary text-white scale-110 rotate-3' : 'bg-gray-800 text-gray-500 group-hover:text-gray-300'}`}>
            {icon}
          </div>
          <h3 className={`text-lg sm:text-xl font-black transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{title}</h3>
        </div>
        <div className={`transition-transform duration-500 rounded-full p-2 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-gray-800 text-gray-600'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pr-16 sm:pr-24 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-gray-800/30 pt-6">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Home;
