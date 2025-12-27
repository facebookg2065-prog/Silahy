
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
// Added ShoppingCart to the list of imports from lucide-react
import { Shield, Truck, ArrowRight, Share2, Heart, ShoppingCart } from 'lucide-react';
import { PageRoute } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-widest">غير موجود</h2>
            <Link to={PageRoute.PRODUCTS} className="bg-primary text-white px-8 py-3 rounded font-black flex items-center gap-2">العودة للمتجر <ArrowRight size={20} /></Link>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Breadcrumb - Hidden on tiny screens */}
        <div className="hidden sm:flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-12">
            <Link to={PageRoute.HOME} className="hover:text-white transition-colors">الرئيسية</Link> 
            <span className="w-4 h-[1px] bg-gray-800"></span>
            <Link to={PageRoute.PRODUCTS} className="hover:text-white transition-colors">الأسلحة</Link>
            <span className="w-4 h-[1px] bg-gray-800"></span>
            <span className="text-primary">{product.name}</span>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-7 space-y-6">
            <div className="relative group bg-surface rounded-3xl overflow-hidden border border-gray-800/50 p-3 sm:p-6 aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-8 right-8 flex flex-col gap-3">
                    <button className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white hover:text-primary hover:bg-black transition-all shadow-xl" aria-label="Like"><Heart size={20} /></button>
                    <button className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white hover:text-primary hover:bg-black transition-all shadow-xl" aria-label="Share"><Share2 size={20} /></button>
                </div>
            </div>
            
            {/* Gallery Thumbnails (Static Placeholder) */}
            <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4].map(i => (
                    <div key={i} className={`aspect-square rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${i === 1 ? 'border-primary' : 'border-gray-800 opacity-50 hover:opacity-100 hover:border-gray-600'}`}>
                        <img src={product.image} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Info Section */}
        <div className="lg:col-span-5 flex flex-col justify-center py-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 border border-gray-800 text-gray-400 rounded-lg text-[10px] font-black uppercase tracking-widest w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> متوفر حالياً
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-[1.1]">
            {product.name}
          </h1>
          
          <div className="flex items-end gap-3 mb-10">
              <div className="text-4xl sm:text-5xl font-black text-primary">${product.price}</div>
              <div className="text-sm text-gray-600 mb-2 font-bold line-through">${(product.price * 1.2).toFixed(0)}</div>
          </div>
          
          <div className="prose prose-invert max-w-none mb-10">
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-medium">
                {product.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
             <div className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-gray-800 group hover:border-primary transition-colors">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:scale-110 transition-transform">
                    <Shield size={24} />
                </div>
                <div>
                    <div className="font-black text-xs sm:text-sm text-white uppercase tracking-wider">مرخص بالكامل</div>
                    <div className="text-xs text-gray-500">امتثال قانوني 100%</div>
                </div>
             </div>
             <div className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-gray-800 group hover:border-primary transition-colors">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:scale-110 transition-transform">
                    <Truck size={24} />
                </div>
                <div>
                    <div className="font-black text-xs sm:text-sm text-white uppercase tracking-wider">شحن تكتيكي</div>
                    <div className="text-xs text-gray-500">توصيل مؤمن وسريع</div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
             <button className="sm:col-span-4 bg-primary hover:bg-red-700 text-white font-black py-5 rounded-2xl shadow-2xl shadow-red-900/30 transition-all transform active:scale-95 text-lg uppercase tracking-widest">
                إتمام الطلب الآن
             </button>
             <button className="sm:col-span-1 bg-surface border border-gray-800 text-gray-400 flex items-center justify-center p-5 rounded-2xl hover:text-white hover:border-white transition-all">
                <ShoppingCart size={24} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
