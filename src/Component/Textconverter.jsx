import React, { useState } from 'react'
import Regularbtn
 from './Regularbtn'

const Textconverter = () => {
    const [inputValue,setInputValue] = useState("")

    function Uppercase(){
        setInputValue(inputValue.toUpperCase())
    }
    function Lowercase(){
        setInputValue(inputValue.toLowerCase())
    }
    function Clearspace(){
        
        setInputValue(inputValue.replaceAll(/^\s+|\s+$|\s+(?=\s)/g, ""))

    }
    function handleChange(e){
        setInputValue(e.target.value)
    }
  return (
    <div className ="form-floating">
  <textarea value = {inputValue} onChange={handleChange} className ="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Comments</label>
  <div className='button'>
    <Regularbtn Handlefn={Uppercase}  buttoncopy="Converttouppercase"/>
    <Regularbtn Handlefn={Lowercase}  buttoncopy="Convertolowercase"/>
    <Regularbtn Handlefn={Clearspace}  buttoncopy="RemoveAllSpaces"/>
  </div>
</div>
  )
}

export default Textconverter