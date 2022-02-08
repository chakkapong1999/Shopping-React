import ApiService from "./api";

const URL = "http://localhost:8000";
const apiClient = new ApiService({
    baseURL: URL
})

export const getProducts = () => apiClient.get("/products");
export const getProductsForPage = (start,limit) => apiClient.get(`/products/page?start=${start}&limit=${limit}`);
export const addProduct = (payload) => apiClient.post("/products", payload);
export const updateProduct = (id,payload) => apiClient.put(`/products/${id}`,payload);
export const deleteProduct = (id) => apiClient.delete(`/products/${id}`)
export const purchase = (payload) => apiClient.post("/cart/confirm", payload);

export const productAPI = {
    getProducts,
    getProductsForPage,
    addProduct,
    updateProduct,
    purchase,
    deleteProduct
}