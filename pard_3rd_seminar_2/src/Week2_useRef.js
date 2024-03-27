import { useRef, useEffect } from "react";

function App(){
  const inpurValue = useRef(0);

  useEffect(() => {
    console.log(inpurValue);
    inpurValue.current.focus();
  })

  return(
    <div>
      <input type="text" ref={inpurValue} placeholder="username" />
      <button>입력</button>
    
    </div>
  );
}

export default Week2_useRef;