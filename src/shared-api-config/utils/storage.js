// 💾 LocalStorage Utilities
// وظائف مساعدة للـ LocalStorage

/**
 * حفظ بيانات في LocalStorage
 */
export const setItem = (key, value) => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

/**
 * الحصول على بيانات من LocalStorage
 */
export const getItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

/**
 * حذف عنصر من LocalStorage
 */
export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

/**
 * مسح كل LocalStorage
 */
export const clear = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

/**
 * التحقق من وجود مفتاح
 */
export const hasItem = (key) => {
  return localStorage.getItem(key) !== null;
};

// Named export للاستخدام مع: import { storage } from './storage'
export const storage = {
  setToken: (token) => setItem('triggerio_token', token),
  getToken: () => getItem('triggerio_token'),
  removeToken: () => removeItem('triggerio_token'),
  setUser: (user) => setItem('triggerio_user', user),
  getUser: () => getItem('triggerio_user'),
  removeUser: () => removeItem('triggerio_user'),
  clearAll: () => clear(),
  // Generic methods
  setItem,
  getItem,
  removeItem,
  clear,
  hasItem,
};

export default storage;