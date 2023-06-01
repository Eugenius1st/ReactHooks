import { useEffect } from "react";
// 함수형 프로그래밍

export const useBeforeLeave = (onBefore) => {
  // if (typeof onBefore !== "function") {
  //   return;
  // }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  console.log(1);
  useEffect(() => {
    console.log("2");
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
    // 만약 컴포넌트가 마운트 되지 않았을 때 함수를 지우기 위함이다.
  }, []);
};

const UseBeforeLeaveExample = () => {
  const begForLife = () => {
    console.log("pls dont Leave");
  };
  useBeforeLeave(begForLife);

  return <div>checkMouse</div>;
};

export default UseBeforeLeaveExample;
