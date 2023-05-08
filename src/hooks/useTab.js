import { useState } from "react";

const content = [
  { tab: "Section1", content: "I,m One" },
  { tab: "Section2", content: "I,m Two" },
  { tab: "Section3", content: "I,m Three" },
];
export const useTabs = (initial, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initial);
  if (!allTabs || Array.isArray(allTabs)) {
    return;
  }
  return {
    currenContent: allTabs[currentIdx],
    changeContent: setCurrentIdx,
  };
};

// const UseTabxample = () => {
//   const { currenContent, changeContent } = useTabs(0, content);

//   return (
//     <div>
//       {content.map((section, idx) => (
//         <button onClick={() => changeContent(idx)}>{section.tab}</button>
//       ))}
//       <div>{currenContent.content}</div>
//     </div>
//   );
// };

// export default UseTabxample;
