import axios from 'axios';

const api = axios.create({
    baseURL: "/api", // Tüm isteklerde bu URL kullanılacak
    timeout: 5000,   // İsteklerin zaman aşımı süresi
});

export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (email, username, password) => api.post('/auth/register', { email, username, password });
export const logout = () => api.post('/auth/logout');
export const getProfile = () => api.get('/auth/profile');

export const getNotifications = () => api.get('/notification');
export const deleteNotification = (id) => api.post('/notification/delete', { id });
export const clearNotifications = () => api.post('/notification/delete-all');
export const createNotification = (notification) => api.post('/notification/add', { notification });

export default api;