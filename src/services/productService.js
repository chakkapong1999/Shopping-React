import ApiService from './api';

const URL = 'http://localhost:8000/api';
const apiClient = new ApiService({
  baseURL: URL,
});

export const getProducts = () => apiClient.get('/products');
export const getProductsForPage = (current, limit) =>
  apiClient.get(`/products/page?current=${current}&limit=${limit}`);
export const addProduct = (payload) => apiClient.post('/products', payload);
export const updateProduct = (payload) => apiClient.put('/products', payload);
export const deleteProduct = (payload) =>
  apiClient.post('/products/delete', payload);
export const purchase = (payload) =>
  apiClient.post('/inventory/confirm', payload);
export const getInvertoryById = (id) => apiClient.get(`/inventory/${id}`);
export const addInventory = (payload) =>
  apiClient.post('/inventory/update', payload);

export const productAPI = {
  getProducts,
  getProductsForPage,
  addProduct,
  updateProduct,
  purchase,
  deleteProduct,
  getInvertoryById,
  addInventory,
};
