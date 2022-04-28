import axios from 'services/api/axios';
import { API_URL } from 'services/api/config';

export const createPage = (fields) => axios.post(`${API_URL}/pages`, fields);
export const updatePage = (fields) => axios.put(`${API_URL}/pages/${fields.id}`, fields);
export const deletePage = (id) => axios.delete(`${API_URL}/pages/${id}`);
