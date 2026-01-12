import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Star,
  Heart,
  Share,
  ShoppingCart,
  MapPin,
  Shield,
  Truck,
  RotateCcw,
  MessageCircle,
  Plus,
  Minus,
} from "lucide-react";
import { FuncProductDetail } from "./hooks";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("default");
  const {payload, selectedImage, setSelectedImage} = FuncProductDetail();

  const product = {
   features: [
      "Garansi keaslian 100%",
      "Packing aman dengan sleeve",
      "Gratis tracking number",
      "Kondisi mint guaranteed",
    ]
  };

  

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const selectedVariantData = payload.product?.variants?.find(
    (v) => v.id === selectedVariant,
  );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Kembali</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <Link to="/category/tcg" className="hover:text-green-600">
                Trading Cards
              </Link>
              <span>/</span>
              <span className="text-gray-800">Pokemon TCG</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border overflow-hidden">
              <img
                src={selectedImage}
                alt={payload.product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {payload.product && payload.product.images.length > 0 && (
              <div className="flex space-x-3">
                {payload.product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
                      selectedImage === image
                        ? "border-green-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {payload.product.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{payload.product.rating}</span>
                  {/* <span className="text-gray-600">
                    ({payload.product.})
                  </span> */}
                </div>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">{payload.product.sold}</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  {selectedVariantData?.price}
                </span>
                {payload.product.price && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      {payload.product.price}
                    </span>
                    <Badge className="bg-red-100 text-red-600">
                      {payload.product.rating}
                    </Badge>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Harga sudah termasuk PPN</span>
              </div>
            </div>

            {/* Variants */}
            <div className="space-y-3">
              <h3 className="font-medium">Pilih Varian</h3>
              {payload.product && payload.product?.variants?.length >= 0 &&(
                <div className="grid grid-cols-2 gap-2">
                  {payload.product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`p-3 border rounded-lg text-left ${
                        selectedVariant === variant.id
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-medium text-sm">{variant.name}</div>
                      <div className="text-sm text-gray-600">{variant.price}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-4">
              <span className="font-medium">Jumlah:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={decrementQuantity}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-600">Stok: 50+ tersedia</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Beli Langsung
                </Button>
                <Button variant="outline" className="flex-1">
                  + Keranjang
                </Button>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share className="w-4 h-4 mr-2" />
                  Bagikan
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </Button>
              </div>
            </div>

            {/* Features */}
            {product.features?.length && (
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-sm">Pengiriman</div>
                    <div className="text-xs text-gray-600">
                      Gratis ongkir s.d. Rp15.000 untuk pembelian min. Rp100.000
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-sm">Garansi Return</div>
                    <div className="text-xs text-gray-600">
                      Barang dapat dikembalikan dalam 7 hari
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-sm">Proteksi Pembeli</div>
                    <div className="text-xs text-gray-600">
                      Dapatkan jaminan uang kembali
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Store Info */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-lg">{payload.store.name}</h3>
                    {payload.store.is_verified && (
                      <Badge className="bg-green-100 text-green-600">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{payload.store.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{payload.store.rating}</span>
                    </div>
                    <span>Respon {payload.store.response_time}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">Follow</Button>
                <Button variant="outline">Kunjungi Toko</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Description */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Deskripsi Produk</h3>
            <div className="prose prose-sm max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-gray-700">
                {payload.product.description}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
