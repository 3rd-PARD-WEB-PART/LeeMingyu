import{Link, Outlet} from 'react-router-dom';
import styled from "styled-components";
import "./Layout.css";

const Layout = () => {
    return(
    <div>
        <div className="header-container">
            <img className='logo-img' alt='logo' src="/Logo_1.png"></img>
            <MenuButton  MarginLeft='40px'>커뮤니티</MenuButton>
            <MenuButton  MarginLeft='30px'>쇼핑</MenuButton>
            <MenuButton  MarginLeft='30px'>인테리어/생활</MenuButton>
            <div className='search-container'>
                <img className='search-img' alt='search' src="/search.png"></img>
                <input className='search-input' type='text' placeholder='통합검색'></input>
            </div>
            <IconButton Width='18px' Height='18.5px' MarginLeft='35px'><img src="/mark.png" alt='mark'></img></IconButton>
            <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src="/bell.png" alt='bell'></img></IconButton>
            <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src="/cart.png" alt='cart'></img></IconButton>
            <IconButton Width='43px' Height='43px' MarginLeft='25px'><img src="/profile.png" alt='profile'></img></IconButton>
            <button className='write-button'>글쓰기 <img src="/Vector.png" alt='vector'></img></button>
        </div>
        <div className='header2-container'>
            <MenuButton  MarginLeft='40px' Color='#35c5f0'>프로필</MenuButton>
            <MenuButton  MarginLeft='40px'>나의 쇼핑</MenuButton>
            <MenuButton  MarginLeft='40px'>나의 리뷰</MenuButton>
            <StyledLink to="/edit">
                <MenuButton MarginLeft="40px">설정</MenuButton>
            </StyledLink>
        </div>
        <main>
                <Outlet />
            </main>
        </div>
        );
        };

        const MenuButton = styled.button`
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
    /* Link에 적용할 스타일 */
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

export default Layout;