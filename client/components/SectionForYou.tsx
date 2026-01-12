import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal, Star } from 'lucide-react';

interface IProps {
    productForYou: any[]
    title?: string
}

const SectionForYou  = ({
    productForYou,
    title = "Rekomendasi Untukmu"
}:IProps) => {
  return (
     <section className="py-8">
          {/* Section Background */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <div className="bg-white rounded-xl p-6">
            {/* Tabs */}
            <Tabs defaultValue="for-you" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6 bg-white h-10">
                <TabsTrigger
                  value="for-you"
                  className="data-[state=active]:bg-white data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none font-bold"
                >
                  For You
                </TabsTrigger>
                <TabsTrigger
                  value="festival"
                  className="data-[state=active]:bg-white data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
                >
                  7.7 Plus Festival
                </TabsTrigger>
                <TabsTrigger
                  value="kesehatan"
                  className="data-[state=active]:bg-white data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
                >
                  Kesehatan
                </TabsTrigger>
                <TabsTrigger
                  value="similar"
                  className="data-[state=active]:bg-white data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
                >
                  Mirip yang kamu cek
                </TabsTrigger>
              </TabsList>

              <TabsContent value="for-you" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {productForYou.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer relative">
                        <CardContent className="p-0">
                          {/* Product Image */}
                          <div className="relative">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full aspect-square object-cover rounded-t-lg"
                            />
                            {/* Sale Badge */}
                            {product.salePercentage && (
                              <div className="absolute top-0 right-0">
                                <div className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                                  {product.salePercentage}%
                                </div>
                                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-t-[5px] border-t-red-800 absolute -bottom-1 right-0"></div>
                              </div>
                            )}
                            {/* PreOrder Badge */}
                            {product.preOrder && (
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                <div className="bg-black/50 text-white px-2 py-1 text-xs font-bold rounded-b-lg">
                                  PreOrder
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="p-3">
                            {/* Brand Logo */}
                            {product.brandLogo && (
                              <div className="flex items-center mb-2">
                                <img
                                  src={product.brandLogo}
                                  alt="Brand"
                                  className="h-4 w-auto mr-2"
                                />
                                <span className="text-xs font-medium text-gray-700">
                                  {product.brand}
                                </span>
                              </div>
                            )}

                            {/* Product Title */}
                            <h3 className="text-xs line-clamp-3 mb-2 text-gray-800 leading-tight">
                              {product.title}
                            </h3>

                            {/* Price */}
                            <div className="font-bold text-sm mb-2 text-gray-900">
                              {product.price}
                            </div>

                            {/* Special Tag */}
                            {product.specialTag && (
                              <div className="mb-2">
                                <Badge
                                  variant="outline"
                                  className="text-xs text-orange-600 border-orange-600 px-1 py-0"
                                >
                                  {product.specialTag}
                                </Badge>
                              </div>
                            )}

                            {/* Rating and Sales */}
                            <div className="flex items-center space-x-1 text-xs text-gray-600 mb-2">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{product.rating}</span>
                              <span>•</span>
                              <span>{product.sold}</span>
                            </div>

                            {/* Store Info */}
                            <div className="border-t pt-2">
                              <div className="flex items-center text-xs text-gray-600">
                                {product.storeIcon && (
                                  <img
                                    src={product.storeIcon}
                                    alt="Store"
                                    className="w-4 h-4 mr-2"
                                  />
                                )}
                                <div className="flex-1">
                                  <div className="font-medium">
                                    {product.storeName}
                                  </div>
                                  <div className="text-gray-500">
                                    {product.location}
                                  </div>
                                </div>
                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="festival" className="mt-0">
                <div className="text-center py-12 text-gray-500">
                  Festival products coming soon...
                </div>
              </TabsContent>

              <TabsContent value="kesehatan" className="mt-0">
                <div className="text-center py-12 text-gray-500">
                  Health products coming soon...
                </div>
              </TabsContent>

              <TabsContent value="similar" className="mt-0">
                <div className="text-center py-12 text-gray-500">
                  Similar products coming soon...
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
  )
}

export default SectionForYou