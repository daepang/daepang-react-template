import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { loginState } from 'src/store';

const Main = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);

  return (
    <>
      <h1>Main Page</h1>
      <h1>로그인 계정 : {loginInfo.id}</h1>
      <h1>프로필 닉네임 : {loginInfo.name}</h1>
      <h1>환영합니다.</h1>
    </>
  );
};

export default Main;
