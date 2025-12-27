
import React, { useState } from 'react';
import { Upload, DollarSign, Type, CheckCircle2, ChevronDown, Camera, Sparkles, AlertCircle, ShieldAlert } from 'lucide-react';
import { checkLegalCompliance } from '../lib/gemini';

const Sell: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAiCheck = async () => {
    if (!itemName) return;
    setIsAnalyzing(true);
    setAiAnalysis(null);
    const result = await checkLegalCompliance(itemName, description);
    setAiAnalysis(result || "تعذر الحصول على نتيجة.");
    setIsAnalyzing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="mb-8 p-6 bg-green-500/10 rounded-full border border-green-500/20">
                <CheckCircle2 size={80} className="text-green-500" />
            </div>
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">عملية ناجحة</h2>
            <p className="text-gray-400 mb-10 max-w-sm text-lg font-medium leading-relaxed">تم استلام بياناتك. سيقوم خبراؤنا بمراجعة الإعلان والموافقة عليه خلال 24 ساعة.</p>
            <button 
                onClick={() => { setSubmitted(false); setActiveStep(1); setAiAnalysis(null); setItemName(''); setDescription(''); }} 
                className="px-12 py-4 bg-primary hover:bg-red-700 text-white rounded-xl font-black text-sm uppercase transition-all shadow-2xl active:scale-95"
            >
                إضافة قطعة أخرى
            </button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
               <ShieldAlert className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase mb-2">اعلن عن سلاحك</h2>
            <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">تأكد من إدخال معلومات دقيقة للفحص القانوني</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <CollapsibleSection 
            title="المعلومات الأساسية" 
            icon={<Type size={20} />} 
            isOpen={activeStep === 1} 
            onClick={() => setActiveStep(1)}
            completed={activeStep > 1}
          >
            <div className="space-y-5">
                <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block pr-1">اسم القطعة والموديل</label>
                    <div className="flex gap-3">
                      <input 
                        type="text" 
                        required 
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="مثال: Glock 19 Gen 5" 
                        className="flex-grow bg-dark border border-gray-800 rounded-xl p-4 text-sm text-white font-bold focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                      />
                      <button 
                        type="button"
                        onClick={handleAiCheck}
                        disabled={!itemName || isAnalyzing}
                        className={`flex items-center justify-center gap-2 px-5 rounded-xl border transition-all disabled:opacity-30 ${isAnalyzing ? 'bg-surface-lighter border-gray-700' : 'bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary'}`}
                      >
                        {isAnalyzing ? (
                          <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                        ) : (
                          <>
                            <Sparkles size={18} />
                            <span className="hidden sm:inline font-black text-[10px] uppercase">فحص ذكي</span>
                          </>
                        )}
                      </button>
                    </div>
                </div>

                {aiAnalysis && (
                  <div className="bg-blue-500/5 border border-blue-500/20 p-5 rounded-2xl animate-slide-up">
                    <div className="flex items-center gap-2 mb-3 text-blue-400 font-black text-xs uppercase tracking-widest">
                      <AlertCircle size={16} /> الفحص التكتيكي الذكي
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-medium">
                      {aiAnalysis}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block pr-1">الفئة</label>
                    <select className="w-full bg-dark border border-gray-800 rounded-xl p-4 text-sm text-white font-bold focus:border-primary transition-all outline-none appearance-none">
                        <option>مسدس (Pistol)</option>
                        <option>بندقية (Rifle)</option>
                        <option>شوزن (Shotgun)</option>
                        <option>قناصة (Sniper)</option>
                        <option>أخرى</option>
                    </select>
                </div>
                <button type="button" onClick={() => setActiveStep(2)} className="w-full py-4 bg-surface-lighter text-white font-black text-xs uppercase rounded-xl hover:bg-gray-800 transition-colors border border-gray-800">الانتقال للسعر</button>
            </div>
          </CollapsibleSection>

          <CollapsibleSection 
            title="السعر والوصف" 
            icon={<DollarSign size={20} />} 
            isOpen={activeStep === 2} 
            onClick={() => setActiveStep(2)}
            completed={activeStep > 2}
          >
            <div className="space-y-5">
                <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block pr-1">السعر التقديري ($)</label>
                    <input type="number" required placeholder="0.00" className="w-full bg-dark border border-gray-800 rounded-xl p-4 text-sm text-white font-bold focus:border-primary transition-all outline-none" />
                </div>
                <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block pr-1">التفاصيل الفنية</label>
                    <textarea 
                      rows={4} 
                      required 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="اذكر حالة السبطانة، الإضافات، وعدد المخازن..." 
                      className="w-full bg-dark border border-gray-800 rounded-xl p-4 text-sm text-white font-medium focus:border-primary transition-all outline-none resize-none"
                    ></textarea>
                </div>
                <button type="button" onClick={() => setActiveStep(3)} className="w-full py-4 bg-surface-lighter text-white font-black text-xs uppercase rounded-xl hover:bg-gray-800 transition-colors border border-gray-800">الانتقال للصور</button>
            </div>
          </CollapsibleSection>

          <CollapsibleSection 
            title="التوثيق البصري" 
            icon={<Camera size={20} />} 
            isOpen={activeStep === 3} 
            onClick={() => setActiveStep(3)}
            completed={false}
          >
            <div className="space-y-6">
                <div className="group relative border-2 border-dashed border-gray-800 rounded-2xl p-12 text-center hover:border-primary hover:bg-primary/5 transition-all bg-dark/50 cursor-pointer">
                    <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                    <div className="flex flex-col items-center gap-3 text-gray-500 group-hover:text-primary transition-colors">
                        <Upload size={32} />
                        <span className="block font-black text-xs uppercase tracking-[0.2em]">اسحب الصور هنا أو انقر للرفع</span>
                        <span className="text-[10px] text-gray-600 font-bold uppercase">PNG, JPG حتى 10 ميجابايت</span>
                    </div>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-black py-5 rounded-2xl transition-all shadow-2xl shadow-red-900/30 text-sm uppercase tracking-widest active:scale-[0.98]">
                    نشر الإعلان للعموم
                </button>
            </div>
          </CollapsibleSection>

          <div className="flex items-center justify-center gap-2 text-gray-700 mt-10">
              <span className="h-[1px] w-8 bg-gray-800"></span>
              <p className="text-[10px] uppercase font-black tracking-widest">تشفير عسكري مؤمن 256-bit</p>
              <span className="h-[1px] w-8 bg-gray-800"></span>
          </div>
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
    <div className={`border transition-all duration-500 rounded-3xl overflow-hidden ${isOpen ? 'border-primary/40 bg-surface shadow-2xl shadow-black' : 'border-gray-800 bg-surface/40'}`}>
      <button 
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-right outline-none group"
      >
        <div className="flex items-center gap-5">
          <div className={`p-3 rounded-2xl transition-all duration-300 ${isOpen ? 'bg-primary text-white scale-110 shadow-lg shadow-red-900/20' : completed ? 'bg-green-500/20 text-green-500' : 'bg-gray-900 text-gray-600 group-hover:text-gray-400'}`}>
            {icon}
          </div>
          <h3 className={`text-base sm:text-lg font-black transition-colors ${isOpen ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{title}</h3>
        </div>
        <ChevronDown size={18} className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-700'}`} />
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6 pt-2 border-t border-gray-800/50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sell;
