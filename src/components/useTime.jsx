import { useState, useEffect, useRef } from 'react';

export default function useTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const intervalIdRef = useRef(null); 

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      
      clearInterval(intervalIdRef.current);
    };
  }, []); 

  return currentTime;
}



