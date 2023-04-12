import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { loginState } from 'src/store';

const Main = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);

  return (
    <>
      <h1>Main Page</h1>
      <h1>{loginInfo.id}님 환영합니다.</h1>
    </>
  );
};

export default Main;
