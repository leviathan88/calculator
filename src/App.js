// react hooks
import { useState } from "react";

// react icons
import { FiDelete } from "react-icons/fi"

export default function App() {
  const [text, setText] = useState('0')
  const change = () => "name"
  const clear = () => setText('0')
  const result = () => setText(eval(text).toString())
  const remove = () => text.length == 1 ? setText('0') : setText(text.slice(0, -1))

  const click = (e) => {
    if (text == '0') {
      setText(e.target.value)
    } else if (text.includes('+0') || text.includes('-0') || text.includes('*0') || text.includes('/0')) {
      setText(text.slice(0, -1) + e.target.value)
    } else {
      setText(text + e.target.value)
    }
  }

  const opera = (e) => {
    const at = text.charAt(text.length - 1)
    if (at == '+' || at == '-' || at == '*' || at == '/') {
      setText(text.slice(0, -1) + e.target.value)
    } else {
      setText(text + e.target.value)
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={text} onChange={change} />
      <div className="keypad">
        <button onClick={clear}> C </button>
        <button onClick={remove} id="remove"><FiDelete /></button>

        <button value='*' onClick={opera} className="opera"> x </button>
        <button value='1' onClick={click}> 1 </button>
        <button value='2' onClick={click}> 2 </button>
        <button value='3' onClick={click}> 3 </button>

        <button value='/' onClick={opera} className="opera"> / </button>
        <button value='4' onClick={click}> 4 </button>
        <button value='5' onClick={click}> 5 </button>
        <button value='6' onClick={click}> 6 </button>

        <button value='+' onClick={opera} className="opera"> + </button>
        <button value='7' onClick={click}> 7 </button>
        <button value='8' onClick={click}> 8 </button>
        <button value='9' onClick={click}> 9 </button>

        <button value='-' onClick={opera} className="opera"> - </button>
        <button value='.' onClick={click} id="dot"> . </button>
        <button value='0' onClick={click}> 0 </button>
        <button onClick={result}> = </button>
      </div>
    </div>
  );
}