import './Profile.css';
import styled from "styled-components";
import React, {useState} from 'react';
import { Link, Outlet } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { myInfoState } from '../atom';

function Profile(){
    const myInfo = useRecoilValue(myInfoState);

    const [isClicked, setIsClicked] = useState(false);
    const onClickLikeButton = () => {
        setIsClicked(!isClicked);
    };


    return(
        <>
            <div className='subheader-container'>
                <Menu fontSize ="15px" MarginLeft='40px' Color='#35c5f0'>모두보기</Menu>
                <Menu fontSize ="15px" MarginLeft='40px'>사진</Menu>
                <Menu fontSize ="15px" MarginLeft='40px'>집들이</Menu>
                <Menu fontSize ="15px" MarginLeft='40px'>노하우</Menu>
                <Menu fontSize ="15px" MarginLeft='40px'>질문과 답변</Menu>
                <Menu fontSize ="15px" MarginLeft='40px'>스크랩북</Menu>
                <Menu fontSize ="15px" MarginLeft='40px'>좋아요</Menu>
            </div>
            <div className='main-container'>
                <div className='profile-container'>
                    <div className='info-labtop'>
                    <label htmlFor="chooseFile">
                                {myInfo.image ? (
                                <img src={myInfo.image} width='130px' height='130px' alt="프로필 이미지" />
                                ) : (
                                <img src="/proimg.png" width='130px' height='130px' alt="프로필 이미지" />
                                )}
                            </label><br></br>
                        <Text fontSize='26px' FontWeight='bold'>이민규</Text>
                        <Text fontSize='13px' MarginTop='10px'>팔로워 <num>0</num> 팔로잉 <num>0</num></Text><br></br>
                        <Link to="/edit" className="set-button">설정</Link>                       
                    </div>
                    <div className='profile-info'>
                        <div className='info-img'>
                        <label htmlFor="chooseFile">
                                {myInfo.image ? (
                                <img src={myInfo.image} width='100%' alt="프로필 이미지" />
                                ) : (
                                <img src="/proimg.png" width='100%' alt="프로필 이미지" />
                                )}
                            </label>
                        </div>
                        <div className='info-word'>
                            <Text fontSize='26px' FontWeight='bold'>{myInfo.nickname}</Text>
                            <Text fontSize='13px' MarginTop='10px'>팔로워 <num>0</num>  팔로잉 <num>0</num></Text><br></br>
                            <Link to="/edit" className="set-button">설정</Link> 
                        </div>
                    </div>
                    <div className='icons-container'>
                        <div className='icon-container'>
                            <img src="/mark.png" width='23px' hegiht='24.9px' alt='mark'></img>
                            <Text fontSize='13px' MarginTop='10px'> 스크랩북</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                        <div className='icon-container'>
                            <IconButton Width='30px' Height='25.91px' onClick={onClickLikeButton}><img id='img' src={isClicked ? "/redlike.png" : "/like.png"}  alt='like' /></IconButton>
                            <Text fontSize='13px' MarginTop='10px'>좋아요</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>{isClicked ? 1 : 0}</Text>
                        </div>
                        <div className='icon-container'>
                            <img src="/coupon.png" width='28.5px' hegiht='21.92px'  alt='coupon'></img>
                            <Text fontSize='13px' MarginTop='10px' width='30px' hegiht='26px'>내 쿠폰</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                    </div>
                </div>
                <div className='box-container'>
                    <div className='add-container'>
                        <Text fontSize='18px' FontWeight='bold' MarginTop='50px'>사진&nbsp;</Text>
                        <Text fontSize='18px' FontWeight='bold' Color='#35c5f0'>0</Text>
                        <div className='add2-container'>
                            <Text fontSize='13px' Color='#757575' FontWeight='bold'>+ 첫 번째 사진을 올려보세요</Text>
                        </div>
                    </div>
                    <div className='add-container'>
                        <Text fontSize='18px' FontWeight='bold' MarginTop='50px'>집들이&nbsp;</Text>
                        <Text fontSize='18px' FontWeight='bold' Color='#35c5f0'>0</Text>
                        <div className='add2-container'>
                            <Text fontSize='13px' Color='#757575' FontWeight='bold'>+ 첫 번째 집들이를 올려보세요</Text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/* styled-components 이용 */

const Menu = styled.button`
    width: auto;
    font-weight: bold;
    font-size: ${(props) => props.fontSize};
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
    text-decoration: none;
    color: inherit;
`;

const IconButton = styled.button`
    background-color: white;
    line-height: 0;
    border: none;
    width: ${(props) => props.Width};
    padding: 0px;
    height: ${(props) => props.Height};
    margin-left: ${(props) => props.MarginLeft};
    &:hover{
        background-color: white;
    }
    `;

export const Text = styled.div`
    margin-top: ${(props) => props.MarginTop};
    margin-left: ${(props) => props.MarginLeft};
    color: #a2a2a2;
    font-weight: ${(props) => props.FontWeight};
    font-size: ${(props) => props.fontSize};
    text-align: center;
    color: ${(props) => props.Color || "#000000"}; 
    display: inline-block; 
`;


export default Profile;