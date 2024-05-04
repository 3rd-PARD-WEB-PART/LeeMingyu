import { useRecoilState, useRecoilValue } from "recoil";
import { myInfoAge, myInfoName, myInfoSelector } from "../Atom";
import React from "react";
import { useNavigate } from "react-router-dom";

function UpdateInfo() {
    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useRecoilState(myInfoSelector);

    const navigator = useNavigate(); // Link 태그는 눌렀을 때만 선언 어떤 함수내에서 페이지 이동을 하기 위해 선언.

    const submitHandler = () => {
        if (window.confirm('수정하시겠습니까?')){
            alert("수정되었습니다.");
        } else {
            alert("취소되었습니다.");
        }
    navigator("/");
    }

    return(

    <div>
        <h1>정보 수정하는 페이지</h1>
        <div>
            <span>나이 </span>
            <input type="number" value={myInfo.age} onChange={(e)=> setMyInfo({...myInfo, age: e.target.value})}/>
        </div>
        <div>
            <span>나이 </span>
            <input type="text" value={myInfo.name} onChange={(e)=> setMyInfo({...myInfo, name: e.target.value})}/>
        </div>
        <button onClick={submitHandler}> 수정하기</button>
    </div>
    )
}

export default UpdateInfo;