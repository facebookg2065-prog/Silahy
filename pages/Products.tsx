
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingCart, Filter } from 'lucide-react';
import { PageRoute } from '../types';

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                    <span className="w-8 h-[2px] bg-primary"></span> المخزون الحالي
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase">الأسلحة المتوفرة</h2>
                <p className="text-gray-500 font-medium max-w-md">استكشف نخبة المعدات التكتيكية المختارة بعناية لأداء لا يضاهى.</p>
            </div>
            
            {/* Filter Section - Responsive Scroll */}
            <div className="w-full lg:w-auto flex items-center gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide no-scrollbar">
                <div className="bg-surface border border-gray-800 p-1 rounded-xl flex items-center gap-1 shrink-0">
                    <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-black transition-all">الكل</button>
                    <button className="px-5 py-2.5 text-gray-500 hover:text-white rounded-lg text-sm font-bold transition-all">بنادق</button>
                    <button className="px-5 py-2.5 text-gray-500 hover:text-white rounded-lg text-sm font-bold transition-all">مسدسات</button>
                    <button className="px-5 py-2.5 text-gray-500 hover:text-white rounded-lg text-sm font-bold transition-all">أخرى</button>
                </div>
                <button className="p-3 bg-surface border border-gray-800 text-gray-400 rounded-xl hover:text-white transition-colors shrink-0" aria-label="Filter">
                    <Filter size={20} />
                </button>
            </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {MOCK_PRODUCTS.map((product) => (
          <Link 
            key={product.id} 
            to={PageRoute.PRODUCT_DETAIL.replace(':id', product.id.toString())} 
            className="group relative bg-surface rounded-2xl overflow-hidden border border-gray-800/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 active:scale-[0.98]"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                {product.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-primary transition-colors leading-tight uppercase">{product.name}</h3>
              <div className="flex justify-between items-center mt-6">
                <div>
                    <span className="block text-[10px] text-gray-500 font-black uppercase mb-1">السعر</span>
                    <span className="text-2xl font-black text-white">${product.price}</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-red-900/50">
                    <ShoppingCart size={20} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
