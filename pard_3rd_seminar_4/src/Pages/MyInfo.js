import { useRecoilState } from "recoil";
import { myInfoAge, myInfoName } from "../Atom"; 
import React from "react";
import { Link } from "react-router-dom";

function MyInfo(){
    const [myAge, setMyAge] = useRecoilState(myInfoAge); //Recoil에서 불러온 myInfoAge와 선언한 변수 값이 같으면 로컬에서 활용할 때 무엇을 불러올지 몰라 오류 발생가능성 있음 
    const [myName, setMyName] = useRecoilState(myInfoName);
return(
    <div>
        <h1>메인페이지</h1>
        <h2>나이 : {myAge}</h2>
        <h3>이름 : {myName} </h3>
        <Link to = "/update">수정하기</Link>
    </div>
);
};

export default MyInfo;