
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Mail, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';

export const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center sm:text-right">
            <Link to={PageRoute.HOME} className="inline-flex items-center gap-2 text-xs font-black text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">
                <ArrowLeft size={14} /> العودة للرئيسية
            </Link>
        </div>
        
        <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center uppercase tracking-tighter">دخول</h2>
          <p className="text-gray-500 text-center text-xs font-bold mb-10 uppercase tracking-widest">أهلاً بك مجدداً في ساحة العمليات</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mr-1">اسم المستخدم</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input 
                    type="text" 
                    placeholder="اسم المستخدم" 
                    className="w-full bg-dark border border-gray-800 rounded-xl py-4 px-12 text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mr-1">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input 
                    type="password" 
                    placeholder="كلمة المرور" 
                    className="w-full bg-dark border border-gray-800 rounded-xl py-4 px-12 text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-red-900/30 text-sm uppercase tracking-[0.2em] active:scale-95 mt-4">
              دخول النظام
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-800 text-center">
              <Link to={PageRoute.REGISTER} className="text-[10px] font-black text-gray-500 hover:text-white transition-all uppercase tracking-[0.2em]">
                  لا تمتلك تصريح دخول؟ <span className="text-primary border-b border-primary/30 pb-0.5">أنشئ حساباً الآن</span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Register: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center sm:text-right">
            <Link to={PageRoute.HOME} className="inline-flex items-center gap-2 text-xs font-black text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">
                <ArrowLeft size={14} /> العودة للرئيسية
            </Link>
        </div>

        <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center uppercase tracking-tighter">انضمام</h2>
          <p className="text-gray-500 text-center text-xs font-bold mb-10 uppercase tracking-widest">سجل الآن للحصول على أفضل المعدات</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mr-1">الاسم بالكامل</label>
                <div className="relative">
                   <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                   <input 
                      type="text" 
                      placeholder="الاسم الثلاثي..." 
                      className="w-full bg-dark border border-gray-800 rounded-xl py-4 px-12 text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                  />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mr-1">البريد الإلكتروني</label>
                <div className="relative">
                   <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                   <input 
                      type="email" 
                      placeholder="name@email.com" 
                      className="w-full bg-dark border border-gray-800 rounded-xl py-4 px-12 text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                  />
                </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mr-1">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                  <input 
                      type="password" 
                      placeholder="********" 
                      className="w-full bg-dark border border-gray-800 rounded-xl py-4 px-12 text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                  />
                </div>
            </div>

            <button className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-red-900/30 text-sm uppercase tracking-[0.2em] active:scale-95 mt-4">
              إنشاء التصريح
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-800 text-center">
              <Link to={PageRoute.LOGIN} className="text-[10px] font-black text-gray-500 hover:text-white transition-all uppercase tracking-[0.2em]">
                  هل لديك حساب بالفعل؟ <span className="text-primary border-b border-primary/30 pb-0.5">تسجيل الدخول</span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
