'use client'

import { useEffect, useState } from "react";
import Color from "./components/color";

function Square(){
  const [cyan, setCyan] = useState(0);
  const [magenta, setMagenta] = useState(0);
  const [yellow, setYellow] = useState(0);

  function incrementResources() {
    let [c, m, y] = [cyan, magenta, yellow]

    const maxOfOneResource = 7;

    if(c + 1 == maxOfOneResource) {
      c = 0;
      if(m + 1 == maxOfOneResource) {
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

  function destroyElement(color:string){
    let [c, m, y] = [cyan, magenta, yellow]
    if (color = 'cyan'){
      c && c--
    } else if (color = 'magenta') {
      m && m--
    } else {
      y && y--
    }
  
    setCyan(c);
    setMagenta(m);
    setYellow(y);
  }

  function buildResourceArray(){
    let [c, m, y] = [cyan, magenta, yellow]
    
    const retArr = []
    for (let i = 0; i < y; i++) {
      retArr.push(<Color color='yellow' destroyElement={destroyElement} key={i}/>)
    }

    for (let i = 0; i < m; i++) {
      retArr.push(<Color color='magenta' destroyElement={destroyElement} key={50 + i}/>) // there can be max 36 yellow      
    }

    for (let i = 0; i < c; i++) {
      retArr.push(<Color color='cyan' destroyElement={destroyElement} key={100 + i}/>) // max 6 magenta
    }

    return retArr;
  }

  return <>
    <div>{cyan} {magenta} {yellow}</div>
    <div className='transition ease-linear bg-slate-400 rounded-lg hover:shadow-xl m-10 p-5 w-60 h-60 hover:scale-[1.01] cursor-pointer' 
      onClick={incrementResources}
    >
      <div className='inline-grid grid-cols-6'>
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
