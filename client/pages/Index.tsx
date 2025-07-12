import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Package,
  Store,
  MoreHorizontal,
  ArrowUp,
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      discount: "53%",
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
    {
      id: 7,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/2e14a5ef-0aea-9948-8200-43b657100c42.jpg",
      title: "Onemed Test tes hamil tes kehamilan akurat per box isi 50 strip",
      price: "Rp60.000",
      originalPrice: "",
      cod: true,
      sold: "750+ terjual",
      rating: "4.9",
      store: "Excelencia",
      location: "Bandung",
    },
    {
      id: 8,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/55c34f03-7325-1b42-a8d4-b1d8f176b57d.jpg",
      title:
        "Alat tes narkoba- 3 parameter / drug tes multi3 isi 25 tes orient gene - Answer",
      price: "Rp585.000",
      originalPrice: "",
      cod: true,
      sold: "60+ terjual",
      rating: "5.0",
      store: "drar medika",
      location: "Jakarta Selatan",
    },
    {
      id: 9,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/90695a10-4f81-e4c2-2679-ca7f060b2e19.jpg",
      title:
        "Alat Tes Kehamilan Sensitif Digital - Tes Kehamilan Pribadi - Akurat",
      price: "Rp250.000",
      originalPrice: "",
      cod: false,
      sold: "50+ terjual",
      rating: "4.7",
      store: "TokoMDRtokped",
      location: "Jakarta Barat",
    },
    {
      id: 10,
      image:
        "https://images.tokopedia.net/img/cache/138-square/VqbcmM/2024/11/14/65a796ae-1041-068c-9424-213ac4d1e62b.jpg",
      title: "test pack sensitif tes kehamilan sensitif",
      price: "Rp24.174",
      originalPrice: "",
      cod: false,
      sold: "6rb+ terjual",
      rating: "4.9",
      store: "Anno Pharmacy_NEW",
      location: "Jakarta Barat",
      badge: "test pack",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
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
              <svg
                width="150"
                height="33"
                viewBox="0 0 150 34"
                fill="none"
                className="h-8"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M80.1848 22.8C78.5545 24.4614 76.6055 25.2972 74.3452 25.2972C72.5173 25.2972 70.9645 24.9228 69.3797 23.9969V20.1859C70.6542 21.0548 72.2555 21.8824 73.8362 21.8824C77.1321 21.8824 79.0945 19.6034 79.0945 16.3717C79.0945 13.1379 77.0648 10.7907 73.7669 10.7907C72.2948 10.7907 71.1011 11.3224 70.1679 12.389C69.1686 13.5445 68.6514 15.1966 68.6514 17.3793V32.4279H68.4031C67.9702 32.4268 67.5417 32.3405 67.1421 32.1738C66.7425 32.0071 66.3797 31.7634 66.0743 31.4564C65.7689 31.1495 65.527 30.7855 65.3623 30.3851C65.1976 29.9846 65.1134 29.5557 65.1145 29.1228V16.8155C65.1145 11.5924 68.2914 7.37586 73.7524 7.37586C76.4473 7.37586 78.6373 8.30172 80.2976 10.1638C81.8586 11.9028 82.6314 14.1062 82.6314 16.7586C82.6314 19.1172 81.8152 21.1355 80.1848 22.8Z"
                  fill="#03AC0E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.7204 22.77C23.971 24.4531 21.871 25.2972 19.4328 25.2972C17.0152 25.2972 14.9266 24.4521 13.1794 22.77C11.4259 21.0797 10.5518 18.929 10.5518 16.3366C10.5518 11.28 14.3939 7.37586 19.4328 7.37586C21.8504 7.37586 23.9452 8.22724 25.7028 9.92276C27.4677 11.6224 28.349 13.7669 28.349 16.3366C28.349 18.929 27.4739 21.0797 25.7215 22.77H25.7204Z"
                  fill="#03AC0E"
                />
              </svg>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-sm">Kategori</span>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-lg mx-4 md:mx-8">
              <div className="relative">
                <Input
                  placeholder="Cari produk, jasa, & seller"
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden md:flex items-center space-x-1 text-sm">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="text-xs text-gray-600">Dikirim ke</div>
                  <div className="font-semibold text-xs">
                    Rumah Gerry Raditya Kusmana Yahya
                  </div>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
              <ShoppingCart className="w-6 h-6" />
              <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
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
              <Package className="w-5 h-5" />
              <span>Produk</span>
            </button>
            <button className="pb-2 text-gray-600 flex items-center space-x-2">
              <Store className="w-5 h-5" />
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
          <div className="w-64 space-y-4 hidden lg:block">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
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
                      {product.discount && (
                        <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs">
                          {product.discount}
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

                    <div className="flex items-start justify-between">
                      <div className="text-xs text-gray-600 flex-1">
                        <div className="font-medium">{product.store}</div>
                        <div>{product.location}</div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-50"
        >
          <ArrowUp className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
}
