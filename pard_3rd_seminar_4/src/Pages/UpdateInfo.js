import { useRecoilState } from "recoil";
import { myInfoAge, myInfoName } from "../Atom";
import React from "react";
import { useNavigate } from "react-router-dom";

function UpdateInfo() {
    const [myAge, setMyAge] = useRecoilState(myInfoAge);
    const [myName, setMyName] = useRecoilState(myInfoName);

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
            <input type="number" value={myAge} onChange={(e)=> setMyAge(e.target.value)}/>
        </div>
        <div>
            <span>나이 </span>
            <input type="text" value={myName} onChange={(e)=> setMyName(e.target.value)}/>
        </div>
        <button onClick={submitHandler}> 수정하기</button>
    </div>
    )
}

export default UpdateInfo;