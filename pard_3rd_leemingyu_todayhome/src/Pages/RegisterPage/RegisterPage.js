import './Register.css'
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { myInfoState } from '../atom';


function RegisterPage() {
    const [myInfo, setMyInfo] = useRecoilState(myInfoState);

    const handleInfo = (e) => {
        const { name, value } = e.target;
        setMyInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

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
                    <input id='inputValue' type='text' name="email" value={myInfo.email} onChange={handleInfo} placeholder='이메일'></input>
                    
                    <p className='heading'>
                        비밀번호
                    </p>
                    <p className='heading'>
                        <div className='row'>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
                    </div></p>
                    <input id='inputValue' type='password' name="password" value={myInfo.password} onChange={handleInfo} placeholder='비밀번호'></input>
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
                    <input id='inputValue' type='text' name="nickname" value={myInfo.nickname} onChange={handleInfo} placeholder='별명 (2~15자)'></input>
                    <StyledLink to='/profile'>
                    <button className='but'>회원가입하기</button>
                    </StyledLink>
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

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    `;