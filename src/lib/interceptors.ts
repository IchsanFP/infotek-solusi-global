
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { Logger } from './logger';
import { clearCookie, getCookie, setCookie } from './cookie';
import { CONSTANTSTRING } from '@/utils/constants';

/**
 * function for log responser
 * @param res
 * @returns
 */
export const logResponse = (res: AxiosResponse) => {
  if (!res) return null;

  const { config } = res;
  const loadTime = performance.now();

  Logger(`${config?.method?.toUpperCase()} ${config.url}`, {
    responseTime: loadTime,
    status: res.status,
    statusText: res.statusText,
    message: res?.data?.message ?? ''
  });
};

/**
 * axios service config
 */
const service: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});


service.interceptors.request.use((config) => {
  const token = getCookie(CONSTANTSTRING.ACCESSTOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
});

/**
 * function refresh token
 * @returns
 */
async function refreshToken() {
  try {
    const response = await service.post('refresh-token', {token: getCookie(CONSTANTSTRING.REFRESHTOKEN)});
    service.defaults.headers.Authorization = `Bearer ${response.data.data.accessToken}`;

    const newAccessToken = response.data.data.accessToken;

    setCookie([CONSTANTSTRING.ACCESSTOKEN, newAccessToken]);

    service.defaults.headers.Authorization = `Bearer ${newAccessToken}`;

    return newAccessToken;
  } catch (err) {
    console.error('Error refresh access token:', err);
    throw err;
  }
}

service.interceptors.response.use(
  function (res) {
    if (process.env.NODE_ENV === 'development') logResponse(res);
    return res;
  },
  async function(error) {
    const err = error?.response as AxiosResponse;
    const originalRequest = error.config;

    if (process.env.NODE_ENV === 'development') logResponse(err);

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data.message !== 'Invalid email and password'
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();

        originalRequest.headres.Authorization = `Bearer ${newAccessToken}`;

        return service(originalRequest);
      } catch (refreshError) {
        console.error('error refreshing access token:', refreshError);
        clearCookie([
          CONSTANTSTRING.ACCESSTOKEN,
          CONSTANTSTRING.REFRESHTOKEN
        ])

        if (window.location.pathname !== '/auth') {
          window.location.href = '/auth'
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);

/**
 * http axios get data from API
 * @param url
 * @param config
 * @returns
 */
export const httpGet = (url: string, config?: AxiosRequestConfig) => {
  return service.get(url, config ? config : undefined);
};

/**
 * http axios post data to server
 * @param url
 * @param body
 * @param config
 * @returns
 */
export const httpPost = (url: string, body: unknown, config?: AxiosRequestConfig) => {
  return service.post(url, body, config ? config : undefined);
}

/**
 * http axios put data to server
 * @param url
 * @param body
 * @param config
 * @returns
 */
export const httpPut = (url: string, body: unknown, config?: AxiosRequestConfig) => {
  return service.put(url, body, config? config : undefined);
};

/**
 * http axios patch data to server
 * @param url
 * @param body
 * @param config
 * @returns
 */
export const httpPatch = (url: string, body: unknown, config?: AxiosRequestConfig) => {
  return service.patch(url, body, config ? config : undefined);
};

/**
 * http axios delete data from api
 * @param url
 * @returns
 */
export const httpDel = (url: string) => {
  return service.delete(url);
};

/**
 * http axios download data for image, file etc
 * @param url
 * @returns
 */
export const httpDownload = (url: string) => {
  return service.get(url, {
    responseType: 'blob'
  });
};

