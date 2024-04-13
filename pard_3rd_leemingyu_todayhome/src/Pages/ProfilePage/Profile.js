import './Profile.css';
import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";

function Profile(){
    const [likes, setLikes] = useState(0);
    function handleLike() {
        setLikes(likes + 1);
        document.getElementById("img").src = "/redlike.png"
        console.log("좋아요가 눌렸습니다.");
    }


    return(
        <div>
            <Outlet />
            <div className='header2-container'>
                <MenuButton fontSize ="15px" MarginLeft='40px' Color='#35c5f0'>모두보기</MenuButton>
                <MenuButton fontSize ="15px" MarginLeft='40px'>사진</MenuButton>
                <MenuButton fontSize ="15px" MarginLeft='40px'>집들이</MenuButton>
                <MenuButton fontSize ="15px" MarginLeft='40px'>노하우</MenuButton>
                <MenuButton fontSize ="15px" MarginLeft='40px'>질문과 답변</MenuButton>
                <MenuButton fontSize ="15px" MarginLeft='40px'>스크랩북</MenuButton>
                <MenuButton fontSize ="15px" MarginLeft='40px'>좋아요</MenuButton>
            </div>
            <div className='main-container'>
                <div className='profile-container'>
                    <div className='info-container'>
                        <img src="/profile.png" width='130px' hegiht='130px' alt='profile'></img><br></br>
                        <Text fontSize='26px' FontWeight='bold'>이민규</Text>
                        <Text fontSize='13px' MarginTop='10px'>팔로워 <num>0</num> 팔로잉 <num>0</num></Text><br></br>
                        <Link to="/edit" className="set-button">설정</Link>                       
                    </div>
                    <div className='like-container'>
                        <div className='icon-container'>
                            <img src="/mark.png" width='23px' hegiht='24.9px' alt='mark'></img>
                            <Text fontSize='13px' MarginTop='10px'> 스크랩북</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                        <div className='icon-container'>
                            <IconButton Width='30px' Height='25.91px' onClick={handleLike}><img id='img' src="/like.png"  alt='like' /></IconButton>
                            <Text fontSize='13px' MarginTop='10px'>좋아요</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>{likes}</Text>
                        </div>
                        <div className='icon-container'>
                            <img src="/coupon.png" width='28.5px' hegiht='21.92px'  alt='coupon'></img>
                            <Text fontSize='13px' MarginTop='10px' width='30px' hegiht='26px'>내 쿠폰</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                    </div>
                </div>
                <div className='item-container'>
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
        </div>
    );
}

/* styled-components 이용 */

const MenuButton = styled.button`
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