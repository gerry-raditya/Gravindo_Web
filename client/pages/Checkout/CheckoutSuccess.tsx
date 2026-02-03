import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { apiClient } from "@/config/apiConfig";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const reference = params.get("tripay_merchant_ref");

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reference) {
      navigate("/");
      return;
    }

    apiClient
      .get("/public/payment/status", {
        params: { reference },
      })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(() => navigate("/"));
  }, [reference]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Memuat status pembayaran...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-xl font-bold mb-1">
          Pembayaran Berhasil 🎉
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Terima kasih, pesanan kamu sedang diproses
        </p>

        <div className="text-left text-sm mb-4">
          <div className="flex justify-between">
            <span>Order Ref</span>
            <span className="font-medium">{data.reference}</span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <span className="font-medium text-green-600">
              {data.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-bold">
              Rp{data.total.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        <div className="border-t pt-3 text-left text-sm space-y-1">
          {data.items.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                Rp{(item.price * item.qty).toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>

        <Button
          onClick={() => navigate("/")}
          className="w-full mt-5 bg-green-600"
        >
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
