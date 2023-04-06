import axiosInstance from 'src/common/api/index';

import { loginParam } from 'src/login/type/login';

export const fetchLoginProc = async (param: loginParam) => {
  try {
    const result = await axiosInstance({
      url: '/login/proc',
      method: 'post',
      params: param,
      data: {},
    });
    if (result) {
      return result;
    }
  } catch (e) {
    console.warn(e);
  }
};
