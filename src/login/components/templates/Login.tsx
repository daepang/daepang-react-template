import React from 'react';

const Login = () => {
  return (
    <>
      <div className={'login'}>
        <div className={'input_form'}>
          <span className={'inp'} id='loginid-span'>
            <input type='text' placeholder='아이디 입력' title='아이디 입력' />
            <button className={'btn_del'} type='button'>
              <span className={'blind'}>삭제</span>
            </button>
          </span>
        </div>
        <div className={'input_form'}>
          <span className={'inp'}>
            <input type='password' placeholder='비밀번호 입력 (영문, 숫자, 특수문자 조합)' title='비밀번호 입력' />
            <button className={'btn_del'} type='button'>
              <span className={'blind'}>삭제</span>
            </button>
          </span>
        </div>
        <div>
          <p style={{ display: 'none' }}></p>
        </div>
        <div className={'btn_submit mt20'}>
          <span className={'checkboxA'}>
            <input type='checkbox' id={'isSaveId'} title='아이디 저장' />
            <label htmlFor={'isSaveId'}>
              <span className={'checkbox_label'}>아이디 저장</span>
            </label>
          </span>
        </div>
        <div className={'login_btn'}>
          <button className={'btnA btn_blue loginbtn'} type='button'>
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
