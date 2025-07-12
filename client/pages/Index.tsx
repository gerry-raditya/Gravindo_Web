import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
  ChevronUp,
} from "lucide-react";

export default function Index() {
  const [activeFilters, setActiveFilters] = useState({
    jenistoko: false,
    lokasi: false,
    harga: false,
    kondisi: false,
    rating: false,
    penawaran: false,
    lainnya: false,
    durasi: false,
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const products = [
    {
      id: 1,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/f404ca3e-609c-4fdb-4b4a-4eb883a66397.jpg",
      title:
        "Refill Strip Sinocare Safe AQ Smart isi 25 Test Strip / Strip Uji Glukosa Darah Sinocare isi 25 Strip terlaris",
      price: "Rp18.900",
      originalPrice: "Rp40.000",
      cod: true,
      sold: "",
      rating: "",
      store: "LANSANI STORE",
      location: "Jakarta Timur",
    },
    {
      id: 2,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/1adc1e64-0486-0a0c-e023-ff54b32dbf56.jpg",
      title: "Strip Tes Gula Darah Accu-Chek Performa - 2 Tube - Isi 100 Strip",
      price: "Rp550.000",
      originalPrice: "",
      cod: true,
      sold: "1 terjual",
      rating: "",
      store: "Nuwo Medical Store",
      location: "Bandar Lampung",
    },
    {
      id: 3,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/2acde719-0453-24a5-2189-58d2f97d538f.jpg",
      title:
        "ONESTEP HIV TEST - Alat Uji HIV - HIV Tes - Alat Tes HIV - Cek HIV",
      price: "Rp87.990",
      originalPrice: "",
      cod: true,
      sold: "3rb+ terjual",
      rating: "4.9",
      store: "Happy Life Forever Shop",
      location: "Bandung",
    },
    {
      id: 4,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/5ce505f4-d2f1-912a-8457-3c47eef4b69a.jpg",
      title: "TES HAMIL ONEMED / TEST PACK / TES KEHAMILAN STRIP ONEMED 50 PCS",
      price: "Rp69.000",
      originalPrice: "",
      cod: true,
      sold: "10 terjual",
      rating: "5.0",
      store: "MEDIKA SYARIAH",
      location: "Kab. Bogor",
    },
    {
      id: 5,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/d1fd1f2c-c34d-3e77-371d-82d204a5c855.jpg",
      title: "TBC TUBERCULOSIS TEST ALAT UJI TB TES AKURAT LENGKAP",
      price: "Rp39.900",
      originalPrice: "",
      cod: false,
      sold: "250+ terjual",
      rating: "4.8",
      store: "Toko Vitina",
      location: "Jakarta Timur",
      badge: "TBC TEST KIT",
    },
    {
      id: 6,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/4a2a68cd-2c21-90ce-7256-75eee2d4959a.jpg",
      title:
        "Easy Touch Strip Tes Cek Gula Darah Isi 25 Stik Glucose EasyTouch",
      price: "Rp95.000",
      originalPrice: "",
      cod: true,
      sold: "29 terjual",
      rating: "5.0",
      store: "Aman Alkesindo",
      location: "Cirebon",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        {/* Top Banner */}
        <div className="bg-gray-100 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs">📱</span>
              </div>
              <span className="text-xs font-bold">
                Gratis Ongkir + Banyak Promo
              </span>
              <span className="text-xs">belanja di aplikasi</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-6 text-xs text-gray-600">
              <span>Tentang Tokopedia</span>
              <span>Mulai Berjualan</span>
              <span>Promo</span>
              <span>Tokopedia Care</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-green-600">tokopedia</div>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-sm">Kategori</span>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Input
                  placeholder="Cari produk, jasa, & seller"
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="text-xs text-gray-600">Dikirim ke</div>
                  <div className="font-semibold">
                    Rumah Gerry Raditya Kusmana Yahya
                  </div>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
              <ShoppingCart className="w-6 h-6" />
              <Button variant="outline" size="sm">
                Masuk
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb & Tabs */}
        <div className="border-b mb-6">
          <div className="flex space-x-8">
            <button className="pb-2 border-b-2 border-green-600 text-green-600 font-medium flex items-center space-x-2">
              <span>📦</span>
              <span>Produk</span>
            </button>
            <button className="pb-2 text-gray-600 flex items-center space-x-2">
              <span>🏪</span>
              <span>Toko</span>
            </button>
          </div>
        </div>

        {/* Results Info & Sort */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-600">
            Menampilkan 1 - 60 barang dari total untuk "tes"
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Urutkan:</span>
            <Select defaultValue="relevant">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Paling Sesuai</SelectItem>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                <SelectItem value="newest">Terbaru</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="w-64 space-y-4">
            <h3 className="font-bold text-lg">Filter</h3>

            {/* Jenis Toko */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("jenistoko")}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                Jenis toko
                {activeFilters.jenistoko ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {activeFilters.jenistoko && (
                <div className="space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Mall</span>
                    <Badge variant="secondary" className="text-xs">
                      🟣
                    </Badge>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Power Shop</span>
                    <Badge variant="secondary" className="text-xs">
                      🟢
                    </Badge>
                  </label>
                </div>
              )}
            </div>

            {/* Lokasi */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("lokasi")}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                Lokasi
                {activeFilters.lokasi ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {activeFilters.lokasi && (
                <div className="space-y-2 mt-2">
                  {[
                    "DKI Jakarta",
                    "Jabodetabek",
                    "Bandung",
                    "Medan",
                    "Surabaya",
                  ].map((location) => (
                    <label
                      key={location}
                      className="flex items-center space-x-2"
                    >
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{location}</span>
                    </label>
                  ))}
                  <button className="text-green-600 text-xs hover:underline">
                    Lihat selengkapnya
                  </button>
                </div>
              )}
            </div>

            {/* Harga */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("harga")}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                Harga
                {activeFilters.harga ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {activeFilters.harga && (
                <div className="space-y-2 mt-2">
                  <div className="flex space-x-2">
                    <Input placeholder="Minimum" className="text-sm" />
                    <Input placeholder="Maximum" className="text-sm" />
                  </div>
                </div>
              )}
            </div>

            {/* Kondisi */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("kondisi")}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                Kondisi
                {activeFilters.kondisi ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {activeFilters.kondisi && (
                <div className="space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Baru</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Bekas</span>
                  </label>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("rating")}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                Rating
                {activeFilters.rating ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {activeFilters.rating && (
                <div className="mt-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">Rating 4 ke atas</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="p-3">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full aspect-square object-cover rounded mb-3"
                      />
                      {product.badge && (
                        <Badge className="absolute top-2 left-2 bg-orange-500 text-white text-xs">
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-sm line-clamp-3 mb-2 text-gray-800">
                      {product.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-bold text-sm">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {product.cod && (
                      <Badge
                        variant="outline"
                        className="text-xs text-orange-600 border-orange-200 mb-2"
                      >
                        Bisa COD
                      </Badge>
                    )}

                    {(product.rating || product.sold) && (
                      <div className="flex items-center space-x-1 text-xs text-gray-600 mb-2">
                        {product.rating && (
                          <>
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{product.rating}</span>
                            <span>•</span>
                          </>
                        )}
                        {product.sold && <span>{product.sold}</span>}
                      </div>
                    )}

                    <div className="text-xs text-gray-600">
                      <div className="font-medium">{product.store}</div>
                      <div>{product.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
