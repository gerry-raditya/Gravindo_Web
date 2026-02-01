import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MapPin, Check } from "lucide-react";
import { apiClient } from "@/config/apiConfig";

/* ===============================
 * TYPES
 =============================== */
interface CheckoutItem {
  id: number;
  title: string;
  description?: string;
  image: string;
  price: string;
  priceNum: number;
  quantity: number;
  variant?: string;
}

interface PaymentMethod {
  code: string;
  name: string;
  icon_url: string;
  fee_flat?: number;
  group: string;
}

/* ===============================
 * COMPONENT
 =============================== */
export default function Checkout() {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  /* ===============================
   * FETCH DATA
   =============================== */
  useEffect(() => {
    if (!sessionId) return;

    Promise.all([fetchCheckout(), fetchPaymentMethods()])
      .finally(() => setLoading(false));
  }, [sessionId]);

  const fetchCheckout = async () => {
    try {
      const res = await apiClient.get(
        `/public/checkout/session/${sessionId}`
      );
      setItems(res.data.data.items);
    } catch {
      navigate("/");
    }
  };

  const fetchPaymentMethods = async () => {
    const res = await apiClient.get("/public/payment/methods");
    setPaymentMethods(res.data.data);
  };

  /* ===============================
   * CALCULATION
   =============================== */
  const subtotal = items.reduce(
    (sum, item) => sum + item.priceNum * item.quantity,
    0
  );

  /* ===============================
   * PAY
   =============================== */
  const handleCheckout = async () => {
    if (!paymentMethod) return alert("Pilih metode pembayaran");

    setSubmitting(true);

    try {
      const res = await apiClient.post("/public/payment/pay", {
        checkout_session_id: sessionId,
        method: paymentMethod,
      });

      if (res.data.data?.pay_url) {
        window.location.href = res.data.data.pay_url;
      }
      window.location.href = res.data.data.checkout_url;
    } finally {
      setSubmitting(false);
    }
  };

  /* ===============================
   * LOADING
   =============================== */
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Memuat checkout...
      </div>
    );
  }

  /* ===============================
   * RENDER
   =============================== */
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 font-bold text-lg">
        Checkout
      </header>

      <div className="max-w-5xl mx-auto p-4 grid lg:grid-cols-3 gap-6">
        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 space-y-4">
          {/* Address */}
          <Card>
            <CardContent className="p-5">
              <h2 className="font-bold mb-3">ALAMAT PENGIRIMAN</h2>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <div className="font-bold">
                    Rumah • Gerry Raditya Kusmana Yahya
                  </div>
                  <p className="text-sm text-gray-600">
                    Perum. Pondok Tanah Mas, Bekasi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Items */}
          {items.map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-4 flex gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  {item.description && (
                    <p className="text-xs text-gray-500">
                      {item.description}
                    </p>
                  )}
                  {item.variant && (
                    <p className="text-xs text-gray-400">
                      Varian: {item.variant}
                    </p>
                  )}
                  <div className="font-bold mt-2">
                    Rp{item.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ================= RIGHT ================= */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="font-bold">Metode Pembayaran</h2>

            <RadioGroup
              value={paymentMethod ?? ""}
              onValueChange={setPaymentMethod}
              className="space-y-3"
            >
              {paymentMethods.map((pm) => (
                <div
                  key={pm.code}
                  className="flex items-center space-x-3"
                >
                  <RadioGroupItem value={pm.code} id={pm.code} />
                  <Label
                    htmlFor={pm.code}
                    className="flex-1 flex items-center space-x-2 cursor-pointer"
                  >
                    <img
                      src={pm.icon_url}
                      className="w-10 h-6 object-contain"
                    />
                    <span className="text-sm">{pm.name}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <Separator />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>
                Rp{subtotal.toLocaleString("id-ID")}
              </span>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={submitting}
              className="w-full bg-green-600"
            >
              <Check className="w-4 h-4 mr-2" />
              {submitting ? "Memproses..." : "Bayar Sekarang"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
