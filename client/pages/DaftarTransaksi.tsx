import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DaftarTransaksi = () => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("semua");

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      type: "Belanja",
      date: "15 Agu 2020",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-700",
      invoice: "INV/20200815/XX/VIII/607198586",
      shopName: "Love and Beauty Skin",
      productImage: "https://api.builder.io/api/v1/image/assets/TEMP/e62a38b71153a88fc2b75b518774a35e62a1ba12?width=120",
      productName: "BOLDe Car Vacuum Cleaner - OTO HOOVER",
      quantity: "1 barang x Rp152.000",
      totalAmount: "Rp 162.700"
    },
    {
      id: 2,
      type: "Belanja",
      date: "15 Agu 2020",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-700",
      invoice: "INV/20200815/XX/VIII/607198585",
      shopName: "TREE PRUNER",
      productImage: "https://api.builder.io/api/v1/image/assets/TEMP/cd34f4a801163c14c76cf1794596f3326d08e078?width=120",
      productName: "Car Cigarette lighter Socket USB Converter",
      quantity: "1 barang x Rp50.000",
      totalAmount: "Rp 63.300"
    },
    {
      id: 3,
      type: "Belanja",
      date: "5 Agu 2020",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-700",
      invoice: "INV/20200804/XX/VIII/600168721",
      shopName: "Exadaya Loka Niaga",
      productImage: "https://api.builder.io/api/v1/image/assets/TEMP/fc858114f0cbc658c641925a215e5faeb0914229?width=120",
      productName: "Mikrotik Routerboard RB750Gr3 ( hEX ) 5 Port Gigabit",
      quantity: "1 barang x Rp885.000",
      totalAmount: "Rp 1.008.267"
    },
    {
      id: 4,
      type: "Belanja",
      date: "5 Agu 2020",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-700",
      invoice: "INV/20200804/XX/VIII/600168720",
      shopName: "FixPrint Jakarta",
      productImage: "https://api.builder.io/api/v1/image/assets/TEMP/7483622c01ad111af594ecb02d01493fbe25e9f1?width=120",
      productName: "Serbuk Toner Refill Fuji Xerox P115 P115w M115w M115 Monochrome",
      quantity: "2 barang x Rp30.000",
      totalAmount: "Rp 162.700"
    },
    {
      id: 5,
      type: "Belanja",
      date: "31 Jul 2020",
      status: "Selesai",
      statusColor: "bg-green-100 text-green-700",
      invoice: "INV/20200731/XX/VIII/600168719",
      shopName: "HENDRY PRINT",
      productImage: null,
      productName: "Tinta Printer Canon PG-810 Black",
      quantity: "1 barang",
      totalAmount: "Rp 174.000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top promotional bar */}
      <div className="bg-gray-100 h-8 flex items-center px-4">
        <div className="flex items-center text-black text-xs">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="font-bold mr-1">Gratis Ongkir + Banyak Promo</span>
          <span>belanja di aplikasi</span>
          <svg
            className="w-6 h-6 ml-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="ml-auto flex items-center space-x-6 text-xs text-gray-600">
          <span>Tentang Tokopedia</span>
          <span>Pusat Edukasi Seller</span>
          <span>Promo</span>
          <span>Tokopedia Care</span>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-200 bg-white min-h-20 flex items-center px-4 lg:px-8">
        <div className="flex items-center space-x-2 lg:space-x-6 w-full">
          {/* Tokopedia logo */}
          <div 
            className="flex items-center shrink-0 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <svg
              className="w-24 h-6 lg:w-36 lg:h-8"
              viewBox="0 0 150 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M80.1848 22.8C78.5545 24.4614 76.6055 25.2972 74.3452 25.2972C72.5173 25.2972 70.9645 24.9228 69.3797 23.9969V20.1859C70.6542 21.0548 72.2555 21.8824 73.8362 21.8824C77.1321 21.8824 79.0945 19.6034 79.0945 16.3717C79.0945 13.1379 77.0648 10.7907 73.7669 10.7907C72.2948 10.7907 71.1011 11.3224 70.1679 12.389C69.1686 13.5445 68.6514 15.1966 68.6514 17.3793V32.4279H68.4031C67.9702 32.4268 67.5417 32.3405 67.1421 32.1738C66.7425 32.0071 66.3797 31.7634 66.0743 31.4564C65.7689 31.1495 65.527 30.7855 65.3623 30.3851C65.1976 29.9846 65.1134 29.5557 65.1145 29.1228V16.8155C65.1145 11.5924 68.2914 7.37586 73.7524 7.37586C76.4473 7.37586 78.6373 8.30172 80.2976 10.1638C81.8586 11.9028 82.6314 14.1062 82.6314 16.7586C82.6314 19.1172 81.8152 21.1355 80.1848 22.8ZM118.483 22.6717C116.859 24.4231 114.77 25.2972 112.237 25.2972C109.563 25.2972 107.383 24.3703 105.725 22.5093C104.165 20.7486 103.391 18.5431 103.391 15.9155C103.391 11.2634 106.963 7.37586 111.665 7.37586C113.479 7.37586 115.053 7.76069 116.643 8.63793V12.4862C115.369 11.6172 113.767 10.7897 112.187 10.7897C108.891 10.7897 106.927 13.0697 106.927 16.3024C106.927 19.4907 109.005 21.8834 112.255 21.8834C113.726 21.8834 114.938 21.329 115.907 20.2128C116.871 19.1028 117.371 17.4724 117.371 15.2834V3.30517C117.37 2.87222 117.455 2.44329 117.619 2.04287C117.784 1.64246 118.026 1.2784 118.331 0.971488C118.637 0.664574 118.999 0.420814 119.399 0.254126C119.799 0.0874374 120.227 0.00108544 120.66 0L120.908 0V15.8452C120.908 18.6352 120.106 20.9193 118.483 22.6717ZM128.471 5.68448C128.1 6.10241 127.568 6.29483 126.92 6.29483C125.705 6.29483 124.836 5.39483 124.836 4.18345C124.836 2.94414 125.689 2.10724 126.919 2.10724C128.103 2.10724 129.002 2.98966 129.002 4.18345C129.002 4.7731 128.83 5.28103 128.471 5.68448ZM146.445 15.2834C146.445 13.8817 145.917 12.7717 144.858 11.9317C143.903 11.1755 142.71 10.7907 141.259 10.7907C138.057 10.7907 136.001 13.3055 136.001 16.4079C136.001 19.3924 138.181 21.8834 141.226..."
                fill="#03AC0E"
              />
            </svg>
          </div>

          <span className="text-sm text-gray-800 hidden sm:block cursor-pointer">
            Kategori
          </span>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Cari di Tokopedia"
                className="flex-1 text-sm outline-none hidden sm:block"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4 ml-auto">
          {/* Shopping cart */}
          <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9H19"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
              2
            </span>
          </div>

          {/* Notifications */}
          <div className="relative hidden sm:block cursor-pointer">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-5 5v-5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 3h8v8"
              />
            </svg>
          </div>

          {/* Messages */}
          <div className="relative hidden sm:block cursor-pointer">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>

          {/* User profile */}
          <div className="flex items-center space-x-1 lg:space-x-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/414ea22ad8817b0de4008d1573d0f1d7301cdbef?width=64"
              alt="Profile"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
            />
            <span className="text-xs lg:text-sm text-gray-800 hidden sm:block">
              Toko
            </span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/414ea22ad8817b0de4008d1573d0f1d7301cdbef?width=64"
              alt="Profile"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
            />
            <span className="text-xs lg:text-sm text-gray-800">Gerry</span>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto py-4 lg:py-8 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full lg:w-60 bg-white rounded-lg border border-gray-200 h-fit shrink-0">
            {/* User Profile Section */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a6a1f9e8cf83bcfa514a1a4753f219fe28e3a5af?width=96"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span className="font-bold text-sm">Gerry</span>
              </div>
            </div>

            {/* PLUS membership */}
            <div className="p-3 border-b border-gray-200">
              <div className="bg-white border border-gray-300 rounded-lg p-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/32523c70e4fd257a67c65f302453fdf45179f24c?width=74"
                  alt="PLUS"
                  className="w-10 h-4 mb-2"
                />
                <h4 className="font-bold text-xs mb-1">
                  Nikmatin Gratis Ongkir tanpa batas!
                </h4>
                <p className="text-xs text-gray-600">
                  Min. belanja Rp0, bebas biaya aplikasi~
                </p>
              </div>

              {/* Wallet info */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9aebd691e94e299c6779c6ef10e910f2d982b1fd?width=48"
                      alt="GoPay"
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-xs">GoPay</span>
                  </div>
                  <span className="text-xs">Rp250</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>GoPay Coins</span>
                  <span className="text-green-600">Top-Up GoPay</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/65eefc6987a1982201281392aaeecd66bc0397c4?width=48"
                      alt="Card"
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-xs">Tokopedia Card</span>
                  </div>
                  <span className="text-xs text-green-600">Daftar Sekarang</span>
                </div>

                <div 
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                  onClick={() => navigate('/riwayat-saldo')}
                >
                  <div className="flex items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/985aa3754c43b0519cf760c1232e7f1fd068f245?width=48"
                      alt="Saldo"
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-xs">Saldo</span>
                  </div>
                  <span className="text-xs">Rp0</span>
                </div>
              </div>
            </div>

            {/* Menu sections */}
            <div className="border-b border-gray-200">
              <div className="p-3 bg-white border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xs">Kotak Masuk</h3>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-0">
                {[
                  { name: "Chat", badge: "1" },
                  { name: "Diskusi Produk", badge: null },
                  { name: "Ulasan", badge: null },
                  { name: "Pesan Bantuan", badge: null },
                  { name: "Pesanan Dikomplain", badge: null },
                  { name: "Update", badge: null },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer border-l-3 border-transparent flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b border-gray-200">
              <div className="p-3 bg-white border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xs">Pembelian</h3>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-0">
                {["Menunggu Pembayaran", "Daftar Transaksi"].map((item) => (
                  <div
                    key={item}
                    className={`px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer border-l-3 ${
                      item === "Daftar Transaksi" 
                        ? "border-green-600 bg-green-50 text-green-600 font-bold" 
                        : "border-transparent"
                    }`}
                    onClick={() => item === "Daftar Transaksi" && navigate('/daftar-transaksi')}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="p-3 bg-white border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xs">Profil Saya</h3>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-0">
                {["Wishlist", "Toko Favorit", "Pengaturan"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer border-l-3 border-transparent"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800 mb-6">Daftar Transaksi</h1>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {/* Search and filters */}
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                {/* Search bar */}
                <div className="flex-1 max-w-sm">
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
                    <svg
                      className="w-5 h-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Product filter dropdown */}
                <div className="w-full lg:w-64">
                  <button className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white text-sm">
                    <span>Semua Produk</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Date picker */}
                <div className="w-full lg:w-64">
                  <button className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Pilih Tanggal Transaksi
                  </button>
                </div>
              </div>

              {/* Status filters */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Status</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { id: "semua", label: "Semua" },
                    { id: "berlangsung", label: "Berlangsung" },
                    { id: "berhasil", label: "Berhasil" },
                    { id: "tidak-berhasil", label: "Tidak Berhasil" },
                    { id: "etiket", label: "E-tiket & E-voucher Aktif" }
                  ].map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setStatusFilter(status.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        statusFilter === status.id
                          ? "bg-green-50 border border-green-500 text-green-600"
                          : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
                <button className="text-green-600 text-sm font-bold">Reset Filter</button>
              </div>

              {/* Transaction List */}
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    {/* Transaction header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          <span className="font-bold text-sm">{transaction.type}</span>
                        </div>
                        <span className="text-sm text-gray-600">{transaction.date}</span>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${transaction.statusColor}`}>
                          {transaction.status}
                        </span>
                        <span className="text-xs text-gray-500">{transaction.invoice}</span>
                      </div>
                    </div>

                    {/* Shop name */}
                    <h3 className="font-bold text-sm text-gray-800 mb-4">{transaction.shopName}</h3>

                    {/* Product details */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-15 h-15 bg-gray-100 rounded flex items-center justify-center shrink-0">
                          {transaction.productImage ? (
                            <img
                              src={transaction.productImage}
                              alt={transaction.productName}
                              className="w-15 h-15 object-cover rounded"
                            />
                          ) : (
                            <svg className="w-15 h-15 text-gray-400" fill="currentColor" viewBox="0 0 61 60">
                              <path d="M11.0698 31.3593C9.47602 31.8515 9.10102 33.2812 9.26508 34.5C7.85883 35.2031 7.27289 36.3984 7.69477 37.7343C7.8295 38.0863 8.03717 38.4058 8.30414 38.6718C8.77289 39.1406 9.52289 39.5859 10.8823 39.4218C11.7495 41.0156 13.1323 41.25 14.1635 40.9453C14.6791 40.7812 16.2729 40.125 15.9682 37.8984C17.6323 37.0078 17.8901 35.6484 17.562 34.7109L17.5385 34.5937C16.8354 32.8828 15.2416 32.8359 14.351 32.9531L14.1166 32.625C14.0829 32.5467 14.0353 32.4752 13.976 32.414C13.6649 31.9547 13.215 31.6069 12.6922 31.4214C12.1693 31.2359 11.6008 31.2223 11.0698 31.3828V31.3593Z" fill="white"/>
                            </svg>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-gray-800 truncate">{transaction.productName}</h4>
                          <p className="text-sm text-gray-600">{transaction.quantity}</p>
                        </div>
                      </div>

                      {/* Price and actions */}
                      <div className="flex items-center space-x-4 ml-4">
                        <div className="text-right border-l border-gray-200 pl-6">
                          <p className="text-sm text-gray-600">Total Belanja</p>
                          <p className="font-bold text-sm text-gray-800">{transaction.totalAmount}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-end space-x-4 mt-4 pt-4 border-t border-gray-100">
                      <button className="text-green-600 text-sm font-bold hover:underline">
                        Lihat Detail Transaksi
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700">
                        Beli Lagi
                      </button>
                      <button className="border border-gray-300 p-2 rounded-lg hover:bg-gray-50">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.98047 12C6.98047 12.3978 6.82243 12.7794 6.54113 13.0607C6.25982 13.342 5.87829 13.5 5.48047 13.5C5.08264 13.5 4.70111 13.342 4.41981 13.0607C4.1385 12.7794 3.98047 12.3978 3.98047 12C3.98047 11.6022 4.1385 11.2206 4.41981 10.9393C4.70111 10.658 5.08264 10.5 5.48047 10.5C5.87829 10.5 6.25982 10.658 6.54113 10.9393C6.82243 11.2206 6.98047 11.6022 6.98047 12ZM12.4805 13.5C12.8783 13.5 13.2598 13.342 13.5411 13.0607C13.8224 12.7794 13.9805 12.3978 13.9805 12C13.9805 11.6022 13.8224 11.2206 13.5411 10.9393C13.2598 10.658 12.8783 10.5 12.4805 10.5C12.0826 10.5 11.7011 10.658 11.4198 10.9393C11.1385 11.2206 10.9805 11.6022 10.9805 12C10.9805 12.3978 11.1385 12.7794 11.4198 13.0607C11.7011 13.342 12.0826 13.5 12.4805 13.5ZM19.4805 13.5C19.8783 13.5 20.2598 13.342 20.5411 13.0607C20.8224 12.7794 20.9805 12.3978 20.9805 12C20.9805 11.6022 20.8224 11.2206 20.5411 10.9393C20.2598 10.658 19.8783 10.5 19.4805 10.5C19.0826 10.5 18.7011 10.658 18.4198 10.9393C18.1385 11.2206 17.9805 11.6022 17.9805 12C17.9805 12.3978 18.1385 12.7794 18.4198 13.0607C18.7011 13.342 19.0826 13.5 19.4805 13.5Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load more placeholder */}
              <div className="mt-8 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 hover:shadow-xl transition-shadow">
          <div className="relative">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          <span className="text-green-600 font-bold text-sm">Chat</span>
        </button>
      </div>

      {/* Footer placeholder */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="h-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"></div>
        </div>
      </footer>
    </div>
  );
};

export default DaftarTransaksi;
