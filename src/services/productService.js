import ApiService from "./api";

const URL = "http://localhost:8000";
const apiClient = new ApiService({
    baseURL: URL
})

export const getProducts = () => apiClient.get("/products");
export const addProduct = (payload) => apiClient.post("/products", payload);
export const updateProduct = (id,payload) => apiClient.put(`/products/update/${id}`,payload);
export const deleteProduct = (id) => apiClient.delete(`/products/${id}`)

export const productAPI = {
    getProducts,
    addProduct,
    updateProduct
}