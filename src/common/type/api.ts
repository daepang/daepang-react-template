import { AxiosRequestConfig } from 'axios';

export interface apiConfig extends AxiosRequestConfig {
  headers?: {
    Authorization?: string;
  };
}
