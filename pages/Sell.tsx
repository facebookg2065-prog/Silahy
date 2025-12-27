
import React, { useState } from 'react';
import { Upload, DollarSign, Type, FileText, CheckCircle2 } from 'lucide-react';

const Sell: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="container mx-auto px-4 py-24 sm:py-32 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <CheckCircle2 size={80} className="text-green-500 relative z-10" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">تم استلام طلبك</h2>
            <p className="text-gray-400 mb-10 max-w-md text-base sm:text-lg font-medium">سيتم مراجعة إعلانك من قبل فريقنا المختص للتأكد من مطابقته للمعايير القانونية قبل النشر.</p>
            <button 
                onClick={() => setSubmitted(false)} 
                className="px-10 py-4 bg-primary hover:bg-red-700 text-white rounded-xl font-black text-sm uppercase transition-all shadow-xl shadow-red-900/20 active:scale-95"
            >
                إضافة إعلان جديد
            </button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-4">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-lg text-[10px] font-black uppercase tracking-widest">شارك معداتك</div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-none">اعلن عن سلاحك</h2>
            <p className="text-gray-500 text-sm sm:text-base font-medium">قم بعرض سلاحك أو معداتك التكتيكية للوصول إلى آلاف المهتمين في المنطقة بكل سهولة وأمان.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface/50 p-6 sm:p-10 rounded-3xl border border-gray-800 shadow-2xl space-y-8 backdrop-blur-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Type size={14} className="text-primary" /> اسم القطعة
                </label>
                <input 
                    type="text" 
                    required
                    placeholder="Glock 19 Gen 5..."
                    className="w-full bg-dark border border-gray-700 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <DollarSign size={14} className="text-primary" /> السعر ($)
                </label>
                <input 
                    type="number" 
                    required
                    placeholder="0.00"
                    className="w-full bg-dark border border-gray-700 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-700"
                />
              </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <FileText size={14} className="text-primary" /> تفاصيل إضافية
            </label>
            <textarea 
                rows={5}
                required
                placeholder="اذكر حالة القطعة، الملحقات، وتاريخ الاقتناء..."
                className="w-full bg-dark border border-gray-700 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <Upload size={14} className="text-primary" /> الصور
            </label>
            <div className="group relative border-2 border-dashed border-gray-700 rounded-2xl p-10 text-center hover:border-primary transition-all bg-dark/30 hover:bg-primary/5 cursor-pointer">
                <input 
                    type="file" 
                    multiple 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                />
                <div className="flex flex-col items-center gap-4 text-gray-600 group-hover:text-primary transition-colors">
                    <div className="p-4 bg-gray-800/50 rounded-2xl group-hover:bg-primary/10 transition-all">
                        <Upload size={32} />
                    </div>
                    <div className="space-y-1">
                        <span className="block font-black text-xs sm:text-sm uppercase tracking-widest">رفع الصور</span>
                        <span className="block text-[10px] text-gray-700">اسحب الصور هنا أو اضغط للاختيار</span>
                    </div>
                </div>
            </div>
          </div>

          <div className="pt-4">
              <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-black py-5 rounded-2xl transition-all shadow-2xl shadow-red-900/30 text-lg uppercase tracking-widest active:scale-95">
                نشر الإعلان
              </button>

              <p className="text-[10px] text-center text-gray-600 mt-6 uppercase font-bold tracking-widest leading-relaxed">
                بنشر هذا الإعلان، أنت تؤكد ملكيتك القانونية الكاملة للقطعة والتزامك بشروط الاستخدام الخاصة بـ <span className="text-primary">POWER PLUS</span>.
              </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
