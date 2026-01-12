import { api } from "@/lib/config";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { initialProductState, IProduct, IProductDetailResponse } from "./types/ProductInterface";




interface IReturn {
    payload:IProductDetailResponse,
    selectedImage,
    setSelectedImage
}

export const FuncProductDetail = (): IReturn =>{
    const {id} = useParams()
    const [payload, setPayload ]= useState<IReturn["payload"]>(initialProductState);
    const [selectedImage, setSelectedImage] = useState<string>();
 
    useEffect(()=>{
        getProductDetail(id)
    },[])
    
    const getProductDetail = async (id) =>{
        
        const product = await api.get(`/product/${id}`)
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
        setSelectedImage
    }
}