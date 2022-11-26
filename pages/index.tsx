import React, { useState }from 'react'

export default function Home() {
  //it takes 8 characters to fill the input box


  //when a button is clicked add a number to the string
  const outsideButtons = "bg-amber-500 rounded-3xl text-4xl text-center p-3"
  const insideNumbers = "bg-gray-500 rounded-3xl text-4xl text-center p-3"
  const [value, setValue] = useState("0")

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-600 w-1/4 h-auto rounded-3xl">
          <div className="bg-gray-300 w-full h-28 flex justify-end items-center rounded-md">
            <div className="text-black text-7xl">{value}</div>
          </div>
          <div className=" grid grid-rows-5 grid-cols-4 gap-4 m-4">
            <button className={outsideButtons}>AC</button>
            <button className={outsideButtons}>+-</button>
            <button className={outsideButtons}>%</button>
            <button className={outsideButtons}>/</button>
            <button className={insideNumbers}>7</button>
            <button className={insideNumbers}>8</button>
            <button className={insideNumbers}>9</button>
            <button className={outsideButtons}>*</button>
            <button className={insideNumbers}>4</button>
            <button className={insideNumbers}>5</button>
            <button className={insideNumbers}>6</button>
            <button className={outsideButtons}>-</button>
            <button className={insideNumbers}>1</button>
            <button className={insideNumbers}>2</button>
            <button className={insideNumbers}>3</button>
            <button className={outsideButtons}>+</button>
            <button className="bg-gray-500 rounded-3xl text-4xl text-center p-3 col-span-2">0</button>
            <button className={insideNumbers}>.</button>
            <button className={outsideButtons}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}