import "./App.css";
import { useState } from "react";

// 유효성 검증을 위해 validator function 을 추가한다.
const useInput = (initial, validator) => {
  const [value, setValue] = useState(initial);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
  };
  let willValue = true;
  if (typeof validator === "function") willValue = validator(value);
  if (willValue) setValue(value);

  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <input placeholder="Name" {...name} />
      {/*  <input placeholder="Name" value={name.value} onChange={name.onChange}/> 으로도 작성할 수 있음 */}
    </div>
  );
};

export default App;
