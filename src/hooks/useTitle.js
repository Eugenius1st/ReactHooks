import { useEffect, useState } from "react";

const useTitle = (initial) => {
  const [title, setTitle] = useState(initial);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  console.log(title);
  return setTitle;
};

const UseTitleExample = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div></div>;
};

export default UseTitleExample;
