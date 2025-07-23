import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/LoginModal";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function PulsaTopup() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("100000");

  const serviceCategories = [
    { id: "pulsa", name: "Pulsa", icon: "📱", active: true },
    { id: "paket-data", name: "Paket Data", icon: "📊", active: false },
    { id: "listrik-pln", name: "Listrik PLN", icon: "⚡", active: false },
    {
      id: "uang-elektronik",
      name: "Uang Elektronik",
      icon: "💳",
      active: false,
    },
    { id: "vouchers", name: "Vouchers", icon: "🎫", active: false },
    {
      id: "angsuran-kredit",
      name: "Angsuran Kredit",
      icon: "🏦",
      active: false,
    },
    { id: "telkom", name: "Telkom", icon: "📞", active: false },
    { id: "tagihan-gas", name: "Tagihan Gas", icon: "🔥", active: false },
    {
      id: "internet-tv",
      name: "Internet & TV Kabel",
      icon: "📺",
      active: false,
    },
    { id: "streaming", name: "Streaming", icon: "🎬", active: false },
    { id: "kartu-kredit", name: "Kartu Kredit", icon: "💳", active: false },
    { id: "lainnya", name: "Lainnya", icon: "⋯", active: false },
  ];

  const creditOptions = [
    {
      amount: "5000",
      price: "5.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "10000",
      price: "10.000",
      originalPrice: null,
      badge: "TERMURAH!!!",
      available: true,
    },
    {
      amount: "15000",
      price: "15.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "20000",
      price: "20.000",
      originalPrice: "Rp20.500",
      badge: "PROMO TERBATAS!",
      available: true,
    },
    {
      amount: "20000-2",
      price: "20.000",
      originalPrice: "Rp20.500",
      badge: null,
      available: true,
    },
    {
      amount: "25000",
      price: "25.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "30000",
      price: "30.000",
      originalPrice: null,
      badge: "TERMURAH!!!",
      available: true,
    },
    {
      amount: "35000",
      price: "35.000",
      originalPrice: "Rp36.500",
      badge: null,
      available: true,
    },
    {
      amount: "40000",
      price: "40.000",
      originalPrice: null,
      badge: "TERMURAH!!!",
      available: true,
    },
    {
      amount: "45000",
      price: "45.000",
      originalPrice: "Rp45.500",
      badge: null,
      available: true,
    },
    {
      amount: "50000",
      price: "50.000",
      originalPrice: null,
      badge: "TERMURAH!!!",
      available: true,
    },
    {
      amount: "55000",
      price: "55.000",
      originalPrice: "Rp55.500",
      badge: null,
      available: true,
    },
    {
      amount: "60000",
      price: "60.000",
      originalPrice: "Rp61.500",
      badge: null,
      available: true,
    },
    {
      amount: "75000",
      price: "75.000",
      originalPrice: "Rp76.500",
      badge: "PROMO TERBATAS!",
      available: true,
    },
    {
      amount: "75000-2",
      price: "75.000",
      originalPrice: null,
      badge: "TERMURAH!!!",
      available: true,
    },
    {
      amount: "100000",
      price: "100.000",
      originalPrice: null,
      badge: "PROMO TERBATAS!",
      available: true,
    },
    {
      amount: "100000-selected",
      price: "100.000",
      originalPrice: null,
      badge: null,
      available: true,
      selected: true,
    },
    {
      amount: "150000",
      price: "150.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "200000",
      price: "200.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "200000-promo",
      price: "200.000",
      originalPrice: "Rp201.500",
      badge: "PROMO TERBATAS!",
      available: true,
    },
    {
      amount: "300000",
      price: "300.000",
      originalPrice: "Rp302.000",
      badge: "PROMO TERBATAS!",
      available: true,
    },
    {
      amount: "300000-2",
      price: "300.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "500000",
      price: "500.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "1000000",
      price: "1.000.000",
      originalPrice: null,
      badge: null,
      available: true,
    },
    {
      amount: "5000-unavailable",
      price: "5.000",
      originalPrice: "Rp6.500",
      badge: "PROMO TERBATAS!",
      available: false,
    },
    {
      amount: "10000-unavailable",
      price: "10.000",
      originalPrice: "Rp11.500",
      badge: "PROMO TERBATAS!",
      available: false,
    },
    {
      amount: "15000-unavailable",
      price: "15.000",
      originalPrice: "Rp16.500",
      badge: "PROMO TERBATAS!",
      available: false,
    },
    {
      amount: "50000-unavailable",
      price: "50.000",
      originalPrice: "Rp51.500",
      badge: "PROMO TERBATAS!",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#01A49E] h-[61px] flex items-center justify-between px-4">
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f3f1c5e938d9df093be2b86b97e855fe52baf5e3?width=324"
            alt="Tokopedia"
            className="h-9"
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white text-sm">
            Promo Nomor Favorit Bayar Otomatis
          </span>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=50"
            alt="Flag"
            className="w-6 h-4"
          />
          <Button
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            onClick={() => setLoginModalOpen(true)}
          >
            Masuk
          </Button>
        </div>
      </header>

      {/* Service Categories */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`flex-shrink-0 flex flex-col items-center p-3 min-w-[84px] cursor-pointer transition-colors ${
                category.active
                  ? "bg-gray-100 border-b-2 border-green-500"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="w-8 h-8 mb-2 flex items-center justify-center">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span
                className={`text-xs text-center font-medium ${
                  category.active ? "text-green-600" : "text-gray-600"
                }`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto p-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4664a393b33678ef25dd933bafcf67fc8feb45dc?width=1920"
            alt="Promotional Banner"
            className="w-full rounded-lg"
          />
          <div className="text-right mt-4">
            <a href="#" className="text-green-600 text-sm">
              Lihat Semua Promo
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Buy Credit Section */}
        <div className="bg-white">
          <h1 className="text-xl font-bold text-gray-800 mb-6">Beli Pulsa</h1>

          {/* Phone Number Input */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <label className="text-sm text-gray-600">Nomor Telepon</label>
              <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">i</span>
              </div>
            </div>
            <div className="flex items-center border-b border-gray-300 pb-2">
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Contoh 081234567890"
                className="flex-1 border-none outline-none text-gray-600 placeholder-gray-400"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d58d206b437c4219437d400dcf8069b1cf056d1a?width=68"
                alt="Telkomsel"
                className="w-8 h-7"
              />
            </div>
          </div>

          {/* Credit Amount Selection */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-4 block">Nominal</label>
            <div className="grid grid-cols-4 gap-4">
              {creditOptions.map((option, index) => (
                <div
                  key={`${option.amount}-${index}`}
                  className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                    option.selected
                      ? "border-green-500 bg-green-50"
                      : option.available
                        ? "border-gray-300 hover:border-gray-400"
                        : "border-gray-200 bg-gray-100 opacity-50"
                  }`}
                  onClick={() =>
                    option.available && setSelectedAmount(option.amount)
                  }
                >
                  {/* Promotional Badge */}
                  {option.badge && (
                    <div className="absolute top-2 left-2 right-2">
                      <Badge className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                        {option.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Amount */}
                  <div
                    className={`text-center ${option.badge ? "mt-8" : "mt-4"}`}
                  >
                    <div className="text-sm font-medium text-gray-700 opacity-70">
                      {option.price}
                    </div>
                    {option.originalPrice && (
                      <div className="text-xs text-gray-500 mt-1">
                        {option.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Out of Stock Badge */}
                  {!option.available && (
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-gray-600 text-white text-xs">
                        Stok Habis
                      </Badge>
                    </div>
                  )}

                  {/* Star decoration for promotional items */}
                  {option.badge && (
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[14px] border-l-transparent border-t-[14px] border-t-orange-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Information Box */}
          <div className="bg-green-50 border border-green-500 rounded-lg p-4 mb-6">
            <h3 className="text-green-600 font-bold text-sm mb-2">
              Keterangan
            </h3>
            <p className="text-gray-700 text-sm">Masa berlaku 60 hari</p>
          </div>

          {/* Price Summary and Buy Button */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-bold opacity-70">
                Harga
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-orange-600 text-xl font-bold">
                  Rp99.500
                </span>
                <span className="text-gray-500 text-sm line-through">
                  Rp101.500
                </span>
              </div>
            </div>
            <Button
              className="bg-gray-300 text-gray-500 px-12 py-3 rounded-lg cursor-not-allowed"
              disabled
            >
              Beli
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Review Section */}
      <div className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bddd9b2742c09992cb1445240690b49faa55783b?width=200"
                alt="Tokopedia Experience"
                className="w-24 h-24 mr-6"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Pengalaman bayar Pulsa di Tokopedia
                </h3>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-800">4.71</span>
                <span className="text-sm text-gray-600 ml-1">/5</span>
              </div>
              <div className="flex items-center space-x-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#FFC107"
                      className="w-full h-full"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">12010 ulasan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </div>
  );
}
