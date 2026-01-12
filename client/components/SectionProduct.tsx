import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from './ui/card'
import { Star } from 'lucide-react'


interface SectionProductProps {
  title: string
  payload: any[]
}
const SectionProduct : React.FC<SectionProductProps> = ({title, payload}) => {
  
  return (
    <>
    
   <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <button className="text-green-600 text-sm font-medium">
              Lihat Semua
            </button>
          </div>
          {payload.length <= 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <p>No Product Displayed</p>
            </div>
          ):(
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {payload.map((product) => (
                <Link key={`popular-${product.id}`} to={`/product/${product.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full aspect-square object-cover rounded mb-3"
                      />
                      <h3 className="text-sm line-clamp-2 mb-2 text-gray-800">
                        {product.title}
                      </h3>
                      <div className="font-bold text-sm mb-2">
                        {product.price}
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating}</span>
                        <span>•</span>
                        <span>{product.sold}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
    </>
  )
}

export default SectionProduct