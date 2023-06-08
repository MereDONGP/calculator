import React, { useState}from 'react'

//refractor ideas create a component for the buttons numebrs and signs
//figure out how to do the order of operations

export default function Home() {

  const outsideButtons = "bg-amber-500 rounded-3xl text-4xl text-center p-3"
  const insideNumbers = "bg-gray-500 rounded-3xl text-4xl text-center p-3"
  const [show, setShow] = useState("0")
  const[numberInputs, setNumberInputs] = useState([])
  const[signInputs, setSignInputs] = useState("")
  const [resetting, setRest] = useState(false)
  const [dotChecked, setChecked] = useState(false)
  const [currentInput, setCurrentInput] = useState([])

  const getOperation = (num1: number, assignment: string, num2:number) : Number => {
    if(assignment === "+"){
      return num1 + num2 
    }
    else if(assignment === "-"){
      return num1 - num2
    }
    else if(assignment === "*"){
      return num1 * num2
    }
    else if(assignment === "/"){
      return num1 / num2
    }
    return 0
  }

  const numberClick = (number: string) => {
    if(show === "0" && number !== "."){
      if(resetting){
        setShow(number)
        setRest(false)
      }
        setShow(number)
        setCurrentInput(currentInput.concat(Number(number)))
    }
    else if(Number(number) || number === "." || number === "0"){
      if(resetting){
        setChecked(false)
        console.log(dotChecked)
        if(number === "."){
          if(currentInput.length === 0){
            console.log("we would work")
            setChecked(false)
            setShow("0"+ number)
            setChecked(true)
            setRest(false)
          }
          else if(dotChecked){
            console.log("create error message we are here for now")
          }
        }else{
          setShow(number)
          setCurrentInput(currentInput.concat(Number(number)))
          setRest(false)
        }
      }
      else if(number === "."){
        if(dotChecked){
          console.log("create an error message")
          return false
        }
        setChecked(true)
        setShow(show + number)
      }
      else{
        setShow(show + number) 
        setCurrentInput(currentInput.concat(show + number))
        console.log(currentInput)
      }
    }
    else if(number === "+" || number === "-" || number === "*" || number === "/" || number === "="){
      if(number === "="){
        numberInputs.push(Number(currentInput[currentInput.length - 1]))
        
        if(numberInputs.length === 3){
          setShow(getOperation(Number(numberInputs[0]), numberInputs[1], Number(numberInputs[2])))
          console.log("now we are here right now")
        }else{
          for(let i = 1; i <= numberInputs.length; i = i + 2){
            if(numberInputs[i] === "*" || number[i] === "/"){
              numberInputs[i - 1] = getOperation(numberInputs[i - 1], numberInputs[i], numberInputs[i+1])
              console.log(numberInputs)
              numberInputs.splice(i, 2)
              console.log(numberInputs)
              i = i - 2 
            }
          }
          let finalTotal = getOperation(Number(numberInputs[0]), numberInputs[1], Number(numberInputs[2]))
          if(numberInputs.length === 1){
            console.log(`there is only one input ${numberInputs}`)
            console.log(` Here is the number that you are looking for${numberInputs[0]}`)
            finalTotal = numberInputs[0]
            setShow(numberInputs[0])
          }
          for(let i = 3; i < numberInputs.length; i  = i + 2){
            console.log("here we are right now")
            console.log(finalTotal)
            finalTotal = getOperation(finalTotal, numberInputs[i], Number(numberInputs[i + 1]))
            console.log(`${Number(numberInputs[i-1])}, ${numberInputs[i]}, ${Number(numberInputs[i+1])}`)
          }
          setShow(finalTotal)
        }
      }
      numberInputs.push(Number(currentInput[currentInput.length - 1]))
      setCurrentInput([])
      setNumberInputs(numberInputs.concat(number))
      setRest(true)
      
    }
  }

  const clearButton = () => {
    setShow("0")
    setNumberInputs([])
    setSignInputs("")
    setChecked(false)
    setCurrentInput([])
    setRest(false)
  }

/*   useEffect(() => {
    console.log(numberInputs)
  }, [numberInputs]) */
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-600 w-1/4 h-auto rounded-3xl">
          <div className="bg-gray-300 w-full h-28 flex justify-end items-center rounded-md">
            <div className="text-black text-7xl">{show}</div>
          </div>
          <div className=" grid grid-rows-5 grid-cols-4 gap-4 m-4">
            <button className={outsideButtons} onClick={() =>  clearButton()}>AC</button>
            <button className={outsideButtons} value="-">+-</button>
            <button className={outsideButtons} value="%">%</button>
            <button className={outsideButtons} value="/" onClick={({target} : {target: any}) => numberClick(target.value)}>/</button>
            <button className={insideNumbers} value="7" onClick={({target} : {target: any}) => numberClick(target.value)}>7</button>
            <button className={insideNumbers} value="8" onClick={({target} : {target: any}) => numberClick(target.value)}>8</button>
            <button className={insideNumbers} value="9" onClick={({target} : {target: any} ) => numberClick(target.value)}>9</button>
            <button className={outsideButtons} value="*" onClick={({target} : {target: any} ) => numberClick(target.value)}>*</button>
            <button className={insideNumbers} value="4" onClick={({target} : {target: any} ) => numberClick(target.value)}>4</button>
            <button className={insideNumbers} value="5" onClick={({target} : {target: any} ) => numberClick(target.value)}>5</button>
            <button className={insideNumbers} value="6" onClick={({target}: {target: any} ) => numberClick(target.value)}>6</button>
            <button className={outsideButtons} value="-" onClick={({target} : {target: any}) => numberClick(target.value)}>-</button>
            <button className={insideNumbers} value="1" onClick={({target} : {target: any}) => numberClick(target.value)}>1</button>
            <button className={insideNumbers} value="2" onClick={({target} : {target: any}) => numberClick(target.value)}>2</button>
            <button className={insideNumbers} value="3" onClick={({target} : {target: any} ) => numberClick(target.value)}>3</button>
            <button className={outsideButtons} value="+" onClick={({target} : {target: any}) => numberClick(target.value)}>+</button>
            <button className="bg-gray-500 rounded-3xl text-4xl text-center p-3 col-span-2" value="0" onClick={({target} : {target: any}) => numberClick(target.value)}>0</button>
            <button className={insideNumbers} value="." onClick={({target} : {target: any} ) => numberClick(target.value)}>.</button>
            <button className={outsideButtons} value="=" onClick={({target} : {target: any}) => numberClick(target.value)}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}