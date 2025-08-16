import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResellerPage = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [referralCode, setReferralCode] = useState<string>("RESELLER2024GERRY");

  // Mock reseller data
  const resellerData = {
    level: "Gold Reseller",
    currentSales: "Rp 25.500.000",
    nextLevel: "Diamond Reseller",
    nextLevelTarget: "Rp 50.000.000",
    benefits: [
      "Diskon 15% untuk semua produk",
      "Gratis ongkir ke seluruh Indonesia",
      "Akses ke produk eksklusif",
      "Support dedicated reseller",
      "Komisi 8% untuk setiap referral",
    ],
    totalReferrals: 23,
    monthlyCommission: "Rp 1.250.000",
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus("File siap diupload");
    }
  };

  const handleUploadSubmit = () => {
    if (selectedFile) {
      setUploadStatus("Mengupload...");
      // Simulate upload
      setTimeout(() => {
        setUploadStatus("Upload berhasil! PO sedang diproses.");
        setSelectedFile(null);
      }, 2000);
    }
  };

  const handleDownload = (type: string) => {
    // Simulate download
    const link = document.createElement("a");
    link.href = "#";
    link.download = `${type.toLowerCase()}-${new Date().toISOString().split("T")[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyReferralLink = () => {
    const referralLink = `https://tokopedia.com/referral/${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    alert("Link referral berhasil disalin!");
  };

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
            onClick={() => navigate("/")}
          >
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <span className="font-bold text-green-600 text-xl ml-2 hidden sm:block">
              Tokopedia
            </span>
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
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
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
          </div>

          {/* User profile */}
          <div
            className="flex items-center space-x-1 lg:space-x-2 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/414ea22ad8817b0de4008d1573d0f1d7301cdbef?width=64"
              alt="Profile"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
            />
            <span className="text-xs lg:text-sm text-gray-800">Gerry</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-4 lg:py-8 px-4 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-green-600 hover:text-green-700 mr-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Dashboard Reseller
            </h1>
          </div>
          <p className="text-gray-600">
            Kelola aktivitas reseller Anda dengan mudah dan efisien
          </p>
        </div>

        {/* Reseller Level Status */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-xl font-bold mb-2">{resellerData.level}</h2>
              <p className="text-green-100 mb-2">
                Total Penjualan: {resellerData.currentSales}
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm">
                  Progress ke {resellerData.nextLevel}:
                </span>
                <div className="bg-green-400 rounded-full h-2 w-32">
                  <div className="bg-white rounded-full h-2 w-16"></div>
                </div>
                <span className="text-sm">50%</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-sm text-green-100">Target selanjutnya</p>
                <p className="text-lg font-bold">
                  {resellerData.nextLevelTarget}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Upload PO Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Upload PO</h3>
                <p className="text-sm text-gray-600">
                  Upload Purchase Order Anda
                </p>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
              <input
                type="file"
                id="po-upload"
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleFileUpload}
              />
              <label htmlFor="po-upload" className="cursor-pointer">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-gray-600 mb-2">Klik untuk upload file PO</p>
                <p className="text-xs text-gray-500">
                  Format: PDF, DOC, DOCX, JPG, PNG (Max: 10MB)
                </p>
              </label>
            </div>

            {selectedFile && (
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    {selectedFile.name}
                  </span>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {uploadStatus && (
              <div
                className={`p-3 rounded-lg mb-4 ${uploadStatus.includes("berhasil") ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}
              >
                <p className="text-sm">{uploadStatus}</p>
              </div>
            )}

            <button
              onClick={handleUploadSubmit}
              disabled={!selectedFile}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Upload PO
            </button>
          </div>

          {/* Download Documents Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Download Dokumen
                </h3>
                <p className="text-sm text-gray-600">
                  Unduh Penawaran & Faktur Pajak
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleDownload("Penawaran")}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Download Penawaran
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </button>

              <button
                onClick={() => handleDownload("Faktur-Pajak")}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Download Faktur Pajak
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-xs text-yellow-700">
                <svg
                  className="w-4 h-4 inline mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Dokumen akan tersedia setelah PO diproses (1-2 hari kerja)
              </p>
            </div>
          </div>
        </div>

        {/* Level & Benefits and Referral Link */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Level & Benefits Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Level & Benefit
                </h3>
                <p className="text-sm text-gray-600">
                  Cek level dan keuntungan Anda
                </p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Level Saat Ini
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                  {resellerData.level}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Benefit yang Anda dapatkan:
              </h4>
              <ul className="space-y-2">
                {resellerData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
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
                    <span className="text-xs text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-green-800">
                    Komisi Bulan Ini
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    {resellerData.monthlyCommission}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-700">Total Referral</p>
                  <p className="text-xl font-bold text-green-800">
                    {resellerData.totalReferrals}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Link Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Link Referral
                </h3>
                <p className="text-sm text-gray-600">
                  Bagikan dan dapatkan komisi
                </p>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Kode Referral Anda
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={referralCode}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-700"
                />
                <button
                  onClick={copyReferralLink}
                  className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 flex items-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-blue-800 mb-2">
                  Cara Mendapatkan Komisi:
                </h4>
                <ol className="text-xs text-blue-700 space-y-1">
                  <li>1. Bagikan link referral Anda</li>
                  <li>2. Customer mendaftar melalui link Anda</li>
                  <li>3. Customer melakukan pembelian pertama</li>
                  <li>4. Anda mendapat komisi 8% dari nilai transaksi</li>
                </ol>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  Share WhatsApp
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Share Email
                </button>
              </div>
            </div>
          </div>
        </div>
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

export default ResellerPage;
