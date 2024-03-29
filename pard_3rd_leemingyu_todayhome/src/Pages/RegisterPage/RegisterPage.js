
import '../../App.css'
import React from 'react';

function RegisterPage() {
    return (
        <div className='container'>
            <div className='title'>
            <img src="/Logo.png" className="logo" alt="Logo" />
            </div>
            <div className='inputList'>
                <div className='registerItem'>
                    <p className='register'>
                        회원가입
                    </p>
                    <p className='heading'>
                        이메일
                    </p>
                    <input id='inputValue' type='text' placeholder='이메일'></input>
                    
                    <p className='heading'>
                        비밀번호
                    </p>
                    <p className='heading'>
                        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
                    </p>
                    <input id='inputValue' type='text' placeholder='비밀번호'></input>
                    <p className='heading'>
                        비밀번호 확인
                    </p>
                    <input id='inputValue' type='text' placeholder='비밀번호 확인'></input>
                    <p className='heading'>
                        닉네임
                    </p>
                    <p className='heading'>
                        다른 유저와 겹치지 않도록 입력해주세요. (2~15자)
                    </p>
                    <input id='inputValue' type='text' placeholder='별명 (2~15자)'></input>
                    <button className='but'>
                        회원가입하기
                    </button>
                    <p className='login'>
                        이미 아이디가 있으신가요?
                        <div className='underLine'>
                            로그인
                            </div></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;