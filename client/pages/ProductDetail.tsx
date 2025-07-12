import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Search,
  ShoppingCart,
  Star,
  ChevronDown,
  Package,
  Phone,
  Truck,
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Heart,
} from "lucide-react";

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState("midnight-blue");
  const [selectedMemory, setSelectedMemory] = useState("128gb");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("detail");
  const [mainImage, setMainImage] = useState(0);

  const productImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/92d64ab735a8c3be131de615deb005b26939222f?width=742",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1edba6c371d5d187c76f771c5bdc547ff510d00b?width=216",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b6c6e46da73a91946c4c5d263600eeac91bcce98?width=216",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/30ffa17daf09e61fd877ce0152e4552c2fe7ac91?width=216",
  ];

  const colorOptions = [
    {
      id: "midnight-blue",
      name: "Midnight Blue",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e88cbff39182270649d90e0b2bbf6a9492f4e16?width=70",
      price: "$569.00",
    },
    {
      id: "deep-purple",
      name: "Deep Purple",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/317dda0858f41302870bcdfc7a813d31971c9dfa?width=70",
      price: "$569.00",
    },
    {
      id: "space-black",
      name: "Space Black",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a408308815bea538dbc0dada6f7083a526887ed?width=70",
      price: "$569.00",
    },
  ];

  const memoryOptions = [
    { id: "64gb", name: "64GB", disabled: true },
    { id: "128gb", name: "128GB" },
    { id: "256gb", name: "256GB" },
    { id: "512gb", name: "512GB" },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "SROK Smart Phone 128GB, Oled Retina",
      price: "$579.00",
      originalPrice: "$859.00",
      discount: "$199.00",
      rating: 4.5,
      reviews: 152,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a950cf7527d38a9a45c3b3200eae8103dece1362?width=318",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 2,
      name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
      price: "$979.00 - $1,259.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5b9deed1585c1d574c249fbcdd892194d72d4b7f?width=318",
      isNew: true,
      inStock: true,
      shipping: "$2.98 Shipping",
    },
    {
      id: 3,
      name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
      price: "$659.00",
      rating: 4.0,
      reviews: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb8c67c9b0336f2c8d2d25deb89be5eae6933140?width=318",
      inStock: true,
      freeShipping: true,
      freeGift: true,
    },
    {
      id: 4,
      name: "Xiamoi Redmi Note 5, 64GB",
      price: "$1,239.00",
      originalPrice: "$1,619.00",
      discount: "$59.00",
      rating: 4.5,
      reviews: 9,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aaf184b866887ee27429abcf07230d76f4cf36c5?width=318",
      contact: true,
      freeShipping: true,
    },
  ];

  const recentlyViewed = [
    {
      id: 1,
      name: "Xomie Remid 8 Sport Water Resistance Watch",
      price: "$579.00",
      rating: 4.5,
      reviews: 152,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/30bb4a99f09c3dda44670c7aaa64c172d42435d0?width=199",
      isNew: true,
    },
    {
      id: 2,
      name: "Microte Surface 2.0 Laptop",
      price: "$979.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1babf92db8508ce89fd5903587bb80de98c0015a?width=199",
      isNew: true,
    },
    {
      id: 3,
      name: "SROK Smart Phone 128GB, Oled Retina",
      price: "$579.00",
      originalPrice: "$779.00",
      discount: "$192.00",
      rating: 4.5,
      reviews: 152,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/feb7f25a486395f79315526c0b1c3c809fdfea80?width=199",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Banner */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-xs">Download Tokopedia App</span>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-xs text-gray-600">
              <span>Tentang Tokopedia</span>
              <span>Mitra Tokopedia</span>
              <span>Mulai Berjualan</span>
              <span>Promo</span>
              <span>Tokopedia Care</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Search */}
            <div className="flex items-center space-x-6 flex-1">
              <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-900">
                  Kategori
                </span>
              </div>

              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Cari di Tokopedia"
                    type="search"
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Dikirim ke</span>
                <span className="font-semibold text-sm">Jakarta Pusat</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-teal-600 border-teal-600"
                >
                  Masuk
                </Button>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                  Daftar
                </Button>
              </div>
            </div>
          </div>

          {/* Trending Keywords */}
          <div className="pb-3">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>samsung note 10</span>
              <span>charger mobil</span>
              <span>samsung a73</span>
              <span>pull up bar</span>
              <span>hdd 1tb</span>
              <span>xbox series x</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Images */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative">
                  <img
                    src={productImages[mainImage]}
                    alt="Product"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-black text-white">
                    new
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Thumbnail Images */}
                <div className="flex space-x-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setMainImage(index)}
                      className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                        mainImage === index
                          ? "border-teal-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                  Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
                </h1>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-semibold">Terjual</span>
                  <span className="text-gray-500 text-sm">4 rb+</span>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-orange-400 fill-current" />
                    <span className="text-sm ml-1">4.5</span>
                    <span className="text-gray-500 text-sm ml-1">
                      (1.829 rating)
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    Rp 60.000
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-red-100 text-red-600 text-xs">
                      78%
                    </Badge>
                    <span className="text-gray-500 line-through text-sm">
                      Rp120.000
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Color Selection */}
              <div>
                <div className="mb-3">
                  <span className="font-bold text-sm uppercase">Color: </span>
                  <span className="text-gray-600">Midnight Blue</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`p-2 rounded-lg border ${
                        selectedColor === color.id
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          src={color.image}
                          alt={color.name}
                          className="w-8 h-8 rounded"
                        />
                        <div className="text-left">
                          <div className="text-xs font-medium">
                            {color.name}
                          </div>
                          <div className="text-xs font-bold">{color.price}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Memory Selection */}
              <div>
                <div className="mb-3">
                  <span className="font-bold text-sm uppercase">
                    Memory Size:{" "}
                  </span>
                  <span className="text-gray-600">128GB</span>
                </div>
                <div className="flex space-x-2">
                  {memoryOptions.map((memory) => (
                    <button
                      key={memory.id}
                      onClick={() =>
                        !memory.disabled && setSelectedMemory(memory.id)
                      }
                      disabled={memory.disabled}
                      className={`px-4 py-2 rounded-lg border text-sm font-bold ${
                        memory.disabled
                          ? "border-gray-200 text-gray-400 opacity-50"
                          : selectedMemory === memory.id
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {memory.name}
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Tabs */}
              <div className="border-b">
                <div className="flex space-x-6">
                  {["detail", "spesifikasi", "info-penting"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 text-sm font-bold capitalize ${
                        activeTab === tab
                          ? "text-teal-600 border-b-2 border-teal-600"
                          : "text-gray-600"
                      }`}
                    >
                      {tab.replace("-", " ")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-bold">SKU: </span>ABC025168
                    </div>
                    <div>
                      <span className="font-bold">Category: </span>Cell Phones &
                      Tablets
                    </div>
                    <div>
                      <span className="font-bold">Brand: </span>
                      <span className="text-teal-600">sumsong</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2"></div>
                    <span className="text-sm">
                      Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2"></div>
                    <span className="text-sm">
                      DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2"></div>
                    <span className="text-sm">
                      Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </span>
                  </div>
                  <button className="text-teal-600 font-bold text-sm">
                    Selengkapnya
                  </button>
                </div>
              </div>

              <Separator />

              {/* Shipping Info */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm uppercase">Pengiriman</h3>
                <div className="flex space-x-3">
                  <Truck className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <div className="text-sm">
                      <span className="text-gray-600">Dikirim Dari </span>
                      <span className="font-bold">
                        Kota Administrasi Jakarta Pusat
                      </span>
                    </div>
                    <div className="font-bold text-sm">Ongkir</div>
                    <div className="text-xs text-gray-400">
                      Ekonomi • Estimasi tiba 8 - 12 Jul{" "}
                      <span className="text-teal-600">Lihat Kurir Lainnya</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardContent className="p-4 space-y-4">
                  <h3 className="font-bold text-sm">Atur jumlah dan catatan</h3>

                  <div className="flex items-center space-x-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/729b6d4a2198f6f856ec1391ccb8cf9ce6f21c12?width=100"
                      alt="Selected product"
                      className="w-12 h-12 rounded"
                    />
                    <span className="text-sm">Space Black</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 text-sm font-medium">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="text-sm font-bold">Stok</span>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">
                      Rp. 120.000
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Subtotal</span>
                    <span className="font-bold text-sm">RP 60.000</span>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to cart
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600"
                  >
                    Beli
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-lg mt-6 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold uppercase">Related Products</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="bg-gray-200">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-200">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2 bg-black text-white text-xs">
                        new
                      </Badge>
                    )}
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-green-600 text-white text-xs">
                        save {product.discount}
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  {product.rating && (
                    <div className="flex items-center mb-2">
                      <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  )}

                  <h3 className="font-bold text-sm mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="mb-2">
                    <div className="font-bold text-lg text-red-600">
                      {product.price}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    {product.freeShipping && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 text-green-600"
                      >
                        free shipping
                      </Badge>
                    )}
                    {product.freeGift && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-red-100 text-red-600"
                      >
                        free gift
                      </Badge>
                    )}
                    {product.shipping && (
                      <Badge variant="secondary" className="text-xs">
                        {product.shipping}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-2 flex items-center text-xs">
                    {product.inStock ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span>In stock</span>
                      </>
                    ) : product.contact ? (
                      <>
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
                        <span>Contact</span>
                      </>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="bg-white rounded-lg mt-6 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold uppercase">
              Your Recently Viewed
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">View All</span>
              <div className="flex space-x-1 bg-gray-200 rounded-full p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs opacity-50"
                >
                  prev
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  next
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentlyViewed.map((product) => (
              <Card key={product.id} className="group cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-20 object-cover rounded-lg"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-1 left-1 bg-black text-white text-xs">
                          new
                        </Badge>
                      )}
                      {product.discount && (
                        <Badge className="absolute top-1 left-1 bg-green-600 text-white text-xs">
                          save {product.discount}
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1">
                      {product.rating && (
                        <div className="flex items-center mb-1">
                          <div className="flex text-orange-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-2.5 h-2.5 fill-current"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">
                            ({product.reviews})
                          </span>
                        </div>
                      )}

                      <h3 className="font-bold text-sm mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center space-x-2">
                        {product.originalPrice ? (
                          <>
                            <span className="font-bold text-sm text-red-600">
                              {product.price}
                            </span>
                            <span className="text-xs text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          </>
                        ) : (
                          <span className="font-bold text-sm">
                            {product.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg uppercase mb-4">
                Swoo - 1st NYC tech online market
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm uppercase text-gray-600">
                    hotline 24/7
                  </div>
                  <div className="text-2xl font-bold text-teal-600">
                    (025) 3686 25 16
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  257 Thatcher Road St, Brooklyn, Manhattan,
                  <br />
                  NY 10092
                </div>
                <div className="text-sm">contact@Swootechmart.com</div>
                <div className="flex space-x-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg uppercase mb-4">
                Top Categories
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>Laptops</div>
                <div>PC & Computers</div>
                <div>Cell Phones</div>
                <div>Tablets</div>
                <div>Gaming & VR</div>
                <div>Networks</div>
                <div>Cameras</div>
                <div>Sounds</div>
                <div>Office</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg uppercase mb-4">Company</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>About Swoo</div>
                <div>Contact</div>
                <div>Career</div>
                <div>Blog</div>
                <div>Sitemap</div>
                <div>Store Locations</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg uppercase mb-4">Help Center</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>Customer Service</div>
                <div>Policy</div>
                <div>Terms & Conditions</div>
                <div>Track Order</div>
                <div>FAQs</div>
                <div>My Account</div>
                <div>Product Support</div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2024 <span className="font-bold text-black">Shawonetc3</span> .
              All Rights Reserved
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="text-sm text-blue-600">📱 Mobile Site</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
