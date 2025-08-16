import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("address");

  return (
    <div className="min-h-screen bg-white">
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
          <div className="flex items-center shrink-0">
            <svg
              className="w-24 h-6 lg:w-36 lg:h-8"
              viewBox="0 0 150 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M80.1848 22.8C78.5545 24.4614 76.6055 25.2972 74.3452 25.2972C72.5173 25.2972 70.9645 24.9228 69.3797 23.9969V20.1859C70.6542 21.0548 72.2555 21.8824 73.8362 21.8824C77.1321 21.8824 79.0945 19.6034 79.0945 16.3717C79.0945 13.1379 77.0648 10.7907 73.7669 10.7907C72.2948 10.7907 71.1011 11.3224 70.1679 12.389C69.1686 13.5445 68.6514 15.1966 68.6514 17.3793V32.4279H68.4031C67.9702 32.4268 67.5417 32.3405 67.1421 32.1738C66.7425 32.0071 66.3797 31.7634 66.0743 31.4564C65.7689 31.1495 65.527 30.7855 65.3623 30.3851C65.1976 29.9846 65.1134 29.5557 65.1145 29.1228V16.8155C65.1145 11.5924 68.2914 7.37586 73.7524 7.37586C76.4473 7.37586 78.6373 8.30172 80.2976 10.1638C81.8586 11.9028 82.6314 14.1062 82.6314 16.7586C82.6314 19.1172 81.8152 21.1355 80.1848 22.8ZM118.483 22.6717C116.859 24.4231 114.77 25.2972 112.237 25.2972C109.563 25.2972 107.383 24.3703 105.725 22.5093C104.165 20.7486 103.391 18.5431 103.391 15.9155C103.391 11.2634 106.963 7.37586 111.665 7.37586C113.479 7.37586 115.053 7.76069 116.643 8.63793V12.4862C115.369 11.6172 113.767 10.7897 112.187 10.7897C108.891 10.7897 106.927 13.0697 106.927 16.3024C106.927 19.4907 109.005 21.8834 112.255 21.8834C113.726 21.8834 114.938 21.329 115.907 20.2128C116.871 19.1028 117.371 17.4724 117.371 15.2834V3.30517C117.37 2.87222 117.455 2.44329 117.619 2.04287C117.784 1.64246 118.026 1.2784 118.331 0.971488C118.637 0.664574 118.999 0.420814 119.399 0.254126C119.799 0.0874374 120.227 0.00108544 120.66 0L120.908 0V15.8452C120.908 18.6352 120.106 20.9193 118.483 22.6717ZM128.471 5.68448C128.1 6.10241 127.568 6.29483 126.92 6.29483C125.705 6.29483 124.836 5.39483 124.836 4.18345C124.836 2.94414 125.689 2.10724 126.919 2.10724C128.103 2.10724 129.002 2.98966 129.002 4.18345C129.002 4.7731 128.83 5.28103 128.471 5.68448ZM146.445 15.2834C146.445 13.8817 145.917 12.7717 144.858 11.9317C143.903 11.1755 142.71 10.7907 141.259 10.7907C138.057 10.7907 136.001 13.3055 136.001 16.4079C136.001 19.3924 138.181 21.8834 141.226 21.8834C143.343 21.8834 144.475 20.64 145.683 19.0903V23.5562C145.068 24.0197 144.36 24.5255 143.638 24.8214C142.876 25.1421 141.965 25.2972 140.913 25.2972C135.822 25.2972 132.465 21.059 132.465 16.1617C132.465 13.6469 133.241 11.5676 134.807 9.94655C136.467 8.22828 138.645 7.37586 141.311 7.37586C146.366 7.37586 149.982 10.2931 149.982 15.5638V24.9466H149.734C149.301 24.9455 148.872 24.8591 148.473 24.6923C148.073 24.5256 147.71 24.2818 147.405 23.9748C147.099 23.6677 146.857 23.3036 146.692 22.903C146.528 22.5025 146.443 22.0734 146.445 21.6403V15.2834ZM98.0224 14.2759C97.5755 12.8866 97.0148 12.2028 95.7259 11.4797C92.6607 9.75828 89.6431 11.2241 88.2404 14.2624L98.0224 14.2759ZM95.3235 25.2445C93.0642 25.7276 90.8473 25.3552 88.6842 24.1407C86.5738 22.9562 85.1617 21.1955 84.4531 18.8679C83.0214 14.161 85.9542 8.91621 90.6724 7.6469C93.0104 7.0169 95.2531 7.30241 97.3831 8.49828C100.921 10.4866 102.21 13.561 101.986 17.5231L87.7345 17.4931C87.9445 19.109 88.9407 20.3731 90.3414 21.1593C91.7628 21.9569 93.0683 22.1483 94.2797 21.7697C95.6245 21.3455 96.7169 20.2417 97.6045 19.2145L100.508 21.3414C99.3238 23.4724 97.7111 24.7345 95.3235 25.2445ZM125.151 7.72759H128.688V24.9466H128.439C128.006 24.9455 127.578 24.8591 127.178 24.6923C126.778 24.5256 126.416 24.2817 126.11 23.9747C125.805 23.6677 125.563 23.3035 125.398 22.903C125.234 22.5024 125.149 22.0734 125.151 21.6403V7.72759ZM5.17656 24.9455C1.71622 24.9455 1.04107e-05 22.5807 1.04107e-05 19.2786V6.74793C-0.00107776 6.31484 0.0831487 5.88578 0.247881 5.48524C0.412613 5.0847 0.654624 4.72052 0.960097 4.41351C1.26557 4.1065 1.62852 3.86267 2.02823 3.69593C2.42794 3.52919 2.85658 3.44281 3.28967 3.44172H3.53794V7.72759H9.51415V11.1414H3.53794V19.6738C3.53794 21.1241 4.18139 21.5317 5.56139 21.5317H9.51311V24.9455H5.17656ZM25.7193 22.77C23.971 24.4531 21.871 25.2972 19.4317 25.2972C17.0141 25.2972 14.9255 24.4521 13.1783 22.77C11.4248 21.0797 10.5507 18.929 10.5507 16.3366C10.5507 11.28 14.3928 7.37586 19.4317 7.37586C21.8493 7.37586 23.9441 8.22724 25.7017 9.92276C27.4666 11.6224 28.3479 13.7669 28.3479 16.3366C28.3479 18.929 27.4728 21.0797 25.7204 22.77H25.7193ZM42.2586 11.8707C41.7393 12.7448 41.3369 13.3728 41.0535 13.7514C40.7421 14.1631 40.4338 14.4921 40.1286 14.7197C42.5866 15.5183 43.5021 17.2293 43.5021 19.7793V24.9455H43.2538C42.3793 24.9433 41.5415 24.5939 40.9246 23.9741C40.3077 23.3543 39.9622 22.5148 39.9642 21.6403V20.13C39.9642 18.479 39.2276 17.3586 37.4876 17.3586H34.2724V24.9455H34.0242C33.1499 24.9431 32.3125 24.5935 31.696 23.9737C31.0795 23.3539 30.7344 22.5146 30.7366 21.6403V3.30517C30.7353 2.87227 30.8194 2.44336 30.984 2.04295C31.1485 1.64254 31.3904 1.27848 31.6957 0.97155C32.001 0.664623 32.3637 0.420846 32.7633 0.254146C33.1628 0.0874447 33.5912 0.00108529 34.0242 0L34.2724 0V13.9097H35.3183C36.4666 13.9097 37.2217 13.5145 37.6562 12.7676L40.6262 7.72862L44.6576 7.72448L42.2566 11.8707H42.2586ZM60.5173 22.77C58.769 24.4531 56.669 25.2972 54.2297 25.2972C51.8121 25.2972 49.7245 24.4521 47.9762 22.77C46.2228 21.0797 45.3486 18.929 45.3486 16.3366C45.3486 11.28 49.1907 7.37586 54.2297 7.37586C56.6483 7.37586 58.7421 8.22724 60.5007 9.92276C62.2645 11.6224 63.1459 13.7669 63.1459 16.3366C63.1459 18.929 62.2697 21.0797 60.5173 22.77ZM57.9642 12.33C56.9897 11.3048 55.7514 10.7907 54.2297 10.7907C50.9742 10.7907 49.0262 13.1752 49.0262 16.3366C49.0262 19.4545 51.0207 21.8834 54.2297 21.8834C57.4397 21.8834 59.4331 19.4545 59.4331 16.3366C59.4331 14.6814 58.9386 13.3531 57.9642 12.33ZM23.1673 12.33C22.1928 11.3048 20.9535 10.7907 19.4328 10.7907C16.1773 10.7907 14.2293 13.1752 14.2293 16.3366C14.2293 19.4545 16.2238 21.8834 19.4328 21.8834C22.6417 21.8834 24.6362 19.4545 24.6362 16.3366C24.6362 14.6814 24.1417 13.3531 23.1673 12.33Z"
                fill="#03AC0E"
              />
            </svg>
          </div>

          <span className="text-sm text-gray-800 hidden sm:block">
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
          <div className="relative">
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
          <div className="relative hidden sm:block">
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
          <div className="relative hidden sm:block">
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
          <div className="flex items-center space-x-1 lg:space-x-2">
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

      <div className="flex max-w-7xl mx-auto py-2 lg:py-4 px-2 lg:px-4 gap-2 lg:gap-6">
        {/* Left Sidebar */}
        <div className="w-60 bg-white rounded-lg border border-gray-200 h-fit shrink-0 hidden lg:block">
          {/* User Profile Section */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/91eafe7291a4a72669de3255ed25c9c54dff9025?width=96"
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
                src="https://api.builder.io/api/v1/image/assets/TEMP/72d20354f7b00b60ab8d991365346fca894c98cd?width=92"
                alt="PLUS"
                className="w-12 h-4 mb-2"
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
                <span className="text-xs">Rp0</span>
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
                "Chat",
                "Diskusi Produk",
                "Ulasan",
                "Pesan Bantuan",
                "Pesanan Dikomplain",
                "Update",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer border-l-3 border-transparent"
                >
                  {item}
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
                  className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer border-l-3 border-transparent"
                  onClick={() => item === "Daftar Transaksi" && navigate('/daftar-transaksi')}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-200">
            <div className="p-3 bg-white border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xs">Reseller</h3>
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
              <div
                className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer border-l-3 border-transparent"
                onClick={() => navigate('/reseller')}
              >
                Dashboard Reseller
              </div>
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
          {/* Breadcrumb */}
          <div className="flex items-center mb-4">
            <svg
              className="w-4 h-4 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-gray-600 font-bold">Gerry</span>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-300 overflow-x-auto">
              <div className="flex min-w-max lg:min-w-0">
                {[
                  { id: "biodata", label: "Biodata Diri" },
                  { id: "address", label: "Daftar Alamat" },
                  { id: "payment", label: "Pembayaran" },
                  { id: "bank", label: "Rekening Bank" },
                  { id: "notification", label: "Notifikasi" },
                  { id: "display", label: "Mode Tampilan" },
                  { id: "security", label: "Keamanan" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 lg:px-4 py-3 text-xs lg:text-sm font-bold capitalize whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-3 lg:p-6">
              {activeTab === "address" && (
                <div>
                  {/* Search and Add Button */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 sm:justify-between mb-6">
                    <div className="flex-1 max-w-lg">
                      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                        <svg
                          className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 mr-2 lg:mr-3"
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
                          placeholder="Cari alamat..."
                          className="flex-1 text-sm outline-none"
                        />
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-3 lg:px-4 py-2 rounded-lg font-bold text-xs lg:text-sm hover:bg-green-700 whitespace-nowrap sm:ml-4">
                      + Tambah Alamat Baru
                    </button>
                  </div>

                  {/* Filter buttons */}
                  <div className="flex items-center space-x-2 mb-6">
                    <button className="bg-green-50 border border-green-500 text-green-600 px-3 py-2 rounded-xl text-sm font-medium">
                      Semua Alamat
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-600 px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">
                      Dari Teman
                    </button>
                  </div>

                  {/* Address Card */}
                  <div className="border-2 border-green-500 bg-green-50 rounded-lg p-4 relative">
                    <div className="absolute left-0 top-4 w-1 h-6 bg-green-500 rounded-r-lg"></div>

                    {/* Check mark */}
                    <div className="absolute top-4 right-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div className="pl-4">
                      {/* Address header */}
                      <div className="flex items-center mb-2">
                        <span className="font-bold text-sm mr-2">Rumah</span>
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-bold">
                          Utama
                        </span>
                      </div>

                      {/* User info */}
                      <h3 className="font-bold text-sm mb-1">
                        Gerry Raditya Kusmana Yahya
                      </h3>
                      <p className="text-sm text-gray-800 mb-1">
                        62895332274154
                      </p>
                      <p className="text-sm text-gray-800 mb-3">
                        Perum. Pondok Tanah Mas Jl. Kenanga 2 Blok D23 no. 1
                        Wanasari, Cibitung, Kab bekasi 17520
                      </p>

                      {/* Pinpoint status */}
                      <div className="flex items-center mb-4">
                        <svg
                          className="w-6 h-6 text-green-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-green-600 text-sm font-bold">
                          Sudah Pinpoint
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center space-x-4 text-green-600">
                        <button className="text-sm font-bold hover:underline">
                          Share
                        </button>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <button className="text-sm font-bold hover:underline">
                          Ubah Alamat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other tab contents can be added here */}
              {activeTab !== "address" && (
                <div className="text-center py-12 text-gray-500">
                  <p>Content for {activeTab} tab would go here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="h-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
