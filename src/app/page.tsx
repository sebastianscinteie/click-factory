import Image from 'next/image'

function Square(){

  return <>
    <div className='bg-slate-400 rounded-lg shadow-2xl m-10 p-5 w-60 h-60'>
      <div className='inline-grid grid-cols-5'>
        <div className='bg-cyan-400 rounded-full shadow-xl w-5 h-5 m-1 p-3'></div>
        <div className='bg-purple-600 rounded-full shadow-xl w-5 h-5 m-1 p-3'></div>
        <div className='bg-yellow-400 rounded-full shadow-xl w-5 h-5 m-1 p-3'></div>
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
