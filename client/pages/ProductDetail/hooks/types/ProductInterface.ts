/* ========= VARIANT ========= */
export interface IVariant {
  id: string
  created_at: string
  updated_at: string
  product_id: string
  name: string
  price: number
  stock: number
  sku: string
  is_active: boolean
}

/* ========= CATEGORY ========= */
export interface ICategory {
  id: string
  created_at: string
  updated_at: string
  foto_object: string
  sub_categories: string[]
  description: string
}

/* ========= PRODUCT ========= */
export interface IProduct {
  id: string;
  created_at: string;
  updated_at: string;
  images: string[];
  title: string;
  price: number;
  final_price: string;
  rating: number;
  sold: number;
  location: string;
  description: string;
  category_id: string;
  stock: number;
  promotion: any;
  category: ICategory;
  store_id: string;
  variants: IVariant[];
}

export interface ProductVariant {
  id: number | null;
  name: string;
  price: string;
}

export interface Promotion {
  id: number;
  title: string;
  discount: number;
  start_date: string;
  end_date: string;
}

/* ========= STORE ========= */
export interface IStore {
  id: string
  created_at: string
  updated_at: string
  user_id: string
  name: string
  slug: string
  location: string
  rating: number
  response_time: string
  is_verified: boolean
}

/* ========= ROOT RESPONSE ========= */
export interface IProductDetailResponse {
  product: IProduct
  store: IStore
  promotions: any[] // bisa diganti interface kalau struktur sudah ada
}

export const initialProductState: IProductDetailResponse = {
  product: {
    id: "",
    stock: 0,
    created_at: "",
    updated_at: "",
    images: [],
    title: "",
    price: 0,
    final_price: "",
    rating: 0,
    sold: 0,
    location: "",
    description: "",
    category_id: "",
    promotion:null,
    category: {
      id: "",
      created_at: "",
      updated_at: "",
      foto_object: "",
      sub_categories: [],
      description: ""
    },
    store_id: "",
    variants: []
  },
  store: {
    id: "",
    created_at: "",
    updated_at: "",
    user_id: "",
    name: "",
    slug: "",
    location: "",
    rating: 0,
    response_time: "",
    is_verified: false
  },
  promotions: []
};

