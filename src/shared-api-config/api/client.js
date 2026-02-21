// 🌐 API Client with Axios
// هذا الملف يحتوي على Axios instance مع JWT authentication

import axios from 'axios';
import API_CONFIG, { HTTP_STATUS, ERROR_MESSAGES } from './config';
import { getToken, removeToken } from '../utils/auth';

// إنشاء Axios instance
const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers,
  withCredentials: API_CONFIG.withCredentials,
});

// Request Interceptor: إضافة JWT token لكل request
apiClient.interceptors.request.use(
  (config) => {
    // الحصول على الـ token من localStorage
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Debug logging
    console.log(`📤 API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, {
      data: config.data,
      params: config.params,
      headers: config.headers,
    });
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor: معالجة الأخطاء تلقائياً
apiClient.interceptors.response.use(
  (response) => {
    // نجاح الطلب
    console.log(`✅ API Response: ${response.config.url}`, response.data, 'Status:', response.status);

    return response;
  },
  (error) => {
    // فشل الطلب
    const { response, request, message } = error;
    
    console.error('❌ API Error:', {
      url: error.config?.url,
      status: response?.status,
      data: response?.data,
      message,
    });
    
    // معالجة أنواع الأخطاء المختلفة
    if (response) {
      // الخادم رد بـ status code خارج نطاق 2xx
      const status = response.status;
      const errorData = response.data;
      
      switch (status) {
        case HTTP_STATUS.UNAUTHORIZED:
          // Token منتهي الصلاحية أو غير صالح
          removeToken();
          window.location.href = 'https://triggerio-auth.vercel.app/login';
          return Promise.reject({
            message: ERROR_MESSAGES.UNAUTHORIZED,
            ...errorData,
          });
          
        case HTTP_STATUS.FORBIDDEN:
          return Promise.reject({
            message: ERROR_MESSAGES.FORBIDDEN,
            ...errorData,
          });
          
        case HTTP_STATUS.NOT_FOUND:
          return Promise.reject({
            message: ERROR_MESSAGES.NOT_FOUND,
            ...errorData,
          });
          
        case HTTP_STATUS.SERVER_ERROR:
          return Promise.reject({
            message: ERROR_MESSAGES.SERVER_ERROR,
            ...errorData,
          });
          
        default:
          return Promise.reject({
            message: errorData.message || ERROR_MESSAGES.UNKNOWN,
            ...errorData,
          });
      }
    } else if (request) {
      // الطلب تم إرساله لكن لم يتم استلام رد
      return Promise.reject({
        message: ERROR_MESSAGES.NETWORK_ERROR,
      });
    } else {
      // حدث خطأ أثناء إعداد الطلب
      return Promise.reject({
        message: message || ERROR_MESSAGES.UNKNOWN,
      });
    }
  }
);

// Helper functions لتسهيل الاستخدام
export const api = {
  // GET request
  get: (url, config) => apiClient.get(url, config),
  
  // POST request
  post: (url, data, config) => apiClient.post(url, data, config),
  
  // PUT request
  put: (url, data, config) => apiClient.put(url, data, config),
  
  // PATCH request
  patch: (url, data, config) => apiClient.patch(url, data, config),
  
  // DELETE request
  delete: (url, config) => apiClient.delete(url, config),
};

// Named export للاستخدام مع: import { apiClient } from './client'
export { apiClient };

export default apiClient;