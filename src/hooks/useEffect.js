import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [number, setNumber] = useState(0);
  const sayHellow = () => {
    console.log("hello");
  };

  useEffect(sayHellow, [number]);
  //useEffect는 componentDidMount와 componentWillUpdate이다.

  return (
    <div>
      <div onClick={setNumber(number + 1)}></div>
      {/* useEffect 가 sayHello를 component가 nount 되었을 때 실행시켰다.
      그리고 number 상태가 바뀔 때 실행시켰다. */}
    </div>
  );
};

export default UseEffectExample;

//참고: useEffect로부터 function이 리턴된다. 그것이 componentWillUnmount이다.
//useEffect는 ComponentDidMount, ComponentWillUnMount, componentWillUpdate이다.
