
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingCart, Filter, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                    <span className="w-6 h-[1px] bg-primary"></span> المخزون
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase">الأسلحة المتوفرة</h2>
            </div>
            
            <div className="w-full lg:w-auto flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                <div className="bg-surface border border-gray-800 p-0.5 rounded-lg flex items-center shrink-0">
                    <button className="px-4 py-2 bg-primary text-white rounded-md text-[10px] font-black transition-all">الكل</button>
                    <button className="px-4 py-2 text-gray-500 hover:text-white rounded-md text-[10px] font-bold transition-all">بنادق</button>
                    <button className="px-4 py-2 text-gray-500 hover:text-white rounded-md text-[10px] font-bold transition-all">مسدسات</button>
                </div>
                <button className="p-2.5 bg-surface border border-gray-800 text-gray-500 rounded-lg hover:text-white transition-colors shrink-0">
                    <Filter size={14} />
                </button>
            </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <Link 
            key={product.id} 
            to={PageRoute.PRODUCT_DETAIL.replace(':id', product.id.toString())} 
            className="group relative bg-surface rounded-xl overflow-hidden border border-gray-800/50 hover:border-primary/50 transition-all duration-300 active:scale-[0.98]"
          >
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                 <div className="bg-green-600/90 backdrop-blur-sm text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1">
                    <ShieldCheck size={10} /> قانوني
                 </div>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded">
                {product.category}
              </div>
            </div>
            
            <div className="p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-black text-white mb-1 group-hover:text-primary transition-colors leading-tight uppercase truncate">{product.name}</h3>
              <div className="flex justify-between items-end mt-4">
                <div>
                    <span className="block text-[8px] text-gray-600 font-black uppercase mb-0.5 tracking-widest">السعر</span>
                    <span className="text-xl font-black text-white">${product.price}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-600 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    <ShoppingCart size={16} />
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
