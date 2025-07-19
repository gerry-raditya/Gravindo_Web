import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Search,
  ShoppingCart,
  Star,
  ChevronDown,
  MoreHorizontal,
  Mail,
  Send,
  Smartphone,
  CreditCard,
  Zap,
  Globe,
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");

  // Sample data for different sections
  const trendingKeywords = [
    "samsung note 10",
    "charger mobil",
    "samsung a73",
    "pull up bar",
    "hdd 1tb",
    "xbox series x",
  ];

  const categories = [
    {
      id: 1,
      name: "Makanan Minuman",
      image:
        "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/9/11/d1a157d5-0175-4990-8539-8b9c92c31fb5.png",
    },
    {
      id: 2,
      name: "Figurs",
      image:
        "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/9/11/2a5e82a7-e0b4-4c3d-9de1-3b5e7a4b8c9f.png",
    },
    {
      id: 3,
      name: "Tas Selempang",
      image:
        "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/9/11/3c6f93b8-f1c5-4d4e-ae12-4c6f8b5d9e0a.png",
    },
    {
      id: 4,
      name: "Flat Shoes Wanita",
      image:
        "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/9/11/4d7f0a4c-f2d6-4e5f-bf23-5d7f9c6e0a1b.png",
    },
  ];

  const flashSaleProducts = [
    {
      id: 1,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/f404ca3e-609c-4fdb-4b4a-4eb883a66397.jpg",
      title: "Greavard - 087/078 AR - Violet ex (Pokemon TCG Japanese)",
      price: "Rp50.000",
      rating: 5.0,
      sold: "22 terjual",
    },
    {
      id: 2,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/1adc1e64-0486-0a0c-e023-ff54b32dbf56.jpg",
      title: "Pokemon Violet EX sv1V - 087 Greavard AR",
      price: "Rp50.000",
      rating: 5.0,
      sold: "4 terjual",
    },
    {
      id: 3,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/2acde719-0453-24a5-2189-58d2f97d538f.jpg",
      title:
        "AR Scarlet Violet sv1S sv1V Kirlia Ralts Fidough Riolu Greavard Pachirisu Scovillain Slowpoke Japan",
      price: "Rp45.000",
      rating: 5.0,
      sold: "10 terjual",
    },
    {
      id: 4,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/5ce505f4-d2f1-912a-8457-3c47eef4b69a.jpg",
      title:
        "Kartu Pokemon TCG Japan Greavard AR sv1v 087/078 Trading Card Game Jepang Jpn Original",
      price: "Rp45.000",
      rating: 5.0,
      sold: "6 terjual",
    },
    {
      id: 5,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/d1fd1f2c-c34d-3e77-371d-82d204a5c855.jpg",
      title: "pokemon tcg sv1v 087/078 greavard ar",
      price: "Rp45.000",
      rating: 5.0,
      sold: "3 terjual",
    },
    {
      id: 6,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/4a2a68cd-2c21-90ce-7256-75eee2d4959a.jpg",
      title: "Greavard SV1V AR 87 Pokemon TCG Japan",
      price: "Rp115.000",
      rating: 5.0,
      sold: "4 terjual",
    },
  ];

  const popularProducts = [...flashSaleProducts];
  const newProducts = [...flashSaleProducts];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gray-100 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4" />
            <span className="font-medium">Download Tokopedia App</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-gray-600">
            <span>Tentang Tokopedia</span>
            <span>Mitra Tokopedia</span>
            <span>Mulai Berjualan</span>
            <span>Promo</span>
            <span>Tokopedia Care</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Logo and Category */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <span className="font-bold text-green-600 text-xl hidden sm:block">
                  Tokopedia
                </span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <MoreHorizontal className="w-4 h-4" />
                <span>Kategori</span>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  placeholder="Cari di Tokopedia"
                  className="pl-10 pr-4 py-2"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              {/* Trending Keywords */}
              <div className="hidden md:flex items-center space-x-4 mt-2 text-xs text-gray-600">
                {trendingKeywords.map((keyword, index) => (
                  <button
                    key={index}
                    className="hover:text-green-600 capitalize"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="hidden lg:flex items-center space-x-1 text-sm">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="text-xs text-gray-600">Dikirim ke</div>
                  <div className="font-semibold text-xs flex items-center">
                    Jakarta Pusat
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Masuk
              </Button>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[400px] md:h-[500px] bg-gradient-to-r from-blue-500/20 to-green-500/20 flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.tokopedia.net/img/NsjrJu/2024/1/9/5b5e93a4-4b5f-4b1e-8c1f-5a8e5c7f9b2a.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Don't miss amazing grocery deals
              </h1>
              <p className="text-lg md:text-2xl mb-8 font-light">
                Sign up for the daily newsletter
              </p>

              {/* Newsletter Signup */}
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-8"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Hero Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Top Up & Bills Section */}
        <section className="py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Top Up & Tagihan */}
            <div className="bg-white rounded-xl border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Top Up & Tagihan</h2>
                <button className="text-green-600 text-sm font-medium">
                  Lihat Semua
                </button>
              </div>

              <div className="border rounded-lg p-4">
                <Tabs defaultValue="pulsa" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-4">
                    <TabsTrigger value="pulsa" className="text-xs">
                      Pulsa
                    </TabsTrigger>
                    <TabsTrigger value="data" className="text-xs">
                      Paket Data
                    </TabsTrigger>
                    <TabsTrigger value="pln" className="text-xs">
                      Listrik PLN
                    </TabsTrigger>
                    <TabsTrigger value="roaming" className="text-xs">
                      Roaming
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="pulsa" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">
                        Nomor Telepon
                      </label>
                      <Input placeholder="Masukkan nomor telepon" />
                    </div>
                    <div className="flex gap-3">
                      <Select>
                        <SelectTrigger className="flex-1">
                          <SelectValue placeholder="Nominal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10000">Rp 10.000</SelectItem>
                          <SelectItem value="25000">Rp 25.000</SelectItem>
                          <SelectItem value="50000">Rp 50.000</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Beli
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Kategori Pilihan */}
            <div>
              <h2 className="text-xl font-bold mb-6">Kategori Pilihan</h2>
              <div className="grid grid-cols-4 gap-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-white text-2xl">🛍️</span>
                    </div>
                    <span className="text-xs text-center font-medium">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sale Section */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Flash Sale</h2>
            <button className="text-green-600 text-sm font-medium">
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {flashSaleProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
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
        </section>

        {/* Popular Products Section */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Produk Terlaris Bulan Ini</h2>
            <button className="text-green-600 text-sm font-medium">
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularProducts.map((product) => (
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
        </section>

        {/* New Products Section */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Produk Terbaru</h2>
            <button className="text-green-600 text-sm font-medium">
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {newProducts.map((product) => (
              <Link key={`new-${product.id}`} to={`/product/${product.id}`}>
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
        </section>

        {/* For You Section */}
        <section className="py-8">
          {/* Section Background */}
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
                  {forYouProducts.map((product) => (
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
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold">
                  T
                </div>
                <span className="font-bold text-green-600 text-xl">
                  Tokopedia
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Jual beli mudah hanya di Tokopedia. Gabung dan rasakan kemudahan
                bertransaksi di Tokopedia.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Tokopedia</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-green-600">
                    Tentang Tokopedia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Hak Kekayaan Intelektual
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Jual Beli</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-green-600">
                    Mulai Berjualan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Pusat Edukasi Seller
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Mitra Topads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Pusat Bantuan
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Keamanan & Privasi</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-green-600">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Dispute Resolution
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    DSA Information
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Tokopedia. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-600 text-sm">Negara:</span>
              <Select defaultValue="id">
                <SelectTrigger className="w-24 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="id">🇮🇩 ID</SelectItem>
                  <SelectItem value="en">🇺🇸 EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
