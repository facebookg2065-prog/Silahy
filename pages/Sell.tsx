
import React, { useState } from 'react';
import { Upload, DollarSign, Type, FileText, CheckCircle2, ChevronDown, Camera } from 'lucide-react';

const Sell: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="mb-6">
                <CheckCircle2 size={64} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">تم الاستلام</h2>
            <p className="text-gray-500 mb-8 max-w-xs text-sm font-medium">سيتم مراجعة إعلانك من قبل فريقنا المختص لضمان المطابقة القانونية.</p>
            <button 
                onClick={() => { setSubmitted(false); setActiveStep(1); }} 
                className="px-8 py-3 bg-primary hover:bg-red-700 text-white rounded-lg font-black text-xs uppercase transition-all shadow-lg active:scale-95"
            >
                إضافة إعلان آخر
            </button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase">اعلن عن سلاحك</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Section 1: Basic Info */}
          <CollapsibleSection 
            title="معلومات القطعة" 
            icon={<Type size={18} />} 
            isOpen={activeStep === 1} 
            onClick={() => setActiveStep(1)}
            completed={activeStep > 1}
          >
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">اسم القطعة والموديل</label>
                    <input type="text" required placeholder="Glock 19 Gen 5..." className="w-full bg-dark border border-gray-800 rounded-lg p-3 text-sm text-white font-bold focus:border-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">النوع / الفئة</label>
                    <select className="w-full bg-dark border border-gray-800 rounded-lg p-3 text-sm text-white font-bold focus:border-primary transition-all outline-none">
                        <option>مسدس</option>
                        <option>بندقية</option>
                        <option>قناصة</option>
                        <option>أخرى</option>
                    </select>
                </div>
                <button type="button" onClick={(e) => { e.stopPropagation(); setActiveStep(2); }} className="w-full py-2.5 bg-gray-800 text-white font-black text-[10px] uppercase rounded-lg hover:bg-gray-700">التالي</button>
            </div>
          </CollapsibleSection>

          {/* Section 2: Details and Price */}
          <CollapsibleSection 
            title="السعر والتفاصيل" 
            icon={<DollarSign size={18} />} 
            isOpen={activeStep === 2} 
            onClick={() => setActiveStep(2)}
            completed={activeStep > 2}
          >
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">السعر المطلـوب ($)</label>
                    <input type="number" required placeholder="0.00" className="w-full bg-dark border border-gray-800 rounded-lg p-3 text-sm text-white font-bold focus:border-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">وصف الحالة</label>
                    <textarea rows={3} required placeholder="اذكر حالة القطعة بالتفصيل..." className="w-full bg-dark border border-gray-800 rounded-lg p-3 text-sm text-white font-medium focus:border-primary transition-all outline-none resize-none"></textarea>
                </div>
                <button type="button" onClick={(e) => { e.stopPropagation(); setActiveStep(3); }} className="w-full py-2.5 bg-gray-800 text-white font-black text-[10px] uppercase rounded-lg hover:bg-gray-700">التالي</button>
            </div>
          </CollapsibleSection>

          {/* Section 3: Media */}
          <CollapsibleSection 
            title="الصور والتوثيق" 
            icon={<Camera size={18} />} 
            isOpen={activeStep === 3} 
            onClick={() => setActiveStep(3)}
            completed={false}
          >
            <div className="space-y-6">
                <div className="group relative border-2 border-dashed border-gray-800 rounded-xl p-8 text-center hover:border-primary transition-all bg-dark/30 cursor-pointer">
                    <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                    <div className="flex flex-col items-center gap-2 text-gray-600 group-hover:text-primary transition-colors">
                        <Upload size={24} />
                        <span className="block font-black text-[10px] uppercase tracking-widest">رفع الصور (الحد الأقصى 5)</span>
                    </div>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-red-900/20 text-xs uppercase tracking-widest active:scale-95">
                    إرسال للمراجعة القانونية
                </button>
            </div>
          </CollapsibleSection>

          <p className="text-[9px] text-center text-gray-700 mt-8 uppercase font-bold tracking-widest">
            جميع الأسلحة يتم التحقق منها يدوياً لضمان <span className="text-primary">الأمان والشرعية</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

const CollapsibleSection: React.FC<{ 
    title: string; 
    icon: React.ReactNode; 
    isOpen: boolean; 
    onClick: () => void;
    completed: boolean;
    children: React.ReactNode 
}> = ({ title, icon, isOpen, onClick, completed, children }) => {
  return (
    <div className={`border transition-all duration-300 rounded-xl overflow-hidden ${isOpen ? 'border-primary/50 bg-surface' : 'border-gray-800 bg-surface/30'}`}>
      <button 
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-right outline-none group"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-primary text-white' : completed ? 'bg-green-500/20 text-green-500' : 'bg-gray-800 text-gray-500 group-hover:text-gray-300'}`}>
            {icon}
          </div>
          <h3 className={`text-sm sm:text-base font-black transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{title}</h3>
        </div>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-600'}`} />
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-4 sm:p-5 pt-0 border-t border-gray-800/20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sell;
