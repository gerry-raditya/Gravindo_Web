import { apiClient } from "@/config/apiConfig";
import { useAppDispatch, useAppSelector } from "@/config/hooks";
import { setCategories } from "@/store/category";
import React, { Dispatch, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";


interface IReturn {
    payload: {
      categories: any[],
      products:{
        popular: any[],
        product: any[],
        recommedProduct: any[]
      },
      promo: any[]
    }
    globalState: any
    searchQuery: string
    loginModalOpen: boolean
    navigate: NavigateFunction
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const initState = {
      categories: [],
      products:{
        popular: [],
        product: [],
        recommedProduct:[]
      },
      promo: []
}
const FuncHome = (): IReturn => {
  const [payload, setPayload] = useState<IReturn["payload"]>(initState);
  const [searchQuery, setSearchQuery] = useState("");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const globalState = useAppSelector((state) => {
    return {
      category: state.category.categories,
      products : state.product.product
    }
  })
  
  

  useEffect(() => {
    getCategory();
    getProduct();
    getFlashSale();
  }, []);

  const getCategory = async () : Promise<void> =>{
    try {
      const category = await apiClient.get('/public/categories?page=1&SortField=id&SortType=desc&search=&limit=10')
      dispatch(setCategories(category.data.categories));
    } catch (err) {
      return console.log(err);
    }
  }


  const getProduct = async () : Promise<void> =>{
    try {
      const productPopular = await apiClient.get(`/public/product/popular`)
      const product = await apiClient.get(`/public/products`)
      const recommedProduct = await apiClient.get(`/public/product/recommendation`)
      return setPayload((prev)=> ({
        ...prev,
        products: {
          popular: productPopular.data.data.product, 
          product:product.data.products,
          recommedProduct: recommedProduct.data.data
        }
      }))
      
    } catch (err) {
      return console.log(err);
    }
  }

  const getFlashSale = async (): Promise<void> => {
    try {
      const cat = "flash-sale"
      const getFlashSale = await apiClient.get(`/public/promotions/${cat}`)
      const flashSaleProduct = getFlashSale.data.data.find(val => val.slug === cat.trim()).promotions?.[0].products || []
      return setPayload((prev)=>({
        ...prev,
        promo: flashSaleProduct
      }))
    } catch (err) {
      return console.log(err);
    }
  }
  
  
  return{
    globalState,
    payload,
    searchQuery,
    loginModalOpen,
    navigate,
    setSearchQuery,
    setLoginModalOpen
  }
}

export default FuncHome