import { useEffect, useState, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // ComponentDidMount,ComponentDidUpdate 되었을 때 click 이벤트를 추가
    if (element.current) element.current.addEventListener("click", onClick);
    return () => {
      // ComponentwillUnMount 되었을 때 이벤트를 정리한다.
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
  }, []);
  // 이렇게 함수를 return 하는 이유는, component가 mount 되지않았을 때 eventListener가 배치되지 않게 하도록 하기 위해서(함수를 return 받음)
  return element;
};
//useRef?: reference는 기본적으로 Component의 어떤 부분을 선택할 수 있는 방법이다.
// document.getElementById()를 사용한 것과 동등하게 말이다.
// <input ref = {input} /> 에서 참조 가능하다. cosnole.log(input.current), input.current.focus() 같은 것으로 응용 가능하다.

const UseClickExample = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <hi ref={title}>Hi</hi>
    </div>
  );
};

export default UseClickExample;
