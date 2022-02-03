import { userAPI } from "./userService"
import { productAPI } from "./productService"

export const api = {
    ...userAPI,
    ...productAPI
}