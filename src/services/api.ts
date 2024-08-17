import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./endpoints";

export interface IRequest {}

// =================== AXIOS INSTANCE ===================
const axiosInstance = axios.create({
   baseURL: BASE_URL,
});

// =================== AXIOS INTERCEPTORS ===================
axiosInstance.interceptors.response.use(
   (res) => res,
   (error) => {
      console.error("Error Response:", error);
      return Promise.reject(
         (error.response && error.response.data) || "Something went wrong"
      );
   }
);

// =================== AXIOS REQUEST METHODS ===================
export async function getRequest<T>(
   url: string,
   options?: AxiosRequestConfig
): Promise<T> {
   const res = await axiosInstance.get(url, options);
   return res.data;
}
export async function getRequestWithParams<T>(
   url: string,
   params: string,
   options?: AxiosRequestConfig
): Promise<T> {
   const fullURL = `${url}${params}`;
   const res = await axiosInstance.get(fullURL, options);
   return res.data;
}
export async function postRequest(
   url: string,
   body: IRequest,
   options: AxiosRequestConfig
) {
   const res = await axiosInstance.post(url, body, options);
   return res.data;
}

export async function putRequest(
   url: string,
   body: IRequest,
   options: AxiosRequestConfig
) {
   const res = await axiosInstance.put(url, body, options);
   return res.data;
}

export async function deleteRequest(url: string, options: AxiosRequestConfig) {
   const res = await axiosInstance.delete(url, options);
   return res.data;
}

export default axiosInstance;
