import './EditPage.css'
import styled from "styled-components";
import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil'; 
import { myInfoState } from '../atom';

function EditProfile(){ 
    const [myInfo, setMyInfo] = useRecoilState(myInfoState);
    const input = useRef();

    const onClickimg = () => {
        input.current.click();
    }

    // 개별 정보 업데이트 함수
    const handleInfo = (field, value) => {
        setMyInfo(prev => ({ ...prev, [field]: value }));
    }

    // 각 필드별 핸들러 설정
    const setEmail = (e) => {
        handleInfo('email', e.target.value);
    }

    const setNickname = (e) => {
        handleInfo('nickname', e.target.value);
    }

    const setHomepage = (e) => {
        handleInfo('homepage', e.target.value);
    }

    const setGender = (e) => {
        handleInfo('gender', e.target.value);
    }

    const setBirthday = (e) => {
        handleInfo('date', e.target.value);
    }

    const setImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imgUrl = URL.createObjectURL(file);
            handleInfo('image', imgUrl);
        }
    }

    const setIntro = (e) => {
        handleInfo('introduce', e.target.value);
    }
    return(
        <>
            <div className='subheader-container'>
                <HeadButton fontSize ="15px" MarginLeft='40px' Color='#35c5f0'>회원정보수정</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>알림 설정</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>사용자 숨기기 설정</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>전문가 신청</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>비밀번호 변경</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>추천코드</HeadButton>
            </div>
            <div className='idmain-container'>
                <div className='id-container'>
                    <div className='id-title'>
                        <Container Width='1100px' Height='100px' MarginLeft='40px'>
                            <Text fontSize='24px' FontWeight='bold' >회원정보수정</Text>               
                        </Container>
                        <Container Width='100px'><Text fontSize='14px' Color='red' TextDeco='underline'>탈퇴하기</Text></Container>                                        
                    </div>
                    {/* 이메일 Container */}
                    <Container Height='45px'>
                        <p><Text fontSize='15px'>이메일</Text><br></br><Text fontSize='15px' Color='#757575'>* 필수항목</Text></p>                        
                        <Container Width='400px' Height='40px'>
                            <Input type="text" name="email" value={myInfo.email} onChange={setEmail}/>
                        </Container>
                    </Container>
                    {/* 이메일 변경 글씨 */}
                    <Container Height='50px' MarginLeft='180px' Color='#9E9E9E'>
                        <Text fontSize='15px' Color='#9E9E9E' FontWeight='700'>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</Text> 
                    </Container>
                    {/* 별명 입력칸 */}
                    <Container Height='45px' MarginTop='20px'>
                        <p><Text fontSize='15px'>별명</Text><br></br><Text fontSize='15px' Color='#757575'>* 필수항목</Text></p>                        
                        <Container Width='400px' Height='40px' >
                            <Input type="text" name="nickname" value={myInfo.nickname} onChange={setNickname} />
                        </Container>
                    </Container>
                    {/* 홈페이지 입력칸 */}
                    <Container Height='45px' MarginTop='30px'>
                        <Text fontSize='15px' MarginRight='10px'>홈페이지</Text>                      
                        <Container Width='400px' Height='40px' >
                            <Input type="text" name="homepage" value={myInfo.homepage} onChange={setHomepage} />
                        </Container>
                    </Container>
                    <Container Height='45px' MarginTop='20px'>
                        <Text fontSize='15px' MarginRight='35px'>성별</Text>                      
                        <Container Width='400px' Height='40px'>
                            <label class='radio-label'>
                            <input type="radio" value="여성" checked={myInfo.gender === "여성"} onChange={setGender}/>
                                <span>여성</span>
                            </label>
                            <label class='radio-label'>
                            <input type="radio" value="남성" checked={myInfo.gender === "남성"} onChange={setGender}/>
                                <span>남성</span>
                            </label>
                        </Container>
                    </Container>
                    {/* 홈페이지 입력칸 */}
                    <Container Height='45px' MarginTop='20px'>
                        <Text fontSize='15px' MarginRight='10px'>생년월일</Text>                      
                        <Container Width='400px' Height='40px' >
                            <Input type= "date" value={myInfo.date} onChange={setBirthday} />
                        </Container>
                    </Container>
                    <Container Height='230px' MarginTop='30px' Align='flex-start'>
                        <Text fontSize='15px' MarginRight='-18px'>프로필 이미지</Text>
                        <Container Width='400px' Height='230px' MarginLeft='70px'>
                        <form method="post" enctype="multipart/form-data">
                            <div className="button">
                            <label htmlFor="chooseFile">
                                {myInfo.image ? (
                                <img src={myInfo.image} width='200px' height='200px' alt="프로필 이미지" />
                                ) : (
                                <img src="/proimg.png" width='200px' height='200px' alt="프로필 이미지" />
                                )}
                            </label>
                            </div>
                            <input
                            type="file"
                            id="chooseFile"
                            name="chooseFile"
                            accept="image/*" // 이미지 파일만 가져오도록 함
                            onChange={setImage}
                            />
                        </form>
                        </Container>
                    </Container>
                    {/* 한줄 소개 입력칸 */}
                    <Container Height='45px' MarginTop='20px'>
                        <Text fontSize='15px' MarginRight='10px'>한줄 소개</Text>                      
                        <Container Width='400px' Height='40px' >
                        <Input type="text" name="introduce" value={myInfo.introduce} onChange={setIntro} />
                        </Container>
                    </Container>
                    <div className='id-title'> {/* 회원정보수정 타이틀 */}
                        <Container Width='1000px' Height='50px' MarginLeft='40px'></Container>
                        <StyledLink to='/profile'>
                            <button className='write-button'>수정하기</button>                                  
                        </StyledLink>
                    </div>
                </div>
            </div>
        </>
    );
}

