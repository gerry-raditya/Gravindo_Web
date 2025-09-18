import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/LoginModal";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
  Smartphone,
  ChevronRight,
  ChevronUp,
  ArrowUp,
} from "lucide-react";
import { api } from "@/lib/config";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    getProducts();
    const queryParam = searchParams.get("q") || "";
    setSearchQuery(queryParam);
  }, [searchParams]);

  const getProducts = async () => {
    const products = await api.get("/products")
    console.log(products)
  }

  const [selectedFilters, setSelectedFilters] = useState<{
    storeType: string[];
    location: string[];
    condition: string[];
    rating: boolean;
    offers: string[];
    others: string[];
    shippingDuration: string[];
  }>({
    storeType: [],
    location: [],
    condition: [],
    rating: false,
    offers: [],
    others: [],
    shippingDuration: [],
  });

  // Search results data based on the Figma design
  const searchResults = [
    {
      id: 1,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f404ca3e609cf6fdb4b4a4eb883a66397a6e0a66?width=276",
      title:
        "Refill Strip Sinocare Safe AQ Smart isi 25 Test Strip / Strip Uji Glukosa Darah Sinocare isi 25 Strip terlaris",
      price: "Rp18.900",
      originalPrice: "Rp40.000",
      rating: 5.0,
      sold: "12 terjual",
      storeName: "LANSANI STORE",
      location: "Jakarta Timur",
      specialTag: "Bisa COD",
      isVerified: false,
    },
    {
      id: 2,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/1adc1e6404860a0ce023ff54b32dbf56da0aef59?width=276",
      title: "Strip Tes Gula Darah Accu-Chek Performa - 2 Tube - Isi 100 Strip",
      price: "Rp550.000",
      rating: 4.9,
      sold: "1 terjual",
      storeName: "Nuwo Medical Store",
      location: "Bandar Lampung",
      specialTag: "Bisa COD",
      isVerified: true,
      badge: "53%",
    },
    {
      id: 3,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2acde719045324a5218958d2f97d538fa57ff789?width=276",
      title:
        "ONESTEP HIV TEST - Alat Uji HIV - HIV Tes - Alat Tes HIV - Cek HIV",
      price: "Rp87.990",
      rating: 4.9,
      sold: "3rb+ terjual",
      storeName: "Happy Life Forever Shop",
      location: "Bandung",
      specialTag: "Bisa COD",
      isVerified: true,
    },
    {
      id: 4,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5ce505f4d2f1912a84573c47eef4b69a1e0d2f67?width=276",
      title: "TES HAMIL ONEMED / TEST PACK / TES KEHAMILAN STRIP ONEMED 50 PCS",
      price: "Rp69.000",
      rating: 5.0,
      sold: "10 terjual",
      storeName: "MEDIKA SYARIAH",
      location: "Kab. Bogor",
      specialTag: "Bisa COD",
      isVerified: true,
    },
    {
      id: 5,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d1fd1f2cc34d3e77371d82d204a5c85563506d36?width=276",
      title: "TBC TUBERCULOSIS TEST ALAT UJI TB TES AKURAT LENGKAP",
      price: "Rp39.900",
      rating: 4.8,
      sold: "250+ terjual",
      storeName: "Toko Vitina",
      location: "Jakarta Timur",
      brandLogo:
        "https://api.builder.io/api/v1/image/assets/TEMP/53d3092eea8a76c9d2cd4f0bdb8b328c5560fe71?width=96",
      isVerified: true,
    },
    {
      id: 6,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4a2a68cd2c2190ce725675eee2d4959ab3bc16fa?width=276",
      title:
        "Easy Touch Strip Tes Cek Gula Darah Isi 25 Stik Glucose EasyTouch",
      price: "Rp95.000",
      rating: 5.0,
      sold: "29 terjual",
      storeName: "Aman Alkesindo",
      location: "Cirebon",
      specialTag: "Bisa COD",
      isVerified: true,
    },
  ];

  // Filter search results based on search query
  const filteredResults = searchResults.filter((product) => {
    if (!searchQuery.trim()) return true;
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const handleFilterChange = (
    filterType: keyof typeof selectedFilters,
    value: string | boolean,
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: Array.isArray(prev[filterType])
        ? (prev[filterType] as string[]).includes(value as string)
          ? (prev[filterType] as string[]).filter((item) => item !== value)
          : [...(prev[filterType] as string[]), value as string]
        : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gray-100 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4" />
            <span className="font-medium">Gratis Ongkir + Banyak Promo</span>
            <span>belanja di aplikasi</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-gray-600">
            <span>Tentang Tokopedia</span>
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
              <form onSubmit={handleSearch} className="relative">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari di Tokopedia"
                  className="pl-10 pr-4 py-2"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="hidden lg:flex items-center space-x-1 text-sm">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="text-xs text-gray-600">Dikirim ke</div>
                  <div className="font-semibold text-xs flex items-center">
                    Rumah Gerry Raditya Kusmana Yahya
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => setLoginModalOpen(true)}
              >
                Masuk
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="w-48 space-y-4">
            <h2 className="font-bold text-sm">Filter</h2>

            {/* Store Type Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Jenis toko</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mall"
                    checked={selectedFilters.storeType.includes("mall")}
                    onCheckedChange={() =>
                      handleFilterChange("storeType", "mall")
                    }
                  />
                  <label
                    htmlFor="mall"
                    className="text-xs flex items-center space-x-2"
                  >
                    <span>Mall</span>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/33af3204bcab1c7669be572f41d702a720d7fd14?width=32"
                      alt="Mall"
                      className="w-4 h-4"
                    />
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="power-shop"
                    checked={selectedFilters.storeType.includes("power-shop")}
                    onCheckedChange={() =>
                      handleFilterChange("storeType", "power-shop")
                    }
                  />
                  <label
                    htmlFor="power-shop"
                    className="text-xs flex items-center space-x-2"
                  >
                    <span>Power Shop</span>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c0dde6f24a5424c500570d97b181d6355fd73e51?width=32"
                      alt="Power Shop"
                      className="w-4 h-4"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Location Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Lokasi</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="space-y-2 mt-2">
                {[
                  "DKI Jakarta",
                  "Jabodetabek",
                  "Bandung",
                  "Medan",
                  "Surabaya",
                ].map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox
                      id={location}
                      checked={selectedFilters.location.includes(location)}
                      onCheckedChange={() =>
                        handleFilterChange("location", location)
                      }
                    />
                    <label htmlFor={location} className="text-xs">
                      {location}
                    </label>
                  </div>
                ))}
                <button className="text-green-600 text-xs">
                  Lihat selengkapnya
                </button>
              </div>
            </div>

            {/* Price Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Harga</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="space-y-2 mt-2">
                <div className="flex space-x-2">
                  <Input placeholder="" className="text-xs h-8" />
                  <Input placeholder="" className="text-xs h-8" />
                </div>
              </div>
            </div>

            {/* Condition Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Kondisi</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="space-y-2 mt-2">
                {["Baru", "Bekas"].map((condition) => (
                  <div key={condition} className="flex items-center space-x-2">
                    <Checkbox
                      id={condition}
                      checked={selectedFilters.condition.includes(condition)}
                      onCheckedChange={() =>
                        handleFilterChange("condition", condition)
                      }
                    />
                    <label htmlFor={condition} className="text-xs">
                      {condition}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Rating</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="rating-4"
                  checked={selectedFilters.rating}
                  onCheckedChange={() =>
                    handleFilterChange("rating", !selectedFilters.rating)
                  }
                />
                <label
                  htmlFor="rating-4"
                  className="text-xs flex items-center space-x-1"
                >
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6e4f5642c4d484b59be3ea39e874f62ae6ba520b?width=32"
                    alt="Star"
                    className="w-4 h-4"
                  />
                  <span>Rating 4 ke atas</span>
                </label>
              </div>
            </div>

            {/* Offers Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Penawaran</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="space-y-2 mt-2">
                {["COD", "Harga Diskon"].map((offer) => (
                  <div key={offer} className="flex items-center space-x-2">
                    <Checkbox
                      id={offer}
                      checked={selectedFilters.offers.includes(offer)}
                      onCheckedChange={() =>
                        handleFilterChange("offers", offer)
                      }
                    />
                    <label htmlFor={offer} className="text-xs">
                      {offer}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Others Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Lainnya</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="space-y-2 mt-2">
                {["PreOrder", "Ready Stock"].map((other) => (
                  <div key={other} className="flex items-center space-x-2">
                    <Checkbox
                      id={other}
                      checked={selectedFilters.others.includes(other)}
                      onCheckedChange={() =>
                        handleFilterChange("others", other)
                      }
                    />
                    <label htmlFor={other} className="text-xs">
                      {other}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Duration Filter */}
            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                <span>Durasi Pengiriman</span>
                <ChevronUp className="w-4 h-4" />
              </button>
              <div className="space-y-2 mt-2">
                {["Instan", "Same Day"].map((duration) => (
                  <div key={duration} className="flex items-center space-x-2">
                    <Checkbox
                      id={duration}
                      checked={selectedFilters.shippingDuration.includes(
                        duration,
                      )}
                      onCheckedChange={() =>
                        handleFilterChange("shippingDuration", duration)
                      }
                    />
                    <label htmlFor={duration} className="text-xs">
                      {duration}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Tab Navigation */}
            <div className="border-b mb-4">
              <div className="flex space-x-8">
                <button className="pb-2 border-b-2 border-green-600 text-green-600 font-semibold text-sm flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.1401 4.45L21.9101 9.76C21.9517 9.83419 21.9789 9.91565 21.9901 10C21.9901 10.7293 21.7003 11.4288 21.1846 11.9445C20.6689 12.4603 19.9694 12.75 19.2401 12.75C18.5107 12.75 17.8113 12.4603 17.2955 11.9445C16.7798 11.4288 16.4901 10.7293 16.4901 10C16.4901 9.80109 16.4111 9.61032 16.2704 9.46967C16.1298 9.32902 15.939 9.25 15.7401 9.25C15.5412 9.25 15.3504 9.32902 15.2098 9.46967C15.0691 9.61032 14.9901 9.80109 14.9901 10C14.9901 10.7293 14.7004 11.4288 14.1846 11.9445C13.6689 12.4603 12.9694 12.75 12.2401 12.75C11.5107 12.75 10.8113 12.4603 10.2955 11.9445C9.77981 11.4288 9.49008 10.7293 9.49008 10C9.49008 9.80109 9.41106 9.61032 9.27041 9.46967C9.12976 9.32902 8.93899 9.25 8.74008 9.25C8.54117 9.25 8.3504 9.32902 8.20975 9.46967C8.0691 9.61032 7.99008 9.80109 7.99008 10C7.99008 10.7293 7.70035 11.4288 7.18463 11.9445C6.6689 12.4603 5.96943 12.75 5.24008 12.75C4.51074 12.75 3.81126 12.4603 3.29554 11.9445C2.77981 11.4288 2.49008 10.7293 2.49008 10C2.47564 9.92065 2.47564 9.83935 2.49008 9.76L4.26008 4.45C4.37564 4.10095 4.5982 3.79717 4.89617 3.58176C5.19415 3.36636 5.5524 3.25028 5.92008 3.25H18.4801C18.8478 3.25028 19.206 3.36636 19.504 3.58176C19.802 3.79717 20.0245 4.10095 20.1401 4.45Z" />
                  </svg>
                  <span>Produk</span>
                </button>
                <button className="pb-2 text-gray-600 text-sm flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.1401 4.45L21.9101 9.76C21.9517 9.83419 21.9789 9.91565 21.9901 10" />
                  </svg>
                  <span>Toko</span>
                </button>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-600">
                Menampilkan 1 - {filteredResults.length} barang dari{" "}
                {filteredResults.length} total untuk "{searchQuery}"
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold">Urutkan:</span>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48 h-8">
                    <SelectValue placeholder="Paling Sesuai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Paling Sesuai</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredResults.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer relative"
                >
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full aspect-square object-cover rounded-t-lg"
                      />
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                            {product.badge}
                          </div>
                          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-t-[5px] border-t-red-800 absolute -bottom-1 right-0"></div>
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
                            className="h-4 w-auto"
                          />
                        </div>
                      )}

                      {/* Product Title */}
                      <h3 className="text-xs line-clamp-3 mb-2 text-gray-800 leading-tight">
                        {product.title}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="font-bold text-sm text-gray-900">
                          {product.price}
                        </div>
                        {product.originalPrice && (
                          <div className="text-xs text-gray-400 line-through">
                            {product.originalPrice}
                          </div>
                        )}
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
                          {product.isVerified && (
                            <img
                              src="https://api.builder.io/api/v1/image/assets/TEMP/bf8995259dd23ff988dee3edeb28578d2b934037?width=32"
                              alt="Verified"
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
              ))}
            </div>

            {/* Scroll to top button */}
            <div className="fixed bottom-8 right-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ArrowUp className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </div>
  );
}

export default SearchResults;
