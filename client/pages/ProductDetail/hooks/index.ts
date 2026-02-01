import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { initialProductState, IProduct, IProductDetailResponse } from "./types/ProductInterface";
import { apiClient } from "@/config/apiConfig";




interface IReturn {
    payload:IProductDetailResponse,
    selectedImage,
    setSelectedImage,
    features,
    selectedVariantData,
    handleAddToCart,
    handleBuyNow,
    handleChat,
    handleShare,
    handleWishlist,
    incrementQuantity,
    decrementQuantity,
    setSelectedVariant
    selectedVariant
    quantity
    
}

export const FuncProductDetail = (): IReturn =>{
    const {id} = useParams()
    const [payload, setPayload ]= useState<IReturn["payload"]>(initialProductState);
    const [selectedImage, setSelectedImage] = useState<string>();
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetail(id)
    },[])
    /* ===============================
   * SET DEFAULT VARIANT
   =============================== */
    useEffect(() => {
        if (!selectedVariant && payload.product?.variants?.length > 0) {
        setSelectedVariant(payload.product.variants[0].id);
        }
    }, [payload.product, selectedVariant]);

    const selectedVariantData = payload.product?.variants?.find(
        (v) => v.id === selectedVariant
    );

    /* ===============================
    * HANDLERS
    =============================== */
    const incrementQuantity = () => setQuantity((p) => p + 1);
    const decrementQuantity = () => setQuantity((p) => Math.max(1, p - 1));

    const handleBuyNow = async () => {
        const res = await apiClient.post('/public/checkout/buy-now', {
            product_id: Number(id),
            variant_id: selectedVariant,
            quantity,
        });

        navigate(`/checkout/${res.data.data.checkout_session_id}`);
    };

    const handleAddToCart = async () => {
        try {
        await apiClient.post("/cart", {
            product_id: payload.product.id,
            variant_id: selectedVariant,
            quantity,
        });

        alert("Produk ditambahkan ke keranjang");
        } catch (err) {
        console.error(err);
        alert(`Gagal tambah ke keranjang ${err.response.data.message}`);
        }
    };


    const handleWishlist = async () => {
        try {
            await apiClient.post("/wishlist", {
                product_id: payload.product.id,
            });
            
            return alert("Ditambahkan ke wishlist");
        } catch (err) {
            console.error(err);
            if(err.status === 401)
            return alert("Silahkan Login Terlebih dahulu")
        }
    };

    const handleShare = () => {
        if (navigator.share) {
        navigator.share({
            title: payload.product.title,
            url: window.location.href,
        });
        return alert("Link produk disalin");
        }
        navigator.clipboard.writeText(window.location.href);
        alert(`Link produk disalin`);
    };

    const handleChat = () => {
        // window.open(`https://wa.me/${store.phone}`, "_blank");
    };

    const features = [
        "Garansi keaslian 100%",
        "Packing aman dengan sleeve",
        "Gratis tracking number",
        "Kondisi mint guaranteed",
    ];

    const getProductDetail = async (id) =>{
        
        const product = await apiClient.get(`/public/product/${id}`)
        if(product.status !== 200)
            return console.error(product.data?.message)
        setSelectedImage(product.data.data.product.images[0])
        setPayload((prev)=>({
            ...prev,
            ...product.data.data
        }))
    }

    return{
        payload,
        selectedImage,
        setSelectedImage,
        features,
        selectedVariantData,
        selectedVariant,
        handleAddToCart,
        handleBuyNow,
        handleChat,
        handleShare,
        handleWishlist,
        incrementQuantity,
        decrementQuantity,
        setSelectedVariant,
        quantity
    }
}