/* styled-components 이용 */

const HeadButton = styled.button`
    width: auto;
    font-weight: bold;
    font-size: ${(props) => props.fontSize}; //props로 font-size가변값으로 만들기
    margin-left: ${(props) => props.MarginLeft};
    color: ${(props) => props.Color};
    padding: 0px;
    background-color: white;
    border: none;
    &:hover{
        background-color: white;
        color: #35c5f0;
    }
    `;


const StyledLink = styled(Link)`
    text-decoration: none; /* 밑줄 없애기 */
    color: inherit; /* 부모 요소로부터 상속받은 색상 사용 */
`;

const IconButton = styled.button`
    background-color: white;
    line-height: 0;
    border: none;
    width: ${(props) => props.Width};  //props로 width가변값으로 만들기
    padding: 0px;
    height: ${(props) => props.Height};  //props로 height가변값으로 만들기
    margin-left: ${(props) => props.MarginLeft};
    &:hover{
        background-color: white;
    }
    `;



export const Text = styled.div`
    margin-left: ${(props) => props.MarginLeft || '0px'};
    margin-right: ${(props) => props.MarginRight || '0px'};
    margin-top: ${(props) => props.MarginTop};
    font-weight: ${(props) => props.FontWeight};
    font-size: ${(props) => props.fontSize || '13px'};
    text-align: center; /* 글자 가운데 정렬 */
    color: ${(props) => props.Color || "#000000"}; //검정색을 디폴드 값으로 지정
    display: inline-block; /* 텍스트를 한 줄로 표시 */
    text-decoration :  ${(props) => props.TextDeco || "none"};
`;

export const Container = styled.div`
    margin-top: ${(props) => props.MarginTop};
    background-color: white;
    width: ${(props) => props.Width || "600px"};
    height: ${(props) => props.Height || "100px"};
    display: flex;
    align-items: ${(props) => props.Align || "center"}; /* 세로 방향 가운데 정렬 */
    
    margin-left: ${(props) => props.MarginLeft || '40px'};
`;

export const Input = styled.input`
    margin-left: ${(props) => props.MarginLeft || "40px"};
    width: ${(props) => props.Width || "400px"};
    height: ${(props) => props.Height || "40px"};
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    &:focus {outline: none;} /* outline 테두리 없애기 */
    font-size: 15px;
    padding-left: 10px;
`

export default EditProfile;