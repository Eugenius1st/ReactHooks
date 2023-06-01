import { useEffect, useState } from "react";
// hooks와 animation을 섞을 수 있는 방법을 알아보자

export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange == "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    // () => {
    //   window.removeEventListener("online", handleChange);
    //   window.removeEventListener("offline", handleChange);
    // };
  }, []);
  return status;
};

const UseNetworkExample = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we online" : "we offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return <> {onLine ? "ONLINE" : "OFFLINE"}</>;
};

export default UseNetworkExample;
