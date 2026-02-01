import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

  const { payload, selectedImage, setSelectedImage, selectedVariantData, setSelectedVariant, selectedVariant, decrementQuantity, quantity, incrementQuantity, handleBuyNow, handleAddToCart,  handleWishlist,  handleShare, handleChat, features} = FuncProductDetail();

  const product = payload?.product;
  const store = payload?.store;

  

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-4">
          <Link to="/" className="flex items-center text-gray-600 hover:text-green-600">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Kembali
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
        {/* IMAGES */}
        <div className="space-y-4">
          <div className="aspect-square bg-white border rounded-lg overflow-hidden">
            <img
              src={selectedImage || product.images?.[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {product.images?.length > 0 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 border rounded-lg overflow-hidden ${
                    selectedImage === img
                      ? "border-green-600"
                      : "border-gray-200"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* INFO */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {product.rating}
              • Terjual {product.sold}
            </div>
          </div>

          {/* PRICE */}
          <div>
            <div className="text-3xl font-bold">
              {selectedVariantData?.price || product.price}
            </div>
            {product.promotion && (
              <Badge className="bg-red-100 text-red-600">
                Promo
              </Badge>
            )}
          </div>

          {/* VARIANT */}
          {product.variants?.length > 0 && (
            <div>
              <h3 className="font-medium mb-2">Pilih Varian</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`p-3 border rounded-lg ${
                      selectedVariant === v.id
                        ? "border-green-600 bg-green-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="font-medium">{v.name}</div>
                    <div className="text-sm text-gray-600">{v.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <span>Jumlah</span>
            <div className="flex border rounded-lg">
              <button onClick={decrementQuantity} className="p-2">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button onClick={incrementQuantity} className="p-2">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button onClick={handleBuyNow} className="flex-1 bg-green-600">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Beli Langsung
              </Button>
              <Button onClick={handleAddToCart} variant="outline" className="flex-1">
                + Keranjang
              </Button>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleWishlist} variant="outline" size="sm" className="flex-1">
                <Heart className="w-4 h-4 mr-2" /> Wishlist
              </Button>
              <Button onClick={handleShare} variant="outline" size="sm" className="flex-1">
                <Share className="w-4 h-4 mr-2" /> Share
              </Button>
              <Button onClick={handleChat} variant="outline" size="sm" className="flex-1">
                <MessageCircle className="w-4 h-4 mr-2" /> Chat
              </Button>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-2">
            {features.map((f, i) => (
              <div key={i} className="flex items-center text-sm gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">Deskripsi Produk</h3>
            <pre className="whitespace-pre-wrap text-gray-700">
              {product.description}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
