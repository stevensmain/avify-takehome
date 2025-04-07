import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const API_BASE_URL = 'https://api.carbonintensity.org.uk';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

export { api };
