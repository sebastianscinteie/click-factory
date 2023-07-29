import { useEffect, useState } from "react";

type ColorProps = {
  color: string,
  destroyElement: (color:string) => void
}
export default function Color({color, destroyElement}:ColorProps){
  const [count, setCount] = useState(0);

  let res;
  let lifetime = 0;

  if (color === 'cyan'){
    lifetime = 4;
    res = <div className='bg-cyan-400 rounded-full shadow-xl w-5 h-5 m-1 p-3'>{count}</div>
  } else if (color === 'magenta') {
    lifetime = 8;
    res = <div className='bg-purple-600 rounded-full shadow-xl w-5 h-5 m-1 p-3'>{count}</div>
  } else {
    lifetime = 12;
    res = <div className='bg-yellow-400 rounded-full shadow-xl w-5 h-5 m-1 p-3'>{count}</div>
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (count + 1 >= lifetime) {
        destroyElement(color);
      }
      setCount(count + 1)
    }, 1 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, [count]);

  return res;
}