import { useEffect, useRef } from "react";
// hooks와 animation을 섞을 수 있는 방법을 알아보자

export const useFadeIn = (duration = 1, delay = 0) => {
  // if (typeof duration !== "number") return;
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      console.log(current.style);
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const UseFadeInExample = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 4);
  return (
    <>
      <h1 {...fadeInH1}>
        {/*   <h1 ref={el} style={{ opacity: 0 }}>  와 같다!*/}
        Helloww
      </h1>
      <p {...fadeInP}>eugenius1st</p>
    </>
  );
};

export default UseFadeInExample;
