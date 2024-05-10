import { Link, Outlet, NavLink } from 'react-router-dom';
import styled from "styled-components";
import "./Layout.css";
import MediaQuery from "react-responsive";

const Layout = () => {

    const activeStyle = {
        color: '#35c5f0',
        textDecoration: 'none'
    };
    const defaultStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    return (
        <div>
            <div className="header-container">
                <img className='logo-img' alt='logo' src="/Logo_1.png"></img>
                <Menu MarginLeft='40px'>커뮤니티</Menu>
                <Menu MarginLeft='30px'>쇼핑</Menu>
                <Menu MarginLeft='30px'>인테리어/생활</Menu>
                <div className='search-container'>
                    <img className='search-img' alt='search' src="/search.png"></img>
                    <input className='search-box' type='text' placeholder='통합검색'></input>
                </div>
                <Icon Width='18px' Height='18.5px' MarginLeft='35px'><img className='search-tablet' alt='search' src="/search.png"></img></Icon>
                <Icon Width='18px' Height='18.5px' MarginLeft='35px'><img src="/mark.png" alt='mark'></img></Icon>
                <Icon Width='18px' Height='18.5px' MarginLeft='25px'><img src="/bell.png" alt='bell'></img></Icon>
                <Icon Width='18px' Height='18.5px' MarginLeft='25px'><img src="/cart.png" alt='cart'></img></Icon>
                <Icon Width='43px' Height='43px' MarginLeft='25px'><img src="/profile.png" alt='profile'></img></Icon>
                <button className='write-button'>글쓰기 <img src="/Vector.png" alt='vector'></img></button>
            </div>
            <div className="header-mobile">
                <div className='mobile-icon'>
                    <Icon Width='18px' Height='18.5px' MarginLeft='10px'><img width='25px' src="/menu.png" alt='search'></img></Icon>
                </div>
                <div className='logo-container'>
                    <img className='logo-img' alt='logo' src="/Logo_1.png"></img>
                </div>
                <div className='mobile-icon'>
                    <Icon Width='18px' Height='18.5px' MarginLeft='25px'><img src="/search.png" alt='search'></img></Icon>
                    <Icon Width='18px' Height='18.5px' MarginLeft='25px'><img src="/cart.png" alt='cart'></img></Icon>
                </div>
            </div>
            <div className='subheader-container'>
                <StyledLink to="/profile">
                    <Menu fontSize="18px" MarginLeft="40px">프로필</Menu>
                </StyledLink>
                <Menu fontSize="18px" MarginLeft='40px'>나의 쇼핑</Menu>
                <Menu fontSize="18px" MarginLeft='40px'>나의 리뷰</Menu>
                <StyledLink to="/edit">
                    <Menu fontSize="18px" MarginLeft="40px">설정</Menu>
                </StyledLink></div>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

const Menu = styled.button`
    width: auto;
    font-weight: bold;
    font-size: 18px;
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

const Icon = styled.button`
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

export default Layout;