import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [currentStep, setCurrentStep] = useState<"login" | "verification">(
    "login",
  );
  const [phoneEmail, setPhoneEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleSignIn = () => {
    // Simulate login process
    if (phoneEmail.trim()) {
      // Format phone number for display in verification step
      setCurrentStep("verification");
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // Simple phone number formatting for Indonesian numbers
    if (phone.startsWith("08")) {
      return (
        `628${phone.substring(2)}`
          .replace(/(.{3})/g, "$1")
          .replace(/x/g, "x")
          .substring(0, 12) + "xxxxxxx"
      );
    }
    return phone.length > 0
      ? phone.substring(0, 3) + "xxxxxxxxx"
      : "628xxxxxxxxx";
  };

  const handleVerification = () => {
    // Handle verification code submission
    console.log("Verification code:", verificationCode);
    // Close modal after successful verification
    onOpenChange(false);
    // Reset state
    setCurrentStep("login");
    setPhoneEmail("");
    setVerificationCode("");
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state when closing
    setCurrentStep("login");
    setPhoneEmail("");
    setVerificationCode("");
  };

  const renderLoginForm = () => (
    <div className="flex flex-col items-center gap-6 p-5 w-[452px]">
      {/* Divider with text */}
      <div className="flex items-center justify-center w-full relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-black/43"></div>
        </div>
        <div className="relative flex justify-center text-xs text-black/43 bg-white px-4">
          Atau Masuk Dengan
        </div>
      </div>

      {/* Input Field */}
      <div className="flex flex-col items-start gap-2 w-full">
        <label className="text-[#1E1E1E] text-base font-normal leading-[140%]">
          Nomor Hp atau Email
        </label>
        <Input
          placeholder="Value"
          value={phoneEmail}
          onChange={(e) => setPhoneEmail(e.target.value)}
          className="w-full min-w-[240px] px-4 py-3 border border-[#D9D9D9] rounded-lg bg-white text-base placeholder:text-[#B3B3B3]"
        />
      </div>

      {/* Sign In Button */}
      <Button
        onClick={handleSignIn}
        className="w-full h-10 px-3 py-3 bg-[#01A49E] border border-[#01A49E] rounded-lg text-[#F5F5F5] text-base font-normal hover:bg-[#01A49E]/90"
      >
        Sign In
      </Button>

      {/* Google Sign In Button */}
      <Button
        variant="outline"
        className="w-[360px] h-10 px-6 py-2 border border-[#6D7588] rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M3.02388 16.4307L6.38721 13.8588C6.1949 13.2746 6.09091 12.6498 6.09091 11.9998C6.09091 11.3498 6.1949 10.7249 6.38721 10.1408L3.02388 7.56885C2.36791 8.9025 2 10.4061 2 11.9998C2 13.5935 2.36791 15.0971 3.02388 16.4307Z"
            fill="#FBBC05"
          />
          <path
            d="M6.38725 10.141C7.16325 7.78407 9.3773 6.09091 12 6.09091C13.4091 6.09091 14.6819 6.59091 15.6819 7.40909L18.591 4.5C16.8182 2.95455 14.5455 2 12 2C8.04828 2 4.6505 4.2621 3.02393 7.56906L6.38725 10.141Z"
            fill="#EA4335"
          />
          <path
            d="M11.9999 21.9999C8.04707 21.9999 4.6485 19.7366 3.02246 16.4281L6.38442 13.8506C7.15795 16.2119 9.37411 17.909 11.9999 17.909C13.2848 17.909 14.4233 17.6064 15.3249 17.0374L18.5179 19.5094C16.77 21.1346 14.439 21.9999 11.9999 21.9999Z"
            fill="#34A853"
          />
          <path
            d="M12 10.1816H21.3182C21.4545 10.7725 21.5455 11.4089 21.5455 11.9998C21.5455 15.2591 20.3531 17.803 18.5179 19.5093L15.325 17.0373C16.369 16.3785 17.0953 15.3624 17.3636 14.0453H12V10.1816Z"
            fill="#4285F4"
          />
        </svg>
        <span className="text-black text-base font-normal">
          Sign in with Google
        </span>
      </Button>

      {/* Forgot Password Link */}
      <button className="text-[#1E1E1E] text-base font-normal text-center underline leading-[140%] hover:text-[#1E1E1E]/80">
        Forgot password?
      </button>
    </div>
  );

  const renderVerificationForm = () => (
    <div className="flex flex-col items-center gap-6 p-5 w-[452px]">
      {/* Chat Bubble Icon */}
      <svg
        width="62"
        height="53"
        viewBox="0 0 62 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[61px] h-[53px]"
      >
        <path
          d="M31 0C14.1535 0 0.5 11.0141 0.5 24.6071C0.5 30.475 3.04961 35.846 7.29102 40.0694C5.80176 46.0319 0.82168 51.3438 0.762109 51.4029C0.5 51.675 0.428516 52.0772 0.583398 52.4321C0.738281 52.7871 1.07187 53 1.45312 53C9.35215 53 15.2734 49.2379 18.2043 46.9192C22.1002 48.3743 26.425 49.2143 31 49.2143C47.8465 49.2143 61.5 38.2002 61.5 24.6071C61.5 11.0141 47.8465 0 31 0ZM15.75 28.3929C13.6412 28.3929 11.9375 26.7011 11.9375 24.6071C11.9375 22.5132 13.6412 20.8214 15.75 20.8214C17.8588 20.8214 19.5625 22.5132 19.5625 24.6071C19.5625 26.7011 17.8588 28.3929 15.75 28.3929ZM31 28.3929C28.8912 28.3929 27.1875 26.7011 27.1875 24.6071C27.1875 22.5132 28.8912 20.8214 31 20.8214C33.1088 20.8214 34.8125 22.5132 34.8125 24.6071C34.8125 26.7011 33.1088 28.3929 31 28.3929ZM46.25 28.3929C44.1412 28.3929 42.4375 26.7011 42.4375 24.6071C42.4375 22.5132 44.1412 20.8214 46.25 20.8214C48.3588 20.8214 50.0625 22.5132 50.0625 24.6071C50.0625 26.7011 48.3588 28.3929 46.25 28.3929Z"
          fill="#01A49E"
        />
      </svg>

      {/* Title Input Field */}
      <div className="flex flex-col items-start gap-2 w-full">
        <Input
          placeholder="Masukan Kode Verifikasi"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="w-full min-w-[240px] px-4 py-3 text-center border-0 border-b border-[#D9D9D9] rounded-none bg-white text-base placeholder:text-[#B3B3B3] focus:ring-0 focus:border-b-2 focus:border-[#01A49E]"
        />
      </div>

      {/* Message Text */}
      <div className="text-[#1E1E1E] text-base font-normal text-center leading-[140%] w-full">
        Kode verifikasi telah dikirim melalui SMS ke{" "}
        {formatPhoneNumber(phoneEmail)}.
      </div>

      {/* Divider Line */}
      <div className="w-full border-b border-[#D9D9D9]"></div>

      {/* Resend Code Link */}
      <div className="text-center w-full">
        <span className="text-[#1E1E1E] text-base font-normal">
          Tidak Terima Kode ?{" "}
        </span>
        <button
          onClick={() => {
            // Handle resend code logic
            console.log("Resending code to:", phoneEmail);
          }}
          className="text-[#01A49E] text-base font-bold underline hover:text-[#01A49E]/80"
        >
          Kirim Ulang
        </button>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="p-0 gap-0 max-w-[492px] bg-white rounded-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>
            {currentStep === "login" ? "Login" : "Verification"}
          </DialogTitle>
        </DialogHeader>

        {currentStep === "login" ? renderLoginForm() : renderVerificationForm()}
      </DialogContent>
    </Dialog>
  );
}
