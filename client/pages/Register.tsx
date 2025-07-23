import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic
    console.log("Google sign up");
  };

  const handleEmailSignUp = () => {
    // Handle email sign up logic
    console.log("Email sign up:", email);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="flex flex-col items-center py-5 gap-8">
        {/* Header Logo */}
        <div className="flex justify-center items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/514cc7bb86fb60bf81886e293117aa5dad00a6b6?width=320"
            alt="Tokopedia"
            className="w-40 h-8"
          />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16">
            {/* Left Side - Illustration */}
            <div className="flex flex-col items-center text-center lg:w-96">
              <div className="mb-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d936ba332efdfba71697b858734a02056f446311?width=720"
                  alt="Shopping illustration"
                  className="w-80 h-64 lg:w-96 lg:h-80"
                />
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Jual Beli Mudah Hanya di Tokopedia
              </h1>
              <p className="text-sm text-gray-600">
                Gabung dan rasakan kemudahan bertransaksi di Tokopedia
              </p>
            </div>

            {/* Right Side - Registration Form */}
            <div className="w-full max-w-md">
              <div className="border border-gray-200 rounded-lg p-6 lg:p-8">
                {/* Form Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Daftar Sekarang
                  </h2>
                  <p className="text-sm text-gray-700">
                    Sudah punya akun Tokopedia?{" "}
                    <button
                      onClick={() => navigate("/")}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Masuk
                    </button>
                  </p>
                </div>

                {/* Registration Form */}
                <div className="space-y-6">
                  {/* Email/Phone Input */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                      <label className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500">
                        Nomor HP atau E-mail
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 ml-3">
                      Contoh: email@tokopedia.com
                    </p>
                  </div>

                  {/* Register Button */}
                  <Button
                    onClick={handleEmailSignUp}
                    disabled={!email.trim()}
                    className={`w-full py-3 rounded-lg font-bold text-sm ${
                      email.trim()
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Daftar
                  </Button>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-600">atau</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  {/* Google Sign Up Button */}
                  <Button
                    onClick={handleGoogleSignUp}
                    variant="outline"
                    className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-3"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_298_1773"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="3"
                        width="19"
                        height="18"
                      >
                        <path
                          d="M20.936 10.364H12.55V13.841H17.377C16.927 16.051 15.045 17.318 12.55 17.318C11.8513 17.3193 11.1592 17.1827 10.5134 16.9159C9.86758 16.6491 9.2808 16.2574 8.78672 15.7633C8.29263 15.2692 7.90096 14.6825 7.63417 14.0367C7.36739 13.3909 7.23073 12.6987 7.23205 12C7.23073 11.3013 7.36739 10.6091 7.63417 9.96333C7.90096 9.31753 8.29263 8.73075 8.78672 8.23667C9.2808 7.74258 9.86758 7.35091 10.5134 7.08413C11.1592 6.81734 11.8513 6.68068 12.55 6.682C13.818 6.682 14.964 7.132 15.864 7.868L18.482 5.25C16.886 3.86 14.85 3 12.55 3C7.55005 3 3.55005 7 3.55005 12C3.55005 17 7.55005 21 12.55 21C17.05 21 21.15 17.727 21.15 12C21.1434 11.4488 21.0749 10.9 20.946 10.364H20.936Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_298_1773)">
                        <path
                          d="M2.73193 17.3181V6.68213L9.68593 12.0001L2.73193 17.3181Z"
                          fill="#FBBC05"
                        />
                      </g>
                      <path
                        d="M2.73193 6.68213L9.68593 12.0001L12.5499 9.50513L22.3679 7.90913V2.18213H2.73193V6.68213Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M2.73193 17.3181L15.0049 7.90009L18.2349 8.30009L22.3669 2.16309V21.8201H2.73193V17.3181Z"
                        fill="#34A853"
                      />
                      <path
                        d="M22.368 21.8181L9.68605 12.0001L8.05005 10.7731L22.368 6.68311V21.8181Z"
                        fill="#4285F4"
                      />
                    </svg>
                    <span className="font-bold text-gray-700">Google</span>
                  </Button>

                  {/* Terms and Conditions */}
                  <div className="text-center text-xs">
                    <p className="text-gray-700 mb-1">
                      Dengan mendaftar, saya menyetujui
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      <button className="text-green-600 hover:text-green-700 font-bold">
                        Syarat & Ketentuan
                      </button>
                      <span className="text-gray-700">dan</span>
                      <button className="text-green-600 hover:text-green-700 font-bold">
                        Kebijakan Privasi Tokopedia.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full mt-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-bold text-black uppercase mb-4">
                  SWOO - 1ST NYC TECH ONLINE MARKET
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-black uppercase">
                      HOTLINE 24/7
                    </p>
                    <p className="text-2xl lg:text-3xl font-bold text-teal-500">
                      (025) 3686 25 16
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-black">
                      257 Thatcher Road St, Brooklyn, Manhattan,
                      <br />
                      NY 10092
                    </p>
                    <p className="text-sm text-black">
                      contact@Swootechmart.com
                    </p>
                  </div>
                  {/* Social Icons */}
                  <div className="flex space-x-2 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center"
                      >
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold text-black uppercase mb-4">
                  TOP CATEGORIES
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Laptops</p>
                  <p>PC & Computers</p>
                  <p>Cell Phones</p>
                  <p>Tablets</p>
                  <p>Gaming & VR</p>
                  <p>Networks</p>
                  <p>Cameras</p>
                  <p>Sounds</p>
                  <p>Office</p>
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-bold text-black uppercase mb-4">
                  COMPANY
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>About Swoo</p>
                  <p>Contact</p>
                  <p>Career</p>
                  <p>Blog</p>
                  <p>Sitemap</p>
                  <p>Store Locations</p>
                </div>
              </div>

              {/* Help Center */}
              <div>
                <h3 className="text-lg font-bold text-black uppercase mb-4">
                  HELP CENTER
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Customer Service</p>
                  <p>Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Track Order</p>
                  <p>FAQs</p>
                  <p>My Account</p>
                  <p>Product Support</p>
                </div>
              </div>

              {/* Partner */}
              <div>
                <h3 className="text-lg font-bold text-black uppercase mb-4">
                  PARTNER
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Become Seller</p>
                  <p>Affiliate</p>
                  <p>Advertise</p>
                  <p>Partnership</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="border-t border-gray-300 pt-8 pb-8">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                {/* Language/Currency Selection */}
                <div className="flex space-x-2">
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                    <span className="text-sm">$ USD</span>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/625b51a1a58bc0f84f9a8cd71982ca31d5bc9a50?width=30"
                      alt="English"
                      className="w-4 h-4 mr-2"
                    />
                    <span className="text-sm">Eng</span>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="flex-1 max-w-2xl">
                  <h3 className="text-lg font-bold text-black uppercase mb-4">
                    SUBSCRIBE & GET{" "}
                    <span className="text-red-500">10% OFF</span> FOR YOUR FIRST
                    ORDER
                  </h3>
                  <div className="flex border-b border-gray-300 pb-2">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 outline-none text-sm"
                    />
                    <button className="text-green-600 font-bold text-sm uppercase ml-4">
                      SUBSCRIBE
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    By subscribing, you're accepted the our{" "}
                    <span className="underline text-black">Policy</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-300 pt-8 pb-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-600">
                  © 2024{" "}
                  <span className="font-bold text-black">Shawonetc3</span>. All
                  Rights Reserved
                </p>

                {/* Payment Methods */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3ec5e0e2b32c6f600b154270564948dfdc75b6eb?width=27"
                    alt="Payment"
                    className="h-4"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/0ca29d9bc5ac440a741b3bc794f9d126f7532591?width=52"
                    alt="Payment"
                    className="h-4"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b0ce3d300a739c6375cb8c7a91c3e3a7739ac67b?width=81"
                    alt="Payment"
                    className="h-4"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ac84b11a41bdefeba48c551b63107c43f8bd209a?width=77"
                    alt="Payment"
                    className="h-4"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9096d579810da22aa89bc38c7591109530ed1f8c?width=143"
                    alt="Payment"
                    className="h-4"
                  />
                </div>

                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  📱 Mobile Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
