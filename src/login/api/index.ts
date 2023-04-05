import axiosInstance from 'src/common/api/index';

export const fetchLoginProc = async () => {
  try {
    const result = await axiosInstance({
      url: '/login/proc',
      method: 'post',
      params: {},
      data: {},
    });
    if (result) {
      return result;
    }
  } catch (e) {
    console.warn(e);
  }
};
