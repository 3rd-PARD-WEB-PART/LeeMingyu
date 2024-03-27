import { useRef, useEffect } from "react";

function App(){
  const inputValue = useRef(0);

  useEffect(() => {
    console.log(inputValue);
    inputValue.current.focus();
  })

  return(
    <div>
      <input type="text" ref={inputValue} placeholder="username" />
      <button>입력</button>
    
    </div>
  );
}

export default App;