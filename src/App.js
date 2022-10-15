import { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import PopUp from "./UI/PopUp/PopUp";


function App() {
  let [count, setCount] = useState(0);
  let [value, setValue] = useState('');
  let [popUp, setPopUp] = useState(false)

  const increment = () => {
    setCount(++count)
  }

  return (
    <div className="App">
      <div>{count}</div>
      <div>{value}</div>

      <MyButton onClick = {increment}>Button</MyButton>
      <MyInput 
      value={value}
      onChange = {e => setValue(e.target.value)}
      />
      <MyButton onClick = {() => setPopUp(true)}>Show PopUp</MyButton>
      <PopUp visible = {popUp} setVisible = {setPopUp}>
        <MyInput/>
        <MyInput/>
        <MyButton/>
        
      </PopUp>
 
    </div>
  );
}

export default App;
   