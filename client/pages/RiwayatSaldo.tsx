import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RiwayatSaldo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("semua");
  const [activeFilter, setActiveFilter] = useState("semua");

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
          {/* Left sidebar - Balance Details */}
          <div className="w-full lg:w-96 space-y-6">
            {/* Detail Saldo */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Detail Saldo</h1>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
                {/* Total Saldo Aktif */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/adac5402d09f736fc9434945956aaf92dd0641c3?width=52"
                      alt="Saldo"
                      className="w-6 h-5"
                    />
                    <div>
                      <p className="text-xs text-gray-800">Total Saldo Aktif</p>
                      <p className="text-xl font-bold text-gray-800">Rp0</p>
                    </div>
                  </div>
                  <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-xs font-bold">
                    Tarik Saldo
                  </button>
                </div>

                {/* Saldo breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-gray-800">Saldo Refund</span>
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.09961 1.31333C6.05531 1.31333 5.03445 1.62294 4.16607 2.20301C3.29769 2.78308 2.62077 3.60758 2.22089 4.57229C1.82101 5.53699 1.7161 6.5986 1.91944 7.62291C2.12278 8.64723 2.62524 9.58826 3.36329 10.3271C4.10134 11.0659 5.04187 11.5693 6.06597 11.7737C7.09008 11.9781 8.15179 11.8743 9.11691 11.4754C10.082 11.0765 10.9072 10.4004 11.4882 9.53263C12.0691 8.66484 12.3798 7.6443 12.3809 6.6C12.3809 5.19883 11.8246 3.85496 10.8343 2.86367C9.84408 1.87239 8.50078 1.31477 7.09961 1.31333ZM7.09961 11.0633C6.21554 11.0633 5.35134 10.8011 4.61634 10.3098C3.88134 9.81856 3.30858 9.12032 2.97051 8.30344C2.63244 7.48657 2.54426 6.58778 2.71713 5.72078C2.88999 4.85378 3.31614 4.05753 3.94165 3.43278C4.56715 2.80803 5.36392 2.38285 6.23112 2.21104C7.09833 2.03922 7.99702 2.12849 8.81348 2.46755C9.62994 2.80661 10.3275 3.38023 10.8179 4.11582C11.3083 4.85141 11.5694 5.71593 11.5684 6.6C11.5655 7.78381 11.0936 8.91823 10.256 9.7548C9.41841 10.5914 8.28342 11.0619 7.09961 11.0633ZM7.09961 3.77792C6.95595 3.77792 6.81818 3.83498 6.71659 3.93657C6.61501 4.03815 6.55794 4.17592 6.55794 4.31958C6.55794 4.46324 6.61501 4.60102 6.71659 4.7026C6.81818 4.80418 6.95595 4.86125 7.09961 4.86125C7.24327 4.86125 7.38104 4.80418 7.48263 4.7026C7.58421 4.60102 7.64128 4.46324 7.64128 4.31958C7.64128 4.17592 7.58421 4.03815 7.48263 3.93657C7.38104 3.83498 7.24327 3.77792 7.09961 3.77792ZM6.81415 6.31454C6.88993 6.23862 6.99235 6.19528 7.09961 6.19375C7.20692 6.19515 7.30944 6.2384 7.38532 6.31429C7.4612 6.39017 7.50446 6.49269 7.50586 6.6V8.76667C7.50586 8.87441 7.46306 8.97774 7.38687 9.05393C7.31068 9.13011 7.20735 9.17292 7.09961 9.17292C6.99186 9.17292 6.88853 9.13011 6.81235 9.05393C6.73616 8.97774 6.69336 8.87441 6.69336 8.76667V6.6C6.69489 6.49274 6.73823 6.39032 6.81415 6.31454Z" fill="#2E3137"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-800">Rp0</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-gray-800">Saldo Penghasilan</span>
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.19922 1.31333C6.15492 1.31333 5.13406 1.62294 4.26568 2.20301C3.3973 2.78308 2.72038 3.60758 2.3205 4.57229C1.92062 5.53699 1.81571 6.5986 2.01905 7.62291C2.22239 8.64723 2.72485 9.58827 3.4629 10.3271C4.20095 11.0659 5.14148 11.5693 6.16558 11.7737C7.18969 11.9781 8.2514 11.8743 9.21651 11.4754C10.1816 11.0765 11.0068 10.4004 11.5878 9.53263C12.1687 8.66484 12.4794 7.6443 12.4805 6.6C12.4805 5.19883 11.9242 3.85496 10.934 2.86368C9.94369 1.87239 8.60039 1.31477 7.19922 1.31333ZM7.19922 11.0633C6.31515 11.0633 5.45095 10.8011 4.71595 10.3098C3.98095 9.81856 3.40819 9.12032 3.07012 8.30345C2.73205 7.48657 2.64387 6.58778 2.81673 5.72078C2.9896 4.85378 3.41575 4.05753 4.04126 3.43278C4.66676 2.80803 5.46352 2.38286 6.33073 2.21104C7.19794 2.03922 8.09663 2.12849 8.91309 2.46755C9.72955 2.80661 10.4271 3.38023 10.9175 4.11582C11.4079 4.85142 11.669 5.71594 11.668 6.6C11.6651 7.78381 11.1932 8.91823 10.3556 9.7548C9.51802 10.5914 8.38303 11.0619 7.19922 11.0633ZM7.19922 3.77792C7.05556 3.77792 6.91778 3.83499 6.8162 3.93657C6.71462 4.03815 6.65755 4.17592 6.65755 4.31958C6.65755 4.46324 6.71462 4.60102 6.8162 4.7026C6.91778 4.80418 7.05556 4.86125 7.19922 4.86125C7.34288 4.86125 7.48065 4.80418 7.58223 4.7026C7.68382 4.60102 7.74089 4.46324 7.74089 4.31958C7.74089 4.17592 7.68382 4.03815 7.58223 3.93657C7.48065 3.83499 7.34288 3.77792 7.19922 3.77792ZM6.91376 6.31454C6.98954 6.23863 7.09196 6.19529 7.19922 6.19375C7.30653 6.19515 7.40904 6.23841 7.48493 6.31429C7.56081 6.39017 7.60407 6.49269 7.60547 6.6V8.76667C7.60547 8.87441 7.56267 8.97774 7.48648 9.05393C7.41029 9.13012 7.30696 9.17292 7.19922 9.17292C7.09147 9.17292 6.98814 9.13012 6.91196 9.05393C6.83577 8.97774 6.79297 8.87441 6.79297 8.76667V6.6C6.7945 6.49274 6.83784 6.39032 6.91376 6.31454Z" fill="#2E3137"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-800">Rp0</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-800">
                    Lihat penjelasan saldo <span className="text-green-600 cursor-pointer">di sini</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Layanan Finansial */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-base font-bold text-gray-800 mb-4">Layanan Finansial</h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7dfa57ffc61fb85e1ac2366e435d384128bb7238?width=48"
                    alt="Reksadana"
                    className="w-6 h-6"
                  />
                  <span className="text-sm font-bold text-gray-800">Reksadana</span>
                </div>
                <span className="text-green-600 text-xs font-bold cursor-pointer">Pelajari</span>
              </div>
              
              <p className="text-sm text-gray-800 mt-2">
                Investasi mulai dari Rp10.000 dengan keuntungan hingga 5% per tahun
              </p>
            </div>
          </div>

          {/* Right side - Balance History */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Header with title and controls */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <h2 className="text-lg font-bold text-gray-800">Riwayat Saldo</h2>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Date picker */}
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      18 Jul 2025 - 25 Jul 2025
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Download button */}
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Riwayat
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-300">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("semua")}
                    className={`px-6 py-3 text-sm font-bold ${
                      activeTab === "semua"
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    Semua Transaksi
                  </button>
                  <button
                    onClick={() => setActiveTab("penjualan")}
                    className={`px-6 py-3 text-sm font-bold ${
                      activeTab === "penjualan"
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    Penjualan
                  </button>
                </div>
              </div>

              {/* Filter buttons and content */}
              <div className="p-4">
                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setActiveFilter("semua")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium ${
                      activeFilter === "semua"
                        ? "bg-green-50 border border-green-500 text-green-600"
                        : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Semua
                  </button>
                  <button
                    onClick={() => setActiveFilter("refund")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium ${
                      activeFilter === "refund"
                        ? "bg-green-50 border border-green-500 text-green-600"
                        : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Saldo Refund
                  </button>
                  <button
                    onClick={() => setActiveFilter("penghasilan")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium ${
                      activeFilter === "penghasilan"
                        ? "bg-green-50 border border-green-500 text-green-600"
                        : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Saldo Penghasilan
                  </button>
                </div>

                {/* Empty state */}
                <div className="text-center py-16">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/aa229f9affeed6ad3c05d3c3179ada955d528d98?width=420"
                    alt="No transactions"
                    className="w-52 h-52 mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Tidak ada transaksi pada rentang waktu ini
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tokopedia */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Tokopedia</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><span className="cursor-pointer hover:text-gray-800">Tentang Tokopedia</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Hak Kekayaan Intelektual</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Karir</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Blog</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Tokopedia Affiliate Program</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Tokopedia B2B Digital</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Tokopedia Marketing Solutions</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Kalkulator Indeks Masa Tubuh</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Tokopedia Farma</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Promo Hari Ini</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Beli Lokal</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Promo Guncang</span></li>
              </ul>
            </div>

            {/* Beli */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Beli</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><span className="cursor-pointer hover:text-gray-800">Tagihan & Top Up</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Tokopedia COD</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Bebas Ongkir</span></li>
              </ul>
              
              <h3 className="font-bold text-gray-800 mb-4 mt-8">Jual</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><span className="cursor-pointer hover:text-gray-800">Pusat Edukasi Seller</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Daftar Mall</span></li>
              </ul>

              <h3 className="font-bold text-gray-800 mb-4 mt-8">Bantuan dan Panduan</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><span className="cursor-pointer hover:text-gray-800">Tokopedia Care</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Syarat dan Ketentuan</span></li>
                <li><span className="cursor-pointer hover:text-gray-800">Kebijakan Privasi</span></li>
              </ul>
            </div>

            {/* Keamanan & Privasi */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Keamanan & Privasi</h3>
              <div className="space-y-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/736f3708ac68290dfdcdb863e77250faf6900dbd?width=142"
                  alt="Security badge"
                  className="w-18 h-12 border border-gray-300 rounded bg-white p-1"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/58586dc6350770600d09b6d560cdb9919f9b0cb1?width=162"
                  alt="Security badge"
                  className="w-24 h-12 border border-gray-300 rounded bg-white p-1"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/33b29d360bad7814b54a74725252a1a7005194aa?width=162"
                  alt="Security badge"
                  className="w-24 h-12 border border-gray-300 rounded bg-white p-1"
                />
              </div>

              <h3 className="font-bold text-gray-800 mb-4 mt-8">Ikuti Kami</h3>
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                <div className="w-6 h-6 bg-pink-600 rounded-full"></div>
              </div>
            </div>

            {/* App Download */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Nikmatin keuntungan spesial di aplikasi:</h3>
              <ul className="space-y-3 text-sm text-gray-800 mb-6">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Diskon 70%* hanya di aplikasi
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Promo khusus aplikasi
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Gratis Ongkir tiap hari
                </li>
              </ul>
              
              <p className="text-sm text-gray-500 mb-4">
                Buka aplikasi dengan scan QR atau klik tombol:
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ac082c841b36ab002d19e802022a7f5dcbf30f1f?width=290"
                  alt="QR Code"
                  className="w-36 h-36"
                />
                <div className="space-y-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bda7e47e86cdebf03c3575c78d813dec2ec04964?width=270"
                    alt="App Store"
                    className="w-34 h-10 cursor-pointer hover:opacity-80"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bda7e47e86cdebf03c3575c78d813dec2ec04964?width=270"
                    alt="Google Play"
                    className="w-34 h-10 cursor-pointer hover:opacity-80"
                  />
                  <div className="w-34 h-10 bg-black rounded cursor-pointer hover:opacity-80"></div>
                </div>
              </div>
              
              <p className="text-sm text-green-600 mt-4 cursor-pointer hover:underline">
                Pelajari Selengkapnya →
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-gray-500">
              © 2009 - 2025, PT. Tokopedia. All Rights Reserved.
            </p>
            <div className="flex items-center mt-2 lg:mt-0">
              <div className="flex bg-gray-100 rounded-lg">
                <button className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-lg">
                  Indonesia
                </button>
                <button className="px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-200">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RiwayatSaldo;
