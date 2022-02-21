import ApiService from "./api";

const URL = "http://localhost:8000/api";
const apiClient = new ApiService({
    baseURL: URL
})

export const createUser = (payload) => apiClient.post("/create-user", payload);
export const loginUser = (payload) => apiClient.post("/login", payload);

export const userAPI = {
    createUser,
    loginUser
}