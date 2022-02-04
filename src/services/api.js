import axios from "axios";
import { store } from "../stores/index"

const URL = "http://localhost:8000";

export default class ApiService {
  constructor({ baseURL = URL }) {
    const instance = axios.create({
      baseURL,
    });

    instance.interceptors.request.use(this.handleRequest);
    instance.interceptors.response.use(this.handleResponse);
    this.client = instance;
  }

  handleRequest(config) {
    const state = store.getState();
    const token = state.user.token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }

  handleResponse (response) {
    if(response.data) {
      return response.data
    }
    return response;
  }

  async get(path) {
    return await this.client.get(path);
  }

  async post(path, payload) {
    return await this.client.post(path, payload);
  }
  
  async put(path, payload) {
    return await this.client.put(path, payload);
  }

  async delete(path) {
    return await this.client.delete(path);
  }
}
