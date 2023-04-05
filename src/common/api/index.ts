import axios from 'axios';

import { apiConfig } from 'src/common/type/api';

const baseURL = 'https://localhost:7443';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json; charset=utf8',
    'Accept-Language': 'ko',
  },
});

axiosInstance.defaults.timeout = 2500;
axiosInstance.interceptors.request.use(
  config => {
    //요청을 보내기 전에 수행할 로직
    return config;
  },
  error => {
    //요청 에러가 발생했을 때 수행할 로직
    console.log(error); //디버깅
    return Promise.reject(error);
  },
);

//응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  response => {
    //응답에 대한 로직 작성
    const res = response.data;
    return res;
  },

  error => {
    //응답 에러가 발생했을 때 수행할 로직
    console.log(error); //디버깅
    return Promise.reject(error);
  },
);

export default axiosInstance;
