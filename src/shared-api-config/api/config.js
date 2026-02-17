// 🔧 API Configuration
// هذا الملف يحتوي على إعدادات الاتصال بالـ Backend

const isDev = import.meta.env.MODE === 'development';

const API_CONFIG = {
  // في التطوير: مسار نسبي يمر عبر Vite proxy
  // في الإنتاج: URL الكامل للـ Backend
  baseURL: isDev ? '/api' : 'https://triggerio-backend.onrender.com/api',

  // مهلة الانتظار (30 ثانية)
  timeout: 30000,

  // Headers افتراضية
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  // إعدادات إضافية
  withCredentials: false, // CORS

  // حالة البيئة
  isDevelopment: isDev,
  isProduction: !isDev,
};

// URLs مهمة
export const URLS = {
  // Frontend URLs
  AUTH: 'https://triggerio-auth.vercel.app',
  DASHBOARD: 'https://triggerio-dashboard.vercel.app',
  MAIN: 'https://triggerio.io',
  
  // Backend URL
  API: API_CONFIG.baseURL,
};

// Response status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

// Error messages بالعربي
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'خطأ في الاتصال بالإنترنت',
  TIMEOUT: 'انتهت مهلة الاتصال، يرجى المحاولة مرة أخرى',
  UNAUTHORIZED: 'يجب تسجيل الدخول أولاً',
  FORBIDDEN: 'ليس لديك صلاحية للوصول',
  NOT_FOUND: 'المورد المطلوب غير موجود',
  SERVER_ERROR: 'خطأ في الخادم، يرجى المحاولة لاحقاً',
  UNKNOWN: 'حدث خطأ غير متوقع',
};

export default API_CONFIG;