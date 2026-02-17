// 📝 API Endpoints - كل الـ APIs
// File: shared-api-config/api/endpoints.js

import { apiClient } from './client';

// ==================== Auth APIs ====================
export const authAPI = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },
  
  register: async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  },
  
  logout: async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  },
  
  getCurrentUser: async () => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  }
};

// ==================== Contact APIs ====================
export const contactAPI = {
  getAll: async (params) => {
    const response = await apiClient.get('/contacts', { params });
    return response.data;
  },
  
  getById: async (id) => {
    const response = await apiClient.get(`/contacts/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await apiClient.post('/contacts', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await apiClient.put(`/contacts/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await apiClient.delete(`/contacts/${id}`);
    return response.data;
  }
};

// ==================== Automation APIs ====================
export const automationAPI = {
  getAll: async () => {
    const response = await apiClient.get('/automations');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await apiClient.get(`/automations/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await apiClient.post('/automations', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await apiClient.put(`/automations/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await apiClient.delete(`/automations/${id}`);
    return response.data;
  },
  
  toggle: async (id) => {
    const response = await apiClient.patch(`/automations/${id}/toggle`);
    return response.data;
  }
};