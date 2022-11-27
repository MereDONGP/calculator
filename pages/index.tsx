import React, { useState, useEffect }from 'react'

//refractor ideas create a component for the buttons numebrs and signs

export default function Home() {
  //it takes 8 characters to fill the input box


  //when a div is clicked add a number to the string when the user clicks a button
  //afer user clicks a button add it to the inputs as a new entry in to the array NOTE array will contain strings
  //if the user clicks on a number string add it to the either the number or signInput States
  //After the user clicks on the signs input should reset to start going through new numbers

  const outsideButtons = "bg-amber-500 rounded-3xl text-4xl text-center p-3"
  const insideNumbers = "bg-gray-500 rounded-3xl text-4xl text-center p-3"
  const [show, setShow] = useState("0")
  const[numberInputs, setNumberInputs] = useState([])
  const[signInputs, setSignInputs] = useState("")
  const [resetting, setRest] = useState(false)
  const [dotChecked, setChecked] = useState(false)

  const numberClick = (number: string) => {
    if(show === "0" && number !== "."){
      if(resetting){
        setShow(number)
      }
        setShow(number)
    }
    else if(Number(number) || number === "."){
      if(resetting){
        console.log("correct")
        if(number === "."){
          if(dotChecked){
            console.log("create error message")
            console.log("hello ")
          }else{
            setChecked(true)
            setShow("0")
            setShow(show + number)
            console.log("time")
          }
        }else{
          setShow(number)
          setRest(false)
        }
      }else{
        setShow(show + number)
      }
    }
    else if(number === "+" || number === "-" || number === "*" || number === "/"){
      setNumberInputs(numberInputs.concat(Number(show), number))
      setRest(true)
      console.log("fired")
      console.log(numberInputs)
    }
  }

  // get the first 2 numbers and then check the first sign in the array
  // do the appropriate operation after checking what is the operation
  const submit = () => {
    let getSign = 1
    let checked = 0
    let total = 0

    setNumberInputs(numberInputs)
    console.log(numberInputs)

    console.log(numberInputs[0] + Number(show))
  }

  const clearButton = () => {
    setShow("0")
    setNumberInputs([])
    setSignInputs("")
    setChecked(false)
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-600 w-1/4 h-auto rounded-3xl">
          <div className="bg-gray-300 w-full h-28 flex justify-end items-center rounded-md">
            <div className="text-black text-7xl">{show}</div>
          </div>
          <div className=" grid grid-rows-5 grid-cols-4 gap-4 m-4">
            <button className={outsideButtons} onClick={() =>  clearButton()}>AC</button>
            <button className={outsideButtons} value="+">+-</button>
            <button className={outsideButtons} value="%">%</button>
            <button className={outsideButtons} value="/">/</button>
            <button className={insideNumbers} value="7" onClick={({target}) => numberClick(target.value)}>7</button>
            <button className={insideNumbers} value="8" onClick={({target}) => numberClick(target.value)}>8</button>
            <button className={insideNumbers} value="9" onClick={({target}) => numberClick(target.value)}>9</button>
            <button className={outsideButtons} value="*">*</button>
            <button className={insideNumbers} value="4" onClick={({target}) => numberClick(target.value)}>4</button>
            <button className={insideNumbers} value="5" onClick={({target}) => numberClick(target.value)}>5</button>
            <button className={insideNumbers} value="6" onClick={({target}) => numberClick(target.value)}>6</button>
            <button className={outsideButtons} value="-">-</button>
            <button className={insideNumbers} value="1" onClick={({target}) => numberClick(target.value)}>1</button>
            <button className={insideNumbers} value="2" onClick={({target}) => numberClick(target.value)}>2</button>
            <button className={insideNumbers} value="3" onClick={({target}) => numberClick(target.value)}>3</button>
            <button className={outsideButtons} value="+" onClick={({target}) => numberClick(target.value)}>+</button>
            <button className="bg-gray-500 rounded-3xl text-4xl text-center p-3 col-span-2" value="0" onClick={({target}) => numberClick(target.value)}>0</button>
            <button className={insideNumbers} value="." onClick={({target}) => numberClick(target.value)}>.</button>
            <button className={outsideButtons} onClick={() => submit()}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}