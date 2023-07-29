import Image from 'next/image'

function Square(){
  return <>
    <div className='bg-slate-400 rounded shadow-2xl m-10 w-60 h-60'></div>
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
