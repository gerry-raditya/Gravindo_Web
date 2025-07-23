import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/LoginModal";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Search,
  ShoppingCart,
  ChevronDown,
  MoreHorizontal,
  Smartphone,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function TopupCategory() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const rekomendasi = [
    {
      id: 1,
      title: "Pulsa",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/6aa410ffd1c9ccf1fc6b21e50c9b0652792ccc98?width=80",
    },
    {
      id: 2,
      title: "Listrik PLN",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3db45e6c909f96d75c577aa91ada57855184c417?width=80",
    },
    {
      id: 3,
      title: "Paket Data",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3ff776c4d366da04b438b54542879426941acfcd?width=80",
    },
    {
      id: 4,
      title: "Voucher Game",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8adac5525a325492284ebd17c9f76fb174ee0f54?width=80",
    },
    {
      id: 5,
      title: "Uang Elektronik",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c7d7a7851c98e751a91988d96b47fb85436a521a?width=80",
    },
  ];

  const prabayarPascabayar = [
    {
      id: 1,
      title: "Indosat",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/dc0187f834f1f0e0811850d1e181a42309c73e11?width=80",
    },
    {
      id: 2,
      title: "Pulsa",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/fd756b28aa85716a7b199fa94a15868015b6b230?width=80",
    },
    {
      id: 3,
      title: "Pascabayar",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ec34c76b75d00e7dfef46b67d7655d886260d2a1?width=80",
    },
    {
      id: 4,
      title: "Paket Data",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1c63b857820ff88f7731bec8ee45a94a7fd5fdb?width=80",
    },
    {
      id: 5,
      title: "Roaming",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2f2cfe2162e1662f16538b80e644e5d82d974c82?width=80",
    },
  ];

  const bayarServices = [
    {
      id: 1,
      title: "E-Invoicing",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/76b524ee5c4ab5f029d59bbe6fa931efbbb31862?width=80",
    },
    {
      id: 2,
      title: "Tagihan Listrik",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3db45e6c909f96d75c577aa91ada57855184c417?width=80",
    },
    {
      id: 3,
      title: "Upgrade Internet & TV",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/4dbd0fabdbfbec4ccee43dca1675d7a2d76a46f7?width=80",
    },
    {
      id: 4,
      title: "Tagihan Kartu Kredit",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f23de12bad1c39bec7f799191e1e390bbdfa18b3?width=80",
    },
    {
      id: 5,
      title: "Premi Asuransi",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/26b69f4e071706b08baabd294aa73c901acbcc06?width=80",
    },
    {
      id: 6,
      title: "Angsuran Kredit",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3bcb7bef6088e459d70df47a0383f0eda9abee9a?width=80",
    },
    {
      id: 7,
      title: "Properti",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a2af1fe4071ce7e931418ed8c81247d8a3494eae?width=80",
    },
    {
      id: 8,
      title: "Langganan",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/517ccb1c8436634052ef37dba2909b65312fcccb?width=80",
    },
    {
      id: 9,
      title: "Internet dan TV Kabel",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2af99dda53f92a7913898879d2e9faf26a7c1abf?width=80",
    },
    {
      id: 10,
      title: "Air PDAM",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b6cca74eb5a068a840a9db08b8d6a6b1ece90037?width=80",
    },
    {
      id: 11,
      title: "Telkom",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b82233aab1e155c0c7421c02b3c632fca22d676c?width=80",
    },
    {
      id: 12,
      title: "Belajar",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/df9aef829fe39872aeaf8eb4b85a84816e415032?width=80",
    },
    {
      id: 13,
      title: "Bayar Sekaligus",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3425557fe9f5500d004ba0de798a730dc4ff6c73?width=80",
    },
    {
      id: 14,
      title: "Tokopedia Card",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/dac0333bec8f5e0195c90b9063ff08cb9adbf011?width=80",
    },
    {
      id: 15,
      title: "Tagihan Gas",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ee59c3cf4141ee0b634a893b2ddc7903197271c4?width=80",
    },
    {
      id: 16,
      title: "Biaya Pendidikan",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c8b66a5bc3cc7a26ce6bdc588b8c26e6c9da11af?width=80",
    },
    {
      id: 17,
      title: "Bridestory Pay",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/eb2a2590ae1c8d1a11e558578ad8ee0b2130b9d8?width=80",
    },
    {
      id: 18,
      title: "Prakerja",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/322529092e89e91ec72ac712e3a39229e79ecbd6?width=80",
    },
    {
      id: 19,
      title: "Gopay Later",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/9bf1791acb6487b30c5f0df6bc4f2cac2dff5995?width=80",
    },
  ];

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
                onClick={() => setLoginModalOpen(true)}
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

        {/* Popular Keywords */}
        <div className="px-4 pb-4">
          <div className="max-w-7xl mx-auto flex items-center space-x-4 text-xs text-gray-500">
            <span>samsung note 10</span>
            <span>charger mobil</span>
            <span>samsung a73</span>
            <span>pull up bar</span>
            <span>hdd 1tb</span>
            <span>xbox series x</span>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-72 bg-gradient-to-r from-pink-400 via-pink-500 to-orange-400 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-8">
          <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all">
            <ChevronLeft className="w-8 h-8 text-gray-700" />
          </button>
          <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all">
            <ChevronRight className="w-8 h-8 text-gray-700" />
          </button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              #TemanHarimu
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              bersama Telkomsel
            </h2>
            <p className="text-lg md:text-xl">
              Pengguna Baru, Pengguna Setia, Pasti Untungnya!
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Rekomendasi Untukmu */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Rekomendasi Untukmu!
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {rekomendasi.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer group"
              >
                <div className="w-18 h-18 mb-4 flex items-center justify-center bg-white rounded-full p-4 group-hover:shadow-md transition-shadow">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Prabayar & Pascabayar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Prabayar & Pascabayar
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {prabayarPascabayar.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 bg-white border border-gray-200 hover:border-green-300 hover:shadow-md rounded-lg transition-all cursor-pointer group"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain mr-3"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bayar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bayar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {bayarServices.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 bg-white border border-gray-200 hover:border-green-300 hover:shadow-md rounded-lg transition-all cursor-pointer group"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain mr-3"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 uppercase">
                Swoo - 1st NYC tech online market
              </h3>
              <p className="text-sm text-gray-600 uppercase mb-4">
                hotline 24/7
              </p>
              <p className="text-3xl font-bold text-green-600 mb-6">
                (025) 3686 25 16
              </p>
              <p className="text-sm text-gray-600 mb-4">
                257 Thatcher Road St, Brooklyn, Manhattan,
                <br />
                NY 10092
              </p>
              <p className="text-sm text-gray-600 mb-6">
                contact@Swootechmart.com
              </p>
              <div className="flex space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <span className="text-xs text-gray-600">○</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Categories */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 uppercase">
                Top Categories
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 capitalize">
                <li>Laptops</li>
                <li>PC & Computers</li>
                <li>Cell Phones</li>
                <li>Tablets</li>
                <li>Gaming & VR</li>
                <li>Networks</li>
                <li>Cameras</li>
                <li>Sounds</li>
                <li>Office</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 uppercase">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 capitalize">
                <li>About Swoo</li>
                <li>Contact</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Store Locations</li>
              </ul>
            </div>

            {/* Help Center & Partner */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 uppercase">
                Help Center
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 capitalize mb-6">
                <li>Customer Service</li>
                <li>Policy</li>
                <li>Terms & Conditions</li>
                <li>Track Order</li>
                <li>FAQs</li>
                <li>My Account</li>
                <li>Product Support</li>
              </ul>
              <h3 className="text-lg font-bold text-black mb-4 uppercase">
                Partner
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 capitalize">
                <li>Become Seller</li>
                <li>Affiliate</li>
                <li>Advertise</li>
                <li>Partnership</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>USD</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>Eng</option>
                </select>
              </div>

              <div className="text-center mb-4 md:mb-0">
                <p className="text-lg font-bold mb-2">
                  Subscribe & Get <span className="text-red-500">10% Off</span>{" "}
                  For Your First Order
                </p>
                <div className="flex items-center border-b border-gray-300 pb-2 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-3 py-2 text-sm outline-none"
                  />
                  <button className="text-green-600 font-bold text-sm px-4">
                    SUBSCRIBE →
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  By subscribing, you're accepted the our{" "}
                  <span className="underline">Policy</span>
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f8160cd8459269bc672d8e730ffe1d69b21da24e?width=27"
                  alt="Payment"
                  className="h-4"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5a87857eaac1ff6c39fd9fef15f82ee6d060d6a8?width=52"
                  alt="Payment"
                  className="h-4"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d7a65f7417026d0f18c557fafafed05dd27daee4?width=81"
                  alt="Payment"
                  className="h-4"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8de952b4add03991809713a7679327eaa8e7dcd4?width=77"
                  alt="Payment"
                  className="h-4"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/780c45d31c11dfa6099c7194a2db7e682d55b037?width=143"
                  alt="Payment"
                  className="h-4"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <p className="text-sm text-gray-600">
                © 2024 <span className="font-bold text-black">Shawonetc3</span>
                . All Rights Reserved
              </p>
              <p className="text-sm text-blue-600">📱 Mobile Site</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </div>
  );
}
