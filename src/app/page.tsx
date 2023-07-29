'use client'

import { useState } from "react";

function Square(){
  const [cyan, setCyan] = useState(0);
  const [magenta, setMagenta] = useState(0);
  const [yellow, setYellow] = useState(0);

  function incrementResources() {
    let [c, m, y] = [cyan, magenta, yellow]

    if(c + 1 == 4) {
      c = 0;
      if(m + 1 == 4) {
        m = 0;
        y++;
      } else {
        m++;
      }
    } else {
      c++;
    }

    setCyan(c);
    setMagenta(m);
    setYellow(y);
  }

  function buildResourceArray(){
    let [c, m, y] = [cyan, magenta, yellow]
    
    const yArr = []
    for (let i = 0; i < y; i++) {
      yArr.push(<div className='bg-yellow-400 rounded-full shadow-xl w-5 h-5 m-1 p-3' key={i}></div>)
    }

    const mArr = []
    for (let i = 0; i < m; i++) {
      mArr.push(<div className='bg-purple-600 rounded-full shadow-xl w-5 h-5 m-1 p-3' key={y + i}></div>)
    }

    const cArr = []
    for (let i = 0; i < c; i++) {
      cArr.push(<div className='bg-cyan-400 rounded-full shadow-xl w-5 h-5 m-1 p-3' key={y + m + i}></div>)
    }

    return yArr.concat(mArr).concat(cArr);
  }

  return <>
    <div className='bg-slate-400 rounded-lg shadow-2xl m-10 p-5 w-60 h-60' onClick={incrementResources}>
      <div className='inline-grid grid-cols-5'>
        {buildResourceArray()}
      </div>
    </div>
  </>
}

export default function Home() {

  function squareBlock() {
    let block = [];
    let maxSquares;
    for(let i = 0; i < 20; i++) {
      block.push(<Square key={i}/>)
    }

    return block;
  }

  return (
    <main>
      <div className='flex justify-center'>
        <div className='grid grid-cols-5 max-w-7xl min-w-max'>{squareBlock()}</div>
      </div>
    </main>
  )
}
