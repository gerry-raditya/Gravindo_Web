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
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("midnight-blue");
  const [selectedMemory, setSelectedMemory] = useState("128gb");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("detail");
  const [mainImage, setMainImage] = useState(0);

  const productImages = [
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&crop=center",
  ];

  const colorOptions = [
    {
      id: "midnight-blue",
      name: "Midnight Blue",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=70&h=70&fit=crop&crop=center",
      price: "Rp 60.000",
    },
    {
      id: "deep-purple",
      name: "Deep Purple",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=70&h=70&fit=crop&crop=center",
      price: "Rp 60.000",
    },
    {
      id: "space-black",
      name: "Space Black",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=70&h=70&fit=crop&crop=center",
      price: "Rp 60.000",
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
      name: "Samsung Galaxy S24 Ultra 256GB",
      price: "Rp 18.999.000",
      originalPrice: "Rp 21.999.000",
      discount: "13%",
      rating: 4.5,
      reviews: 152,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=318&h=318&fit=crop&crop=center",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 2,
      name: "iPad Pro 2024 M4 Chip 11 Inch 256GB WiFi + Cellular",
      price: "Rp 19.999.000 - Rp 25.999.000",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=318&h=318&fit=crop&crop=center",
      isNew: true,
      inStock: true,
      shipping: "Ongkir Rp 15.000",
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max 256GB Titanium Natural",
      price: "Rp 21.999.000",
      rating: 4.8,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=318&h=318&fit=crop&crop=center",
      inStock: true,
      freeShipping: true,
      freeGift: true,
    },
    {
      id: 4,
      name: "Xiaomi 14 Ultra 512GB Hitam",
      price: "Rp 16.999.000",
      originalPrice: "Rp 18.999.000",
      discount: "10%",
      rating: 4.6,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1574755393849-623942496936?w=318&h=318&fit=crop&crop=center",
      contact: false,
      freeShipping: true,
    },
  ];

  const recentlyViewed = [
    {
      id: 1,
      name: "Apple Watch Series 9 GPS 45mm Sport Band",
      price: "Rp 5.999.000",
      rating: 4.7,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=199&h=199&fit=crop&crop=center",
      isNew: true,
    },
    {
      id: 2,
      name: "MacBook Pro 14 inch M3 Chip 512GB",
      price: "Rp 32.999.000",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=199&h=199&fit=crop&crop=center",
      isNew: true,
    },
    {
      id: 3,
      name: "Samsung Galaxy A54 5G 256GB",
      price: "Rp 5.499.000",
      originalPrice: "Rp 6.499.000",
      discount: "Rp 1.000.000",
      rating: 4.4,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=199&h=199&fit=crop&crop=center",
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
        {/* Breadcrumb */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-teal-600">
              Home
            </Link>
            <span>›</span>
            <span>Cell Phones & Tablets</span>
            <span>›</span>
            <span className="text-gray-900">Somseng Galatero X6 Ultra LTE</span>
          </div>
        </div>

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
                      src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=100&h=100&fit=crop&crop=center"
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
