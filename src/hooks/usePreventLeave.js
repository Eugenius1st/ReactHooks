import { useEffect, useState, useRef } from "react";
// 함수형 프로그래밍

export const usePreventLeave = (onLeaving) => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
    // returnValue를 넣어주어야만 chrome이 인식한다.
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    // beforeunload 는 window 가 닫히기 전에 function이 실행되는 것을 허락한다.
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};

const UsePreventExample = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default UsePreventExample;
