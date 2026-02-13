import { axiosClient } from './axiosClient.js';

export const apiServices = {
  jobRequisitions: {
    getAll: () => axiosClient.get('/job-requisitions'),
    getById: (id) => axiosClient.get(`/job-requisitions/${id}`),
    create: (data) => axiosClient.post('/job-requisitions', data),
    update: (id, data) => axiosClient.put(`/job-requisitions/${id}`, data),
    delete: (id) => axiosClient.delete(`/job-requisitions/${id}`),
  },
  employees: {
    getAll: () => axiosClient.get('/employees'),
    getById: (id) => axiosClient.get(`/employees/${id}`),
  },
};
