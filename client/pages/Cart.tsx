import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import LoginModal from "@/components/LoginModal";

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(["1", "2"]);
  const [selectAll, setSelectAll] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const cartItems = [
    {
      id: "1",
      storeId: "acc-computer",
      storeName: "ACC COMPUTER 22",
      storeIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/2af49adf3b101551a07e6b185665f3cc8bd3404f?width=30",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0595e5bb7000361589b773c489b44002edb457d5?width=160",
      name: "MOUSE XIAOMI BLUETOOTH & WIRELESS RECHARGER KLIK SILENT BATERAI ISI ULANG MI",
      variant: "Hitam",
      price: 29900,
      quantity: 1,
    },
    {
      id: "2",
      storeId: "robot-pc",
      storeName: "ROBOT PC INDONESIA",
      storeIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/4669eda40a859ee93bbb64ef555f00da45ef1f40?width=30",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0cf08b004c2127fa62d6eebff8bfa62b059428c8?width=160",
      name: "ROBOT Keyboard Wireless Slot Penyangga Hp Holder Multi-Device Untuk Ipad Tablet Laptop Komputer Mac Keyboard KM3700 Original - Garansi 1 Tahun",
      variant: "",
      price: 170000,
      originalPrice: 788900,
      discount: 78,
      quantity: 1,
    },
  ];

  const recentlyViewed = [
    {
      id: "rv1",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/08b416a49043b491b6ad3f41d4fcf0d5a838c483?width=362",
      name: "Yves Rocher Sensual Shower Gel Bourbon Vanilla 400 ML",
      price: 135850,
      location: "Kota Administrasi Jakarta Utara",
      store: "Yves Rocher Indonesia",
      rating: 5.0,
      reviews: 264,
    },
    {
      id: "rv2",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2b48906b3b3c3af44a9e4b8a977449802c770609?width=362",
      name: "OneMed Test kehamilan Instant, Tespack Cek Hamil, hCG Urine Pregnancy",
      price: 2030,
      location: "Kota Administrasi Jakarta Timur",
      store: "Big One Online",
      rating: 4.9,
      reviews: 14,
    },
    {
      id: "rv3",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c4472410e635aae40bafd7d79f903b9c09436311?width=362",
      name: "ROBOT Keyboard Wireless Slot Penyangga Hp Holder Multi-Device Untuk Ipad Tablet Laptop Komputer Mac Keyboard KM3700 Original - Garansi 1 Tahun",
      price: 170000,
      location: "Kab. Tangerang",
      store: "RobotSmartPower",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: "rv4",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/07741e4bbc65e6abfd090b7e6dc1d50b25eed340?width=362",
      name: "Glade Matic Spray Ocean Escape Refill 146gr- AEROSOL(KHUSUS PULAU JAWA)",
      price: 32766,
      location: "Kota Tangerang",
      store: "SC Johnson & Son Indonesia",
      rating: 4.9,
      reviews: 2714,
    },
  ];

  const recommendations = [
    {
      id: "rec1",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/1ef2fea1adbb36ea9cd9a73adc405e8db9c2987a?width=382",
      name: "MOUSE WIRELESS HP S1000 SILENT KLIK TANPA SUARA",
      price: 34990,
      store: "ACC COMPUTER 22",
      rating: 5.0,
      reviews: 211,
    },
    {
      id: "rec2",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/642e984c34e4246b0dcc29e3ea3b88fe1edd5ce8?width=382",
      name: "Sandal Japit Pria Distro Terbaru 2024",
      price: 6000,
      store: "CV SANDAL SHOP",
      rating: 5.0,
      reviews: 2281,
    },
    {
      id: "rec3",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/393f743a968648632f05cef34dd1afbbdb208d53?width=382",
      name: "KEYBOARD MOUSE KOMBO USB wired standard",
      price: 37000,
      store: "BayAL team",
      rating: 5.0,
      reviews: 62,
    },
    {
      id: "rec4",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/efcdcf9fdd6fec0967a7ad8505f25927d0d67e1f?width=382",
      name: "LEMARI PAKAIAN 2 PINTU - LEMARI PAKAIAN 3 PINTU - LILY/KARIN - OLYMPIC",
      price: 700000,
      store: "Rumahkudotcom",
      rating: 5.0,
      reviews: 4,
    },
  ];

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedItems(cartItems.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemSelect = (itemId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, itemId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
      setSelectAll(false);
    }
  };

  const updateQuantity = (itemId: string, change: number) => {
    // Implement quantity update logic
    console.log(`Update item ${itemId} quantity by ${change}`);
  };

  const formatPrice = (price: number) => {
    return `Rp${price.toLocaleString("id-ID")}`;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-3 h-3 ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>,
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-[#F0F3F7]">
      {/* Header */}
      <div className="bg-white">
        {/* Top header bar */}
        <div className="bg-[#F0F3F7] py-2">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between text-xs text-[#6D7588]">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 2.25H16C16.7293 2.25 17.4288 2.53973 17.9445 3.05546C18.4603 3.57118 18.75 4.27065 18.75 5V19C18.75 19.7293 18.4603 20.4288 17.9445 20.9445C17.4288 21.4603 16.7293 21.75 16 21.75H8C7.27065 21.75 6.57118 21.4603 6.05546 20.9445C5.53973 20.4288 5.25 19.7293 5.25 19V5C5.25 4.27065 5.53973 3.57118 6.05546 3.05546C6.57118 2.53973 7.27065 2.25 8 2.25Z" />
                  </svg>
                  <span>Download Tokopedia App</span>
                </div>
                <span>Tentang Tokopedia</span>
                <span>Pusat Edukasi Seller</span>
                <span>Promo</span>
                <span>Tokopedia Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              {/* Tokopedia Logo */}
              <svg className="w-36 h-8" viewBox="0 0 150 34" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M80.1848 22.8C78.5545 24.4614 76.6055 25.2972 74.3452 25.2972C72.5173 25.2972 70.9645 24.9228 69.3797 23.9969V20.1859C70.6542 21.0548 72.2555 21.8824 73.8362 21.8824C77.1321 21.8824 79.0945 19.6034 79.0945 16.3717C79.0945 13.1379 77.0648 10.7907 73.7669 10.7907C72.2948 10.7907 71.1011 11.3224 70.1679 12.389C69.1686 13.5445 68.6514 15.1966 68.6514 17.3793V32.4279H68.4031C67.9702 32.4268 67.5417 32.3405 67.1421 32.1738C66.7425 32.0071 66.3797 31.7634 66.0743 31.4564C65.7689 31.1495 65.527 30.7855 65.3623 30.3851C65.1976 29.9846 65.1134 29.5557 65.1145 29.1228V16.8155C65.1145 11.5924 68.2914 7.37586 73.7524 7.37586C76.4473 7.37586 78.6373 8.30172 80.2976 10.1638C81.8586 11.9028 82.6314 14.1062 82.6314 16.7586C82.6314 19.1172 81.8152 21.1355 80.1848 22.8Z"
                  fill="#03AC0E"
                />
                <path
                  d="M118.483 22.6717C116.859 24.4231 114.77 25.2972 112.237 25.2972C109.563 25.2972 107.383 24.3703 105.725 22.5093C104.165 20.7486 103.391 18.5431 103.391 15.9155C103.391 11.2634 106.963 7.37586 111.665 7.37586C113.479 7.37586 115.053 7.76069 116.643 8.63793V12.4862C115.369 11.6172 113.767 10.7897 112.187 10.7897C108.891 10.7897 106.927 13.0697 106.927 16.3024C106.927 19.4907 109.005 21.8834 112.255 21.8834C113.726 21.8834 114.938 21.329 115.907 20.2128C116.871 19.1028 117.371 17.4724 117.371 15.2834V3.30517C117.37 2.87222 117.455 2.44329 117.619 2.04287C117.784 1.64246 118.026 1.2784 118.331 0.971488C118.637 0.664574 118.999 0.420814 119.399 0.254126C119.799 0.0874374 120.227 0.00108544 120.66 0L120.908 0V15.8452C120.908 18.6352 120.106 20.9193 118.483 22.6717Z"
                  fill="#03AC0E"
                />
                <path
                  d="M42.2586 11.8707C41.7393 12.7448 41.3369 13.3728 41.0535 13.7514C40.7421 14.1631 40.4338 14.4921 40.1286 14.7197C42.5866 15.5183 43.5021 17.2293 43.5021 19.7793V24.9455H43.2538C42.3793 24.9433 41.5415 24.5939 40.9246 23.9741C40.3077 23.3543 39.9622 22.5148 39.9642 21.6403V20.13C39.9642 18.479 39.2276 17.3586 37.4876 17.3586H34.2724V24.9455H34.0242C33.1499 24.9431 32.3125 24.5935 31.696 23.9737C31.0795 23.3539 30.7344 22.5146 30.7366 21.6403V3.30517C30.7353 2.87227 30.8194 2.44336 30.984 2.04295C31.1485 1.64254 31.3904 1.27848 31.6957 0.97155C32.001 0.664623 32.3637 0.420846 32.7633 0.254146C33.1628 0.0874447 33.5912 0.00108529 34.0242 0L34.2724 0V13.9097H35.3183C36.4666 13.9097 37.2217 13.5145 37.6562 12.7676L40.6262 7.72862L44.6576 7.72448L42.2566 11.8707H42.2586Z"
                  fill="#03AC0E"
                />
                <path
                  d="M60.5173 22.77C58.769 24.4531 56.669 25.2972 54.2297 25.2972C51.8121 25.2972 49.7245 24.4521 47.9762 22.77C46.2228 21.0797 45.3486 18.929 45.3486 16.3366C45.3486 11.28 49.1907 7.37586 54.2297 7.37586C56.6483 7.37586 58.7421 8.22724 60.5007 9.92276C62.2645 11.6224 63.1459 13.7669 63.1459 16.3366C63.1459 18.929 62.2697 21.0797 60.5173 22.77ZM57.9642 12.33C56.9897 11.3048 55.7514 10.7907 54.2297 10.7907C50.9742 10.7907 49.0262 13.1752 49.0262 16.3366C49.0262 19.4545 51.0207 21.8834 54.2297 21.8834C57.4397 21.8834 59.4331 19.4545 59.4331 16.3366C59.4331 14.6814 58.9386 13.3531 57.9642 12.33Z"
                  fill="#03AC0E"
                />
                <path
                  d="M23.1673 12.33C22.1928 11.3048 20.9535 10.7907 19.4328 10.7907C16.1773 10.7907 14.2293 13.1752 14.2293 16.3366C14.2293 19.4545 16.2238 21.8834 19.4328 21.8834C22.6417 21.8834 24.6362 19.4545 24.6362 16.3366C24.6362 14.6814 24.1417 13.3531 23.1673 12.33Z"
                  fill="#03AC0E"
                />
                <path
                  d="M5.17656 24.9455C1.71622 24.9455 1.04107e-05 22.5807 1.04107e-05 19.2786V6.74793C-0.00107776 6.31484 0.0831487 5.88578 0.247881 5.48524C0.412613 5.0847 0.654624 4.72052 0.960097 4.41351C1.26557 4.1065 1.62852 3.86267 2.02823 3.69593C2.42794 3.52919 2.85658 3.44281 3.28967 3.44172H3.53794V7.72759H9.51415V11.1414H3.53794V19.6738C3.53794 21.1241 4.18139 21.5317 5.56139 21.5317H9.51311V24.9455H5.17656Z"
                  fill="#03AC0E"
                />
              </svg>

              {/* Search section */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="px-4 py-2 text-sm font-bold text-[#6D7588] rounded-xl bg-white border"
                >
                  Kategori
                </Button>
                <div className="flex items-center border border-[#BFC9D9] rounded-lg overflow-hidden bg-white w-96">
                  <div className="flex items-center px-3 py-2 bg-white">
                    <svg
                      className="w-6 h-6 text-[#8D96AA]"
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
              </div>
            </div>

            {/* Right side icons and profile */}
            <div className="flex items-center gap-4">
              <div className="relative bg-white rounded-xl p-2">
                <svg
                  className="w-6 h-6 text-[#6D7588]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4 19h10v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-[#F24E62] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  1
                </span>
              </div>

              <div className="bg-white rounded-xl p-2">
                <svg
                  className="w-6 h-6 text-[#6D7588]"
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
              </div>

              <div className="w-px h-6 bg-[#E4EBF5]"></div>

              <div className="flex items-center gap-2 bg-white rounded-lg px-1 py-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2b52e9a8356ac5498c9574f7d64e97dc384d3b30?width=72"
                  alt="Profile"
                  className="w-9 h-9 rounded-full"
                />
                <span className="text-sm text-[#212121]">Toko</span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setLoginModalOpen(true)}
                  variant="ghost"
                  className="text-sm text-[#212121] hover:bg-gray-100 px-3 py-2"
                >
                  Masuk
                </Button>
                <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/528949db3971b68cd4c14466f2bcdafd11a1c7a0?width=64"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-[#212121]">Gerry</span>
                </div>
              </div>

              <div className="relative bg-white rounded-xl p-2">
                <svg
                  className="w-6 h-6 text-[#6D7588]"
                  fill="currentColor"
                  viewBox="0 0 22 17"
                >
                  <path d="M21.9227 3.36119C21.8433 3.11671 21.7122 2.8891 21.5369 2.69143C21.3634 2.49472 21.1452 2.33538 20.8976 2.22462C20.6399 2.10743 20.3582 2.04172 20.071 2.03181H4.82761C4.61184 2.04433 4.39969 2.08888 4.19936 2.16374L4.13323 1.8593C4.12192 1.6038 4.0558 1.35288 3.9387 1.12101C3.8216 0.889141 3.65582 0.680896 3.45091 0.508275C3.246 0.335655 3.00603 0.202071 2.7448 0.11522C2.48357 0.0283692 2.20626 -0.0100319 1.92884 0.00222962H0.826646C0.607406 0.00222962 0.397146 0.082416 0.242119 0.225149C0.087093 0.367882 0 0.561469 0 0.763324C0 0.965179 0.087093 1.15877 0.242119 1.3015C0.397146 1.44423 0.607406 1.52442 0.826646 1.52442H1.92884C2.39176 1.52442 2.46892 1.59545 2.55709 2.12315L3.75849 7.74509L4.35367 10.5662C4.52335 11.4441 5.01326 12.2424 5.74244 12.8292C6.23709 13.1998 6.81796 13.4602 7.43982 13.5903C7.0592 13.9646 6.84656 14.4577 6.84463 14.9704C6.84463 15.5087 7.07688 16.0249 7.49028 16.4055C7.90369 16.7862 8.46438 17 9.04902 17C9.63366 17 10.1944 16.7862 10.6078 16.4055C11.0212 16.0249 11.2534 15.5087 11.2534 14.9704C11.2468 14.5067 11.0679 14.059 10.7464 13.7019H13.9207C13.6635 14.0073 13.5063 14.374 13.4676 14.7588C13.429 15.1436 13.5104 15.5306 13.7025 15.8742C13.8945 16.2179 14.1891 16.5039 14.5517 16.6987C14.9142 16.8935 15.3296 16.9889 15.749 16.9738C16.1685 16.9586 16.5745 16.8335 16.9193 16.6132C17.2642 16.3929 17.5336 16.0865 17.6958 15.7301C17.858 15.3736 17.9063 14.982 17.835 14.6011C17.7638 14.2203 17.5759 13.8661 17.2934 13.5801C17.879 13.4525 18.4279 13.2103 18.9026 12.8698C19.6388 12.3342 20.1525 11.5817 20.3575 10.7387L21.9778 4.18317V4.11214C22.0204 3.86117 22.0016 3.6046 21.9227 3.36119Z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-[#F24E62] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location header */}
        <div className="border-t border-[#F0F3F7] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-2 text-sm">
                <svg
                  className="w-5 h-5 text-[#212121]"
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
                <span className="text-[#212121] text-xs">Dikirim ke</span>
                <span className="text-[#212121] font-bold text-xs">
                  Rumah Gerry Raditya Kusmana Yahya
                </span>
                <svg className="w-5 h-5 text-[#212121]" viewBox="0 0 20 20">
                  <path
                    d="M10.1998 12.7083C10.1177 12.7087 10.0363 12.6927 9.96045 12.6612C9.8846 12.6297 9.81581 12.5834 9.75811 12.525L5.59144 8.35833C5.50834 8.23675 5.47084 8.08973 5.48555 7.9432C5.50026 7.79667 5.56625 7.66004 5.67187 7.55741C5.77749 7.45478 5.91596 7.39274 6.06285 7.38224C6.20974 7.37174 6.35563 7.41344 6.47478 7.5L10.1998 11.2L13.9248 7.5C14.0422 7.42384 14.1819 7.38933 14.3213 7.40198C14.4607 7.41464 14.5918 7.47373 14.6937 7.5698C14.7955 7.66587 14.8621 7.79334 14.8829 7.93179C14.9036 8.07023 14.8773 8.21164 14.8081 8.33333L10.6414 12.5C10.5859 12.563 10.5181 12.6139 10.4421 12.6497C10.3662 12.6856 10.2837 12.7055 10.1998 12.7083Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6">
        {/* Left Column - Cart Items */}
        <div className="flex-1 max-w-[800px]">
          <h1 className="text-2xl font-bold text-[#212121] mb-6">Keranjang</h1>

          {/* Cart Container */}
          <div className="bg-white rounded-xl overflow-hidden mb-8">
            {/* Select All Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0F3F7]">
              <div className="flex items-center gap-4">
                <Checkbox
                  id="select-all"
                  checked={selectAll}
                  onCheckedChange={(checked) =>
                    handleSelectAll(checked as boolean)
                  }
                  className="w-5 h-5 border-2 border-[#00AA5B] data-[state=checked]:bg-[#00AA5B] data-[state=checked]:border-[#00AA5B]"
                />
                <label
                  htmlFor="select-all"
                  className="flex items-center gap-2 text-sm font-bold cursor-pointer text-[#212121]"
                >
                  Pilih Semua
                  <span className="text-[#6D7588] text-xs font-normal">
                    ({cartItems.length})
                  </span>
                </label>
              </div>
              <button className="text-[#00AA5B] font-bold text-sm hover:text-[#00AA5B]/80">
                Hapus
              </button>
            </div>

            {/* Store 1 - ACC COMPUTER 22 */}
            <div className="border-b-[8px] border-[#F0F3F7]">
              <div className="flex items-center gap-4 px-6 py-4">
                <Checkbox
                  id="store-1"
                  checked={selectedItems.includes("1")}
                  onCheckedChange={(checked) =>
                    handleItemSelect("1", checked as boolean)
                  }
                  className="w-5 h-5 border-2 border-[#00AA5B] data-[state=checked]:bg-[#00AA5B] data-[state=checked]:border-[#00AA5B]"
                />
                <div className="flex items-center gap-2">
                  <img
                    src={cartItems[0].storeIcon}
                    alt="Store"
                    className="w-4 h-4"
                  />
                  <span className="font-bold text-sm text-[#212121]">
                    {cartItems[0].storeName}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 px-6 pb-6">
                <Checkbox
                  id="item-1"
                  checked={selectedItems.includes("1")}
                  onCheckedChange={(checked) =>
                    handleItemSelect("1", checked as boolean)
                  }
                  className="w-5 h-5 border-2 border-[#00AA5B] data-[state=checked]:bg-[#00AA5B] data-[state=checked]:border-[#00AA5B] mt-2"
                />
                <img
                  src={cartItems[0].image}
                  alt="Product"
                  className="w-20 h-20 rounded-lg border border-[#F0F3F7] object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-4">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm text-[#212121] mb-2 leading-5">
                        {cartItems[0].name}
                      </h3>
                      <p className="text-sm text-[#6D7588]">
                        {cartItems[0].variant}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-[#212121]">
                      {formatPrice(cartItems[0].price)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg
                          className="w-6 h-6 text-[#8D96AA]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg
                          className="w-6 h-6 text-[#8D96AA]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center border border-[#BFC9D9] rounded-full">
                      <button
                        onClick={() => updateQuantity("1", -1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-full"
                      >
                        <svg
                          className="w-4 h-4 text-[#BFC9D9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="px-4 py-1 text-sm">1</span>
                      <button
                        onClick={() => updateQuantity("1", 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-full"
                      >
                        <svg
                          className="w-4 h-4 text-[#212121]"
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store 2 - ROBOT PC INDONESIA */}
            <div>
              <div className="flex items-center gap-4 px-6 py-4">
                <Checkbox
                  id="store-2"
                  checked={selectedItems.includes("2")}
                  onCheckedChange={(checked) =>
                    handleItemSelect("2", checked as boolean)
                  }
                  className="w-5 h-5 border-2 border-[#00AA5B] data-[state=checked]:bg-[#00AA5B] data-[state=checked]:border-[#00AA5B]"
                />
                <div className="flex items-center gap-2">
                  <img
                    src={cartItems[1].storeIcon}
                    alt="Store"
                    className="w-4 h-4"
                  />
                  <span className="font-bold text-sm text-[#212121]">
                    {cartItems[1].storeName}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 px-6 pb-6">
                <Checkbox
                  id="item-2"
                  checked={selectedItems.includes("2")}
                  onCheckedChange={(checked) =>
                    handleItemSelect("2", checked as boolean)
                  }
                  className="w-5 h-5 border-2 border-[#00AA5B] data-[state=checked]:bg-[#00AA5B] data-[state=checked]:border-[#00AA5B] mt-2"
                />
                <div className="relative">
                  <img
                    src={cartItems[1].image}
                    alt="Product"
                    className="w-20 h-20 rounded-lg border border-[#F0F3F7] object-cover"
                  />
                  {cartItems[1].discount && (
                    <div className="absolute -top-1 -left-1 bg-[#F94D63] text-white text-xs px-2 py-1 rounded-tl-lg rounded-br-lg font-bold">
                      {cartItems[1].discount}%
                      <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#B31D40] rounded-bl-full"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-4">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm text-[#212121] leading-5 mb-2">
                        {cartItems[1].name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#212121] block">
                        {formatPrice(cartItems[1].price)}
                      </span>
                      {cartItems[1].originalPrice && (
                        <span className="text-sm text-[#6D7588] line-through">
                          {formatPrice(cartItems[1].originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg
                          className="w-6 h-6 text-[#8D96AA]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg
                          className="w-6 h-6 text-[#8D96AA]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center border border-[#BFC9D9] rounded-full">
                      <button
                        onClick={() => updateQuantity("2", -1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-full"
                      >
                        <svg
                          className="w-4 h-4 text-[#BFC9D9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="px-4 py-1 text-sm">1</span>
                      <button
                        onClick={() => updateQuantity("2", 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-full"
                      >
                        <svg
                          className="w-4 h-4 text-[#212121]"
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-[#212121] mb-6">
              Terakhir Dilihat
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {recentlyViewed.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-44 object-cover"
                    />
                    <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-4 h-4 text-[#9FA6B0]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-2">
                    <h3 className="text-xs text-[#212121] mb-2 line-clamp-2 min-h-[32px] leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-[#212121] mb-2">
                      {formatPrice(item.price)}
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-[#6D7588]">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="truncate">{item.location}</span>
                      </div>
                      <p className="text-xs text-[#6D7588] truncate">
                        {item.store}
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="flex">{renderStars(item.rating)}</div>
                        <span className="text-xs text-[#6D7588] font-bold">
                          {item.rating}
                        </span>
                        <span className="text-xs text-[#6D7588]">
                          ({item.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h2 className="text-xl font-bold text-[#212121] mb-6">
              Rekomendasi untukmu
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-4 h-4 text-[#9FA6B0]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-2">
                    <h3 className="text-xs text-[#212121] mb-2 line-clamp-2 min-h-[32px] leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-[#212121] mb-2">
                      {formatPrice(item.price)}
                    </p>
                    <div className="space-y-1 mb-3">
                      <p className="text-xs text-[#6D7588] truncate">
                        {item.store}
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="flex">{renderStars(item.rating)}</div>
                        <span className="text-xs text-[#6D7588]">
                          ({item.reviews})
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-[#00AA5B] border-[#00AA5B] hover:bg-[#00AA5B]/5 text-xs py-1.5 h-8"
                    >
                      + Keranjang
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-[360px]">
          <div className="bg-white rounded-xl p-6 sticky top-6">
            <h3 className="text-lg font-bold text-[#212121] mb-4">
              Ringkasan belanja
            </h3>
            <p className="text-sm text-[#212121] mb-6">Total</p>

            <hr className="border-[#F0F3F7] mb-6" />

            {/* Promo Banner */}
            <div className="flex items-center gap-3 p-3 bg-[#EDFFF9] border border-[#39E5D1] rounded-lg mb-6">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#00D975" />
                  <path
                    d="M22 12L14 20L10 16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#212121]">
                  1 kupon promo berhasil dipakai
                </p>
                <p className="text-xs text-[#6D7588]">
                  Dapat cashback 17.000 🎉
                </p>
              </div>
            </div>

            <hr className="border-[#F0F3F7] mb-6" />

            <Button className="w-full bg-[#00AA5B] hover:bg-[#00AA5B]/90 text-white font-bold py-3 h-12">
              Beli (2)
            </Button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </div>
  );
};

export default Cart;
